import { PrismaClient } from '@prisma/client';
import { comparePass, hashPass } from '../utils/bcrypt';

const prisma = new PrismaClient();

export type InputUser = {
  name: string;
  email: string;
  password: string;
  phone: string;
  role?: string;
};

export const getUserByEmail = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  return user;
};

export const getUserById = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: { id },
  });

  // Kembalikan hanya beberapa field sesuai yang Bos mau
  return user ? { id: user.id, name: user.name, email: user.email } : null;
};


export const updatePassword = async (userId: string, newPassword: string) => {
  const result = await prisma.user.update({
    where: { id: userId },
    data: {
      password: newPassword,
      updatedAt: new Date(),
    },
  }).catch(() => {
    throw new Error('User not found');
  });

  return result;
};

export const verifyUserCurrentPassword = async (
  id: string,
  currentPassword: string
) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      console.error(`User not found with ID: ${id}`);
      return false;
    }

    // Jika ada flag googleUser, sesuaikan kalau kamu pakai
    // Kalau tidak ada, bisa dihilangkan bagian ini
    if ((user as any).googleUser && !user.password) {
      console.log('Google user without password cannot change password');
      return false;
    }

    if ((user as any).googleUser === true) {
      console.log('Google user bypassing password verification');
      return true;
    }

    const isValid = await comparePass(currentPassword, user.password || '');
    console.log(`Password verification result: ${isValid}`);
    return isValid;
  } catch (error) {
    console.error('Error in verifyUserCurrentPassword:', error);
    return false;
  }
};

export const resetUserPassword = async (id: string, newPassword: string) => {
  try {
    const hashedPassword = await hashPass(newPassword);

    const result = await prisma.user.update({
      where: { id },
      data: {
        password: hashedPassword,
        updatedAt: new Date(),
      },
    });

    console.log(`Password successfully reset for user ID: ${id}`);

    return result;
  } catch (error) {
    console.error('Error in resetUserPassword:', error);
    throw error;
  }
};

