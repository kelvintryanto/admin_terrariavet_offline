/**
 * Utility functions for handling dates with proper timezone support for
 * both development (local timezone) and production (Vercel's UTC timezone)
 */

/**
 * Returns a date in WIB (GMT+7) timezone, handling both development and production environments.
 * In development: If already in WIB timezone, returns the date as is
 * In production: Converts UTC to WIB by adding 7 hours
 *
 * @param date Optional date object (defaults to current time)
 * @returns Date object adjusted to WIB timezone
 */
export function getWIBDate(date: Date = new Date()): Date {
  const inputDate = new Date(date);

  // Check if we're already in WIB timezone (GMT+7 = UTC+7 hours = 420 minutes)
  // getTimezoneOffset() returns minutes difference from UTC, but with opposite sign
  // e.g., for WIB (UTC+7), it returns -420
  const currentTimezoneOffsetMinutes = new Date().getTimezoneOffset();
  const isAlreadyWIB = currentTimezoneOffsetMinutes === -420;

  // If we're already in WIB timezone, no adjustment needed
  if (isAlreadyWIB) {
    return inputDate;
  }

  // Otherwise, add 7 hours to convert from UTC to WIB
  return new Date(inputDate.getTime() + 7 * 60 * 60 * 1000);
}

/**
 * Format a date string (YYYY-MM-DD) to Indonesian format (DD-MM-YYYY)
 */
export function formatToIndonesianDate(dateString: string | undefined): string {
  if (!dateString) return '';
  const [year, month, day] = dateString.split('-');
  return `${day}-${month}-${year}`;
}

/**
 * Get the start of day in WIB timezone
 */
export function getStartOfDay(date: Date): Date {
  const wibDate = getWIBDate(date);
  const startOfDay = new Date(wibDate);
  startOfDay.setHours(0, 0, 0, 0);
  return startOfDay;
}

/**
 * Get the end of day in WIB timezone
 */
export function getEndOfDay(date: Date): Date {
  const wibDate = getWIBDate(date);
  const endOfDay = new Date(wibDate);
  endOfDay.setHours(23, 59, 59, 999);
  return endOfDay;
}
