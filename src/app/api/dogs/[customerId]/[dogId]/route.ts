import { withAuth } from '@/app/api/middleware';
import redis from '@/app/config/redis';
import { getCustomerById } from '@/app/models/customer';
import { updateDog } from '@/app/models/dog';
import { ObjectId } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ customerId: string; dogId: string }> }
) {
  return withAuth(request, async (req, user) => {
    try {
      const { customerId, dogId } = await params;
      const body = await request.json();

      // If not an admin, verify the user owns the dog
      if (user.role !== 'super_admin' && user.role !== 'admin') {
        if (user.id !== customerId) {
          return NextResponse.json(
            { error: 'You do not have permission to update this pet' },
            { status: 403 }
          );
        }

        // Get the customer to verify they own the dog
        const customer = await getCustomerById(customerId);
        if (!customer) {
          return NextResponse.json(
            { error: 'Customer not found' },
            { status: 404 }
          );
        }

        const ownsDog = customer.dogs.some(
          (dog) => dog._id.toString() === dogId
        );
        if (!ownsDog) {
          return NextResponse.json(
            { error: 'You do not own this pet' },
            { status: 403 }
          );
        }
      }

      // Convert string breedId to ObjectId if it exists
      if (body.breedId) {
        body.breedId = new ObjectId(body.breedId);
      }

      // Update the dog
      await updateDog(customerId, dogId, body);

      // Clear caches
      await redis.del(`customer:${customerId}`);
      await redis.del('customers');

      return NextResponse.json({ success: true });
    } catch (error) {
      console.error('Error updating dog:', error);
      return NextResponse.json(
        { error: 'Failed to update pet information' },
        { status: 500 }
      );
    }
  });
}
