import { isTokenBlacklisted } from '@/app/models/token';
import { getUserById } from '@/app/models/user';
import { getWIBDate } from '@/app/utils/date-utils';
import { decode } from '@/app/utils/jwt';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Rate limiting setup with a simple in-memory store
const tokenUsage = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT = 10; // 10 requests per minute
const RATE_LIMIT_WINDOW = 3 * 60 * 1000; // 3 minutes in milliseconds

// Clean up old entries
const cleanupTokenUsage = () => {
  const now = getWIBDate().getTime();
  for (const [key, value] of tokenUsage.entries()) {
    if (now - value.timestamp > RATE_LIMIT_WINDOW) {
      tokenUsage.delete(key);
    }
  }
};

// Schema for input validation
const TokenSchema = z.object({
  token: z.string().min(1, 'Token is required'),
});

export async function POST(request: NextRequest) {
  try {
    // Get client IP address for rate limiting
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown';

    // Rate limit check
    cleanupTokenUsage();
    const usage = tokenUsage.get(ip) || {
      count: 0,
      timestamp: getWIBDate().getTime(),
    };

    if (usage.count >= RATE_LIMIT) {
      return NextResponse.json(
        { error: 'Terlalu banyak permintaan. Coba lagi nanti.' },
        { status: 429 }
      );
    }

    // Update rate limit counter
    tokenUsage.set(ip, {
      count: usage.count + 1,
      timestamp: usage.count === 0 ? getWIBDate().getTime() : usage.timestamp,
    });

    // Parse and validate the request body
    const body = await request.json();
    const result = TokenSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Token tidak valid', details: result.error.issues },
        { status: 400 }
      );
    }

    const { token } = result.data;

    // Check if token is blacklisted
    const isBlacklisted = await isTokenBlacklisted(token);
    if (isBlacklisted) {
      return NextResponse.json(
        { error: 'Token sudah digunakan. Silakan gunakan link baru.' },
        { status: 400 }
      );
    }

    // Decode token
    const decoded = await decode(token);
    if (!decoded || !decoded.id || decoded.purpose !== 'password_reset') {
      return NextResponse.json(
        { error: 'Token tidak valid atau sudah kedaluwarsa' },
        { status: 400 }
      );
    }

    // Check if user exists
    const user = await getUserById(decoded.id);
    if (!user) {
      return NextResponse.json(
        { error: 'Pengguna tidak ditemukan' },
        { status: 400 }
      );
    }

    // Token is valid
    return NextResponse.json({
      valid: true,
      email: user.email,
    });
  } catch (error: unknown) {
    console.error('Error verifying reset token:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat memverifikasi token' },
      { status: 500 }
    );
  }
}
