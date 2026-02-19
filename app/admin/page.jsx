'use client';

import { useState } from 'react';
import CustomSelect from '@/components/CustomSelect';
import { useSession } from 'next-auth/react';

export default function AdminDashboard() {
  const { data: session } = useSession();
  const [dateRange, setDateRange] = useState('Son 30 Gün');
  const [department, setDepartment] = useState('Tüm Bölümler');
  const [activityType, setActivityType] = useState('Tüm Aktiviteler');

  const dateOptions = ['Son 7 Gün', 'Son 30 Gün', 'Bu Ay', 'Bu Yıl'];
  const departmentOptions = [
    'Tüm Bölümler',
    'Mühendislik',
    'İktisadi İdari Bilimler',
    'Hukuk',
    'Mimarlık',
  ];
  const activityOptions = ['Tüm Aktiviteler', /* 'Forum', */ 'Etkinlik', 'Ödül'];

  return (
    <main className="flex-1 overflow-y-auto p-8 scroll-smooth text-gray-900 dark:text-white">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
        <div className="flex flex-wrap justify-between items-end gap-3">
          <div className="flex flex-col gap-1">
            <h2 className="text-[#111318] dark:text-white tracking-tight text-[28px] font-bold leading-tight">
              Hoşgeldin, {session?.user?.name?.split(' ')[0] || 'Kullanıcı'} 👋
            </h2>
            <p className="text-[#616f89] dark:text-gray-400 text-sm font-normal">
              Sistemin genel performansı ve detaylı analiz raporları aşağıdadır.
            </p>
          </div>
          <div className="flex gap-2">
            <button className="bg-white dark:bg-[#1a202c] border border-[#dbdfe6] dark:border-[#2d3748] hover:bg-[#f0f2f4] dark:hover:bg-[#2d3748] text-[#111318] dark:text-white text-sm font-medium py-2 px-4 rounded-lg flex items-center gap-2 transition-colors">
              <span className="material-symbols-outlined text-[18px]">
                download
              </span>
              Rapor İndir (PDF)
            </button>
            <button className="bg-primary hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg flex items-center gap-2 transition-colors shadow-sm shadow-blue-500/30">
              <span className="material-symbols-outlined text-[18px]">add</span>
              Yeni Duyuru
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-[#1a202c] rounded-xl border border-[#e5e7eb] dark:border-[#2d3748] p-4 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-3 w-full md:w-auto">
            <div className="w-40">
              <CustomSelect
                options={dateOptions}
                value={dateRange}
                onChange={setDateRange}
              />
            </div>
            <div className="w-48">
              <CustomSelect
                options={departmentOptions}
                value={department}
                onChange={setDepartment}
              />
            </div>
            <div className="w-48">
              <CustomSelect
                options={activityOptions}
                value={activityType}
                onChange={setActivityType}
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#616f89] dark:text-gray-400 hidden sm:block">
              Son güncelleme: Bugün 09:41
            </span>
            <button className="text-primary hover:bg-blue-50 dark:hover:bg-blue-900/20 p-2 rounded-full transition-colors">
              <span className="material-symbols-outlined text-[20px]">
                refresh
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col gap-4 rounded-xl p-5 bg-white dark:bg-[#1a202c] border border-[#e5e7eb] dark:border-[#2d3748] shadow-sm">
            <div className="flex justify-between items-start">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-2.5 rounded-lg text-primary">
                <span className="material-symbols-outlined">group</span>
              </div>
              <span className="flex items-center text-[#07883b] bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded text-xs font-semibold">
                +5%
              </span>
            </div>
            <div>
              <p className="text-[#616f89] dark:text-gray-400 text-sm font-medium">
                Toplam Öğrenci
              </p>
              <h3 className="text-[#111318] dark:text-white text-2xl font-bold mt-1">
                12,450
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-xl p-5 bg-white dark:bg-[#1a202c] border border-[#e5e7eb] dark:border-[#2d3748] shadow-sm">
            <div className="flex justify-between items-start">
              <div className="bg-orange-50 dark:bg-orange-900/20 p-2.5 rounded-lg text-orange-600">
                <span className="material-symbols-outlined">
                  calendar_clock
                </span>
              </div>
              <span className="flex items-center text-[#111318] dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs font-semibold">
                Beklemede
              </span>
            </div>
            <div>
              <p className="text-[#616f89] dark:text-gray-400 text-sm font-medium">
                Etkinlik Onayı
              </p>
              <h3 className="text-[#111318] dark:text-white text-2xl font-bold mt-1">
                8
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-xl p-5 bg-white dark:bg-[#1a202c] border border-[#e5e7eb] dark:border-[#2d3748] shadow-sm">
            <div className="flex justify-between items-start">
              <div className="bg-red-50 dark:bg-red-900/20 p-2.5 rounded-lg text-red-600">
                <span className="material-symbols-outlined">
                  report_problem
                </span>
              </div>
              <span className="flex items-center text-red-600 bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded text-xs font-semibold">
                +2
              </span>
            </div>
            <div>
              <p className="text-[#616f89] dark:text-gray-400 text-sm font-medium">
                Bildirilen İçerik
              </p>
              <h3 className="text-[#111318] dark:text-white text-2xl font-bold mt-1">
                14
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-xl p-5 bg-white dark:bg-[#1a202c] border border-[#e5e7eb] dark:border-[#2d3748] shadow-sm">
            <div className="flex justify-between items-start">
              <div className="bg-purple-50 dark:bg-purple-900/20 p-2.5 rounded-lg text-purple-600">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <span className="flex items-center text-[#07883b] bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded text-xs font-semibold">
                +12%
              </span>
            </div>
            <div>
              <p className="text-[#616f89] dark:text-gray-400 text-sm font-medium">
                Günlük Aktiflik
              </p>
              <h3 className="text-[#111318] dark:text-white text-2xl font-bold mt-1">
                %65
              </h3>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-[#1a202c] rounded-xl border border-[#e5e7eb] dark:border-[#2d3748] p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-[#111318] dark:text-white text-lg font-bold">
                  Kullanıcı Artışı
                </h3>
                <p className="text-[#616f89] dark:text-gray-400 text-sm">
                  Son 30 gün verileri
                </p>
              </div>
              <div className="text-[#07883b] text-sm font-semibold flex items-center bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded">
                <span className="material-symbols-outlined text-[16px] mr-1">
                  arrow_upward
                </span>
                +1,200
              </div>
            </div>
            <div className="h-[200px] w-full">
              <svg
                className="w-full h-full"
                preserveAspectRatio="none"
                viewBox="0 0 400 150"
              >
                <defs>
                  <linearGradient
                    id="chartGradient"
                    x1="0"
                    x2="0"
                    y1="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#135bec"
                      stopOpacity="0.2"
                    ></stop>
                    <stop
                      offset="100%"
                      stopColor="#135bec"
                      stopOpacity="0"
                    ></stop>
                  </linearGradient>
                </defs>
                <path
                  d="M0 120 C 50 120, 50 80, 100 80 C 150 80, 150 100, 200 60 C 250 20, 250 60, 300 40 C 350 20, 350 10, 400 10 L 400 150 L 0 150 Z"
                  fill="url(#chartGradient)"
                ></path>
                <path
                  d="M0 120 C 50 120, 50 80, 100 80 C 150 80, 150 100, 200 60 C 250 20, 250 60, 300 40 C 350 20, 350 10, 400 10"
                  fill="none"
                  stroke="#135bec"
                  strokeLinecap="round"
                  strokeWidth="3"
                ></path>
              </svg>
            </div>
            <div className="flex justify-between mt-4 text-xs text-[#616f89] font-medium uppercase">
              <span>Hafta 1</span>
              <span>Hafta 2</span>
              <span>Hafta 3</span>
              <span>Hafta 4</span>
            </div>
          </div>
          <div className="bg-white dark:bg-[#1a202c] rounded-xl border border-[#e5e7eb] dark:border-[#2d3748] p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-[#111318] dark:text-white text-lg font-bold">
                  Etkinlik Katılımı
                </h3>
                <p className="text-[#616f89] dark:text-gray-400 text-sm">
                  Haftalık dağılım
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-primary"></span>
                <span className="text-xs text-[#616f89]">Katılımcı</span>
              </div>
            </div>
            <div className="h-[200px] w-full flex items-end justify-between px-2 gap-4">
              <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-t-sm relative group h-[40%]">
                <div className="absolute bottom-0 w-full bg-primary/80 group-hover:bg-primary transition-all rounded-t-sm h-full"></div>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-t-sm relative group h-[65%]">
                <div className="absolute bottom-0 w-full bg-primary/80 group-hover:bg-primary transition-all rounded-t-sm h-full"></div>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-t-sm relative group h-[45%]">
                <div className="absolute bottom-0 w-full bg-primary/80 group-hover:bg-primary transition-all rounded-t-sm h-full"></div>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-t-sm relative group h-[90%]">
                <div className="absolute bottom-0 w-full bg-primary/80 group-hover:bg-primary transition-all rounded-t-sm h-full"></div>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-t-sm relative group h-[75%]">
                <div className="absolute bottom-0 w-full bg-primary/80 group-hover:bg-primary transition-all rounded-t-sm h-full"></div>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-t-sm relative group h-[30%]">
                <div className="absolute bottom-0 w-full bg-primary/80 group-hover:bg-primary transition-all rounded-t-sm h-full"></div>
              </div>
              <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-t-sm relative group h-[20%]">
                <div className="absolute bottom-0 w-full bg-primary/80 group-hover:bg-primary transition-all rounded-t-sm h-full"></div>
              </div>
            </div>
            <div className="flex justify-between mt-4 text-xs text-[#616f89] font-medium uppercase px-1">
              <span>Pzt</span>
              <span>Sal</span>
              <span>Çar</span>
              <span>Per</span>
              <span>Cum</span>
              <span>Cmt</span>
              <span>Paz</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* <div className="lg:col-span-2 bg-white dark:bg-[#1a202c] rounded-xl border border-[#e5e7eb] dark:border-[#2d3748] p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-[#111318] dark:text-white text-lg font-bold">
                  Forum Etkileşimi
                </h3>
                <p className="text-[#616f89] dark:text-gray-400 text-sm">
                  Gönderi ve yorum yoğunluğu
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="size-3 rounded-full bg-primary"></span>
                  <span className="text-xs text-[#616f89]">Gönderiler</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="size-3 rounded-full bg-purple-500"></span>
                  <span className="text-xs text-[#616f89]">Yorumlar</span>
                </div>
              </div>
            </div>
            <div className="h-[200px] w-full">
              <svg
                className="w-full h-full"
                preserveAspectRatio="none"
                viewBox="0 0 600 200"
              >
                <line
                  className="dark:stroke-gray-700"
                  stroke="#e5e7eb"
                  strokeDasharray="4 4"
                  strokeWidth="1"
                  x1="0"
                  x2="600"
                  y1="40"
                  y2="40"
                ></line>
                <line
                  className="dark:stroke-gray-700"
                  stroke="#e5e7eb"
                  strokeDasharray="4 4"
                  strokeWidth="1"
                  x1="0"
                  x2="600"
                  y1="80"
                  y2="80"
                ></line>
                <line
                  className="dark:stroke-gray-700"
                  stroke="#e5e7eb"
                  strokeDasharray="4 4"
                  strokeWidth="1"
                  x1="0"
                  x2="600"
                  y1="120"
                  y2="120"
                ></line>
                <line
                  className="dark:stroke-gray-700"
                  stroke="#e5e7eb"
                  strokeDasharray="4 4"
                  strokeWidth="1"
                  x1="0"
                  x2="600"
                  y1="160"
                  y2="160"
                ></line>
                <path
                  d="M0 150 C 50 140, 100 100, 150 110 C 200 120, 250 80, 300 60 C 350 40, 400 90, 450 70 C 500 50, 550 60, 600 40"
                  fill="none"
                  stroke="#135bec"
                  strokeLinecap="round"
                  strokeWidth="3"
                ></path>
                <path
                  d="M0 170 C 50 160, 100 140, 150 145 C 200 150, 250 110, 300 100 C 350 90, 400 120, 450 100 C 500 80, 550 90, 600 70"
                  fill="none"
                  stroke="#a855f7"
                  strokeLinecap="round"
                  strokeWidth="3"
                ></path>
              </svg>
            </div>
          </div> */}
          <div className="bg-white dark:bg-[#1a202c] rounded-xl border border-[#e5e7eb] dark:border-[#2d3748] p-6 shadow-sm flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[#111318] dark:text-white text-lg font-bold">
                Ödül Dağılımı
              </h3>
              <button className="text-primary text-sm font-medium hover:underline">
                Detaylar
              </button>
            </div>
            <div className="flex flex-col gap-5 flex-1 justify-center">
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="font-semibold text-[#111318] dark:text-white">
                    Bronz Üye
                  </span>
                  <span className="text-[#616f89]">45%</span>
                </div>
                <div className="w-full bg-[#f0f2f4] dark:bg-gray-800 rounded-full h-2">
                  <div
                    className="bg-orange-400 h-2 rounded-full"
                    style={{ width: '45%' }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="font-semibold text-[#111318] dark:text-white">
                    Gümüş Üye
                  </span>
                  <span className="text-[#616f89]">30%</span>
                </div>
                <div className="w-full bg-[#f0f2f4] dark:bg-gray-800 rounded-full h-2">
                  <div
                    className="bg-gray-400 h-2 rounded-full"
                    style={{ width: '30%' }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="font-semibold text-[#111318] dark:text-white">
                    Altın Üye
                  </span>
                  <span className="text-[#616f89]">15%</span>
                </div>
                <div className="w-full bg-[#f0f2f4] dark:bg-gray-800 rounded-full h-2">
                  <div
                    className="bg-yellow-400 h-2 rounded-full"
                    style={{ width: '15%' }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="font-semibold text-[#111318] dark:text-white">
                    Platin Lider
                  </span>
                  <span className="text-[#616f89]">10%</span>
                </div>
                <div className="w-full bg-[#f0f2f4] dark:bg-gray-800 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: '10%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-[#1a202c] rounded-xl border border-[#e5e7eb] dark:border-[#2d3748] shadow-sm flex flex-col mb-8">
          <div className="p-6 border-b border-[#e5e7eb] dark:border-[#2d3748] flex flex-wrap gap-4 justify-between items-center">
            <div>
              <h3 className="text-[#111318] dark:text-white text-lg font-bold">
                Detaylı Faaliyet Raporu
              </h3>
              <p className="text-[#616f89] dark:text-gray-400 text-xs mt-1">
                Sistem üzerindeki tüm kullanıcı aktivitelerinin detaylı listesi.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 border border-[#dbdfe6] dark:border-[#2d3748] rounded-lg text-xs font-medium text-[#111318] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-1 transition-colors">
                <span className="material-symbols-outlined text-[16px]">
                  filter_alt
                </span>{' '}
                Filtrele
              </button>
              <button className="px-3 py-1.5 border border-[#dbdfe6] dark:border-[#2d3748] rounded-lg text-xs font-medium text-[#111318] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-1 transition-colors">
                <span className="material-symbols-outlined text-[16px]">
                  download
                </span>{' '}
                Excel
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#f8fafc] dark:bg-[#2d3748]/50 border-b border-[#e5e7eb] dark:border-[#2d3748]">
                  <th className="px-6 py-4 text-xs font-semibold text-[#616f89] dark:text-gray-400 uppercase tracking-wider">
                    Kullanıcı
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#616f89] dark:text-gray-400 uppercase tracking-wider">
                    Aktivite Tipi
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#616f89] dark:text-gray-400 uppercase tracking-wider">
                    Detay
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#616f89] dark:text-gray-400 uppercase tracking-wider">
                    Tarih
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#616f89] dark:text-gray-400 uppercase tracking-wider">
                    Durum
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#616f89] dark:text-gray-400 uppercase tracking-wider text-right">
                    Etki
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e5e7eb] dark:divide-[#2d3748]">
                <tr className="hover:bg-background-light dark:hover:bg-gray-800/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div
                        className="bg-gray-200 size-8 rounded-full bg-cover"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDc1foDH1oFwPCW4CVwiruf_y3nktHtrOU6WWQJT9WeJW7XuCkWZp3JBQC19HaKIzqoV10CvxsZO3O19UeUgfOA4jltWk-TbPPGqw6joOMix5uzAN4_ezuQPQB_HmnpnLxj0jYyRvPR8cQ8tv0ZHnGDILyxC5mKj0gGDj2jCm9YUbOtOr6IdYybRbPWuIQh3ANwH4r4eEebyNv_hhGBL2by8OjAhsQrPbz-Woxv-8gN3p-GFg3f5p_iT__kkgzqd6Dsdz5ZZuoyFPI")',
                        }}
                      ></div>
                      <span className="text-sm font-medium text-[#111318] dark:text-white">
                        Ayşe Demir
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                      <span className="size-1.5 rounded-full bg-blue-500"></span>
                      Forum Postu
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-[#616f89] dark:text-gray-300 max-w-[200px] truncate">
                    &quot;Kampüs kütüphanesi çalışma saatleri hakkında...&quot;
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#616f89] dark:text-gray-400">
                    Bugün, 09:30
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300 border border-green-200 dark:border-green-900">
                      Onaylandı
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right font-medium text-[#111318] dark:text-white text-sm">
                    +15 Puan
                  </td>
                </tr>
                <tr className="hover:bg-background-light dark:hover:bg-gray-800/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div
                        className="bg-gray-200 size-8 rounded-full bg-cover"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBKevsPmYkmtveANiQBL6-Ppev31nGdTyuPHepbl17QaPSWQ2G0iwpgGnx6ZFFbrp7bJWNa4u8bZR3Kb0X5LzEKb3plxZiFKfMqmIkiE6tJNTJNs3_ybL2PO_dIs8z7DYU02OZi-aUaCWdO5nI9wbY2pLw4I4Pzswj0LIbVOyZzXAwV8wNLpm5xvWqE65HGIHOzNY3OICHk5njgE12fcPxD8eic0okr3arbiwRc6BCo3hMySqFKNnXHojG7K_3F-YvYpwOzBw4LTCM")',
                        }}
                      ></div>
                      <span className="text-sm font-medium text-[#111318] dark:text-white">
                        Mehmet Can
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
                      <span className="size-1.5 rounded-full bg-orange-500"></span>
                      Etkinlik Kaydı
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-[#616f89] dark:text-gray-300 max-w-[200px] truncate">
                    Bahar Şenliği 2024 - Bilet Alımı
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#616f89] dark:text-gray-400">
                    Dün, 14:20
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                      Beklemede
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right font-medium text-[#111318] dark:text-white text-sm">
                    -
                  </td>
                </tr>
                <tr className="hover:bg-background-light dark:hover:bg-gray-800/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div
                        className="bg-gray-200 size-8 rounded-full bg-cover"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDWtmrHHdD_TSq7X2Hqdh1hcfig9sNYr3RJ-8lezWWTnqK4jo0EgWx5cgfZfsgHLyp9scG-hE_cZ5kVzVAhPlYmMWjSCzNDzKCFu1MhJrdjk-lkxUIv4vpUBXKOY3VGub1js1dmMA6whHsSrgV22GymUGzbaipZZ00gdvdCHpw9ISSMydMCdIp2ci1dmyW6Msge5XvcyM68rXQA9fAHgREYfRgKW0k6mbFftWTnGUYQcuH07PA44uA8gXvoYyU0cVS3e2q2cs-RRiA")',
                        }}
                      ></div>
                      <span className="text-sm font-medium text-[#111318] dark:text-white">
                        Zeynep Yılmaz
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300">
                      <span className="size-1.5 rounded-full bg-red-500"></span>
                      Raporlama
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-[#616f89] dark:text-gray-300 max-w-[200px] truncate">
                    Kullanıcı şikayeti: &quot;Spam içerik...&quot;
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#616f89] dark:text-gray-400">
                    12 Mayıs, 18:45
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300 border border-red-200 dark:border-red-900">
                      İnceleniyor
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right font-medium text-[#111318] dark:text-white text-sm">
                    0
                  </td>
                </tr>
                <tr className="hover:bg-background-light dark:hover:bg-gray-800/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div
                        className="bg-gray-200 size-8 rounded-full bg-cover"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC1NN0OEd7Rg-qsi1zWmufBQWLSjb7x2Mvhz_xonCMjPdmcnmkXfnHAxzoVsngOalW_e5RiORRJDlttl7fJlw9M0jqSktnOA2g7VxQQvWOCHakAFSoCEJkbsUpDSjj0MzXFasUvsME1d4Y1wRjEiGtQUUbUpxLTSwNZcM0xiRpdD93Vwp2VXiNV45VoAErJV08UT7YmP4Zur-MgKYrl6aejFtDbIrxsX1eJUW09wBbkIkAt9sQ9mMDLz61rMwnVIgEQuDpSYpDAuqM")',
                        }}
                      ></div>
                      <span className="text-sm font-medium text-[#111318] dark:text-white">
                        Burak Şen
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                      <span className="size-1.5 rounded-full bg-purple-500"></span>
                      Rozet Kazanımı
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-[#616f89] dark:text-gray-300 max-w-[200px] truncate">
                    &quot;Topluluk Lideri&quot; rozeti kazanıldı.
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#616f89] dark:text-gray-400">
                    11 Mayıs, 09:12
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300 border border-green-200 dark:border-green-900">
                      Tamamlandı
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right font-medium text-[#111318] dark:text-white text-sm">
                    +50 Puan
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-[#e5e7eb] dark:border-[#2d3748] flex items-center justify-between">
            <span className="text-sm text-[#616f89] dark:text-gray-400">
              Toplam 248 kayıt gösteriliyor
            </span>
            <div className="flex gap-2">
              <button className="px-3 py-1 border border-[#e5e7eb] dark:border-[#2d3748] rounded hover:bg-[#f0f2f4] dark:hover:bg-gray-800 text-[#616f89] dark:text-gray-400 disabled:opacity-50">
                Önceki
              </button>
              <button className="px-3 py-1 bg-primary text-white rounded hover:bg-blue-700">
                1
              </button>
              <button className="px-3 py-1 border border-[#e5e7eb] dark:border-[#2d3748] rounded hover:bg-[#f0f2f4] dark:hover:bg-gray-800 text-[#616f89] dark:text-gray-400">
                2
              </button>
              <button className="px-3 py-1 border border-[#e5e7eb] dark:border-[#2d3748] rounded hover:bg-[#f0f2f4] dark:hover:bg-gray-800 text-[#616f89] dark:text-gray-400">
                3
              </button>
              <button className="px-3 py-1 border border-[#e5e7eb] dark:border-[#2d3748] rounded hover:bg-[#f0f2f4] dark:hover:bg-gray-800 text-[#616f89] dark:text-gray-400">
                Sonraki
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
