import { isTokenBlacklisted } from '@/app/models/token';
import { verifyPasswordResetToken } from '@/app/models/user';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Schema for token validation
const tokenSchema = z.object({
  token: z.string().min(1, 'Token is required'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const result = tokenSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Token is invalid or missing' },
        { status: 400 }
      );
    }

    const { token } = result.data;

    // Check if token is blacklisted
    const isBlacklisted = await isTokenBlacklisted(token);
    if (isBlacklisted) {
      return NextResponse.json(
        { error: 'Link reset password sudah digunakan.' },
        { status: 400 }
      );
    }

    // Verify the token
    const isValid = await verifyPasswordResetToken(token);

    if (!isValid) {
      return NextResponse.json(
        { error: 'Link reset password tidak valid atau sudah kedaluwarsa.' },
        { status: 400 }
      );
    }

    // Return success response if token is valid
    return NextResponse.json({ valid: true }, { status: 200 });
  } catch (error) {
    console.error('Error verifying reset token:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while verifying the token.' },
      { status: 500 }
    );
  }
}
