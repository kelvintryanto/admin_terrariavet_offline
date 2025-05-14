import { withAuth } from '@/app/api/middleware';
import {
  CreateDiagnose,
  createDiagnose,
  getAllDiagnoses,
} from '@/app/models/diagnose';
import { canCreateDiagnose } from '@/app/utils/authCheck';
import { getWIBDate } from '@/app/utils/date-utils';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const diagnoses = await getAllDiagnoses();
    return NextResponse.json(diagnoses);
  } catch (error: unknown) {
    console.error('Failed to fetch diagnoses', error);
    return NextResponse.json(
      { error: 'Failed to fetch diagnoses' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  return withAuth(request, async (req, user) => {
    if (!canCreateDiagnose(user.role)) {
      return NextResponse.json(
        { error: 'Access denied. Create diagnose privileges required' },
        { status: 403 }
      );
    }

    try {
      const data = await request.json();

      /**
       * di post ini bikin DXNumber dan DX datenya
       *
       */
      // Get current date components in WIB timezone
      const now = getWIBDate();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');

      // Get all diagnoses to find the matching date pattern
      const allDiagnoses = await getAllDiagnoses();

      // Create the date pattern to match (e.g., "DX/2025/03/14")
      const datePattern = `DX/${year}/${month}/${day}`;

      // Find the maximum sequence number for the current date
      let maxSequence = 0;
      allDiagnoses.forEach((diagnose) => {
        if (diagnose.dxNumber.startsWith(datePattern)) {
          // Extract the sequence number from the last part
          const parts = diagnose.dxNumber.split('/');
          if (parts.length === 5) {
            const sequence = parseInt(parts[4], 10);
            if (!isNaN(sequence) && sequence > maxSequence) {
              maxSequence = sequence;
            }
          }
        }
      });

      // Generate the next sequence number
      const sequenceNumber = String(maxSequence + 1).padStart(2, '0');

      // Generate diagnose number
      const diagnoseNo = `DX/${year}/${month}/${day}/${sequenceNumber}`;

      /**
       * buat variabel baru untuk mendefinisikan createDiagnose
       * tanpa _id dan createdAt dan updatedAt
       */
      const diagnoseData = {
        dxNumber: diagnoseNo,
        dxDate: now.toISOString(),
        ...data,
      };

      const result = await createDiagnose(diagnoseData as CreateDiagnose);
      return NextResponse.json(result, { status: 201 });
    } catch (error: unknown) {
      console.error('Failed to fetch diagnoses', error);
      return NextResponse.json(
        { error: 'Failed to fetch diagnoses' },
        { status: 500 }
      );
    }
  });
}
