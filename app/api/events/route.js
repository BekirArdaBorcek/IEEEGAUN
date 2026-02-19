import dbConnect from '@/lib/mongodb';
import Event from '@/models/Event';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await dbConnect();
    const events = await Event.find({});
    return NextResponse.json({ success: true, data: events });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 },
    );
  }
}

import { auth } from '@/auth'; // Adjust import based on your setup

export async function POST(request) {
  const session = await auth();
  if (!session?.user?.role || session.user.role !== 'Yönetici') {
    return NextResponse.json(
      { success: false, error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    await dbConnect();
    const body = await request.json();
    const event = await Event.create(body);
    return NextResponse.json({ success: true, data: event }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 },
    );
  }
}
