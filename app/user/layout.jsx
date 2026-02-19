export default function UserLayout({ children }) {
  return (
    <div className="flex bg-background-light dark:bg-background-dark min-h-screen transition-colors duration-300">
      {/* Sidebar - Desktop */}
      <aside className="w-72 border-r border-slate-200 dark:border-card-border bg-white dark:bg-card-dark flex-col hidden lg:flex shrink-0 transition-colors duration-300">
        <div className="p-6 pb-2">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div className="size-10 flex items-center justify-center bg-primary rounded-lg text-white">
              <span className="material-symbols-outlined text-2xl">school</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Kampüs+
            </h1>
          </div>

          {/* User Profile Card */}
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-card-border">
              <div
                className="bg-center bg-no-repeat bg-cover rounded-full size-12 shrink-0 border-2 border-primary"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCK-fh1VUBrgfHla1qYX9LgsCxMlutm1BgWX-V46PnI_6XabGIX4m9h5Kfs0OhEVKlwZM2nDqoJmxLdIXJWqkymQn7YH0-CDgmi3Ywr4rGQMG2_RX4HlANOE_0tSN0p0Jb_4AFbROMg--sH2RD8kforUuTWfYLwqh5HRfupn4ISti6izuTCOcmxaAwD0qq80rNe7GP5QS6k3iZw5kEMxT2lDoZu-GfGRmvX_faO5v21i9hNVcKRZC9od98O4kryQlLXj1Sn5nOVDMI")',
                }}
              ></div>
              <div className="flex flex-col min-w-0">
                <h2 className="text-sm font-bold truncate text-slate-900 dark:text-white">
                  Ahmet Yılmaz
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                  Bilgisayar Müh.
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="material-symbols-outlined text-[14px] text-yellow-500">
                    hotel_class
                  </span>
                  <span className="text-xs font-medium text-yellow-500">
                    Seviye 12
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-1.5">
            <a
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group"
              href="#"
            >
              <span className="material-symbols-outlined text-[22px] group-hover:text-primary transition-colors">
                dashboard
              </span>
              <span className="text-sm font-medium">Dashboard</span>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary font-semibold"
              href="#"
            >
              <span className="material-symbols-outlined text-[22px]">
                trophy
              </span>
              <span className="text-sm">Ödül Merkezi</span>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group"
              href="#"
            >
              <span className="material-symbols-outlined text-[22px] group-hover:text-primary transition-colors">
                checklist
              </span>
              <span className="text-sm font-medium">Görevler</span>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group"
              href="#"
            >
              <span className="material-symbols-outlined text-[22px] group-hover:text-primary transition-colors">
                leaderboard
              </span>
              <span className="text-sm font-medium">Sıralama</span>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group"
              href="#"
            >
              <span className="material-symbols-outlined text-[22px] group-hover:text-primary transition-colors">
                calendar_month
              </span>
              <span className="text-sm font-medium">Etkinlikler</span>
            </a>
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="mt-auto p-6">
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined text-[22px]">
              settings
            </span>
            <span className="text-sm font-medium">Ayarlar</span>
          </a>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Header - Mobile & Desktop */}
        <header className="h-16 border-b border-slate-200 dark:border-card-border bg-white/80 dark:bg-card-dark/80 backdrop-blur-md px-6 flex items-center justify-between shrink-0 sticky top-0 z-20">
          <div className="flex items-center gap-4 lg:hidden">
            <button className="text-slate-500 dark:text-slate-400 hover:text-primary">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <span className="text-lg font-bold text-slate-900 dark:text-white">
              Kampüs+
            </span>
          </div>
          <div className="hidden lg:block">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              Ödül Merkezi
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-[20px]">
                search
              </span>
              <input
                className="bg-slate-100 dark:bg-slate-800 border-none rounded-lg pl-10 pr-4 py-2 text-sm w-64 text-slate-700 dark:text-white focus:ring-2 focus:ring-primary placeholder:text-slate-400"
                placeholder="Ödül veya görev ara..."
                type="text"
              />
            </div>
            <button className="relative size-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              <span className="material-symbols-outlined text-[20px]">
                notifications
              </span>
              <span className="absolute top-2.5 right-2.5 size-2 bg-red-500 rounded-full border-2 border-slate-100 dark:border-slate-800"></span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto scroll-smooth">{children}</div>
      </main>
    </div>
  );
}
