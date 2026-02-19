import Link from 'next/link';
import Image from 'next/image';
import EventCard from '@/components/EventCard';

export default function Home() {
  // Use a subset of events for the home page or different ones
  const recentEvents = [
    {
      imageSrc:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDYs7cb55wfkS1nd-aSrO1a5Yk_1nKYdKQclALi_Bzfdev6Lk2Dm7YkRZC9GoJqsqI1D3RqEkHfvCoR4tDbVnkoT_Rp73HG1fy4GXioBRp4-D3uXvBLIXPtyR1fmJ3nJtdYSb1FSfgAvMjDx6IFLJQz7xKXzs2hvZh4DSGHL-EsNQZPEbGqTdAXJU0lo3IM96WyekQQ_Sltk3znByz74kn6AnTYapttDgIzBJsYC_TG_Kb58ZliFWMKkCZaq7585tsvQnaTmlYmZXQ',
      imageAlt: 'People attending a technology conference with stage lights',
      dateMonth: 'EKİM',
      dateDay: '24',
      category: 'Teknoloji',
      categoryColorClass: 'bg-blue-500',
      title: 'Yapay Zeka Zirvesi 2024',
      description:
        'Geleceğin teknolojilerini sektörün liderlerinden dinleyin. Networking fırsatlarını kaçırmayın.',
      location: 'Mühendislik Fakültesi, A Blok',
      attendees: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDj_siKKbPLpGvbZgLMPSQLAFz-timymAKmbSHnqPStK8M3-r30hvqj579Mx-QbkjmtQMI2ao6lQifS8rLlto7MsASvBEajJrlP6RbH51svo5z02pRmnTOVRvenVf1QXrS5i99de_DdrlwSENtzlII8C9KJT7lYdPXOF0OLDORLHB7r6q8t2vvCnLy7EyGBwj_AYOmgEpHmrVqQwnuJ_zFqfChGofDZLMG4co4Wjg6RWMySo9KsdCIJ5s_peFEtDQIk8fPbxvzc8B8',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCceEy3-yWBXWqFvTO80bTtWUdvlllwZ3MbXUpq1ajEo-rhxaP4bTdcg2pudX3Bdn227hRCFP5SPV118JCrVptF4PuM-fEnTodJ0Xvk2y7lBZsldK_IFtzvy4K7KUPCe8lgdOHveL3X33TP1UoMQw98BFl98093sN6GSSFX8GxwtBepXT6X0YL0TVtVrf40ysZZxq-dxCXZcIe9coQM4MEuOx8Mq-29tw1MflgYS2WTaMuwhWQDD0a2lzOAS6pD4Ua7xmOJ1_x0gmE',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuByCv01S1ERZDFjP6xknuH_0ys3R1BLjQmbcBy4h15JZIsvXc-N-gyULqI2K8UjYjka518c23H354id4tGYzPesar66SP2LqkbjoWkns3oAjzVbpkC9vN0ambN5KLxNqYMZn9WEzs_dFDiPf13SaU97vXjOLZnFRuY649W8F-Xww2twmNW-wBDTTR9sekK2kfddypBw1351xxfwbtbKLkjD_nQeicgRkDNhGOFh_CtcD4FcenMjoed1-vXHQTkUbykQtk0mvkvxo5k',
      ],
      attendeeCount: 42,
      buttonText: 'Kaydol',
    },
    {
      imageSrc:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCKIxLiGLW3xIQm-Q_9y8yc2F2IGWTpEr6TjjbVYywGW7setTFROILOsnnC_netMOIgXH6FELuv5On4zujVyv-4tA4MGYtF4_LErQhwEVosaxtkpLtSeqcqRRds1zPv6yuc45QFVPTO87bkU3hrHFX93cfR1FzQTSZSKwqoUXD1tnJGvcPlg5tG63eZVSaPbvKNZNqYyJ_rqs1fLyDH4DM1Pz0KMUe6R3eexhyH0NdqhRih3CtNjG5kH6-v0Sj607N95vtLL-dCtP8',
      imageAlt: 'Colorful concert lights and silhouette of a music band',
      dateMonth: 'EKİM',
      dateDay: '28',
      category: 'Müzik',
      categoryColorClass: 'bg-purple-500',
      title: 'Kampüs Rock Gecesi',
      description:
        'Üniversite gruplarının sahne alacağı unutulmaz bir rock müzik gecesi.',
      location: 'Açık Hava Tiyatrosu',
      attendees: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC3x-DvXM3UuhY09pBARPJLGa883JnAi_VtyfjMdgsSIFKwZGjofjZfolxnEkPeSNRV36ZvObHRICQDRWKKfJDzHeafbl0bFDI-sIS9VSVruon-emaxU_GkyejIgqEtHLe32QAlYTLyB8pbstt2Gym13SjT-2R1tAOhUXDJLIQ0jGFSbQxhKF7JLsfhxW1uvcBGTsOXt_774dWInjtf56K2xmDq-Nta0Gbb_0hGbIfhJzRYV8XH492keke0Dgerq5xlzwc0gW2GlNk',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBKVuMi-DDFMgxbSZv2yhOhRIjcI55F5XUqnY2B-sGShv5hq1vcN0GVPXgREuaLHkdIHB1FYG9dc_w3QkpELFUTNNcDEq0Gf5FKwLuFgnozpDMSeFzWjeoyOVzOyg-SHAZDJ7aXj2YIkGzc4Zl1WMikKH8YhbYZhLfLCzWvVdLqjyu2GwSjRs0rU9ARSK0ndUqdAdjRq4D1LOxqTLrii8k6RCVrMks9TgMujfZ7TmdOxYRtL7uadw6CBYMsvNlaNLO_AE1JiKvg9jY',
      ],
      attendeeCount: 120,
      buttonText: 'Kaydol',
    },
    {
      imageSrc:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuATZrEEogjAok2wnkzH192VykfknEqHHQ_FHuYvO1Hbfpqyx2KDgCU99bQ1tZjneqka_j_m5gmGJ9B8sKBFuwd1QLMq1RLbmgAtSfalNMS70wmUBQJkLptmQon8y-yHxRVplf3rbYJpxYUwLzjHNRI_6rnrm4voMj_JmYQhb0wNbmO2HWMKvWP-JILia_08iOQNMv1QO2LoJZMiMwyutw-McIZDYkLfGqpq8IWzbVegkX0bWr213s8qpXzBxlUCSg4zZVPphiac2N8',
      imageAlt: 'Group of people brainstorming in a workshop setting',
      dateMonth: 'KAS',
      dateDay: '02',
      category: 'Kariyer',
      categoryColorClass: 'bg-green-500',
      title: 'CV Hazırlama Atölyesi',
      description:
        'Profesyonel İK uzmanları eşliğinde etkileyici bir CV hazırlamanın püf noktaları.',
      location: 'Kütüphane Seminer Odası',
      attendees: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBNrh-dEZ-aHBRqXeURpHTFZJEYTR2vjnPp3isCQdRs_9tCHBT3MwccueRht-vC8YYZIg30fkAk_GFUae04BV-s6K4SkxILUOsiJoKiWoyNJOr5P0QlJZNImzzytPTHgu3fnoSvcuO0dsArr-nloI2cc-ZyhhR6kOcvVwBzP1OO71REO4ZoIPD9qhd5gyvyNZIayYRBg5W4sUDOgqRBVKBiaDoI7pytmJfhVapf7kEK1Mk90A7UjCOlXUN6qg1OA14FMHg_4JF-0LU',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCYdGRztjMHWpT52anEDwLO0_a1N8ve122oYiv1l8d_qyQMaIctm_-szIeart2m2WimkqeD-g_uvr3-LiBNpjrbGCe6rpebtOCk-RVZIyS7AHlrlFygnYJV-4hA82gN5c4BFrPa9-e6DBGiGQDh2TG_JbnS-0s7seSLI6AB2iUfsDofPuy72_wWWI4JWh_i4E5GcsZepXpnLsod-VLWKQF_FA0_DARPUDczK5uMXFfg5wg0jV4xhJSfzb1BPGzvdZPqNasM8qweY98',
      ],
      attendeeCount: 15,
      buttonText: 'Kaydol',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Compact Version */}
      <section className="relative overflow-hidden bg-background-light dark:bg-background-dark pt-12 pb-20 lg:pt-24 lg:pb-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-blob"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-200 text-xs font-semibold mb-6 border border-blue-100 dark:border-blue-800 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            IEEE GAÜN Yayında!
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight text-slate-900 dark:text-white mb-5 leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-forwards">
            Kampüs Hayatını <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
              Dolu Dolu Yaşa
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-forwards">
            Topluluğu keşfet, etkinliklere katıl ve kampüsün dijital kalbinde
            yerini al.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-forwards">
            <Link
              href="/register"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-primary text-white font-bold text-base hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-primary/30 flex items-center justify-center gap-2"
            >
              Hemen Başla
              <span className="material-symbols-outlined text-[20px]">
                arrow_forward
              </span>
            </Link>
            <Link
              href="/chapters"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white dark:bg-card-dark text-slate-900 dark:text-white font-bold text-base border border-slate-200 dark:border-card-border hover:bg-gray-50 dark:hover:bg-slate-800 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              Topluluğumuzu Keşfet
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid - Compact Version */}
      <section className="py-16 bg-white dark:bg-card-dark border-y border-slate-100 dark:border-card-border">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Feature 1 */}
            <div className="group p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all duration-300 hover:shadow-xl">
              <div className="size-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-[28px]">
                  event
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Etkinlikleri Kaçırma
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Kampüsteki konserlerden akademik seminerlere kadar tüm
                etkinlikler elinin altında. Takvimini oluştur, biletini al.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all duration-300 hover:shadow-xl">
              <div className="size-12 rounded-2xl bg-purple-500/10 text-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-[28px]">
                  groups
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Topluluğumuza Katıl
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                İlgi alanlarına uygun chapterı bul, projelere dahil ol ve
                yeteneklerini geliştir. Sosyal çevreni genişlet.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all duration-300 hover:shadow-xl">
              <div className="size-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-[28px]">
                  forum
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Forum ve Tartışma
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Ders notları, kampüs gündemi veya sadece sohbet. Öğrenci
                forumunda fikirlerini paylaş, sorularına cevap bul.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Events Section */}
      <section className="py-16 bg-slate-50 dark:bg-background-dark/50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
              Sana Özel Etkinlikler
            </h2>
            <Link
              href="/etkinlikler"
              className="text-primary font-bold text-sm hover:underline flex items-center gap-1"
            >
              Tümünü Gör
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Compact Version */}
      <section className="py-16 bg-background-light dark:bg-background-dark">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <div className="relative rounded-[2rem] bg-indigo-600 overflow-hidden px-6 py-16 text-center">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-50"></div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Kampüsün Ritmini Yakala!
              </h2>
              <p className="text-indigo-100 text-lg mb-8">
                Seni bekleyen onlarca etkinlik var. Hemen kaydol ve keşfetmeye
                başla.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/register"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-indigo-600 font-bold text-base hover:bg-gray-100 transition-colors shadow-lg shadow-black/20"
                >
                  Ücretsiz Kayıt Ol
                </Link>
                <Link
                  href="/etkinlikler"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-indigo-700 text-white font-bold text-base border border-indigo-500 hover:bg-indigo-600 transition-colors"
                >
                  Etkinliklere Göz At
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
