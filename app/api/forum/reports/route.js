import dbConnect from '@/lib/mongodb';
import Report from '@/models/Report';
import { NextResponse } from 'next/server';

import { auth } from '@/auth';

export async function GET() {
  const session = await auth();
  if (!session?.user?.role || session.user.role !== 'Yönetici') {
    return NextResponse.json(
      { success: false, error: 'Unauthorized' },
      { status: 401 }
    );
  }

  await dbConnect();

  try {
    const reports = await Report.find({});
    return NextResponse.json({ success: true, data: reports });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 },
    );
  }
}

export async function POST(request) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json(
      { success: false, error: 'Unauthorized' },
      { status: 401 }
    );
  }

  await dbConnect();

  try {
    const body = await request.json();
    const report = await Report.create({ ...body, reporter: session.user.id }); // Associate with user if possible
    return NextResponse.json({ success: true, data: report }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 },
    );
  }
}
