'use client';

import { useState } from 'react';
import Modal from '@/components/Modal';
import CustomSelect from '@/components/CustomSelect';

export default function EventsPage() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Yapay Zeka Zirvesi 2024',
      date: '24 Ekim 2024 - 14:00',
      location: 'Mühendislik Fakültesi, A Blok',
      chapter: 'Computer Society',
      status: 'Yayında',
      statusColor:
        'text-green-700 bg-green-50 dark:text-green-300 dark:bg-green-900/30 border-green-200 dark:border-green-900',
      attendees: 42,
      category: 'Teknoloji',
    },
    {
      id: 2,
      title: 'Kampüs Rock Gecesi',
      date: '28 Ekim 2024 - 19:00',
      location: 'Açık Hava Tiyatrosu',
      chapter: 'Müzik Kulübü',
      status: 'Yayında',
      statusColor:
        'text-green-700 bg-green-50 dark:text-green-300 dark:bg-green-900/30 border-green-200 dark:border-green-900',
      attendees: 120,
      category: 'Müzik',
    },
    {
      id: 3,
      title: 'CV Hazırlama Atölyesi',
      date: '02 Kasım 2024 - 11:00',
      location: 'Kütüphane Seminer Odası',
      chapter: 'WIE',
      status: 'Planlanıyor',
      statusColor:
        'text-blue-700 bg-blue-50 dark:text-blue-300 dark:bg-blue-900/30 border-blue-200 dark:border-blue-900',
      attendees: 15,
      category: 'Kariyer',
    },
    {
      id: 4,
      title: 'Fakülteler Arası Basketbol Turnuvası',
      date: '05 Kasım 2024 - 16:00',
      location: 'Kapalı Spor Salonu',
      chapter: 'Spor Kulübü',
      status: 'İptal Edildi',
      statusColor:
        'text-red-700 bg-red-50 dark:text-red-300 dark:bg-red-900/30 border-red-200 dark:border-red-900',
      attendees: 200,
      category: 'Spor',
    },
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // State for Add Event Form
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    chapter: 'Computer Society',
    category: 'Teknoloji',
    status: 'Planlanıyor',
    description: '',
  });

  // State for Edit Event Form
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEditClick = (event) => {
    setSelectedEvent({ ...event });
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = (eventId) => {
    if (confirm('Etkinliği silmek istediğinize emin misiniz?')) {
      setEvents(events.filter((e) => e.id !== eventId));
    }
  };

  const chapters = [
    'Computer Society',
    'PES',
    'WIE',
    'RAS',
    'CS',
    'Müzik Kulübü',
    'Spor Kulübü',
  ];
  const categories = [
    'Teknoloji',
    'Müzik',
    'Kariyer',
    'Spor',
    'Sanat',
    'Kulüp',
  ];
  const statuses = ['Yayında', 'Planlanıyor', 'Tamamlandı', 'İptal Edildi'];

  return (
    <main className="flex-1 overflow-y-auto p-8 scroll-smooth text-gray-900 dark:text-white">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
        <div className="flex flex-wrap justify-between items-end gap-3">
          <div className="flex flex-col gap-1">
            <h2 className="text-[#111318] dark:text-white tracking-tight text-[28px] font-bold leading-tight">
              Etkinlik Yönetimi
            </h2>
            <p className="text-[#616f89] dark:text-gray-400 text-sm font-normal">
              Tüm etkinlikleri görüntüleyin, düzenleyin veya yeni etkinlik
              oluşturun.
            </p>
          </div>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="bg-primary hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg flex items-center gap-2 transition-colors shadow-sm shadow-blue-500/30"
          >
            <span className="material-symbols-outlined text-[18px]">
              add_circle
            </span>
            Yeni Etkinlik Oluştur
          </button>
        </div>

        <div className="bg-white dark:bg-[#1a202c] rounded-xl border border-[#e5e7eb] dark:border-[#2d3748] shadow-sm flex flex-col mb-8">
          <div className="p-6 border-b border-[#e5e7eb] dark:border-[#2d3748] flex flex-wrap gap-4 justify-between items-center">
            <div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Etkinlik ara..."
                  className="pl-10 pr-4 py-2 border border-[#dbdfe6] dark:border-[#2d3748] rounded-lg text-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 w-full md:w-80"
                />
                <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-400 text-[18px]">
                  search
                </span>
              </div>
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
                Dışa Aktar
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#f8fafc] dark:bg-[#2d3748]/50 border-b border-[#e5e7eb] dark:border-[#2d3748]">
                  <th className="px-6 py-4 text-xs font-semibold text-[#616f89] dark:text-gray-400 uppercase tracking-wider">
                    Etkinlik Adı
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#616f89] dark:text-gray-400 uppercase tracking-wider">
                    Tarih & Saat
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#616f89] dark:text-gray-400 uppercase tracking-wider">
                    Düzenleyen
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#616f89] dark:text-gray-400 uppercase tracking-wider">
                    Konum
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#616f89] dark:text-gray-400 uppercase tracking-wider">
                    Katılımcı
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#616f89] dark:text-gray-400 uppercase tracking-wider">
                    Durum
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#616f89] dark:text-gray-400 uppercase tracking-wider text-right">
                    İşlemler
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e5e7eb] dark:divide-[#2d3748]">
                {events.map((event) => (
                  <tr
                    key={event.id}
                    className="hover:bg-background-light dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-primary dark:text-blue-300 flex items-center justify-center">
                          <span className="material-symbols-outlined">
                            event
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-[#111318] dark:text-white">
                            {event.title}
                          </span>
                          <span className="text-xs text-[#616f89] dark:text-gray-400">
                            {event.category}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#616f89] dark:text-gray-400">
                      {event.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-[#111318] dark:text-white">
                        {event.chapter}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#616f89] dark:text-gray-300 max-w-[200px] truncate">
                      {event.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#616f89] dark:text-gray-400">
                      {event.attendees}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border ${event.statusColor}`}
                      >
                        {event.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <button
                        onClick={() => handleEditClick(event)}
                        className="text-gray-400 hover:text-primary transition-colors p-1"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          edit
                        </span>
                      </button>
                      <button
                        onClick={() => handleDeleteClick(event.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors p-1 ml-2"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          delete
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <div className="p-4 border-t border-[#e5e7eb] dark:border-[#2d3748] flex items-center justify-between">
            <span className="text-sm text-[#616f89] dark:text-gray-400">
              Toplam {events.length} etkinlik gösteriliyor
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
                Sonraki
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add Event Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Yeni Etkinlik Oluştur"
      >
        <form className="flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Etkinlik Başlığı
              </label>
              <input
                type="text"
                value={newEvent.title}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, title: e.target.value })
                }
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white"
                placeholder="Örn: Yapay Zeka Zirvesi"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Tarih
              </label>
              <input
                type="date"
                value={newEvent.date}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, date: e.target.value })
                }
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Saat
              </label>
              <input
                type="time"
                value={newEvent.time}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, time: e.target.value })
                }
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Konum
              </label>
              <input
                type="text"
                value={newEvent.location}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, location: e.target.value })
                }
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white"
                placeholder="Örn: Mühendislik Fakültesi Konferans Salonu"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <CustomSelect
              label="Düzenleyen Chapter"
              options={chapters}
              value={newEvent.chapter}
              onChange={(val) => setNewEvent({ ...newEvent, chapter: val })}
            />
            <CustomSelect
              label="Kategori"
              options={categories}
              value={newEvent.category}
              onChange={(val) => setNewEvent({ ...newEvent, category: val })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Açıklama
            </label>
            <textarea
              rows="3"
              value={newEvent.description}
              onChange={(e) =>
                setNewEvent({ ...newEvent, description: e.target.value })
              }
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white resize-none"
              placeholder="Etkinlik hakkında kısa bilgi..."
            />
          </div>

          <CustomSelect
            label="Durum"
            options={statuses}
            value={newEvent.status}
            onChange={(val) => setNewEvent({ ...newEvent, status: val })}
          />

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={() => setIsAddModalOpen(false)}
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              İptal
            </button>
            <button
              type="button"
              className="px-4 py-2 text-sm font-bold text-white bg-primary hover:bg-blue-700 rounded-lg transition-colors shadow-lg shadow-primary/20"
            >
              Oluştur
            </button>
          </div>
        </form>
      </Modal>

      {/* Edit Event Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Etkinliği Düzenle"
      >
        <form className="flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Etkinlik Başlığı
              </label>
              <input
                type="text"
                value={selectedEvent?.title || ''}
                onChange={(e) =>
                  setSelectedEvent({ ...selectedEvent, title: e.target.value })
                }
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Tarih
              </label>
              <input
                type="text"
                value={selectedEvent?.date || ''}
                onChange={(e) =>
                  setSelectedEvent({ ...selectedEvent, date: e.target.value })
                }
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Konum
              </label>
              <input
                type="text"
                value={selectedEvent?.location || ''}
                onChange={(e) =>
                  setSelectedEvent({
                    ...selectedEvent,
                    location: e.target.value,
                  })
                }
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <CustomSelect
              label="Düzenleyen Chapter"
              options={chapters}
              value={selectedEvent?.chapter || ''}
              onChange={(val) =>
                setSelectedEvent({ ...selectedEvent, chapter: val })
              }
            />
            <CustomSelect
              label="Kategori"
              options={categories}
              value={selectedEvent?.category || ''}
              onChange={(val) =>
                setSelectedEvent({ ...selectedEvent, category: val })
              }
            />
          </div>

          <CustomSelect
            label="Durum"
            options={statuses}
            value={selectedEvent?.status || ''}
            onChange={(val) =>
              setSelectedEvent({ ...selectedEvent, status: val })
            }
          />

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={() => setIsEditModalOpen(false)}
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              İptal
            </button>
            <button
              type="button"
              className="px-4 py-2 text-sm font-bold text-white bg-primary hover:bg-blue-700 rounded-lg transition-colors shadow-lg shadow-primary/20"
            >
              Güncelle
            </button>
          </div>
        </form>
      </Modal>
    </main>
  );
}
