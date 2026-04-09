'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import EventCard from '@/components/EventCard';

export default function Home() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await fetch('/api/events');
      const data = await res.json();
      if (data.success) {
        // Filter published events, maybe limit to 3 most recent
        const publishedEvents = data.data
            .filter(event => event.status === 'Yayında')
            .slice(0, 3);
        setEvents(publishedEvents);
      }
    } catch (err) {
      console.error('Error fetching events:', err);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Teknoloji':
        return 'bg-blue-500';
      case 'Müzik':
        return 'bg-purple-500';
      case 'Kariyer':
        return 'bg-green-500';
      case 'Spor':
        return 'bg-orange-500';
      case 'Sanat':
        return 'bg-pink-500';
      case 'Kulüp':
        return 'bg-yellow-600';
      default:
        return 'bg-gray-500';
    }
  };

  const getMonthAndDay = (dateString) => {
    if (!dateString) return { month: '', day: '' };
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return { month: '', day: '' };
    const monthWithDay = date.toLocaleDateString('tr-TR', { month: 'long', day: 'numeric' });
    const [day, month] = monthWithDay.split(' ');
    return { month: month?.toUpperCase(), day };
  };

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
            <Link href="/forum" className="group p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all duration-300 hover:shadow-xl cursor-pointer block">
              <div className="size-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-[28px]">
                  forum
                </span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Forum
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
                  BAKIMDA
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Platformumuz şu an bakım aşamasındadır. Çok yakında yenilenen arayüzüyle tekrar hizmetinizde olacak.
              </p>
            </Link>
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
            {loading ? (
                 <div className="col-span-full py-20 flex justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                 </div>
            ) : events.length === 0 ? (
                 <div className="col-span-full py-20 text-center text-gray-500">
                    Henüz etkinlik bulunmuyor.
                 </div>
            ) : (
                events.map((event, index) => {
                     const { month, day } = getMonthAndDay(event.date);
                     return (
                        <EventCard 
                            key={event._id || index} 
                            {...event}
                            imageSrc={event.image || 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80'} // Fallback image
                            imageAlt={event.title}
                            dateMonth={month}
                            dateDay={day}
                            categoryColorClass={getCategoryColor(event.category)}
                            attendees={[]} // API doesn't provide attendee images yet
                            attendeeCount={event.attendees}
                            buttonText="Kaydol"
                        />
                     )
                })
            )}
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
