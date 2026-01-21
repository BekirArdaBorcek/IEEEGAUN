import Link from 'next/link';

export default function CommunityCard({
  icon,
  iconColorClass,
  iconBgClass,
  title,
  faculty,
  facultyColorClass,
  facultyBgClass,
  score,
  publications,
  members,
  growth,
  projectCompletion,
  projectColorClass,
  projectBgClass,
  admiralProjectStatus,
  admiralProjectStatusColorClass,
  admiralProjectStatusBgClass,
  admiralProjectName,
  teamMembersCount,
  slug,
}) {
  return (
    <div className="metric-card flex flex-col gap-4 p-5 bg-white dark:bg-card-dark rounded-2xl border border-slate-100 dark:border-card-border shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 ${iconBgClass} rounded mb-0 flex items-center justify-center`}
          >
            <span className={`material-symbols-outlined ${iconColorClass}`}>
              {icon}
            </span>
          </div>
          <div>
            <h4 className="text-sm font-bold text-gray-900 dark:text-white">
              {title}
            </h4>
            <span
              className={`kpi-badge ${facultyBgClass} ${facultyColorClass} text-[10px] px-2 py-0.5 rounded font-bold uppercase`}
            >
              {faculty}
            </span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-black leading-none text-gray-900 dark:text-white">
            {score}
          </div>
          <span className="text-[10px] font-bold text-slate-400 uppercase">
            Birim Skoru
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 py-2">
        <div className="text-center p-2 rounded bg-slate-50 dark:bg-slate-800/50">
          <div className="text-xs font-black text-gray-900 dark:text-white">
            {publications}
          </div>
          <div className="text-[9px] text-slate-500 font-bold uppercase">
            Yayın
          </div>
        </div>
        <div className="text-center p-2 rounded bg-slate-50 dark:bg-slate-800/50">
          <div className="text-xs font-black text-gray-900 dark:text-white">
            {members}
          </div>
          <div className="text-[9px] text-slate-500 font-bold uppercase">
            Üye
          </div>
        </div>
        <div className="text-center p-2 rounded bg-slate-50 dark:bg-slate-800/50">
          <div className="text-xs font-black text-gray-900 dark:text-white">
            {growth}
          </div>
          <div className="text-[9px] text-green-500 font-bold uppercase">
            Büyüme
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-[10px] font-bold text-slate-500 uppercase">
              Aktif Proje Tamamlama Oranı
            </span>
            <span
              className={`text-[10px] font-bold ${projectColorClass || 'text-blue-600'}`}
            >
              {projectCompletion}%
            </span>
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div
              className={`${projectBgClass || 'bg-blue-500'} h-full`}
              style={{ width: `${projectCompletion}%` }}
            ></div>
          </div>
        </div>

        <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded border border-dashed border-slate-200 dark:border-slate-700">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-black text-slate-400">
              AMİRAL PROJE
            </span>
            <span
              className={`kpi-badge ${admiralProjectStatusBgClass} ${admiralProjectStatusColorClass} text-[10px] px-1.5 py-0.5 rounded font-bold uppercase`}
            >
              {admiralProjectStatus}
            </span>
          </div>
          <p className="text-xs font-bold truncate text-gray-900 dark:text-white">
            {admiralProjectName}
          </p>
          <div className="flex mt-2 gap-1">
            <div className="w-5 h-5 rounded-full bg-slate-300 dark:bg-slate-700 border border-white dark:border-slate-900"></div>
            <div className="w-5 h-5 rounded-full bg-slate-400 dark:bg-slate-600 border border-white dark:border-slate-900 -ml-2"></div>
            <div
              className={`flex items-center justify-center w-5 h-5 rounded-full ${projectBgClass || 'bg-blue-600'} text-[8px] font-bold text-white -ml-2`}
            >
              +{teamMembersCount}
            </div>
          </div>
        </div>
      </div>

      <Link
        href={`/chapters/${slug}`}
        className="w-full py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-[11px] font-bold rounded transition-colors uppercase text-gray-700 dark:text-gray-300 text-center"
      >
        Chapter Detayları
      </Link>
    </div>
  );
}
