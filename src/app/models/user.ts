import { PrismaClient } from '@prisma/client';
import { randomBytes } from 'crypto';
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
    select: {
      id: true,
      name: true,
      email: true,
    },
  });

  return user;
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
        resetPasswordToken: null,
        resetPasswordExpires: null,
      },
    });

    console.log(`Password successfully reset for user ID: ${id}`);

    return result;
  } catch (error) {
    console.error('Error in resetUserPassword:', error);
    throw error;
  }
};

// Generate a reset token for the user
export const generatePasswordResetToken = async (email: string) => {
  try {
    const user = await getUserByEmail(email);

    if (!user) {
      throw new Error('User not found');
    }

    // Generate a random token
    const resetToken = randomBytes(32).toString('hex');

    // Token expires in 1 hour
    const resetPasswordExpires = new Date(Date.now() + 3600000);

    // Update user with the reset token and expiry
    await prisma.user.update({
      where: { id: user.id },
      data: {
        resetPasswordToken: resetToken,
        resetPasswordExpires: resetPasswordExpires,
      },
    });

    return {
      userId: user.id,
      email: user.email,
      name: user.name,
      resetToken,
      resetPasswordExpires,
    };
  } catch (error) {
    console.error('Error generating password reset token:', error);
    throw error;
  }
};

// Verify a password reset token
export const verifyPasswordResetToken = async (
  token: string
): Promise<{ userId: string; email: string; name: string } | boolean> => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        resetPasswordToken: token,
        resetPasswordExpires: {
          gt: new Date(),
        },
      },
    });

    if (!user) {
      return false;
    }

    return {
      userId: user.id,
      email: user.email,
      name: user.name,
    };
  } catch (error) {
    console.error('Error verifying reset token:', error);
    return false;
  }
};

// Reset password using token
export const resetPasswordWithToken = async (
  token: string,
  newPassword: string
) => {
  try {
    const userInfo = await verifyPasswordResetToken(token);

    if (!userInfo || typeof userInfo === 'boolean') {
      throw new Error('Invalid or expired reset token');
    }

    const hashedPassword = await hashPass(newPassword);

    const result = await prisma.user.update({
      where: { id: userInfo.userId },
      data: {
        password: hashedPassword,
        resetPasswordToken: null,
        resetPasswordExpires: null,
        updatedAt: new Date(),
      },
    });

    return result;
  } catch (error) {
    console.error('Error resetting password with token:', error);
    throw error;
  }
};
