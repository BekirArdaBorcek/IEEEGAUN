import dbConnect from '@/lib/mongodb';
import Event from '@/models/Event';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  await dbConnect();
  const { id } = await params;

  try {
    const event = await Event.findById(id);
    if (!event) {
      return NextResponse.json(
        { success: false, error: 'Event not found' },
        { status: 404 },
      );
    }
    return NextResponse.json({ success: true, data: event });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 },
    );
  }
}

export async function PUT(request, { params }) {
  await dbConnect();
  const { id } = await params;

  try {
    const body = await request.json();
    const event = await Event.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    if (!event) {
      return NextResponse.json(
        { success: false, error: 'Event not found' },
        { status: 404 },
      );
    }
    return NextResponse.json({ success: true, data: event });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 },
    );
  }
}

export async function DELETE(request, { params }) {
  await dbConnect();
  const { id } = await params;

  try {
    const deletedEvent = await Event.findByIdAndDelete(id);
    if (!deletedEvent) {
      return NextResponse.json(
        { success: false, error: 'Event not found' },
        { status: 404 },
      );
    }
    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 },
    );
  }
}
