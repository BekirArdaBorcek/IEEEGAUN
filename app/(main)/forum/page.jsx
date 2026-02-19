export default function ForumPage() {
  return (
    <div className="flex flex-1 py-5 px-4 md:px-6 lg:px-8 gap-6 max-w-[1440px] mx-auto w-full">
      {/* Left Sidebar */}
      <aside className="hidden lg:flex w-[280px] flex-col gap-6 sticky top-24 h-fit">
        <div className="bg-white dark:bg-card-dark rounded-xl p-4 border border-slate-200 dark:border-card-border shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 font-bold"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA4pvEgY1rBCcY6MaX28Q0h_OVKrLg8amPRxJqMZs6KsllpBb8TsmXtFAtGKHtOrWSD6gL_WxaneUkXq_-SPxAwVbuk_t4empvszNymN4eS_NTLbOs1zoJ56lRp4s5wBQZZkJ3sOYiMxR6sQgXJYAqVGlCCDXZ3xqoBQE-NtQn4ESq1TFqBbBm1plbQfn_px6PMolMnSnJxPzLK0fmjXXQPc-92p7TVMsFHEiT0fe0I354mlQ3AmkPuveTnl1QqdB5l9eSQZn_nMP8")',
              }}
            ></div>
            <div className="flex flex-col">
              <h1 className="text-slate-900 dark:text-white text-base font-bold leading-tight">
                Ahmet Yılmaz
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-xs font-normal">
                Bilgisayar Müh. • 3. Sınıf
              </p>
            </div>
          </div>
          <div className="flex justify-between text-center border-t border-slate-200 dark:border-card-border pt-3">
            <div>
              <p className="text-slate-900 dark:text-white font-bold text-sm">
                142
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-xs">
                Gönderi
              </p>
            </div>
            <div>
              <p className="text-slate-900 dark:text-white font-bold text-sm">
                2.4k
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-xs">
                Takipçi
              </p>
            </div>
            <div>
              <p className="text-slate-900 dark:text-white font-bold text-sm">
                540
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-xs">
                Takip
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <button className="flex w-full cursor-pointer items-center justify-center rounded-lg h-12 px-4 bg-primary hover:bg-blue-700 text-white text-sm font-bold leading-normal transition-colors shadow-lg shadow-primary/20 mb-4">
            <span className="material-symbols-outlined mr-2">add</span>
            <span>Gönderi Oluştur</span>
          </button>
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white dark:bg-card-dark text-primary border-l-4 border-primary font-medium shadow-sm"
            href="#"
          >
            <span className="material-symbols-outlined filled">home</span>
            <span className="text-sm">Ana Sayfa</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">menu_book</span>
            <span className="text-sm font-medium">Derslerim</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">local_cafe</span>
            <span className="text-sm font-medium">Kampüs Yaşamı</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">campaign</span>
            <span className="text-sm font-medium">Duyurular</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            href="/chapters"
          >
            <span className="material-symbols-outlined">groups</span>
            <span className="text-sm font-medium">Topluluklar</span>
          </a>
        </div>

        <div className="flex flex-col gap-3 mt-2">
          <h3 className="text-slate-900 dark:text-white text-xs font-bold uppercase tracking-wider px-3">
            Favori Konular
          </h3>
          <a
            className="flex items-center justify-between px-3 py-1.5 rounded-lg group hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            href="#"
          >
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white text-sm font-medium">
                Mühendislik
              </span>
            </div>
          </a>
          <a
            className="flex items-center justify-between px-3 py-1.5 rounded-lg group hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            href="#"
          >
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-purple-500"></span>
              <span className="text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white text-sm font-medium">
                Yazılım Kulübü
              </span>
            </div>
          </a>
          <a
            className="flex items-center justify-between px-3 py-1.5 rounded-lg group hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            href="#"
          >
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white text-sm font-medium">
                İkinci El
              </span>
            </div>
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex flex-col flex-1 min-w-0">
        <div className="lg:hidden mb-6 bg-white dark:bg-card-dark rounded-xl p-4 border border-slate-200 dark:border-card-border shadow-sm">
          <div className="flex gap-3">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBlWG3Qj2HXRsjy8shWAOx60ry9tpcjPdkelLXAbx4ZHvIH3jKKhE0Y9URExmmTDJ0P0eSMdcBssE1TLg74UlrpFXFVfFwYKcpQLfYWrKxxn_4-lBIREAbgHCHQFMUmzz3RTPA09kdsvXqLGzZuAFJuzZqzOfyfbMY6-pdHX960dj3y097vOLL_ycb6YNVVdDihUV4fTEBWf9Nwnucnqj6Xtg82AKCQjk1VSqRxStj2eD9qDiMUqU_enrJW_Cla5mIgSoWSSk310JA")',
              }}
            ></div>
            <input
              className="w-full bg-gray-100 dark:bg-slate-800 border-none rounded-lg px-4 text-sm focus:ring-1 focus:ring-primary placeholder:text-slate-500 dark:placeholder:text-slate-400 text-slate-900 dark:text-white"
              placeholder="Bugün neler oluyor?"
            />
          </div>
        </div>

        <div className="flex border-b border-slate-200 dark:border-card-border mb-6 gap-8 px-2 overflow-x-auto no-scrollbar">
          <a
            className="flex items-center justify-center border-b-[3px] border-primary text-primary pb-3 pt-2 px-2 whitespace-nowrap"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px] mr-2">
              trending_up
            </span>
            <p className="text-sm font-bold leading-normal">Trendler</p>
          </a>
          <a
            className="flex items-center justify-center border-b-[3px] border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors pb-3 pt-2 px-2 whitespace-nowrap"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px] mr-2">
              new_releases
            </span>
            <p className="text-sm font-bold leading-normal">En Yeniler</p>
          </a>
          <a
            className="flex items-center justify-center border-b-[3px] border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors pb-3 pt-2 px-2 whitespace-nowrap"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px] mr-2">
              star
            </span>
            <p className="text-sm font-bold leading-normal">En İyiler</p>
          </a>
        </div>

        <div className="flex flex-col gap-6">
          {/* Article 1 */}
          <article className="bg-white dark:bg-card-dark rounded-xl border border-slate-200 dark:border-card-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 pb-0 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBPxQFHVfPydnL2dBLCzAiSrSejf0REfshEzC-EGrPEyUj9lp5D_2HB-r8wAfDNnnBPDi4DTroqJ7P-1a3t7w5-uLBSEJ7XHT1i8R40IoIZFW5JYv6H22dhFsFwR6pGV22NFPQtTZZWUmSzosUorQyf8p5HsqkX2H1q42B4Zv8wP7KM7LrUb5PqGscJhwPojX3gfmxBtg3GOncxDHlFcs4U_8xNnOYtBrZEDNz7CxKqOSFsZ-8Cz1dkV3BiSTcuOUZH1Q8iWmL8tII")',
                  }}
                ></div>
                <div>
                  <p className="text-slate-900 dark:text-white font-bold text-sm">
                    Zeynep K.
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">
                    @zeynep_design • 2 saat önce
                  </p>
                </div>
              </div>
              <button className="text-slate-500 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-800 p-1 rounded-full">
                <span className="material-symbols-outlined">more_horiz</span>
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-2">
                Mimarlık Fakültesi Bahar Sergisi Başladı! 🎨
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
                Bu yılki projeler gerçekten inanılmaz. Herkesi bekliyoruz, giriş
                ücretsiz.
              </p>
              <div className="flex gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-500/10 text-blue-500 rounded text-xs font-semibold">
                  #Mimarlık
                </span>
                <span className="px-2 py-1 bg-purple-500/10 text-purple-500 rounded text-xs font-semibold">
                  #Sanat
                </span>
                <span className="px-2 py-1 bg-green-500/10 text-green-500 rounded text-xs font-semibold">
                  #Etkinlik
                </span>
              </div>
              <div
                className="bg-cover bg-center rounded-lg h-[240px] w-full"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCVts2b4l6naZcxRo3GCefQa7Pc1vOQIwkSwGbNIXIzlW7m28fOBsnJUncVTp05_vHR8XVOtAnMse3_yZMzNEzjRyjw9zpmgeWNcAngeDvjdSqLKHnVPcpRsN8R3Njk1VZlyKd9cYyOpDevlRi77MkPuCjQuX6fp2NUJOAajSkC0Xi7ZQPEpcdAnQiVpYMznM6PNWpqJ2jrEeSE53RWlJQpRUPnW0VhaJEKX30yMf17gv4k6uU8TeQffYvKvx5RW-auMtbGX3LPo8U")',
                }}
              ></div>
            </div>
            <div className="bg-gray-50 dark:bg-slate-800/50 px-4 py-3 border-t border-slate-200 dark:border-card-border flex items-center justify-between">
              <div className="flex gap-6">
                <button className="flex items-center gap-2 group">
                  <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 group-hover:text-primary transition-colors">
                    thumb_up
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm font-bold group-hover:text-primary transition-colors">
                    324
                  </span>
                </button>
                <button className="flex items-center gap-2 group">
                  <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 group-hover:text-blue-400 transition-colors">
                    chat_bubble
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm font-bold group-hover:text-blue-400 transition-colors">
                    45
                  </span>
                </button>
                <button className="flex items-center gap-2 group">
                  <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 group-hover:text-green-400 transition-colors">
                    share
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm font-bold group-hover:text-green-400 transition-colors">
                    Paylaş
                  </span>
                </button>
              </div>
              <button className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
                <span className="material-symbols-outlined">bookmark</span>
              </button>
            </div>
          </article>

          {/* Article 2 */}
          <article className="bg-white dark:bg-card-dark rounded-xl border border-slate-200 dark:border-card-border shadow-sm hover:shadow-md transition-shadow">
            <div className="p-4 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDJH5FgMZ4tO_HUSzGni_2t260SP0v3GOFpRTXgMa5-QmI_ru8cp7amnORBXgPcKumQlspJFkDlB0DIjwBJk7w2WwdBlFMEuKwtPphmx3EIP6lozo8CqI9j5dUoAi7tHAcerxaCI90YTgICpTmS55fWu5dkm4GD43WysLzUoOpZZi1geMec_VNJCZScWtvMiLSk7HCxcplAhd2ZawgnD6xiSvMZgxP9hS7i9IdoXJK2KXSiYQDApziJU7bz9eO4XlF7AiDFAt4mQFw")',
                    }}
                  ></div>
                  <div>
                    <p className="text-slate-900 dark:text-white font-bold text-sm">
                      Mehmet Ali
                    </p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs">
                      @mali_dev • 45 dk önce
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-xs font-bold border border-red-500/20">
                  Acil
                </span>
              </div>
              <h3 className="text-slate-900 dark:text-white text-xl font-bold mt-2">
                Fizik 101 Final Notları Lazım! 📚
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                Arkadaşlar selam, geçen haftaki Prof. Yılmaz'ın dersini
                kaçırdım. Elinde temize çekilmiş notları olan var mı? Kahve
                ısmarlarım! ☕️
              </p>
            </div>
            <div className="px-4 pb-4">
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-gray-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded text-xs font-medium">
                  #Fizik101
                </span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded text-xs font-medium">
                  #Yardım
                </span>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-slate-800/50 px-4 py-3 border-t border-slate-200 dark:border-card-border flex items-center justify-between rounded-b-xl">
              <div className="flex gap-6">
                <button className="flex items-center gap-2 group">
                  <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 group-hover:text-primary transition-colors">
                    thumb_up
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm font-bold group-hover:text-primary transition-colors">
                    12
                  </span>
                </button>
                <button className="flex items-center gap-2 group">
                  <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 group-hover:text-blue-400 transition-colors">
                    chat_bubble
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm font-bold group-hover:text-blue-400 transition-colors">
                    8 Yorum
                  </span>
                </button>
              </div>
            </div>
          </article>

          {/* Article 3 (Special) */}
          <article className="relative bg-gradient-to-r from-primary to-[#2563eb] rounded-xl overflow-hidden shadow-lg">
            <div className="absolute right-0 top-0 h-full w-1/2 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="relative p-6 flex flex-col items-start gap-4">
              <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                <span className="material-symbols-outlined text-white text-sm">
                  campaign
                </span>
                <span className="text-white text-xs font-bold uppercase">
                  Resmi Duyuru
                </span>
              </div>
              <h3 className="text-white text-2xl font-bold leading-tight max-w-[80%]">
                Bahar Şenlikleri Takvimi Açıklandı!
              </h3>
              <p className="text-blue-100 text-sm max-w-[70%]">
                Bu sene konserler, turnuvalar ve daha fazlası seni bekliyor.
                Detayları incelemek için tıkla.
              </p>
              <button className="bg-white text-primary px-6 py-2 rounded-lg text-sm font-bold hover:bg-gray-100 transition-colors shadow-sm">
                Takvimi İncele
              </button>
            </div>
          </article>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="hidden xl:flex w-[320px] flex-col gap-6 sticky top-24 h-fit">
        <div className="bg-white dark:bg-card-dark rounded-xl border border-slate-200 dark:border-card-border overflow-hidden shadow-sm">
          <div className="p-4 border-b border-slate-200 dark:border-card-border flex justify-between items-center">
            <h3 className="text-slate-900 dark:text-white font-bold text-base">
              Gündemdekiler
            </h3>
            <span className="material-symbols-outlined text-slate-500 dark:text-slate-400">
              trending_up
            </span>
          </div>
          <div className="flex flex-col">
            <a
              className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors border-b border-slate-200 dark:border-card-border last:border-0"
              href="#"
            >
              <p className="text-slate-500 dark:text-slate-400 text-xs mb-1">
                Kampüs • 2.4B Gönderi
              </p>
              <p className="text-slate-900 dark:text-white font-bold text-sm">
                #YemekhaneZammı
              </p>
            </a>
            <a
              className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors border-b border-slate-200 dark:border-card-border last:border-0"
              href="#"
            >
              <p className="text-slate-500 dark:text-slate-400 text-xs mb-1">
                Sınavlar • 12B Gönderi
              </p>
              <p className="text-slate-900 dark:text-white font-bold text-sm">
                #VizeHaftası
              </p>
            </a>
            <a
              className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors border-b border-slate-200 dark:border-card-border last:border-0"
              href="#"
            >
              <p className="text-slate-500 dark:text-slate-400 text-xs mb-1">
                Teknoloji • 500 Gönderi
              </p>
              <p className="text-slate-900 dark:text-white font-bold text-sm">
                #YapayZeka
              </p>
            </a>
            <a
              className="px-4 py-3 text-primary text-sm font-medium hover:underline text-center"
              href="#"
            >
              Daha fazla göster
            </a>
          </div>
        </div>

        <div className="bg-white dark:bg-card-dark rounded-xl border border-slate-200 dark:border-card-border overflow-hidden shadow-sm">
          <div className="p-4 border-b border-slate-200 dark:border-card-border">
            <h3 className="text-slate-900 dark:text-white font-bold text-base">
              Yaklaşan Etkinlikler
            </h3>
          </div>
          <div className="p-4 flex flex-col gap-4">
            <div className="flex gap-3 items-start">
              <div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-slate-800 rounded-lg w-12 h-12 shrink-0 border border-slate-200 dark:border-card-border">
                <span className="text-xs text-red-500 font-bold uppercase">
                  May
                </span>
                <span className="text-lg text-slate-900 dark:text-white font-bold">
                  12
                </span>
              </div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-bold text-sm leading-tight hover:text-primary cursor-pointer transition-colors">
                  Kariyer Günleri 2024
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                  Ana Konferans Salonu • 14:00
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-slate-800 rounded-lg w-12 h-12 shrink-0 border border-slate-200 dark:border-card-border">
                <span className="text-xs text-red-500 font-bold uppercase">
                  May
                </span>
                <span className="text-lg text-slate-900 dark:text-white font-bold">
                  15
                </span>
              </div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-bold text-sm leading-tight hover:text-primary cursor-pointer transition-colors">
                  Yazılım Hackathonu
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                  Mühendislik Fak. • 09:00
                </p>
              </div>
            </div>
          </div>
          <button className="w-full py-3 text-slate-500 dark:text-slate-400 hover:text-primary text-sm font-medium border-t border-slate-200 dark:border-card-border transition-colors">
            Tüm Takvimi Gör
          </button>
        </div>
      </aside>
    </div>
  );
}
