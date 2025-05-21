import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Add a token to the blacklist
export const blacklistToken = async (token: string, userId: string) => {
  const result = await prisma.blacklistedToken.create({
    data: {
      token,
      userId,
      tokenType: 'password_reset',
    },
  });

  return result;
};

// Check if a token is blacklisted
export const isTokenBlacklisted = async (token: string): Promise<boolean> => {
  const blacklistedToken = await prisma.blacklistedToken.findUnique({
    where: { token },
  });

  return !!blacklistedToken;
};

// Cleanup old tokens (can be run periodically)
export const cleanupOldTokens = async (daysToKeep: number = 30) => {
  const date = new Date();
  date.setDate(date.getDate() - daysToKeep);

  const result = await prisma.blacklistedToken.deleteMany({
    where: {
      createdAt: { lt: date },
    },
  });

  return result;
};
