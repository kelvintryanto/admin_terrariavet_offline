'use client';

import { Breed } from '@/app/models/breed';
import { Dog } from '@/app/models/dog';
import { formatDogAge } from '@/app/utils/format';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { motion } from 'framer-motion';
import { ArrowLeft, Edit } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

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

// Function to translate English month names to Indonesian
const translateMonth = (monthValue: string): string => {
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
    monthValue = englishMonths[monthIndex];
  }

  // Now translate the English month name to Indonesian
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

  return monthTranslations[monthValue] || monthValue;
};

export default function PetDetailPage() {
  const params = useParams();
  const petId = params.petId as string;
  const { toast } = useToast();
  const [dog, setDog] = useState<Dog | null>(null);
  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

        setDog(foundDog);

        // Fetch breeds
        const breedsResponse = await fetch('/api/breeds');
        const breedsData = await breedsResponse.json();
        setBreeds(breedsData);
      } catch (error) {
        console.error('Error fetching pet details:', error);
        setError('Failed to load pet details');
        toast({
          title: 'Error',
          description: 'Failed to load pet details',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [petId, toast]);

  // Format dates
  const formatDate = (date: string | null) => {
    if (!date) return 'Belum Ada Data';
    return format(new Date(date), 'd MMMM yyyy', { locale: id });
  };

  // Find the breed name from the breedId or use customBreed
  const getBreedName = () => {
    if (!dog) return '';
    return (
      dog.customBreed ||
      breeds.find((b) => b._id.toString() === dog.breedId?.toString())?.name ||
      'Ras Tidak Diketahui'
    );
  };

  if (loading) {
    return (
      <div className="p-4 sm:p-6">
        <div className="flex items-start animate-pulse">
          <div className="w-24 h-24 bg-violet-800/50 rounded-xl"></div>
          <div className="ml-4">
            <div className="h-6 w-40 bg-violet-800/50 rounded mb-2"></div>
            <div className="h-4 w-32 bg-violet-800/50 rounded mb-2"></div>
            <div className="h-6 w-24 bg-violet-800/50 rounded"></div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-16 bg-violet-800/50 rounded-xl"></div>
          ))}
        </div>
      </div>
    );
  }

  if (error || !dog) {
    return (
      <div className="p-4 sm:p-6">
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-center">
          <p className="text-red-300">
            {error || 'Hewan peliharaan tidak ditemukan'}
          </p>
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
      className="p-4"
    >
      {/* Back and Edit buttons */}
      <div className="flex justify-between mb-6 sm:mb-8 gap-2">
        <Link
          href="/profile/pets"
          className="gap-2 text-xs h-8 sm:h-9 whitespace-nowrap inline-flex items-center justify-center rounded-md border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground px-4 py-2"
        >
          <ArrowLeft size={14} className="sm:w-4 sm:h-4" />
          Kembali ke Daftar
        </Link>

        <Link
          href={`/profile/pets/${petId}/edit`}
          className="gap-2 text-xs h-8 sm:h-9 whitespace-nowrap inline-flex items-center justify-center rounded-md border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground px-4 py-2"
        >
          <Edit size={14} className="sm:w-4 sm:h-4" />
          Edit Anjing
        </Link>
      </div>

      {/* Pet Profile Header */}
      <div className="bg-gradient-to-br from-violet-900/40 via-purple-900/30 to-violet-800/20 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-violet-500/10 mb-6">
        <div className="flex items-start sm:items-center flex-col sm:flex-row gap-4">
          <Avatar className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl border-2 border-white/20">
            {dog.profileImage ? (
              <AvatarImage
                src={getProxyImageUrl(dog.profileImage)}
                alt={dog.name}
                className="object-cover"
                onError={(e) => {
                  // Handle image loading errors
                  console.log('Error loading profile image, using fallback');
                  e.currentTarget.style.display = 'none';
                }}
              />
            ) : null}
            <AvatarFallback className="bg-gradient-to-br from-orange-400 to-orange-600 text-white text-xl sm:text-2xl">
              {dog.name.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">
              {dog.name}
            </h1>
            <p className="text-orange-300/80 text-sm sm:text-base mb-3">
              {getBreedName()}
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="bg-violet-500/10 text-violet-300 border-violet-500/20 text-xs sm:text-sm px-3 py-1 rounded-full border">
                {dog.sex === 'male' ? 'Jantan' : 'Betina'}
              </span>
              <span className="bg-orange-500/10 text-orange-300 border-orange-500/20 text-xs sm:text-sm px-3 py-1 rounded-full border">
                {formatDogAge(dog.birthYear, dog.birthMonth)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Pet Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="bg-gradient-to-br from-violet-900/40 via-purple-900/30 to-violet-800/20 backdrop-blur-md rounded-xl p-4 border border-violet-500/10">
          <h2 className="text-lg font-semibold text-white mb-3">
            Detail Fisik
          </h2>

          <div className="space-y-4">
            <div>
              <p className="text-orange-300/80 text-xs mb-1">Berat</p>
              <p className="text-white font-medium">{dog.weight} kg</p>
            </div>

            <div>
              <p className="text-orange-300/80 text-xs mb-1">Warna</p>
              <p className="text-white font-medium">{dog.color}</p>
            </div>

            <div>
              <p className="text-orange-300/80 text-xs mb-1">Tanggal Lahir</p>
              <p className="text-white font-medium">
                {translateMonth(dog.birthMonth)} {dog.birthYear}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-violet-900/40 via-purple-900/30 to-violet-800/20 backdrop-blur-md rounded-xl p-4 border border-violet-500/10">
          <h2 className="text-lg font-semibold text-white mb-3">
            Catatan Kesehatan
          </h2>

          <div className="space-y-4">
            <div>
              <p className="text-orange-300/80 text-xs mb-1">Vaksin Terakhir</p>
              <p className="text-white font-medium">
                {formatDate(dog.lastVaccineDate)}
              </p>
            </div>

            <div>
              <p className="text-orange-300/80 text-xs mb-1">
                Obat Cacing Terakhir
              </p>
              <p className="text-white font-medium">
                {formatDate(dog.lastDewormDate)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
