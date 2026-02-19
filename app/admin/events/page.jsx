'use client';

import { useState, useEffect } from 'react';
import Modal from '@/components/Modal';
import CustomSelect from '@/components/CustomSelect';

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

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
    status: 'Yayında',
    description: '',
    image: '',
    isFeatured: false,
  });

  // State for Edit Event Form
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/events');
      const data = await res.json();
      if (data.success) {
        setEvents(data.data);
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

  const handleAddSubmit = async () => {
    try {
      const formattedDate = `${newEvent.date} ${newEvent.time}`; 

      const eventData = { ...newEvent, date: formattedDate };

      const res = await fetch('/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventData),
      });
      const data = await res.json();

      if (data.success) {
        setEvents([...events, data.data]);
        setIsAddModalOpen(false);
        setNewEvent({
            title: '',
            date: '',
            time: '',
            location: '',
            chapter: 'Computer Society',
            category: 'Teknoloji',
            status: 'Yayında',
            description: '',
            image: '',
            isFeatured: false,
        });
      } else {
        alert('Hata: ' + data.error);
      }
    } catch (err) {
      console.error(err);
      alert('Bir hata oluştu.');
    }
  };

  const handleEditClick = (event) => {
    setSelectedEvent({ ...event });
    setIsEditModalOpen(true);
  };

  const handleEditSubmit = async () => {
    if (!selectedEvent) return;

    try {
      const res = await fetch(`/api/events/${selectedEvent._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(selectedEvent),
      });
      const data = await res.json();

      if (data.success) {
        setEvents(events.map((e) => (e._id === selectedEvent._id ? data.data : e)));
        setIsEditModalOpen(false);
        setSelectedEvent(null);
      } else {
        alert('Hata: ' + data.error);
      }
    } catch (err) {
      console.error(err);
      alert('Bir hata oluştu.');
    }
  };

  const handleDeleteClick = async (eventId) => {
    if (confirm('Etkinliği silmek istediğinize emin misiniz?')) {
      try {
        const res = await fetch(`/api/events/${eventId}`, {
          method: 'DELETE',
        });
        const data = await res.json();

        if (data.success) {
          setEvents(events.filter((e) => e._id !== eventId));
        } else {
           alert('Hata: ' + data.error);
        }
      } catch (err) {
        console.error(err);
        alert('Bir hata oluştu.');
      }
    }
  };
  
  const getStatusColor = (status) => {
      switch (status) {
          case 'Yayında':
              return 'text-green-700 bg-green-50 dark:text-green-300 dark:bg-green-900/30 border-green-200 dark:border-green-900';
          case 'Planlanıyor':
              return 'text-blue-700 bg-blue-50 dark:text-blue-300 dark:bg-blue-900/30 border-blue-200 dark:border-blue-900';
          case 'İptal Edildi':
              return 'text-red-700 bg-red-50 dark:text-red-300 dark:bg-red-900/30 border-red-200 dark:border-red-900';
          case 'Tamamlandı':
             return 'text-gray-700 bg-gray-50 dark:text-gray-300 dark:bg-gray-900/30 border-gray-200 dark:border-gray-900';
          default:
              return 'text-gray-700 bg-gray-50';
      }
  }

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

  const filteredEvents = events.filter(event => 
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.chapter.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleImageChange = async (e, isEdit = false) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      alert('Dosya boyutu 5MB\'dan küçük olmalıdır.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      setLoading(true);
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        if (isEdit) {
          setSelectedEvent(prev => ({ ...prev, image: data.filepath }));
        } else {
          setNewEvent(prev => ({ ...prev, image: data.filepath }));
        }
      } else {
        alert('Resim yüklenirken hata oluştu: ' + data.error);
      }
    } catch (err) {
      console.error('Upload error:', err);
      alert('Resim yüklenirken bir hata oluştu.');
    } finally {
      setLoading(false);
    }
  };

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
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
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
            {loading ? (
                <div className="p-8 text-center text-gray-500">Yükleniyor...</div>
            ) : error ? (
                <div className="p-8 text-center text-red-500">{error}</div>
            ) : filteredEvents.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                    {searchTerm ? 'Arama sonucu bulunamadı.' : 'Hiç etkinlik bulunamadı.'}
                </div>
            ) : (
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
                {filteredEvents.map((event) => (
                  <tr
                    key={event._id}
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
                          <span className="text-sm font-medium text-[#111318] dark:text-white flex items-center gap-1">
                            {event.title}
                            {event.isFeatured && (
                              <span className="material-symbols-outlined text-yellow-500 text-[16px]" title="Öne Çıkan Etkinlik">
                                star
                              </span>
                            )}
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
                        className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border ${getStatusColor(event.status)}`}
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
                        onClick={() => handleDeleteClick(event._id)}
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
            )}
          </div>
          {/* Pagination */}
          <div className="p-4 border-t border-[#e5e7eb] dark:border-[#2d3748] flex items-center justify-between">
            <span className="text-sm text-[#616f89] dark:text-gray-400">
              Toplam {filteredEvents.length} etkinlik gösteriliyor
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
                Etkinlik Görseli
              </label>
              <div className="flex items-center gap-4">
                {newEvent.image && (
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    <img 
                      src={newEvent.image} 
                      alt="Preview" 
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => setNewEvent({ ...newEvent, image: '' })}
                      className="absolute top-0 right-0 p-0.5 bg-red-500 text-white rounded-bl-lg hover:bg-red-600"
                    >
                      <span className="material-symbols-outlined text-[14px]">close</span>
                    </button>
                  </div>
                )}
                <label className="flex-1 cursor-pointer">
                  <div className="flex flex-col items-center justify-center w-full h-20 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <span className="material-symbols-outlined text-gray-400 mb-1 text-2xl">
                        add_photo_alternate
                      </span>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Yüklemek için tıklayın</span>
                      </p>
                    </div>
                    <input 
                      type="file" 
                      className="hidden" 
                      accept="image/*"
                      onChange={(e) => handleImageChange(e)}
                    />
                  </div>
                </label>
              </div>
            </div>
          </div>
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

          {/* Status field removed as per request */}
          
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="isFeatured"
              checked={newEvent.isFeatured}
              onChange={(e) =>
                setNewEvent({ ...newEvent, isFeatured: e.target.checked })
              }
              className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-primary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="isFeatured"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Öne Çıkan Etkinlik (Hero Alanında Göster)
            </label>
          </div>

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
              onClick={handleAddSubmit}
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
                Etkinlik Görseli
              </label>
              <div className="flex items-center gap-4">
                {selectedEvent?.image && (
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    <img 
                      src={selectedEvent.image} 
                      alt="Preview" 
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => setSelectedEvent({ ...selectedEvent, image: '' })}
                      className="absolute top-0 right-0 p-0.5 bg-red-500 text-white rounded-bl-lg hover:bg-red-600"
                    >
                      <span className="material-symbols-outlined text-[14px]">close</span>
                    </button>
                  </div>
                )}
                <label className="flex-1 cursor-pointer">
                  <div className="flex flex-col items-center justify-center w-full h-20 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <span className="material-symbols-outlined text-gray-400 mb-1 text-2xl">
                        add_photo_alternate
                      </span>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Değiştirmek için tıklayın</span>
                      </p>
                    </div>
                    <input 
                      type="file" 
                      className="hidden" 
                      accept="image/*"
                      onChange={(e) => handleImageChange(e, true)}
                    />
                  </div>
                </label>
              </div>
            </div>
          </div>
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

          {/* Status field removed as per request */}

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="editIsFeatured"
              checked={selectedEvent?.isFeatured || false}
              onChange={(e) =>
                setSelectedEvent({
                  ...selectedEvent,
                  isFeatured: e.target.checked,
                })
              }
              className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-primary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="editIsFeatured"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Öne Çıkan Etkinlik (Hero Alanında Göster)
            </label>
          </div>

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
              onClick={handleEditSubmit}
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
