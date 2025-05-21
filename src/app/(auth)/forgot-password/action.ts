'use server';

import { generatePasswordResetToken, getUserByEmail } from '@/app/models/user';
import { sendPasswordResetEmail } from '@/app/utils/email';
import { z } from 'zod';

// Schema for validating email
const emailSchema = z.object({
  email: z.string().email('Email tidak valid'),
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

export async function forgotPasswordAction(
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

    // Get email from form data
    const email = formData.get('email') as string;

    // Validate email
    const validationResult = emailSchema.safeParse({ email });
    if (!validationResult.success) {
      return {
        error: 'Email tidak valid',
        success: false,
      };
    }

    const user = await getUserByEmail(email);

    // Return error if email doesn't exist in the database
    if (!user) {
      return {
        error:
          'Email tidak ditemukan dalam sistem. Silakan periksa email Anda.',
        success: false,
      };
    }

    try {
      // Generate a reset token
      const { resetToken } = await generatePasswordResetToken(email);

      // Send the reset email
      await sendPasswordResetEmail(email, user.name, resetToken);

      return {
        error: null,
        success: true,
      };
    } catch (emailError) {
      console.error('Error sending reset email:', emailError);
      throw emailError; // Re-throw to be caught by the outer catch
    }
  } catch (error) {
    console.error('Error in forgotPasswordAction:', error);
    return {
      error: 'Terjadi kesalahan saat mengirim email. Silakan coba lagi.',
      success: false,
    };
  }
}
