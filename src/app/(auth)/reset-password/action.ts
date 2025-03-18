'use server';

import { getUserById, updatePassword } from '@/app/models/user';
import { hashPass } from '@/app/utils/bcrypt';
import { decode } from '@/app/utils/jwt';
import { z } from 'zod';

// Schema for validating password reset data
const passwordResetSchema = z
  .object({
    password: z.string().min(8, 'Password harus minimal 8 karakter'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Password dan konfirmasi password tidak cocok',
    path: ['confirmPassword'],
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

    // Get token and password from form data
    const token = formData.get('token') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    // Validate password
    const validationResult = passwordResetSchema.safeParse({
      password,
      confirmPassword,
    });

    if (!validationResult.success) {
      const error = validationResult.error.errors[0];
      return {
        error: error.message,
        success: false,
      };
    }

    // Decode token
    const decoded = await decode(token);
    if (!decoded || !decoded.id || decoded.purpose !== 'password_reset') {
      return {
        error: 'Token tidak valid atau sudah kedaluwarsa.',
        success: false,
      };
    }

    // Get user
    const user = await getUserById(decoded.id);
    if (!user) {
      return {
        error: 'Pengguna tidak ditemukan.',
        success: false,
      };
    }

    // Hash new password
    const hashedPassword = await hashPass(password);

    // Update user's password
    await updatePassword(decoded.id, hashedPassword);

    return {
      error: null,
      success: true,
    };
  } catch (error) {
    console.error('Error in resetPasswordAction:', error);
    return {
      error: 'Terjadi kesalahan saat mengubah password. Silakan coba lagi.',
      success: false,
    };
  }
}
