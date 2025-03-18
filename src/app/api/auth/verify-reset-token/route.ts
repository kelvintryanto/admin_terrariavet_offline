import { getUserById } from '@/app/models/user';
import { decode } from '@/app/utils/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json({ error: 'Token is required' }, { status: 400 });
    }

    // Decode token
    const decoded = await decode(token);

    // Check if token is valid and has the correct purpose
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
      success: true,
      user: { id: user.id, email: user.email },
    });
  } catch (error) {
    console.error('Error verifying reset token:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat memverifikasi token' },
      { status: 500 }
    );
  }
}
