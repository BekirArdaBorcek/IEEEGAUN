export default function UserDashboardPage() {
  return (
    <div className="p-6 md:p-8">
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row gap-8">
        <div className="flex-1 flex flex-col gap-8 min-w-0">
          {/* Hero Section */}
          <section className="relative rounded-2xl overflow-hidden bg-white dark:bg-card-dark border border-slate-200 dark:border-card-border shadow-xl">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary rounded-full blur-[100px] opacity-20"></div>
            <div className="relative p-8 flex flex-col md:flex-row items-center md:items-start gap-8 z-10">
              <div className="relative size-40 shrink-0">
                <svg className="size-full -rotate-90" viewBox="0 0 100 100">
                  <circle
                    className="text-slate-100 dark:text-slate-800"
                    cx="50"
                    cy="50"
                    fill="transparent"
                    r="42"
                    stroke="currentColor"
                    strokeWidth="8"
                  ></circle>
                  <circle
                    className="text-primary"
                    cx="50"
                    cy="50"
                    fill="transparent"
                    r="42"
                    stroke="currentColor"
                    strokeDasharray="263.89"
                    strokeDashoffset="60"
                    strokeLinecap="round"
                    strokeWidth="8"
                  ></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-black text-slate-800 dark:text-white">
                    12
                  </span>
                  <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-medium">
                    Seviye
                  </span>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2">
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                    Kampüs Efsanesi
                  </h2>
                  <span className="px-3 py-1 rounded-full bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 text-xs font-bold border border-yellow-200 dark:border-yellow-700/50">
                    Senior Üye
                  </span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 mb-6 max-w-lg">
                  Harika gidiyorsun! Bir sonraki 'Akademik Lider' seviyesine
                  ulaşmak için sadece 550 XP daha kazanman gerekiyor.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
                      <span>İlerleme</span>
                      <span className="text-slate-800 dark:text-slate-200">
                        2450 / 3000 XP
                      </span>
                    </div>
                    <div className="h-2 w-full sm:w-64 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: '82%' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-card-dark p-4 rounded-xl border border-slate-200 dark:border-card-border shadow-sm flex flex-col">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider mb-1">
                Sıralama
              </span>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold text-slate-900 dark:text-white">
                  #42
                </span>
                <span className="text-xs font-bold text-emerald-500 mb-1 flex items-center">
                  <span className="material-symbols-outlined text-[14px]">
                    arrow_upward
                  </span>{' '}
                  3
                </span>
              </div>
            </div>
            <div className="bg-white dark:bg-card-dark p-4 rounded-xl border border-slate-200 dark:border-card-border shadow-sm flex flex-col">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider mb-1">
                Toplam XP
              </span>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold text-slate-900 dark:text-white">
                  2.4k
                </span>
                <span className="text-xs font-bold text-emerald-500 mb-1">
                  +150
                </span>
              </div>
            </div>
            <div className="bg-white dark:bg-card-dark p-4 rounded-xl border border-slate-200 dark:border-card-border shadow-sm flex flex-col">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider mb-1">
                Görevler
              </span>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold text-slate-900 dark:text-white">
                  15
                </span>
                <span className="text-xs text-slate-400 mb-1">Tamamlandı</span>
              </div>
            </div>
            <div className="bg-white dark:bg-card-dark p-4 rounded-xl border border-slate-200 dark:border-card-border shadow-sm flex flex-col">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider mb-1">
                Rozetler
              </span>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold text-slate-900 dark:text-white">
                  8
                </span>
                <span className="text-xs text-slate-400 mb-1">Kazanıldı</span>
              </div>
            </div>
          </div>

          {/* Rewards Marketplace */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Ödül Marketi
              </h3>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-primary text-white">
                  Tümü
                </button>
                <button className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-card-dark text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-card-border">
                  Kilidi Açık
                </button>
                <button className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-card-dark text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-card-border">
                  Yakında
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Reward Card 1 */}
              <div className="group bg-white dark:bg-card-dark rounded-2xl border border-slate-200 dark:border-card-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBgF_b8KfkQvxcjfPXxNNwu8bIeSJqq4YUIS02YeZxzaFA7OHEWy1pHUBTOTaEX47Z-CvmmlPusLNFm5t5-JJzE8bXbxuvDUGSh9g_QRjZoLnwk5lOqMNbuuxYkA3AnYwmEotiQnZs2WwcLY-VUwWJPY7A0Bb3vd-CDHPJLY6MT6FKS-IGQFmeXzbBUavs9foCNTOfr-hNJ7p_M5hN_FlBmBI57l-qR-US87gE37f6ztEuIs2MQEy3bXrZ74iJrvWZNLF_LsbIgQq4")',
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-rose-500 shadow-sm border border-rose-100">
                      <span className="material-symbols-outlined text-[14px]">
                        redeem
                      </span>{' '}
                      Hediye
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 text-white">
                    <p className="text-xs font-medium text-slate-200 mb-0.5 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">
                        storefront
                      </span>{' '}
                      Kampüs Kafe
                    </p>
                    <h4 className="font-bold text-lg leading-tight">
                      Ücretsiz Kahve
                    </h4>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-5 line-clamp-2">
                    Final haftasında enerjiye mi ihtiyacın var? Öğrenci
                    kimliğinle bir kahve bizden.
                  </p>
                  <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                        Değer
                      </span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white">
                        ₺85.00
                      </span>
                    </div>
                    <button className="px-5 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-semibold hover:bg-primary dark:hover:bg-primary transition-colors shadow-lg shadow-slate-200 dark:shadow-none">
                      Talep Et
                    </button>
                  </div>
                </div>
              </div>

              {/* Reward Card 2 */}
              <div className="group bg-white dark:bg-card-dark rounded-2xl border border-slate-200 dark:border-card-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC99nulmCrQCx2qjIGcFEeDoKzb4De-HIg7bbO5jxJn1qaWiHB0DsUQ-pv49qWD_fckyrfr7_dke2H7m9bQYnf2RUv4d7Sb6Q5IAW9WmEEtOP_JvDUfVmTnhzBOuUeoctg-s3n_XI8Q9U3ataNLv9KCoU4DeyYwB4PxggARlAclt7EArO1YK9PjX9cF7RlxAytOkD1T2QUXQEV_5KfR0OLqkAzmkrFQ_XSZmY2roppLd1u_P5VSuMRTWsSLXht_FkTR250rbYujV8k")',
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-amber-500 shadow-sm border border-amber-100">
                      <span className="material-symbols-outlined text-[14px]">
                        percent
                      </span>{' '}
                      İndirim
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 text-white">
                    <p className="text-xs font-medium text-slate-200 mb-0.5 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">
                        menu_book
                      </span>{' '}
                      Kitap Yurdu
                    </p>
                    <h4 className="font-bold text-lg leading-tight">
                      %20 Kitap İndirimi
                    </h4>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-5 line-clamp-2">
                    Tüm ders kitaplarında ve kırtasiye ürünlerinde geçerli özel
                    indirim kodu.
                  </p>
                  <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                        Bitiş
                      </span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white">
                        3 Gün
                      </span>
                    </div>
                    <button className="px-5 py-2 rounded-xl bg-white dark:bg-transparent border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm font-semibold hover:border-primary hover:text-primary transition-colors">
                      Kodu Al
                    </button>
                  </div>
                </div>
              </div>

              {/* Reward Card 3 (Locked) */}
              <div className="group relative bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-card-border overflow-hidden flex flex-col opacity-90 hover:opacity-100 transition-opacity">
                <div className="absolute inset-0 bg-white/60 dark:bg-black/60 backdrop-blur-[2px] z-20 flex flex-col items-center justify-center transition-all group-hover:backdrop-blur-none group-hover:bg-white/40 dark:group-hover:bg-black/40">
                  <div className="bg-white dark:bg-card-dark p-3 rounded-2xl mb-3 shadow-lg border border-slate-100 dark:border-card-border transform group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-slate-400 text-2xl">
                      lock
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 text-xs font-bold shadow-md">
                    Seviye 15 Gerekli
                  </span>
                </div>
                <div className="relative h-48 overflow-hidden grayscale opacity-70">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB5hZKupeX3v4flZ1EjuAYRxsDxWnSJDBhQFYRjcDfPZkj_gaqW4QvDNa18_oULCDU5QqphCVvCCs1nhlVv-xMzmffMLtaOi_U4cmDf0YMPrqYkxjirn6iqH98oHyBBiD2JOiNuN2lCnjapCn8AHfjIinIbYXcGQHNV436NVYYW9gyw9TNZq0t3SPY4aNmeZKtWCdBMUM-Bm93BNTalMI7H4vFr5CmE5x0RCXx_RUucvXJify-TX1Tc73PfrxxrsxICYc5uY2Mta-g")',
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-emerald-600 shadow-sm border border-emerald-100">
                      <span className="material-symbols-outlined text-[14px]">
                        subscriptions
                      </span>{' '}
                      Abonelik
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 text-white">
                    <p className="text-xs font-medium text-slate-200 mb-0.5 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">
                        headphones
                      </span>{' '}
                      Spotify
                    </p>
                    <h4 className="font-bold text-lg leading-tight">
                      Premium Müzik
                    </h4>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1 grayscale opacity-60">
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-5 line-clamp-2">
                    Reklamsız müzik keyfi için 1 aylık premium üyelik hediye.
                  </p>
                  <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                        Değer
                      </span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white">
                        ₺39.99
                      </span>
                    </div>
                    <button
                      className="px-5 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-400 text-sm font-semibold cursor-not-allowed"
                      disabled
                    >
                      Kilitli
                    </button>
                  </div>
                </div>
              </div>

              {/* Reward Card 4 (Locked) */}
              <div className="group relative bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-card-border overflow-hidden flex flex-col opacity-90 hover:opacity-100 transition-opacity">
                <div className="absolute inset-0 bg-white/60 dark:bg-black/60 backdrop-blur-[2px] z-20 flex flex-col items-center justify-center transition-all group-hover:backdrop-blur-none group-hover:bg-white/40 dark:group-hover:bg-black/40">
                  <div className="bg-white dark:bg-card-dark p-3 rounded-2xl mb-3 shadow-lg border border-slate-100 dark:border-card-border transform group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-slate-400 text-2xl">
                      lock
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 text-xs font-bold shadow-md">
                    Seviye 20 Gerekli
                  </span>
                </div>
                <div className="relative h-48 overflow-hidden grayscale opacity-70">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAYXQocqEY-761YRiZNzJjsjfsPUMI-xUgtpNe3EcFlroGdROgNLd4_P43uO4sBr0qpVvETQ_C2v9JYRar1-mb1viKj-eZMU21O7Q7jcXQxmeFmKptlxXXPlRdR3Dw7i3e7rF18KoQpUwXjdR2TH2DGPHHwVmhubwifU_7ZV9e3rZeClHIcgC5SdM1twMfKDODjwUcUzMy-7lFGTRrKZBPH9wTCwv_L-Lzc3LYv7xbbtM9ietAscLtwuJHeeA1BltTmitlHmjviFUw")',
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-indigo-600 shadow-sm border border-indigo-100">
                      <span className="material-symbols-outlined text-[14px]">
                        school
                      </span>{' '}
                      Erişim
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 text-white">
                    <p className="text-xs font-medium text-slate-200 mb-0.5 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">
                        diversity_3
                      </span>{' '}
                      Mezunlar Der.
                    </p>
                    <h4 className="font-bold text-lg leading-tight">
                      Kariyer Mentörlüğü
                    </h4>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1 grayscale opacity-60">
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-5 line-clamp-2">
                    Sektör liderlerinden birebir kariyer danışmanlığı ve network
                    fırsatı.
                  </p>
                  <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                        Kontenjan
                      </span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white">
                        5 Kişi
                      </span>
                    </div>
                    <button
                      className="px-5 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-400 text-sm font-semibold cursor-not-allowed"
                      disabled
                    >
                      Kilitli
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Sidebar */}
        <div className="xl:w-80 shrink-0 flex flex-col gap-6">
          <div className="bg-white dark:bg-card-dark rounded-xl border border-slate-200 dark:border-card-border overflow-hidden shadow-sm">
            <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/50">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-yellow-500">
                  emoji_events
                </span>
                Haftanın Liderleri
              </h3>
              <a
                className="text-xs text-primary hover:text-blue-400 font-medium"
                href="#"
              >
                Tümü
              </a>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-3 p-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors border-b border-slate-100 dark:border-slate-800 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-400"></div>
                <div className="text-lg font-bold text-yellow-500 w-6 text-center">
                  1
                </div>
                <div className="relative">
                  <div
                    className="size-10 rounded-full bg-cover bg-center border-2 border-yellow-400"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBz8rMwEY_oXGr2q2nNcU58euxB_fXnxSljC_ncMl9cahIr3rnbR1HIcTBofrrvbraBArr3j1cL_vnJgUxt2BL4XWsz4O7zRI7WH0s6gPl-xpX-4-3zZT2J3o5XPfRPEe_soosaqEX0iAM-JAAkmxSWeb45IZZCApFAVTnpvjbofvs6csrG3Amin-_MwIeHBbRHggnHvX7J8AgSyGJuGe_Lh684SEwgGq6Ddd8jFof7yuAolqzxYr3D3RoUzCiePh_QFo1NKKIoYhM")',
                    }}
                  ></div>
                  <span className="absolute -bottom-1 -right-1 bg-yellow-400 text-[10px] text-white px-1 rounded font-bold">
                    XP
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-900 dark:text-white truncate">
                    Ayşe Demir
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                    Mimarlık
                  </p>
                </div>
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  3.2k
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors border-b border-slate-100 dark:border-slate-800 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-300"></div>
                <div className="text-lg font-bold text-slate-400 w-6 text-center">
                  2
                </div>
                <div
                  className="size-10 rounded-full bg-cover bg-center border-2 border-slate-300"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBHDALcadVtImM82LCqIs0mc7T-YQM6vo1oylAgw-NjlZXLat4IHE7PWhFh96c7Z515Njtfy5WDrSmQX56WPW1ItyPShtZxBc6uh2x_Z4V2cc0btZigRAmBOmsDEPQZGbfsKsAh2JuiJ2MsJoosLQ74VbK3EzTryWrUO8FCPb8yYzhWWn_DuUiTXP8CDeLw-4okCtcu-nZGnqDq-97r0uxTlFwpaUwPxqZYk_RQbZrGBIt70GXA5v_cAz-jAL7F1kKUcS9ahcw5az4")',
                  }}
                ></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-900 dark:text-white truncate">
                    Mehmet Kaya
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                    Hukuk
                  </p>
                </div>
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  2.9k
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors border-b border-slate-100 dark:border-slate-800 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-700"></div>
                <div className="text-lg font-bold text-amber-700 w-6 text-center">
                  3
                </div>
                <div
                  className="size-10 rounded-full bg-cover bg-center border-2 border-amber-700"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAQUUn2Hqn02LVxerit2o9AcyK9eG9tLph1bXDQB2RZqruGaoZY-YBLUPxcEs-6iwrVYOm2elsgpjoaPrzqAG0dIGC_JgWAJllp-i1G5cdxLb0579NeVvnKyEElBtsAhon-a4Po7bCpg0FMGf7UXuALmUVd71YljkLeitHf-ombtORTqW7PuwfOR_5-6yVDU6pdRbwvT1Y0bBkkqAq5CuJn9CZvNoVa6llaQUsjcOMqF76haQiAzZQNP39mUi01IApFnnOamQIlI6Q")',
                  }}
                ></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-900 dark:text-white truncate">
                    Ali Can
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                    İşletme
                  </p>
                </div>
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  2.8k
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-primary/10 transition-colors relative overflow-hidden">
                <div className="text-lg font-bold text-primary w-6 text-center">
                  42
                </div>
                <div
                  className="size-8 rounded-full bg-cover bg-center border border-primary/50"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA9Sl9UgzxGPrMu9v7V4kCFIkCC0PGN-E44Iba1LDuHcjjY866WnNLHQLS1jsAHu1bsLhdbb_zBnZv3Rq6GC7nrdR-WgCO1yy15uT5w-efs-7iy-FqndE-ArRCaQJsL9fvebDDOioC7_bDJoGyw3vQqMVZiTblhn4ON_aouF0fH4rDMgT-kuR3-kfoquUuGw1WHELQSmjm2_OP6etIx7XkBH_bXuvRW7Jw3bxLyKWSqjtjzDMzNQtNwIEvoQib4Hfe4FFnHIHATnhA")',
                  }}
                ></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-900 dark:text-white truncate">
                    Sen
                  </p>
                </div>
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  2.4k
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-card-dark rounded-xl border border-slate-200 dark:border-card-border overflow-hidden p-4 shadow-sm">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4 text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Son Aktiviteler
            </h3>
            <div className="relative pl-4 border-l-2 border-slate-200 dark:border-slate-800 space-y-6">
              <div className="relative">
                <div className="absolute -left-[21px] top-0 size-3 rounded-full bg-emerald-500 border-2 border-white dark:border-card-dark"></div>
                <p className="text-xs text-slate-400 mb-0.5">2 saat önce</p>
                <p className="text-sm text-slate-900 dark:text-white font-medium">
                  Kütüphane Check-in
                </p>
                <p className="text-xs text-emerald-500 font-bold">+50 XP</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[21px] top-0 size-3 rounded-full bg-emerald-500 border-2 border-white dark:border-card-dark"></div>
                <p className="text-xs text-slate-400 mb-0.5">Dün</p>
                <p className="text-sm text-slate-900 dark:text-white font-medium">
                  Kulüp Etkinliğine Katılım
                </p>
                <p className="text-xs text-emerald-500 font-bold">+100 XP</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[21px] top-0 size-3 rounded-full bg-primary border-2 border-white dark:border-card-dark"></div>
                <p className="text-xs text-slate-400 mb-0.5">3 gün önce</p>
                <p className="text-sm text-slate-900 dark:text-white font-medium">
                  "Kitap Kurdu" Rozeti Kazanıldı
                </p>
              </div>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden p-5 flex flex-col items-center text-center gap-3 group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700 transition-transform duration-500 group-hover:scale-110"></div>
            <div className="relative z-10 size-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <span className="material-symbols-outlined text-white text-2xl">
                rocket_launch
              </span>
            </div>
            <div className="relative z-10">
              <h3 className="font-bold text-white text-lg">Premium'a Geç</h3>
              <p className="text-indigo-100 text-xs mt-1">
                XP çarpanı ve özel etkinliklere erişim kazan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
