'use client';

import { Breed } from '@/app/models/breed';
import { Dog } from '@/app/models/dog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { ArrowLeft, Upload } from 'lucide-react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

// Helper function to proxy Google profile images
const getProxyImageUrl = (imageUrl?: string | null): string => {
  if (!imageUrl) return '';

  // Check if the image is from Google
  const isGoogleImage = imageUrl.includes('googleusercontent.com');

  if (isGoogleImage) {
    // Use our proxy for Google images
    return `/api/image-proxy?url=${encodeURIComponent(imageUrl)}`;
  }

  // Return the original URL for other image sources
  return imageUrl;
};

// Map of English to Indonesian month names
const monthTranslations: Record<string, string> = {
  January: 'Januari',
  February: 'Februari',
  March: 'Maret',
  April: 'April',
  May: 'Mei',
  June: 'Juni',
  July: 'Juli',
  August: 'Agustus',
  September: 'September',
  October: 'Oktober',
  November: 'November',
  December: 'Desember',
};

// Map of Indonesian to English month names (for conversion back to English)
const monthTranslationsReverse: Record<string, string> = {
  Januari: 'January',
  Februari: 'February',
  Maret: 'March',
  April: 'April',
  Mei: 'May',
  Juni: 'June',
  Juli: 'July',
  Agustus: 'August',
  September: 'September',
  Oktober: 'October',
  November: 'November',
  Desember: 'December',
};

// Function to convert numeric month or English month name to Indonesian
const getIndonesianMonth = (monthValue: string): string => {
  // If the month is a number (1-12), convert it to month name
  if (/^(0?[1-9]|1[0-2])$/.test(monthValue)) {
    const monthIndex = parseInt(monthValue, 10) - 1; // Convert to 0-based index
    const englishMonths = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const englishMonth = englishMonths[monthIndex];
    return monthTranslations[englishMonth] || monthTranslations['January']; // Default to January if not found
  }

  // If it's already an English month name, translate it
  return monthValue in monthTranslations
    ? monthTranslations[monthValue]
    : monthValue;
};

// Create a client-side version of Dog that uses string IDs instead of ObjectId
interface ClientDog {
  _id: string;
  name: string;
  breedId: string | null;
  customBreed: string | null;
  birthYear: string;
  birthMonth: string;
  color: string;
  weight: number;
  lastVaccineDate: string | null;
  lastDewormDate: string | null;
  sex: 'male' | 'female';
  profileImage?: string;
}

