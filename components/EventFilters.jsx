export default function EventFilters() {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Etkinlikleri Keşfet
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Kampüsün en popüler etkinliklerine göz at.
          </p>
        </div>
        <div className="w-full md:w-auto flex-1 max-w-md">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors">
                search
              </span>
            </div>
            <input
              className="block w-full rounded-xl border border-gray-200 dark:border-card-border bg-white dark:bg-card-dark py-3 pl-10 pr-4 text-sm focus:border-primary focus:ring-1 focus:ring-primary text-gray-900 dark:text-white shadow-sm"
              placeholder="Konser, seminer, kulüp etkinliği ara..."
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 overflow-x-auto hide-scrollbar pb-2">
        <button className="shrink-0 h-9 px-4 rounded-full bg-primary text-white text-sm font-medium transition-transform hover:scale-105 shadow-md shadow-primary/30">
          Tümü
        </button>
        <button className="shrink-0 h-9 px-4 rounded-full bg-white dark:bg-card-border border border-gray-200 dark:border-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#2a3855] text-sm font-medium transition-colors flex items-center gap-2 shadow-sm">
          <span className="material-symbols-outlined text-[18px]">school</span>{' '}
          Akademik
        </button>
        <button className="shrink-0 h-9 px-4 rounded-full bg-white dark:bg-card-border border border-gray-200 dark:border-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#2a3855] text-sm font-medium transition-colors flex items-center gap-2 shadow-sm">
          <span className="material-symbols-outlined text-[18px]">
            music_note
          </span>{' '}
          Sosyal & Eğlence
        </button>
        <button className="shrink-0 h-9 px-4 rounded-full bg-white dark:bg-card-border border border-gray-200 dark:border-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#2a3855] text-sm font-medium transition-colors flex items-center gap-2 shadow-sm">
          <span className="material-symbols-outlined text-[18px]">
            sports_soccer
          </span>{' '}
          Spor
        </button>
        <button className="shrink-0 h-9 px-4 rounded-full bg-white dark:bg-card-border border border-gray-200 dark:border-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#2a3855] text-sm font-medium transition-colors flex items-center gap-2 shadow-sm">
          <span className="material-symbols-outlined text-[18px]">work</span>{' '}
          Kariyer
        </button>
        <button className="shrink-0 h-9 px-4 rounded-full bg-white dark:bg-card-border border border-gray-200 dark:border-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#2a3855] text-sm font-medium transition-colors flex items-center gap-2 shadow-sm">
          <span className="material-symbols-outlined text-[18px]">palette</span>{' '}
          Sanat
        </button>
        <button className="shrink-0 h-9 px-3 rounded-full bg-white dark:bg-card-border border border-gray-200 dark:border-transparent text-gray-500 dark:text-gray-400 hover:text-primary transition-colors shadow-sm">
          <span className="material-symbols-outlined text-[20px]">
            filter_list
          </span>
        </button>
      </div>
    </section>
  );
}
