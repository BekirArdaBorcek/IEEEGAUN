'use client';

import { useState, useEffect } from 'react';
import CommunityCard from '@/components/CommunityCard';

export default function ChaptersPage() {
  const [chapters, setChapters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Status/Color mappings
  const getColorClass = (color) => {
    // Basic mapping or just pass the color directly if CommunityCard supports it
    // For now we will try to map common hex to tailwind classes or usage styles if possible
    // But since CommunityCard expects specific classes, we might need to generate them dynamically or use defaults
    return 'text-blue-600'; // Default
  };

  const getBgClass = (color) => {
    return 'bg-blue-100 dark:bg-blue-900/40'; // Default
  };

  // Fetch from API
  const fetchChapters = async () => {
    try {
      const res = await fetch('/api/chapters');
      const data = await res.json();
      if (data.success) {
        // Transform API data to fit CommunityCard props
        const formattedChapters = data.data.map((chapter) => ({
          icon: 'groups', // Defaul icon
          slug: chapter.shortName?.toLowerCase() || 'chapter',
          iconColorClass: `text-[${chapter.color || '#3b82f6'}]`, // Dynamic color if supported or use style
          iconBgClass: 'bg-opacity-20', // Simplified
          customIconStyle: {
            color: chapter.color,
            backgroundColor: `${chapter.color}20`,
          }, // Pass custom style if we modify component
          title: `${chapter.name} (${chapter.shortName || ''})`,
          faculty: 'IEEE GAÜN', // Placeholder or add to model
          facultyColorClass: 'text-gray-600',
          facultyBgClass: 'bg-gray-100 dark:bg-gray-800',
          score: Math.floor(Math.random() * 40) + 60, // Mock score
          publications: chapter.projectCount || 0, // Real Project Count
          members: chapter.memberCount || 0,
          growth: Math.floor(Math.random() * 100), // Event Count (Mock for now)
          projectCompletion: chapter.avgProgress || 0, // Real average progress (mocked in API for now if no aggregator but implemented simple calc)
          projectColorClass: `text-[${chapter.color || '#3b82f6'}]`,
          projectBgClass: `bg-[${chapter.color || '#3b82f6'}]`,
          admiralProjectStatus: chapter.admiralProject?.status || 'Belirsiz',
          admiralProjectStatusColorClass: 'text-green-600',
          admiralProjectStatusBgClass: 'bg-green-500/10',
          admiralProjectName:
            chapter.admiralProject?.title || 'Amiral Proje Yok',
          teamMembersCount: chapter.admiralProject?.teamSize || 0,
          customColor: chapter.color, // Passing raw hex color to component
        }));
        setChapters(formattedChapters);
      }
    } catch (error) {
      console.error('Failed to fetch chapters:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchChapters();
  }, []);

  return (
    <main className="flex-1 flex flex-col items-center w-full">
      <div className="w-full max-w-[1440px] px-4 md:px-10 py-6 md:py-10 flex flex-col gap-8">
        {/* Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-black tracking-tight text-gray-900 dark:text-white">
              Chapterlar
            </h2>
            <p className="text-xs text-slate-500">
              Bölümler arası karşılaştırmalı akademik veriler ve proje
              durumları.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <select className="text-xs font-bold border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 rounded p-2 focus:ring-primary text-gray-900 dark:text-white">
              <option>Son 12 Ay</option>
              <option>Son 3 Yıl</option>
              <option>Tüm Zamanlar</option>
            </select>
            <div className="flex bg-slate-200 dark:bg-slate-800 p-1 rounded">
              <button className="p-1 px-2 bg-white dark:bg-slate-700 rounded shadow-sm text-gray-900 dark:text-white">
                <span className="material-symbols-outlined text-sm">
                  grid_view
                </span>
              </button>
              <button className="p-1 px-2 text-slate-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                <span className="material-symbols-outlined text-sm">list</span>
              </button>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-10">
          {isLoading ? (
            <p className="text-gray-500 col-span-2 text-center py-10">
              Yükleniyor...
            </p>
          ) : chapters.length > 0 ? (
            chapters.map((community, index) => (
              <CommunityCard key={index} {...community} />
            ))
          ) : (
            <p className="text-gray-500 col-span-2 text-center py-10">
              Henüz hiç chapter eklenmemiş.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
