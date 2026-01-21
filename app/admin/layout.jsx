'use client';

import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import { usePathname } from 'next/navigation';

export default function AdminLayout({ children }) {
  const pathname = usePathname();

  const sidebarItems = [
    {
      name: 'Genel Bakış',
      href: '/admin',
      icon: 'dashboard',
      activeIconClass: 'fill',
    },
    {
      name: 'Kullanıcılar',
      href: '/admin/users',
      icon: 'group',
    },
    {
      name: 'Forum Denetimi',
      href: '#',
      icon: 'gavel',
      badge: 14,
      badgeColor: 'bg-red-100 text-red-600',
    },
    {
      name: 'Etkinlikler',
      href: '#',
      icon: 'calendar_month',
      badge: 8,
      badgeColor: 'bg-blue-100 text-primary',
    },
    {
      name: 'Ödüller & Seviyeler',
      href: '/admin/rewards',
      icon: 'emoji_events',
    },
    {
      name: 'Ayarlar',
      href: '/admin/settings',
      icon: 'settings',
    },
  ];

  return (
    <div className="flex h-screen w-full flex-row overflow-hidden bg-background-light dark:bg-background-dark text-gray-900 dark:text-white font-display">
      {/* Sidebar */}
      <aside className="flex w-64 flex-col border-r border-[#e5e7eb] dark:border-[#2d3748] bg-white dark:bg-[#1a202c] shrink-0 h-full">
        <div className="flex h-full flex-col justify-between p-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 px-2 py-2">
              <div className="bg-primary/10 flex items-center justify-center rounded-xl size-10 text-primary">
                <span className="material-symbols-outlined">school</span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-[#111318] dark:text-white text-base font-bold leading-normal">
                  UniCommunity
                </h1>
                <p className="text-[#616f89] dark:text-gray-400 text-xs font-normal leading-normal">
                  Yönetici Paneli
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              {sidebarItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-primary text-white shadow-lg shadow-primary/20'
                        : 'text-[#616f89] dark:text-gray-400 hover:bg-[#f0f2f4] dark:hover:bg-[#2d3748] hover:text-[#111318] dark:hover:text-white'
                    }`}
                  >
                    <span
                      className={`material-symbols-outlined text-[20px] ${
                        isActive && item.activeIconClass
                          ? item.activeIconClass
                          : ''
                      }`}
                    >
                      {item.icon}
                    </span>
                    <div className="flex flex-1 justify-between items-center">
                      <p className="text-sm font-medium leading-normal">
                        {item.name}
                      </p>
                      {item.badge && (
                        <span
                          className={`${item.badgeColor} text-[10px] font-bold px-1.5 py-0.5 rounded-full`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg group transition-colors">
              <span className="material-symbols-outlined text-[#616f89] group-hover:text-red-600 transition-colors">
                logout
              </span>
              <p className="text-[#616f89] group-hover:text-red-600 text-sm font-medium leading-normal transition-colors">
                Çıkış Yap
              </p>
            </div>
          </div>
        </div>
      </aside>

      <div className="flex flex-1 flex-col h-full overflow-hidden relative text-gray-900 dark:text-white">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-[#e5e7eb] dark:border-[#2d3748] bg-white dark:bg-[#1a202c] px-8 py-4 shrink-0 z-10">
          <div className="flex items-center gap-4 w-1/3">
            <label className="flex flex-col w-full h-10">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-[#f0f2f4] dark:bg-[#2d3748]">
                <div className="text-[#616f89] flex border-none items-center justify-center pl-4 pr-2">
                  <span className="material-symbols-outlined text-[20px]">
                    search
                  </span>
                </div>
                <input
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111318] dark:text-white focus:outline-0 focus:ring-0 border-none bg-transparent focus:border-none h-full placeholder:text-[#616f89] px-2 text-sm font-normal leading-normal"
                  placeholder="Öğrenci, rapor veya metrik ara..."
                />
              </div>
            </label>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex gap-3">
              <ThemeToggle />
              <button className="flex items-center justify-center rounded-full size-10 hover:bg-[#f0f2f4] dark:hover:bg-[#2d3748] text-[#111318] dark:text-white transition-colors relative">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2 size-2.5 bg-red-500 rounded-full border-2 border-white dark:border-[#1a202c]"></span>
              </button>
              <button className="flex items-center justify-center rounded-full size-10 hover:bg-[#f0f2f4] dark:hover:bg-[#2d3748] text-[#111318] dark:text-white transition-colors">
                <span className="material-symbols-outlined">mail</span>
              </button>
            </div>
            <div className="h-8 w-px bg-[#e5e7eb] dark:bg-[#2d3748]"></div>
            <div className="flex items-center gap-3 cursor-pointer">
              <div
                className="bg-center bg-no-repeat bg-cover rounded-full size-9 border border-[#e5e7eb] dark:border-[#2d3748]"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDOLkWaIY5sxGrI_COsqzK8e6mbHTpUF6f6LUxuhLyOXHa7CbVyCzYLWNTfYJaObdefcDQzI7LsG9fPOAn9V3XjPyUEd-_nMjj4SYCgBcYl9LmckAbWdzc7dxHWAot5VbmUjIo-63YkLv7ZqrrzZXGjFz7e9QhDNncI1IOacf_rnxEwpZTO9AG0Yg-XPWUveAhzb-Nl8T-Z0KGBhJtjlInyeDB8kX6YjDnOBCQrrG_diN7HmTOLzTSSwTDVf1ldOzxiO2L73BVOVgA")',
                }}
              ></div>
              <div className="hidden md:flex flex-col">
                <span className="text-sm font-semibold text-[#111318] dark:text-white">
                  Mert Yılmaz
                </span>
                <span className="text-xs text-[#616f89]">Süper Admin</span>
              </div>
              <span className="material-symbols-outlined text-[#616f89]">
                expand_more
              </span>
            </div>
          </div>
        </header>

        {children}
      </div>
    </div>
  );
}
