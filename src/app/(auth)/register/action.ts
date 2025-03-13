'use server';

import redis from '@/app/config/redis';
import { createCustomer, getCustomerByEmail } from '@/app/models/customer';
import { z } from 'zod';

const registerSchema = z
  .object({
    name: z.string().min(1, 'Nama lengkap wajib diisi'),
    email: z.string().email('Format email tidak valid'),
    password: z.string().min(5, 'Password minimal 5 karakter'),
    confirmPassword: z.string(),
    phone: z.string().min(10, 'Nomor telepon minimal 10 digit'),
    address: z.string().min(1, 'Alamat wajib diisi'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Password tidak sama',
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

export async function registerAction(
  prevState: {
    error: string;
    success: boolean;
    pending: boolean;
  },
  formData: FormData
) {
  try {
    // Verify reCAPTCHA token
    const recaptchaToken = formData.get('recaptchaToken') as string;
    const isValidToken = await verifyRecaptcha(recaptchaToken);

    if (!isValidToken) {
      return {
        ...prevState,
        pending: false,
        error: 'Verifikasi reCAPTCHA gagal. Silakan coba lagi.',
        success: false,
      };
    }

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      phone: formData.get('phone'),
      address: formData.get('address'),
      confirmPassword: formData.get('confirmPassword'),
    };
    const parsedData = registerSchema.safeParse(data);

    if (!parsedData.success) {
      // Format the Zod error messages to be more user-friendly
      const formattedErrors = parsedData.error.format();

      // Extract all error messages
      const errorMessages: string[] = [];

      if (formattedErrors.name?._errors) {
        errorMessages.push(formattedErrors.name._errors[0]);
      }

      if (formattedErrors.email?._errors) {
        errorMessages.push(formattedErrors.email._errors[0]);
      }

      if (formattedErrors.password?._errors) {
        errorMessages.push(formattedErrors.password._errors[0]);
      }

      if (formattedErrors.confirmPassword?._errors) {
        errorMessages.push(formattedErrors.confirmPassword._errors[0]);
      }

      if (formattedErrors.phone?._errors) {
        errorMessages.push(formattedErrors.phone._errors[0]);
      }

      if (formattedErrors.address?._errors) {
        errorMessages.push(formattedErrors.address._errors[0]);
      }

      // Join all errors with line breaks for better readability
      const errorMessage = errorMessages.join(' | ');

      // Instead of redirect, return validation errors
      return {
        ...prevState,
        pending: false,
        error: errorMessage || 'Mohon periksa kembali data yang Anda masukkan',
        success: false,
      };
    }

    const existingUser = await getCustomerByEmail(
      parsedData.data.email as string
    );
    if (existingUser) {
      // Instead of redirect, return error about existing user
      return {
        ...prevState,
        pending: false,
        error:
          'Email sudah terdaftar. Silakan gunakan email lain atau login dengan email tersebut.',
        success: false,
      };
    }

    const customerInput = {
      name: parsedData.data.name,
      email: parsedData.data.email,
      password: parsedData.data.password,
      phone: parsedData.data.phone,
      address: parsedData.data.address,
      role: 'customer',
      dogs: [], // Initialize empty dogs array
      joinDate: new Date().toISOString(),
    };

    await createCustomer(customerInput);

    await redis.del('customers');

    // Return success flag - client will handle the redirect
    return {
      ...prevState,
      pending: false,
      error: '',
      success: true,
    };
  } catch (error) {
    console.error('Registration error:', error);

    // Return error state
    return {
      ...prevState,
      pending: false,
      error: 'Terjadi kesalahan saat pendaftaran. Silakan coba kembali.',
      success: false,
    };
  }
}
