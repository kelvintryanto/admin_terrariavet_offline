export function formatDogAge(birthYear: string, birthMonth: string): string {
  if (!birthYear || !birthMonth) return 'Unknown';

  // Convert month name to month number if needed
  let monthNumber: number;

  // Handle month names in English or Indonesian
  if (isNaN(parseInt(birthMonth))) {
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

    const indonesianMonths = [
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

    // Check English month names
    const englishIndex = englishMonths.findIndex(
      (m) => m.toLowerCase() === birthMonth.toLowerCase()
    );

    // Check Indonesian month names if not found in English
    const indonesianIndex =
      englishIndex === -1
        ? indonesianMonths.findIndex(
            (m) => m.toLowerCase() === birthMonth.toLowerCase()
          )
        : -1;

    // Use the found index + 1 (to make it 1-based) or default to 1 if not found
    monthNumber =
      englishIndex !== -1
        ? englishIndex + 1
        : indonesianIndex !== -1
        ? indonesianIndex + 1
        : 1;
  } else {
    // It's already a numeric string
    monthNumber = parseInt(birthMonth);
  }

  const today = new Date();
  const birthDate = new Date(parseInt(birthYear), monthNumber - 1);

  let years = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    years--;
  }

  // Calculate months
  const months = monthDiff < 0 ? 12 + monthDiff : monthDiff;

  if (years === 0) {
    return `${months} bulan`;
  } else if (months === 0) {
    return `${years} tahun`;
  } else {
    return `${years} tahun ${months} bulan`;
  }
}

export function formatDate(dateString: string): string {
  if (!dateString) return 'Unknown';

  const date = new Date(dateString);

  // Check if the date is valid
  if (isNaN(date.getTime())) return 'Invalid date';

  // Format the date in Indonesian style
  return date.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

// Add a function to format currency values
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};
