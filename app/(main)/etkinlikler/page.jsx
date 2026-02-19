'use client';

import { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import EventFilters from '@/components/EventFilters';
import EventCard from '@/components/EventCard';

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    let result = events;

    // Filter by Category
    if (selectedCategory !== 'Tümü') {
      result = result.filter(event => event.category === selectedCategory);
    }

    // Filter by Search Term
    if (searchTerm) {
      const lowerTerm = searchTerm.toLowerCase();
      result = result.filter(event => 
        event.title.toLowerCase().includes(lowerTerm) || 
        event.description?.toLowerCase().includes(lowerTerm) ||
        event.location?.toLowerCase().includes(lowerTerm)
      );
    }

    setFilteredEvents(result);
  }, [selectedCategory, searchTerm, events]);

  const fetchEvents = async () => {
    try {
      const res = await fetch('/api/events');
      const data = await res.json();
      if (data.success) {
        setEvents(data.data.filter(event => event.status === 'Yayında')); // Only show published events
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError('Etkinlikler yüklenirken bir hata oluştu.');
      console.error(err);
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
    // Expected format could vary, but assuming YYYY-MM-DD for now as per input
    // If input is text like "24 Ekim 2024", we might need more robust parsing
    // or just rely on backend to send ISO or standard format.
    // The previous mock data had "EKİM" and "24".
    // If the admin saved "2024-10-24", we can parse it.
    
    if (!dateString) return { month: '', day: '' };

    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
        // Fallback for non-standard date strings if any
        return { month: '', day: '' };
    }

    const monthWithDay = date.toLocaleDateString('tr-TR', { month: 'long', day: 'numeric' });
    // "24 Ekim"
    const [day, month] = monthWithDay.split(' ');
    
    return { month: month?.toUpperCase(), day };
  };

  return (
    <main className="flex-1 flex flex-col items-center w-full">
      <div className="w-full max-w-[1280px] px-4 md:px-8 py-6 md:py-10 flex flex-col gap-10">
        <HeroSection />
        <EventFilters 
          activeCategory={selectedCategory} 
          onCategoryChange={setSelectedCategory}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        
        {loading ? (
           <div className="flex justify-center py-20">
             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
           </div>
        ) : error ? (
            <div className="text-center py-20 text-red-500">
                {error}
            </div>
        ) : filteredEvents.length === 0 ? (
            <div className="text-center py-20 text-gray-500 dark:text-gray-400">
                {searchTerm 
                  ? `"${searchTerm}" araması için sonuç bulunamadı.`
                  : selectedCategory === 'Tümü' 
                    ? 'Henüz yayınlanmış bir etkinlik bulunmuyor.' 
                    : `"${selectedCategory}" kategorisinde etkinlik bulunamadı.`}
            </div>
        ) : (
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {filteredEvents.map((event, index) => {
                const { month, day } = getMonthAndDay(event.date);
                return (
                    <EventCard 
                        key={event._id} 
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
                );
            })}
            </section>
        )}

        {filteredEvents.length > 0 && (
            <div className="flex justify-center pb-10">
            <button className="px-8 py-3 rounded-lg bg-white dark:bg-card-border border border-gray-200 dark:border-transparent text-gray-900 dark:text-white text-sm font-bold hover:bg-gray-50 dark:hover:bg-[#2a3855] transition-colors shadow-sm">
                Daha Fazla Göster
            </button>
            </div>
        )}
      </div>
    </main>
  );
}
