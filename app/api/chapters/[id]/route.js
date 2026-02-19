import dbConnect from '@/lib/mongodb';
import Chapter from '@/models/Chapter';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  try {
    await dbConnect();
    const { id } = await params;
    const chapter = await Chapter.findById(id);
    if (!chapter) {
      return NextResponse.json(
        { success: false, error: 'Chapter not found' },
        { status: 404 },
      );
    }
    return NextResponse.json({ success: true, data: chapter });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 },
    );
  }
}

export async function PUT(request, { params }) {
  try {
    await dbConnect();
    const { id } = await params;
    const body = await request.json();
    const chapter = await Chapter.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    if (!chapter) {
      return NextResponse.json(
        { success: false, error: 'Chapter not found' },
        { status: 404 },
      );
    }
    return NextResponse.json({ success: true, data: chapter });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 },
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    await dbConnect();
    const { id } = await params;
    const deletedChapter = await Chapter.findByIdAndDelete(id);
    if (!deletedChapter) {
      return NextResponse.json(
        { success: false, error: 'Chapter not found' },
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
