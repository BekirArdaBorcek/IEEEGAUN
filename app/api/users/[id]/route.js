import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  await dbConnect();
  const { id } = await params;

  try {
    const user = await User.findById(id);
    if (!user) {
      return NextResponse.json(
        { success: false, error: 'User not found' },
        { status: 404 },
      );
    }
    return NextResponse.json({ success: true, data: user });
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
    const user = await User.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return NextResponse.json(
        { success: false, error: 'User not found' },
        { status: 404 },
      );
    }
    return NextResponse.json({ success: true, data: user });
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
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return NextResponse.json(
        { success: false, error: 'User not found' },
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
