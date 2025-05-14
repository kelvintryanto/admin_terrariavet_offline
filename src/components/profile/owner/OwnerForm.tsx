'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { Upload } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

interface UserData {
  _id?: string;
  id?: string;
  name: string;
  email: string;
  phone?: string;
  gender?: string;
  birthDate?: string;
  address?: string;
  role?: string;
  profileImage?: string;
}

interface OwnerFormProps {
  initialData?: {
    id: string;
    name: string;
    email: string;
    phone?: string;
    address?: string;
    profileImage?: string;
  } | null;
}

const OwnerForm = ({ initialData }: OwnerFormProps) => {
  const router = useRouter();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [userData, setUserData] = useState<UserData>({
    name: initialData?.name || '',
    email: initialData?.email || '',
    phone: initialData?.phone || '',
    gender: '',
    birthDate: '',
    address: initialData?.address || '',
    profileImage: initialData?.profileImage,
  });
  const [isLoading, setIsLoading] = useState(!initialData);
  const [isSaving, setIsSaving] = useState(false);
  const [isUploadingImage, setIsUploadingImage] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      if (initialData) {
        return; // Skip fetching if we have initialData
      }

      setIsLoading(true);
      try {
        // First get the user ID from /api/users/me
        const meResponse = await fetch('/api/users/me');
        const meData = await meResponse.json();

        if (!meData.user || !meData.user.id) {
          throw new Error('User ID not found');
        }

        // Then fetch the complete user data by ID
        const userResponse = await fetch(`/api/customers/${meData.user.id}`);
        if (!userResponse.ok) {
          throw new Error('Failed to fetch user details');
        }

        const userData = await userResponse.json();

        if (userData.customer) {
          setUserData({
            _id: userData.customer._id,
            id: userData.customer.id,
            name: userData.customer.name || '',
            email: userData.customer.email || '',
            phone: userData.customer.phone || '',
            gender: userData.customer.gender || '',
            birthDate: userData.customer.birthDate
              ? userData.customer.birthDate.split('T')[0]
              : '',
            address: userData.customer.address || '',
            role: userData.customer.role,
            profileImage: userData.customer.profileImage || '',
          });
        }
      } catch (error) {
        console.error('Failed to fetch user data:', error);
        toast({
          title: 'Kesalahan',
          description: 'Gagal memuat data pengguna. Silakan coba lagi nanti',
          variant: 'destructive',
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [toast, initialData]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      // We'll use a direct API for profile updates instead of the user ID specific endpoint
      // This avoids potential permission issues with the middleware
      const response = await fetch('/api/users/update-profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: userData.name,
          email: userData.email,
          phone: userData.phone,
          gender: userData.gender,
          birthDate: userData.birthDate,
          address: userData.address,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Gagal memperbarui profil');
      }

      toast({
        title: 'Berhasil',
        description: 'Profil Anda telah berhasil diperbarui',
      });

      router.push('/profile');
    } catch (error) {
      console.error('Error updating profile:', error);
      toast({
        title: 'Kesalahan',
        description: 'Gagal memperbarui profil. Silakan coba lagi nanti',
        variant: 'destructive',
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check if the file is an image
    if (!file.type.startsWith('image/')) {
      toast({
        title: 'Kesalahan',
        description: 'File harus berupa gambar',
        variant: 'destructive',
      });
      return;
    }

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: 'Kesalahan',
        description: 'Ukuran gambar tidak boleh lebih dari 5MB',
        variant: 'destructive',
      });
      return;
    }

    setIsUploadingImage(true);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/users/profile-image', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Gagal mengunggah gambar profil');
      }

      // Update local state with the Cloudinary URL
      setUserData((prev) => ({
        ...prev,
        profileImage: result.imageUrl,
      }));

      toast({
        title: 'Berhasil',
        description: 'Gambar profil telah berhasil diperbarui',
      });
    } catch (error) {
      console.error('Error uploading profile image:', error);
      toast({
        title: 'Kesalahan',
        description: 'Gagal mengunggah gambar profil. Silakan coba lagi nanti',
        variant: 'destructive',
      });
    } finally {
      setIsUploadingImage(false);
    }
  };

  const getProxyImageUrl = (imageUrl?: string) => {
    if (!imageUrl) return null;

    // Check if the image is from Google
    const isGoogleImage = imageUrl.includes('googleusercontent.com');

    if (isGoogleImage) {
      // Use our proxy for Google images
      return `/api/image-proxy?url=${encodeURIComponent(imageUrl)}`;
    }

    // Return the original URL for other image sources
    return imageUrl;
  };

  if (isLoading) {
    return (
      <div className="bg-gradient-to-br from-violet-900/40 via-purple-900/30 to-violet-800/20 backdrop-blur-md rounded-xl p-6 border border-violet-500/10 shadow-lg w-full sm:w-2/3 md:w-1/2 lg:1/3 lg:py-8 px-14">
        <div className="flex flex-col gap-5 items-center">
          <h1 className="text-xl font-bold text-orange-500">
            Memuat Data Profil...
          </h1>
          <div className="w-full space-y-4">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div
                key={index}
                className="h-10 bg-gray-300/20 animate-pulse rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-violet-900/40 via-purple-900/30 to-violet-800/20 backdrop-blur-md rounded-xl p-6 border border-violet-500/10 shadow-lg w-full sm:w-2/3 md:w-1/2 lg:1/3 lg:py-8 px-14">
      <div className="flex flex-col gap-5 items-center">
        <h1 className="text-xl font-bold text-orange-500">
          Form Profil Pemilik
        </h1>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative cursor-pointer"
          onClick={handleImageClick}
        >
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={handleImageChange}
            disabled={isUploadingImage}
          />
          <Avatar className="w-32 h-32 border-4 border-orange-400/50">
            <AvatarImage
              src={
                getProxyImageUrl(userData.profileImage) ||
                '/placeholder-avatar.jpg'
              }
              alt="Profile"
              className="object-cover"
              onError={(e) => {
                console.error(
                  'Failed to load profile image:',
                  userData.profileImage
                );

                // Check if this is a Google profile image
                const imgSrc = userData.profileImage || '';
                const isGoogleImage = imgSrc.includes('googleusercontent.com');

                if (isGoogleImage) {
                  console.log(
                    'Detected Google profile image with CORS restrictions'
                  );
                }

                // Hide the broken image
                e.currentTarget.style.display = 'none';
              }}
            />
            <AvatarFallback className="bg-gradient-to-br from-orange-400 to-orange-600 text-2xl text-white">
              {userData.name ? userData.name.slice(0, 2).toUpperCase() : 'UT'}
            </AvatarFallback>
          </Avatar>
          <Button
            size="icon"
            variant="outline"
            className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 bg-white/90 hover:bg-white shadow-lg"
            disabled={isUploadingImage}
          >
            {isUploadingImage ? (
              <div className="animate-spin h-4 w-4 border-2 border-orange-600 border-t-transparent rounded-full" />
            ) : (
              <Upload size={14} className="text-orange-600" />
            )}
          </Button>
          {isUploadingImage && (
            <div className="absolute inset-0 bg-black/30 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">Mengunggah...</span>
            </div>
          )}
        </motion.div>
        <p className="text-xs text-orange-300 mt-1">
          Klik pada foto untuk mengganti gambar profil
        </p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full space-y-4 text-white"
        >
          <div>
            <label className="block text-sm font-medium">Nama</label>
            <Input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
              placeholder="Masukkan nama"
              className="w-full mt-1 border border-white rounded-lg text-white focus:ring-2 focus:ring-orange-400/50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Jenis Kelamin</label>
            <select
              name="gender"
              value={userData.gender || ''}
              onChange={handleChange}
              className="w-full mt-1 p-2 bg-white/5 border border-white rounded-lg text-white focus:ring-2 focus:ring-orange-400/50"
            >
              <option disabled value="" className="text-gray-300">
                Pilih salah satu
              </option>
              <option value="pria" className="text-gray-800">
                Pria
              </option>
              <option value="wanita" className="text-gray-800">
                Wanita
              </option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Tanggal Lahir</label>
            <Input
              type="date"
              name="birthDate"
              value={userData.birthDate || ''}
              onChange={handleChange}
              className="w-full mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <Input
              type="email"
              name="email"
              value={userData.email || ''}
              onChange={handleChange}
              placeholder="Masukkan email"
              className="w-full mt-1 border border-white rounded-lg text-white focus:ring-2 focus:ring-orange-400/50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Nomor HP</label>
            <Input
              type="tel"
              name="phone"
              value={userData.phone || ''}
              onChange={handleChange}
              placeholder="Masukkan nomor HP"
              className="w-full mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Alamat</label>
            <Textarea
              name="address"
              value={userData.address || ''}
              onChange={handleChange}
              placeholder="Masukkan alamat lengkap"
              className="w-full mt-1"
            />
          </div>

          <div className="flex justify-between gap-4 pt-2">
            <Button
              type="button"
              onClick={() => router.push('/profile')}
              variant="outline"
              className="flex-1 border-orange-400 text-orange-400 hover:bg-orange-400/10"
            >
              Kembali
            </Button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSaving || isUploadingImage}
              className="flex-1 rounded-lg bg-gradient-to-r from-orange-500 to-orange-400 px-4 py-2 font-medium text-white hover:from-orange-600 hover:to-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:ring-offset-2 focus:ring-offset-violet-800 disabled:opacity-70"
            >
              {isSaving ? 'Menyimpan...' : 'Simpan Profil'}
            </motion.button>
          </div>

          {isUploadingImage && (
            <p className="text-orange-300 text-xs text-center mt-2">
              Menunggu unggahan gambar selesai...
            </p>
          )}
        </motion.form>
      </div>
    </div>
  );
};

export default OwnerForm;
