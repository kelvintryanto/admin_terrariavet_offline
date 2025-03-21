import { Db, ObjectId } from 'mongodb';
import { connectToDatabase } from '../config/config';
import { comparePass, hashPass } from '../utils/bcrypt';

const DATABASE_NAME = 'terrariavet';
const COLLECTION = 'users';

export type InputUser = {
  name: string;
  email: string;
  password: string;
  phone: string;
  role?: string;
};

export const getDb = async () => {
  const client = await connectToDatabase();
  const db: Db = client.db(DATABASE_NAME);
  return db;
};

export const registerUser = async (body: Omit<InputUser, 'role'>) => {
  const db = await getDb();
  const { password, ...rest } = body;
  const hashedPassword = await hashPass(password);

  const bodyInput = {
    ...rest,
    password: hashedPassword,
    role: 'Customer',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  const result = await db.collection(COLLECTION).insertOne(bodyInput);
  return result;
};

export const getUserByEmail = async (email: string) => {
  //ini dipakai saat login
  const db = await getDb();

  const result = db.collection(COLLECTION).findOne({ email });

  return result;
};

export const getUserById = async (id: string) => {
  const db = await getDb();
  const user = await db
    .collection('users')
    .findOne({ _id: ObjectId.createFromHexString(id) });

  return user ? { id: user._id, name: user.name, email: user.email } : null;
};

// These functions have been moved to customer.ts
// Since customer accounts are stored in the customers collection
// Please use verifyCustomerCurrentPassword and resetCustomerPassword instead

interface GoogleUser {
  email: string;
  name: string;
}

export const registerUserWithGoogle = async (userData: GoogleUser) => {
  const db = await getDb();

  const user = {
    ...userData,
    role: 'Customer',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    googleUser: true,
  };

  const result = await db.collection(COLLECTION).insertOne(user);
  return result;
};

export const updatePassword = async (userId: string, newPassword: string) => {
  const db = await getDb();

  const result = await db.collection(COLLECTION).updateOne(
    { _id: ObjectId.createFromHexString(userId) },
    {
      $set: {
        password: newPassword,
        updatedAt: new Date().toISOString(),
      },
    }
  );

  if (result.matchedCount === 0) {
    throw new Error('User not found');
  }

  return result;
};

export const verifyUserCurrentPassword = async (
  id: string,
  currentPassword: string
) => {
  try {
    const db = await getDb();
    console.log(`Attempting to verify password for user ID: ${id}`);

    // Get user by ID
    let user;
    try {
      user = await db.collection(COLLECTION).findOne({
        _id: ObjectId.createFromHexString(id),
      });
    } catch (error) {
      console.error(`Error finding user with ID ${id}:`, error);
      return false;
    }

    if (!user) {
      console.error(`User not found with ID: ${id}`);
      return false;
    }

    // Check if the user is a Google user and doesn't have a password
    if (user.googleUser && !user.password) {
      console.log('Google user without password cannot change password');
      return false;
    }

    // For Google users, allow password change without current password verification
    if (user.googleUser === true) {
      console.log(
        'Google user attempting to set a password, bypassing verification'
      );
      return true;
    }

    // Verify password
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
    const db = await getDb();
    console.log(`Attempting to reset password for user ID: ${id}`);

    const hashedPassword = await hashPass(newPassword);

    const result = await db.collection(COLLECTION).updateOne(
      { _id: ObjectId.createFromHexString(id) },
      {
        $set: {
          password: hashedPassword,
          updatedAt: new Date().toISOString(),
        },
      }
    );

    if (result.matchedCount === 0) {
      console.error(`No user found for ID: ${id}`);
      throw new Error(`User not found for ID: ${id}`);
    }

    if (result.modifiedCount === 0) {
      console.warn(`Password not modified for user ID: ${id}`);
    } else {
      console.log(`Password successfully reset for user ID: ${id}`);
    }

    return result;
  } catch (error) {
    console.error('Error in resetUserPassword:', error);
    throw error;
  }
};
