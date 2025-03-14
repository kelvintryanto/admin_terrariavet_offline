'use server';

import {
  getCustomerByEmail,
  getCustomerByPhone,
  verifyCustomerPassword,
} from '@/app/models/customer';
import { getUserByEmail } from '@/app/models/user';
import { comparePass } from '@/app/utils/bcrypt';
import { sign } from '@/app/utils/jwt';
import { ObjectId } from 'mongodb';
import { ResponseCookies } from 'next/dist/compiled/@edge-runtime/cookies';
import { cookies } from 'next/headers';
import { z } from 'zod';

const loginSchema = z.object({
  identifier: z.string().min(1, 'Email or phone number is required'),
  password: z.string().min(5, 'Password must be at least 5 characters'),
});

interface LoginState {
  error: string | null;
  success: boolean;
  pending: boolean;
  user?: {
    name: string;
    email?: string;
  } | null;
  redirect?: string;
}

interface AuthUser {
  _id: ObjectId;
  email?: string;
  name: string;
  role: string;
  profileImage?: string;
  googleUser?: boolean;
}

export async function loginAction(
  prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const data = {
    identifier: formData.get('identifier'),
    password: formData.get('password'),
  };

  const parsedData = loginSchema.safeParse(data);

  if (!parsedData.success) {
    return {
      error: 'Email atau nomor telepon atau password salah',
      success: false,
      pending: false,
    };
  }

  const identifier = parsedData.data.identifier;
  const isEmail = identifier.includes('@');

  // First try to find user in users collection (admin/super_admin) if the identifier looks like an email
  let adminUser = null;
  if (isEmail) {
    adminUser = await getUserByEmail(identifier);
  }

  // Then try to find in customers collection by email or phone
  let customer = null;
  if (isEmail) {
    customer = await getCustomerByEmail(identifier);
  } else {
    customer = await getCustomerByPhone(identifier);
  }

  if (!adminUser && !customer) {
    return {
      error: 'Email atau nomor telepon atau password salah',
      success: false,
      pending: false,
    };
  }

  let isValid = false;
  let userData: AuthUser | null = null;

  if (adminUser) {
    // Admin authentication logic
    isValid = await comparePass(parsedData.data.password, adminUser.password);
    if (isValid) {
      userData = {
        _id: adminUser._id,
        email: adminUser.email,
        name: adminUser.name,
        role: adminUser.role,
      };
    }
  } else if (customer) {
    // Customer authentication
    isValid = await verifyCustomerPassword(
      customer.email || customer.phone,
      parsedData.data.password
    );
    if (isValid) {
      userData = {
        _id: customer._id,
        email: customer.email,
        name: customer.name,
        role: customer.role,
      };
    }
  }

  if (!isValid || !userData) {
    return {
      error: 'Email atau nomor telepon atau password salah',
      success: false,
      pending: false,
    };
  }

  // Create JWT token
  const token = await sign({
    id: userData._id.toString(),
    email: userData.email || '', // Use empty string as fallback if email is undefined
    name: userData.name,
    role: userData.role,
    profileImage: userData.profileImage,
    googleUser: userData.googleUser || false,
  });

  // Set cookie
  ((await cookies()) as unknown as ResponseCookies).set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24), // 24 hours
  });

  return {
    error: null,
    success: true,
    pending: false,
    user: {
      name: userData.name,
      email: userData.email,
    },
    redirect: ['super_admin', 'admin', 'admin2'].includes(userData.role)
      ? '/cms'
      : '/',
  };
}
