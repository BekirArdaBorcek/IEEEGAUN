import dbConnect from '@/lib/mongodb';
import Report from '@/models/Report';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  await dbConnect();
  const { id } = await params;

  try {
    const report = await Report.findById(id);
    if (!report) {
      return NextResponse.json(
        { success: false, error: 'Report not found' },
        { status: 404 },
      );
    }
    return NextResponse.json({ success: true, data: report });
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
    const report = await Report.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    if (!report) {
      return NextResponse.json(
        { success: false, error: 'Report not found' },
        { status: 404 },
      );
    }
    return NextResponse.json({ success: true, data: report });
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
    const deletedReport = await Report.findByIdAndDelete(id);
    if (!deletedReport) {
      return NextResponse.json(
        { success: false, error: 'Report not found' },
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
