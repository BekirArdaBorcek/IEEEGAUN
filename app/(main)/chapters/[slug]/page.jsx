export default async function ChapterDetailPage({ params }) {
  // Mock data for demonstration - in a real app this would come from an API/Database based on the slug
  const { slug } = await params;

  // Mock data based on the slug (simplified for this example)
  const chapterData = {
    title: 'Robotics & Automation Society (RAS)',
    faculty: 'Mühendislik Fakültesi',
    description:
      'Robotik sistemler, otomasyon teknolojileri ve yapay zeka entegrasyonu üzerine çalışmalar yürüten teknik birim.',
    icon: ' ',
    iconBgClass: 'bg-blue-100 dark:bg-blue-900/40',
    iconColorClass: 'text-blue-600',
    stats: {
      score: '85.2',
      publications: '42',
      members: '128',
      growth: '+14%',
    },
    team: {
      managers: [
        {
          name: 'Ahmet Yılmaz',
          role: 'Başkan',
          image: 'https://i.pravatar.cc/150?u=ahmet',
          socials: {
            email: 'mailto:ahmet@ieee.org',
            linkedin: '#',
          },
        },
        {
          name: 'Ayşe Demir',
          role: 'Başkan Yrd.',
          image: 'https://i.pravatar.cc/150?u=ayse',
          socials: {
            email: 'mailto:ayse@ieee.org',
            linkedin: '#',
            instagram: '#',
          },
        },
        {
          name: 'Mehmet Çelik',
          role: 'Proje Koord.',
          image: 'https://i.pravatar.cc/150?u=mehmet',
          socials: {
            linkedin: '#',
          },
        },
      ],
      membersCount: 125,
    },
    events: [
      {
        title: 'Robotik Kodlama Atölyesi',
        date: '24 Ekim 2024',
        location: 'Mühendislik B Blok',
      },
      {
        title: 'Endüstri 4.0 Semineri',
        date: '15 Kasım 2024',
        location: 'Konferans Salonu',
      },
    ],
    projects: [
      {
        name: 'Rover Keşif Aracı',
        status: 'Tamamlandı',
        progress: 100,
        color: 'bg-green-500',
      },
      {
        name: 'Otonom Drone',
        status: 'Devam Ediyor',
        progress: 65,
        color: 'bg-blue-500',
      },
      {
        name: 'Akıllı Ev Sistemleri',
        status: 'Planlama',
        progress: 20,
        color: 'bg-yellow-500',
      },
    ],
    aboutText: `Robotik ve Otomasyon Topluluğu (RAS), geleceğin teknolojilerini bugünden inşa etmeyi hedefleyen tutkulu mühendis adaylarını bir araya getiriyor.
    
    Amacımız, üyelerimize teorik bilgilerini pratiğe dökme fırsatı sunmak, disiplinler arası çalışma kültürünü aşılamak ve endüstri standartlarında projeler geliştirmektir. Düzenlediğimiz atölye çalışmaları, teknik geziler ve seminerlerle sektörü yakından tanımanızı sağlarken, proje takımlarımızla ulusal ve uluslararası yarışmalarda üniversitemizi temsil ediyoruz.`,
  };

  return (
    <main className="flex-1 flex flex-col items-center w-full pb-10">
      {/* Hero Section */}
      <div className="w-full bg-slate-50 dark:bg-card-dark border-b border-slate-200 dark:border-card-border">
        <div className="w-full max-w-[1440px] px-4 md:px-10 py-10 md:py-16 mx-auto flex flex-col md:flex-row items-start md:items-center gap-6">
          <div
            className={`w-20 h-20 md:w-24 md:h-24 ${chapterData.iconBgClass} rounded-2xl flex items-center justify-center shrink-0`}
          >
            <span
              className={`material-symbols-outlined text-[40px] md:text-[48px] ${chapterData.iconColorClass}`}
            >
              {chapterData.icon}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-white">
                {chapterData.title}
              </h1>
              <span className="px-3 py-1 bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-xs font-bold uppercase">
                {chapterData.faculty}
              </span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl text-sm md:text-base leading-relaxed">
              {chapterData.description}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1440px] px-4 md:px-10 py-8 mx-auto flex flex-col gap-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-white dark:bg-card-dark border border-slate-100 dark:border-card-border shadow-sm">
            <div className="text-xs font-bold text-slate-400 uppercase mb-1">
              Birim Skoru
            </div>
            <div className="text-2xl font-black text-gray-900 dark:text-white">
              {chapterData.stats.score}
            </div>
          </div>
          <div className="p-4 rounded-xl bg-white dark:bg-card-dark border border-slate-100 dark:border-card-border shadow-sm">
            <div className="text-xs font-bold text-slate-400 uppercase mb-1">
              Yayınlar
            </div>
            <div className="text-2xl font-black text-gray-900 dark:text-white">
              {chapterData.stats.publications}
            </div>
          </div>
          <div className="p-4 rounded-xl bg-white dark:bg-card-dark border border-slate-100 dark:border-card-border shadow-sm">
            <div className="text-xs font-bold text-slate-400 uppercase mb-1">
              Üye Sayısı
            </div>
            <div className="text-2xl font-black text-gray-900 dark:text-white">
              {chapterData.stats.members}
            </div>
          </div>
          <div className="p-4 rounded-xl bg-white dark:bg-card-dark border border-slate-100 dark:border-card-border shadow-sm">
            <div className="text-xs font-bold text-slate-400 uppercase mb-1">
              Yıllık Büyüme
            </div>
            <div className="text-2xl font-black text-green-500">
              {chapterData.stats.growth}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Team & Events */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* About Section */}
            <section className="bg-white dark:bg-card-dark border border-slate-100 dark:border-card-border p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-gray-400">
                  info
                </span>
                Hakkında
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed whitespace-pre-line">
                {chapterData.aboutText}
              </p>
            </section>

            {/* Events Section */}
            <section>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-gray-400">
                  event
                </span>
                Yaklaşan Etkinlikler
              </h3>
              <div className="flex flex-col gap-3">
                {chapterData.events.map((event, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-card-dark border border-slate-100 dark:border-card-border hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col gap-1">
                      <div className="font-bold text-gray-900 dark:text-white">
                        {event.title}
                      </div>
                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">
                            calendar_today
                          </span>
                          {event.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">
                            location_on
                          </span>
                          {event.location}
                        </span>
                      </div>
                    </div>
                    <button className="px-4 py-2 text-xs font-bold text-primary bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                      Kayıt Ol
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Projects */}
          <div className="lg:col-span-1">
            <div className="flex flex-col gap-6 sticky top-24">
              {/* Projects Section */}
              <section className="bg-white dark:bg-card-dark border border-slate-100 dark:border-card-border rounded-xl p-5">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-gray-400">
                    rocket_launch
                  </span>
                  Projeler
                </h3>
                <div className="flex flex-col gap-6">
                  {chapterData.projects.map((project, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-end mb-2">
                        <div className="font-medium text-sm text-gray-900 dark:text-white">
                          {project.name}
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 uppercase">
                          {project.status}
                        </span>
                      </div>
                      <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${project.color}`}
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 py-2.5 bg-primary text-white text-xs font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-primary/20">
                  Projeye Katıl
                </button>
              </section>

              {/* Team Section (Sidebar Version) */}
              <section className="bg-white dark:bg-card-dark border border-slate-100 dark:border-card-border rounded-xl p-5">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-gray-400">
                    groups
                  </span>
                  Yönetim
                </h3>
                <div className="flex flex-col gap-3">
                  {chapterData.team.managers.map((manager, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-200 shrink-0">
                        <img
                          src={manager.image}
                          alt={manager.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-900 dark:text-white">
                          {manager.name}
                        </div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400">
                          {manager.role}
                        </div>
                      </div>
                      <div className="ml-auto flex items-center gap-1">
                        {manager.socials?.email && (
                          <a
                            href={manager.socials.email}
                            className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-white hover:bg-primary transition-all"
                            title="E-posta"
                          >
                            <span className="material-symbols-outlined text-[16px]">
                              mail
                            </span>
                          </a>
                        )}
                        {manager.socials?.linkedin && (
                          <a
                            href={manager.socials.linkedin}
                            className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-white hover:bg-[#0077b5] transition-all"
                            title="LinkedIn"
                          >
                            <svg
                              className="w-[14px] h-[14px] fill-current"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                          </a>
                        )}
                        {manager.socials?.instagram && (
                          <a
                            href={manager.socials.instagram}
                            className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-white hover:bg-[#E1306C] transition-all"
                            title="Instagram"
                          >
                            <svg
                              className="w-[14px] h-[14px] fill-current"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
