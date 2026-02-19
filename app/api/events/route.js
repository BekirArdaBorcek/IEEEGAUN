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

export async function POST(request) {
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