export default function EditPetPage() {
  const params = useParams();
  const petId = params.petId as string;
  const router = useRouter();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [customerId, setCustomerId] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [breeds, setBreeds] = useState<Breed[]>([]);

  const [petData, setPetData] = useState<ClientDog>({
    _id: petId,
    name: '',
    breedId: null,
    customBreed: null,
    birthYear: new Date().getFullYear().toString(),
    birthMonth: 'January',
    color: '',
    weight: 0,
    lastVaccineDate: null,
    lastDewormDate: null,
    sex: 'male',
    profileImage: '',
  });

  const months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  const years = Array.from({ length: 20 }, (_, i) =>
    (new Date().getFullYear() - i).toString()
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch current user to check ownership
        const userResponse = await fetch('/api/users/me');
        const userData = await userResponse.json();

        if (!userData.user || !userData.user.id) {
          throw new Error('User not found');
        }

        setCustomerId(userData.user.id);

        // Fetch the customer data which includes dogs
        const customerResponse = await fetch(
          `/api/customers/${userData.user.id}`
        );

        if (!customerResponse.ok) {
          throw new Error('Failed to fetch customer data');
        }

        const customerData = await customerResponse.json();
        const foundDog = customerData.customer.dogs?.find(
          (d: Dog) => d._id.toString() === petId
        );

        if (!foundDog) {
          throw new Error('Pet not found');
        }

        // Use our helper function to convert month to Indonesian
        const displayMonth = getIndonesianMonth(foundDog.birthMonth);

        // Convert the MongoDB Dog to our client-side format
        setPetData({
          _id: foundDog._id.toString(),
          name: foundDog.name,
          breedId: foundDog.breedId ? foundDog.breedId.toString() : null,
          customBreed: foundDog.customBreed,
          birthYear: foundDog.birthYear,
          birthMonth: displayMonth,
          color: foundDog.color,
          weight: foundDog.weight,
          lastVaccineDate: foundDog.lastVaccineDate,
          lastDewormDate: foundDog.lastDewormDate,
          sex: foundDog.sex,
          profileImage: foundDog.profileImage,
        });

        // Fetch breeds
        const breedsResponse = await fetch('/api/breeds');
        const breedsData = await breedsResponse.json();
        setBreeds(breedsData);
      } catch (error) {
        console.error('Error fetching pet details:', error);
        setError('Gagal memuat data hewan peliharaan');
        toast({
          title: 'Error',
          description: 'Gagal memuat data hewan peliharaan',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [petId, toast]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setPetData((prev) => ({
      ...prev,
      [name]: name === 'weight' ? parseFloat(value) : value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setPetData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBreedChange = (value: string) => {
    if (value === 'custom') {
      setPetData((prev) => ({
        ...prev,
        breedId: null,
        customBreed: '',
      }));
    } else {
      setPetData((prev) => ({
        ...prev,
        breedId: value,
        customBreed: null,
      }));
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
        title: 'Error',
        description: 'File harus berupa gambar',
        variant: 'destructive',
      });
      return;
    }

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: 'Error',
        description: 'Ukuran gambar tidak boleh lebih dari 5MB',
        variant: 'destructive',
      });
      return;
    }

    setIsUploadingImage(true);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('dogId', petId);
      formData.append('customerId', customerId);

      const response = await fetch('/api/dogs/profile-image', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Gagal mengunggah gambar profil');
      }

      // Update local state with the Cloudinary URL
      setPetData((prev) => ({
        ...prev,
        profileImage: result.imageUrl,
      }));
    } catch (error) {
      console.error('Error uploading profile image:', error);
      toast({
        title: 'Error',
        description: 'Gagal mengunggah gambar profil. Silakan coba lagi nanti',
        variant: 'destructive',
      });
    } finally {
      setIsUploadingImage(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Convert Indonesian month name to month number for API
      let apiMonth: string;

      // First check if it's an Indonesian month name
      const indonesianMonthIndex = months.findIndex(
        (m) => m === petData.birthMonth
      );

      if (indonesianMonthIndex !== -1) {
        // It's an Indonesian month, convert to a number (1-based)
        apiMonth = (indonesianMonthIndex + 1).toString();
      } else if (petData.birthMonth in monthTranslationsReverse) {
        // It's also an Indonesian month but not in our array
        const englishMonth = monthTranslationsReverse[petData.birthMonth];
        const englishMonths = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ];
        const englishMonthIndex = englishMonths.indexOf(englishMonth);
        apiMonth = (englishMonthIndex + 1).toString();
      } else {
        // Keep it as is (might already be a number)
        apiMonth = petData.birthMonth;
      }

      const response = await fetch(`/api/dogs/${customerId}/${petId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: petData.name,
          breedId: petData.breedId,
          customBreed: petData.customBreed,
          birthYear: petData.birthYear,
          birthMonth: apiMonth,
          color: petData.color,
          weight: petData.weight,
          sex: petData.sex,
          lastVaccineDate: petData.lastVaccineDate,
          lastDewormDate: petData.lastDewormDate,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Gagal memperbarui data hewan');
      }

      toast({
        title: 'Berhasil',
        description: 'Data hewan peliharaan telah berhasil diperbarui',
      });

      router.push(`/profile/pets/${petId}`);
    } catch (error) {
      console.error('Error updating pet:', error);
      toast({
        title: 'Error',
        description: 'Gagal memperbarui data hewan. Silakan coba lagi',
        variant: 'destructive',
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="p-4 sm:p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-8 w-40 bg-violet-800/50 rounded-md"></div>
          <div className="h-64 bg-violet-800/50 rounded-xl"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 sm:p-6">
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-center">
          <p className="text-red-300">{error}</p>
          <Link
            href="/profile/pets"
            className="mt-4 inline-flex items-center text-orange-400 hover:text-orange-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke Daftar Hewan
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4 sm:p-6"
    >
      <div className="mb-6">
        <Link
          href={`/profile/pets/${petId}`}
          className="gap-2 text-xs h-8 sm:h-9 whitespace-nowrap inline-flex items-center justify-center rounded-md border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground px-4 py-2"
        >
          <ArrowLeft size={14} className="sm:w-4 sm:h-4" />
          Kembali ke Detail Hewan
        </Link>
      </div>

      <div className="bg-gradient-to-br from-violet-900/40 via-purple-900/30 to-violet-800/20 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-violet-500/10">
        <h1 className="text-2xl font-bold text-white mb-6">
          Edit Profil Hewan
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Pet Image */}
          <div className="flex flex-col items-center mb-6">
            <div
              className="relative cursor-pointer group"
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
              <Avatar className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl border-2 border-white/20">
                {petData.profileImage ? (
                  <AvatarImage
                    src={getProxyImageUrl(petData.profileImage)}
                    alt={petData.name}
                    className="object-cover"
                    onError={(e) => {
                      // Handle image loading errors
                      console.log(
                        'Error loading profile image, using fallback'
                      );
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : null}
                <AvatarFallback className="bg-gradient-to-br from-orange-400 to-orange-600 text-white text-xl sm:text-2xl">
                  {petData.name.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>

              <Button
                size="icon"
                variant="outline"
                className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 bg-white/90 hover:bg-white shadow-lg"
                disabled={isUploadingImage}
                type="button"
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
            </div>
            <p className="text-xs text-orange-300 mt-2">
              Klik pada foto untuk mengganti gambar profil
            </p>
          </div>

          {/* Basic Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">
                Nama
              </Label>
              <Input
                id="name"
                name="name"
                value={petData.name}
                onChange={handleChange}
                required
                className="bg-white/5 border-white/10 text-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="sex" className="text-white">
                Jenis Kelamin
              </Label>
              <Select
                value={petData.sex}
                onValueChange={(value) => handleSelectChange('sex', value)}
              >
                <SelectTrigger className="bg-white/5 border-white/10 text-white">
                  <SelectValue placeholder="Pilih jenis kelamin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Jantan</SelectItem>
                  <SelectItem value="female">Betina</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Breed */}
          <div className="space-y-2">
            <Label htmlFor="breed" className="text-white">
              Ras
            </Label>
            <Select
              value={petData.breedId || 'custom'}
              onValueChange={handleBreedChange}
            >
              <SelectTrigger className="bg-white/5 border-white/10 text-white">
                <SelectValue placeholder="Pilih ras" />
              </SelectTrigger>
              <SelectContent>
                {breeds.map((breed) => (
                  <SelectItem
                    key={breed._id.toString()}
                    value={breed._id.toString()}
                  >
                    {breed.name}
                  </SelectItem>
                ))}
                <SelectItem value="custom">Lainnya / Campuran</SelectItem>
              </SelectContent>
            </Select>

            {petData.customBreed !== null && (
              <div className="mt-2">
                <Label htmlFor="customBreed" className="text-white">
                  Ras Kustom
                </Label>
                <Input
                  id="customBreed"
                  name="customBreed"
                  value={petData.customBreed || ''}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 text-white mt-1"
                />
              </div>
            )}
          </div>

          {/* Birth Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="birthMonth" className="text-white">
                Bulan Lahir
              </Label>
              <Select
                value={petData.birthMonth}
                onValueChange={(value) =>
                  handleSelectChange('birthMonth', value)
                }
              >
                <SelectTrigger className="bg-white/5 border-white/10 text-white">
                  <SelectValue placeholder="Pilih bulan" />
                </SelectTrigger>
                <SelectContent>
                  {months.map((month) => (
                    <SelectItem key={month} value={month}>
                      {month}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="birthYear" className="text-white">
                Tahun Lahir
              </Label>
              <Select
                value={petData.birthYear}
                onValueChange={(value) =>
                  handleSelectChange('birthYear', value)
                }
              >
                <SelectTrigger className="bg-white/5 border-white/10 text-white">
                  <SelectValue placeholder="Pilih tahun" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Physical Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="color" className="text-white">
                Warna
              </Label>
              <Input
                id="color"
                name="color"
                value={petData.color}
                onChange={handleChange}
                required
                className="bg-white/5 border-white/10 text-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="weight" className="text-white">
                Berat (kg)
              </Label>
              <Input
                id="weight"
                name="weight"
                type="number"
                step="0.1"
                min="0.1"
                value={petData.weight}
                onChange={handleChange}
                required
                className="bg-white/5 border-white/10 text-white"
              />
            </div>
          </div>

          {/* Health Records */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="lastVaccineDate" className="text-white">
                Tanggal Vaksin Terakhir
              </Label>
              <Input
                id="lastVaccineDate"
                name="lastVaccineDate"
                type="date"
                value={
                  petData.lastVaccineDate
                    ? petData.lastVaccineDate.split('T')[0]
                    : ''
                }
                onChange={handleChange}
                className="bg-white/5 border-white/10 text-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastDewormDate" className="text-white">
                Tanggal Obat Cacing Terakhir
              </Label>
              <Input
                id="lastDewormDate"
                name="lastDewormDate"
                type="date"
                value={
                  petData.lastDewormDate
                    ? petData.lastDewormDate.split('T')[0]
                    : ''
                }
                onChange={handleChange}
                className="bg-white/5 border-white/10 text-white"
              />
            </div>
          </div>

          {/* Submit button */}
          <div className="flex justify-between pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push(`/profile/pets/${petId}`)}
              className="border-orange-400 text-orange-400 hover:bg-orange-400/10"
            >
              Batal
            </Button>

            <Button
              type="submit"
              disabled={submitting || isUploadingImage}
              className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white border-0"
            >
              {submitting ? 'Menyimpan...' : 'Simpan'}
            </Button>
          </div>

          {isUploadingImage && (
            <p className="text-orange-300 text-xs text-center mt-2">
              Menunggu unggahan gambar selesai...
            </p>
          )}
        </form>
      </div>
    </motion.div>
  );
}
