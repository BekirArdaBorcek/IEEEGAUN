export default function EventFilters({ activeCategory, onCategoryChange, searchTerm, onSearchChange }) {
  const categories = [
    { name: 'Tümü', icon: null },
    { name: 'Teknoloji', icon: 'memory' },
    { name: 'Müzik', icon: 'music_note' },
    { name: 'Kariyer', icon: 'work' },
    { name: 'Spor', icon: 'sports_soccer' },
    { name: 'Sanat', icon: 'palette' },
    { name: 'Kulüp', icon: 'diversity_3' },
  ];

  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Etkinlikleri Keşfet
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          Kampüsün en popüler etkinliklerine göz at.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3 overflow-x-auto hide-scrollbar pb-2 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => onCategoryChange(cat.name)}
              className={`shrink-0 h-9 px-4 rounded-full text-sm font-medium transition-all shadow-sm flex items-center gap-2 ${
                activeCategory === cat.name
                  ? 'bg-primary text-white scale-105 shadow-primary/30'
                  : 'bg-white dark:bg-card-border border border-gray-200 dark:border-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#2a3855]'
              }`}
            >
              {cat.icon && (
                <span className="material-symbols-outlined text-[18px]">
                  {cat.icon}
                </span>
              )}
              {cat.name}
            </button>
          ))}
        </div>

        <div className="w-full md:w-auto flex-1 max-w-sm">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors">
                search
              </span>
            </div>
            <input
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="block w-full rounded-xl border border-gray-200 dark:border-card-border bg-white dark:bg-card-dark py-2.5 pl-10 pr-4 text-sm focus:border-primary focus:ring-1 focus:ring-primary text-gray-900 dark:text-white shadow-sm"
              placeholder="Konser, seminer, kulüp etkinliği ara..."
              type="text"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
