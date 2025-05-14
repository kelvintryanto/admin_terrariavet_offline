import { withAuth } from '@/app/api/middleware';
import {
  deleteDiagnose,
  getDiagnoseById,
  updateDiagnose,
} from '@/app/models/diagnose';
import { canDeleteDiagnose, canEditDiagnose } from '@/app/utils/authCheck';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const diagnose = await getDiagnoseById(id);

    if (!diagnose) {
      return NextResponse.json(
        { error: 'Diagnose not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(diagnose);
  } catch (error) {
    console.error('Error fetching diagnose:', error);
    return NextResponse.json(
      { error: 'Failed to fetch diagnose' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  return withAuth(request, async (req, user) => {
    if (!canEditDiagnose(user.role)) {
      return NextResponse.json(
        { error: 'Access denied. Edit diagnose privileges required' },
        { status: 403 }
      );
    }

    try {
      const { id } = await params;
      const data = await request.json();

      const result = await updateDiagnose(id, data);
      return NextResponse.json(result);
    } catch (error) {
      console.error('Error updating diagnose:', error);
      return NextResponse.json(
        { error: 'Failed to update diagnose' },
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
    if (!canDeleteDiagnose(user.role)) {
      return NextResponse.json(
        { error: 'Access denied. Delete diagnose privileges required' },
        { status: 403 }
      );
    }

    try {
      const { id } = await params;
      const result = await deleteDiagnose(id);
      return NextResponse.json(result);
    } catch (error) {
      console.error('Error deleting diagnose:', error);
      return NextResponse.json(
        { error: 'Failed to delete diagnose' },
        { status: 500 }
      );
    }
  });
}
