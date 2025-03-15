import { verify } from '@/app/utils/jwt';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { token } = body;

    if (!token) {
      return Response.json(
        { valid: false, message: 'Token is required' },
        { status: 400 }
      );
    }

    // Verify the token
    const decodedToken = await verify(token);

    // Check if token is valid and has the correct purpose
    const isValid =
      decodedToken !== null && decodedToken.purpose === 'password_reset';

    return Response.json({ valid: isValid });
  } catch (error) {
    console.error('Error verifying reset token:', error);
    return Response.json(
      { valid: false, message: 'Invalid token' },
      { status: 400 }
    );
  }
}
