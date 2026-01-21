import CommunityCard from '@/components/CommunityCard';

export default function ChaptersPage() {
  const communities = [
    {
      icon: 'precision_manufacturing',
      slug: 'ras',
      iconColorClass: 'text-blue-600',
      iconBgClass: 'bg-blue-100 dark:bg-blue-900/40',
      title: 'Robotics & Automation (RAS)',
      faculty: 'Mühendislik Fakültesi',
      facultyColorClass: 'text-blue-600',
      facultyBgClass: 'bg-blue-50 dark:bg-blue-900/20',
      score: '85.2',
      publications: '42',
      members: '128',
      growth: '+14%',
      projectCompletion: 85,
      projectColorClass: 'text-blue-600',
      projectBgClass: 'bg-blue-500',
      admiralProjectStatus: 'Kritik Safha',
      admiralProjectStatusColorClass: 'text-green-600',
      admiralProjectStatusBgClass: 'bg-green-500/10',
      admiralProjectName: 'Rover Keşif Aracı v2: Otonom Navigasyon Modülü',
      teamMembersCount: 8,
    },
    {
      icon: 'bolt',
      slug: 'pes',
      iconColorClass: 'text-amber-600',
      iconBgClass: 'bg-amber-100 dark:bg-amber-900/40',
      title: 'Power & Energy (PES)',
      faculty: 'Elektrik-Elektronik',
      facultyColorClass: 'text-amber-600',
      facultyBgClass: 'bg-amber-50 dark:bg-amber-900/20',
      score: '72.4',
      publications: '28',
      members: '94',
      growth: '+8%',
      projectCompletion: 40,
      projectColorClass: 'text-amber-600',
      projectBgClass: 'bg-amber-500',
      admiralProjectStatus: 'Ar-Ge Aşaması',
      admiralProjectStatusColorClass: 'text-amber-600',
      admiralProjectStatusBgClass: 'bg-amber-500/10',
      admiralProjectName: 'Kampüs Mikro-Şebeke Analizi ve Optimizasyonu',
      teamMembersCount: 5,
    },
    {
      icon: 'code',
      slug: 'cs',
      iconColorClass: 'text-purple-600',
      iconBgClass: 'bg-purple-100 dark:bg-purple-900/40',
      title: 'Computer Society (CS)',
      faculty: 'Bilgisayar Müh.',
      facultyColorClass: 'text-purple-600',
      facultyBgClass: 'bg-purple-50 dark:bg-purple-900/20',
      score: '91.8',
      publications: '56',
      members: '210',
      growth: '+22%',
      projectCompletion: 92,
      projectColorClass: 'text-purple-600',
      projectBgClass: 'bg-purple-500',
      admiralProjectStatus: 'Tamamlandı',
      admiralProjectStatusColorClass: 'text-purple-600',
      admiralProjectStatusBgClass: 'bg-purple-500/10',
      admiralProjectName: 'Yapay Zeka Destekli Kampüs Asistanı',
      teamMembersCount: 12,
    },
    {
      icon: 'biotech',
      slug: 'embs',
      iconColorClass: 'text-rose-600',
      iconBgClass: 'bg-rose-100 dark:bg-rose-900/40',
      title: 'EMBS (Biyomedikal)',
      faculty: 'Tıp & Mühendislik',
      facultyColorClass: 'text-rose-600',
      facultyBgClass: 'bg-rose-50 dark:bg-rose-900/20',
      score: '68.5',
      publications: '15',
      members: '45',
      growth: '+5%',
      projectCompletion: 30,
      projectColorClass: 'text-rose-600',
      projectBgClass: 'bg-rose-500',
      admiralProjectStatus: 'Planlama',
      admiralProjectStatusColorClass: 'text-rose-600',
      admiralProjectStatusBgClass: 'bg-rose-500/10',
      admiralProjectName: 'Biyo-sensör Prototipleri Geliştirme',
      teamMembersCount: 4,
    },
  ];

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
          {communities.map((community, index) => (
            <CommunityCard key={index} {...community} />
          ))}
        </div>
      </div>
    </main>
  );
}
