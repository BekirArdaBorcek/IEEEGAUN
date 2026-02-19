import dbConnect from '@/lib/mongodb';
import Project from '@/models/Project';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await dbConnect();
    const projects = await Project.find({});
    return NextResponse.json({ success: true, data: projects });
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
    const project = await Project.create(body);
    return NextResponse.json({ success: true, data: project }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 },
    );
  }
}
