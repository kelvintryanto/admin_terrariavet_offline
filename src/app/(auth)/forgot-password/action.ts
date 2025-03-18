'use server';

import { getCustomerByEmail } from '@/app/models/customer';
import { sendPasswordResetEmail } from '@/app/utils/email';
import { sign } from '@/app/utils/jwt';
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

    const customer = await getCustomerByEmail(email);

    // Return error if email doesn't exist in the database
    if (!customer) {
      return {
        error:
          'Email tidak ditemukan dalam sistem. Silakan periksa email Anda.',
        success: false,
      };
    }

    const resetToken = await sign(
      {
        id: customer._id.toString(),
        email: customer.email || '',
        name: customer.name,
        role: customer.role,
        purpose: 'password_reset',
      },
      '1h' // 1 hour expiry
    );

    // Encode the token for URL safety
    const encodedToken = encodeURIComponent(resetToken);

    // Create reset URL
    const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password/${encodedToken}`;

    try {
      await sendPasswordResetEmail(email, customer.name, resetUrl);
    } catch (emailError) {
      throw emailError; // Re-throw to be caught by the outer catch
    }

    return {
      error: null,
      success: true,
    };
  } catch (error) {
    console.error('Error in forgotPasswordAction:', error);
    return {
      error: 'Terjadi kesalahan saat mengirim email. Silakan coba lagi.',
      success: false,
    };
  }
}
