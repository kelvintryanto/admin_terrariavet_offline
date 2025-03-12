import { Db, ObjectId } from 'mongodb';
import { connectToDatabase } from '../config/config';

export interface Product {
  _id?: ObjectId;
  kode: string;
  name: string;
  category: string;
  description: string;
  jumlah: number;
  harga: number;
  createdAt?: string;
  updatedAt?: string;
}

// Interface for product stock update
export interface ProductStockUpdate {
  productId: string;
  quantity: number;
}

const DATABASE_NAME = 'terrariavet';
const COLLECTION = 'products';

export const getDb = async () => {
  const client = await connectToDatabase();
  const db: Db = client.db(DATABASE_NAME);
  return db;
};

export const createProduct = async (
  product: Omit<Product, '_id' | 'createdAt' | 'updatedAt'>
) => {
  const db = await getDb();
  const bodyInput = {
    ...product,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  const result = await db.collection(COLLECTION).insertOne(bodyInput);
  return result;
};

export const getAllProducts = async () => {
  const db = await getDb();
  const products = await db
    .collection(COLLECTION)
    .find()
    .sort({ createdAt: -1 })
    .toArray();
  return products;
};

export const getProductById = async (id: string) => {
  const db = await getDb();
  const product = await db.collection(COLLECTION).findOne({
    _id: ObjectId.createFromHexString(id),
  });
  return product;
};

export const updateProduct = async (id: string, data: Partial<Product>) => {
  const db = await getDb();

  const update = {
    $set: {
      ...data,
      updatedAt: new Date().toISOString(),
    },
  };

  const result = await db
    .collection(COLLECTION)
    .updateOne({ _id: ObjectId.createFromHexString(id) }, update);

  if (result.matchedCount === 0) {
    throw new Error('Product not found');
  }

  return result;
};

export const deleteProduct = async (id: string) => {
  const db = await getDb();
  const result = await db.collection(COLLECTION).deleteOne({
    _id: ObjectId.createFromHexString(id),
  });

  if (result.deletedCount === 0) {
    throw new Error('Product not found');
  }

  return result;
};

export const updateProductStock = async (updates: ProductStockUpdate[]) => {
  const db = await getDb();
  const productsCollection = db.collection(COLLECTION);

  const updateResults = [];
  const failedUpdates = [];

  // Process each product update sequentially
  for (const update of updates) {
    const { productId, quantity } = update;

    if (!productId || !quantity) {
      failedUpdates.push({
        success: false,
        productId,
        error: 'Missing productId or quantity',
      });
      continue;
    }

    try {
      // Find the product and update its stock
      const result = await productsCollection.updateOne(
        { _id: new ObjectId(productId) },
        {
          $inc: { jumlah: -quantity }, // Decrease the stock by the quantity
          $set: { updatedAt: new Date().toISOString() },
        }
      );

      if (result.matchedCount === 0) {
        failedUpdates.push({
          success: false,
          productId,
          error: 'Product not found',
        });
        continue;
      }

      updateResults.push({ success: true, productId });
    } catch (error) {
      console.error(`Error updating product ${productId}:`, error);
      failedUpdates.push({
        success: false,
        productId,
        error: 'Database error',
      });
    }
  }

  return {
    success: failedUpdates.length === 0,
    updateResults,
    failedUpdates,
  };
};
