'use server';

import { resetCustomerPassword } from '@/app/models/customer';
import { verify } from '@/app/utils/jwt';
import { z } from 'zod';

// Schema for validating password
const passwordSchema = z.object({
  password: z.string().min(6, 'Password harus minimal 6 karakter'),
});

// Function to verify reCAPTCHA token
async function verifyRecaptcha(token: string): Promise<boolean> {
  try {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    if (!secretKey) {
      console.error('reCAPTCHA secret key is not defined');
      return false;
    }

    const response = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          secret: secretKey,
          response: token,
        }),
      }
    );

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error);
    return false;
  }
}

interface ActionResponse {
  error: string | null;
  success: boolean;
}

export async function resetPasswordAction(
  formData: FormData
): Promise<ActionResponse> {
  try {
    // Verify reCAPTCHA token
    const recaptchaToken = formData.get('recaptchaToken') as string;
    if (recaptchaToken) {
      const isValidToken = await verifyRecaptcha(recaptchaToken);
      if (!isValidToken) {
        return {
          error: 'Verifikasi reCAPTCHA gagal. Silakan coba lagi.',
          success: false,
        };
      }
    }

    // Get data from form
    const password = formData.get('password') as string;
    const token = formData.get('token') as string;

    // Validate password
    const passwordValidation = passwordSchema.safeParse({ password });
    if (!passwordValidation.success) {
      return {
        error: 'Password harus minimal 6 karakter',
        success: false,
      };
    }

    // Verify token
    const decodedToken = await verify(token);
    if (!decodedToken) {
      return {
        error: 'Token tidak valid atau sudah kedaluwarsa',
        success: false,
      };
    }

    // Verify it's a password reset token
    if (decodedToken.purpose !== 'password_reset') {
      console.error('Invalid token purpose:', decodedToken.purpose);
      return {
        error: 'Token tidak valid untuk reset password',
        success: false,
      };
    }

    // Reset the password
    await resetCustomerPassword(decodedToken.id, password);

    return {
      error: null,
      success: true,
    };
  } catch (error) {
    console.error('Error in resetPasswordAction:', error);
    return {
      error:
        'Terjadi kesalahan saat mengatur ulang password. Silakan coba lagi.',
      success: false,
    };
  }
}
