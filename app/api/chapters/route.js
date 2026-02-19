import dbConnect from '@/lib/mongodb';
import Project from '@/models/Project';
import Chapter from '@/models/Chapter';
import User from '@/models/User';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await dbConnect();
    // Use aggregation to join projects or just simple fetch
    // Simple approach: Fetch all chapters, and for each, find related projects
    const chapters = await Chapter.find({}).lean();

    // Enrich with project stats and member count
    const enrichedChapters = await Promise.all(
      chapters.map(async (chapter) => {
        const projects = await Project.find({ chapter: chapter.name }).lean();
        const admiralProject = projects.find((p) => p.isAdmiral) || projects[0]; // fallback to first if no admiral

        // Count members (users) belonging to this chapter (by name or shortName)
        const memberCount = await User.countDocuments({
          chapter: { $in: [chapter.name, chapter.shortName].filter(Boolean) },
        });

        return {
          ...chapter,
          projectCount: projects.length,
          memberCount: memberCount, // Real member count from Users collection
          admiralProject: admiralProject || null,
          // Calculate average progress if needed, using simple math
          avgProgress:
            projects.length > 0
              ? Math.round(
                  projects.reduce(
                    (acc, curr) => acc + (curr.progress || 0),
                    0,
                  ) / projects.length,
                )
              : 0,
        };
      }),
    );

    return NextResponse.json({ success: true, data: enrichedChapters });
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
    const chapter = await Chapter.create(body);
    return NextResponse.json({ success: true, data: chapter }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 },
    );
  }
}
