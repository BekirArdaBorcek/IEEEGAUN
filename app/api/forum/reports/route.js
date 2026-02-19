import dbConnect from '@/lib/mongodb';
import Report from '@/models/Report';
import { NextResponse } from 'next/server';

export async function GET() {
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

export async function PUT(request) {
  await dbConnect();

  // Usually we'd do PUT /api/forum/reports/[id], but for bulk actions or flexibility
  // let's assume we pass ID in body or query param, BUT standard REST is /[id].
  // Since I am creating a "reports" collection route, I'll allow creating reports here.
  // For UPDATING a specific report, I should probably create [id] route.
  // However, the user asked for backend generally. I'll stick to REST.
  // GET /api/forum/reports -> List all
  // POST /api/forum/reports -> Create new report (from frontend)

  try {
    const body = await request.json();
    const report = await Report.create(body);
    return NextResponse.json({ success: true, data: report }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 },
    );
  }
}
