import { Db } from 'mongodb';
import { connectToDatabase } from '../config/config';

const DATABASE_NAME = 'terrariavet';
const COLLECTION = 'used_tokens';

export const getDb = async () => {
  const client = await connectToDatabase();
  const db: Db = client.db(DATABASE_NAME);
  return db;
};

// Add a token to the blacklist
export const blacklistToken = async (token: string, userId: string) => {
  const db = await getDb();

  const result = await db.collection(COLLECTION).insertOne({
    token,
    userId,
    createdAt: new Date(),
    tokenType: 'password_reset',
  });

  return result;
};

// Check if a token is blacklisted
export const isTokenBlacklisted = async (token: string): Promise<boolean> => {
  const db = await getDb();

  const blacklistedToken = await db.collection(COLLECTION).findOne({ token });

  return !!blacklistedToken;
};

// Cleanup old tokens (can be run periodically)
export const cleanupOldTokens = async (daysToKeep: number = 30) => {
  const db = await getDb();

  const date = new Date();
  date.setDate(date.getDate() - daysToKeep);

  const result = await db.collection(COLLECTION).deleteMany({
    createdAt: { $lt: date },
  });

  return result;
};
