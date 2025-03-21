import { withAuth } from '@/app/api/middleware';
import {
  deleteInvoice,
  getInvoiceById,
  updateInvoice,
} from '@/app/models/invoice';
import {} from '@/app/utils/auth';
import { canDeleteInvoice, canEditInvoice } from '@/app/utils/authCheck';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const invoice = await getInvoiceById(id);

    if (!invoice) {
      return NextResponse.json({ error: 'Invoice not found' }, { status: 404 });
    }

    return NextResponse.json(invoice);
  } catch (error) {
    console.error('Error on fetching invoice', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  return withAuth(request, async (req, user) => {
    if (!canEditInvoice(user.role)) {
      return NextResponse.json(
        { error: 'Access denied. Edit invoice privileges required' },
        { status: 403 }
      );
    }

    try {
      const { id } = await params;
      const data = await request.json();

      const result = await updateInvoice(id, data);
      return NextResponse.json(result);
    } catch (error) {
      console.error('Error updating invoice:', error);
      return NextResponse.json(
        { error: 'Failed to update invoice' },
        { status: 500 }
      );
    }
  });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  return withAuth(request, async (req, user) => {
    if (!canDeleteInvoice(user.role)) {
      return NextResponse.json(
        { error: 'Access denied. Delete invoice privileges required' },
        { status: 403 }
      );
    }

    try {
      const { id } = await params;
      await deleteInvoice(id);

      return NextResponse.json({ message: 'Invoice deleted successfully' });
    } catch (error) {
      console.error('Error on deleting invoice', error);
      return NextResponse.json(
        { error: 'Internal Server Error' },
        { status: 500 }
      );
    }
  });
}
