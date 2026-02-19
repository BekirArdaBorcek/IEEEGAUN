'use client';

import { useState, useEffect } from 'react';
import Modal from '@/components/Modal';
import CustomSelect from '@/components/CustomSelect';

export default function ChaptersPage() {
  const [chapters, setChapters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Status Colors Helper
  const getStatusColor = (status) => {
    switch (status) {
      case 'Aktif':
        return 'text-green-700 bg-green-50 dark:text-green-300 dark:bg-green-900/30 border-green-200 dark:border-green-900';
      case 'Pasif':
        return 'text-gray-700 bg-gray-50 dark:text-gray-300 dark:bg-gray-900/30 border-gray-200 dark:border-gray-900';
      case 'Askıda':
        return 'text-yellow-700 bg-yellow-50 dark:text-yellow-300 dark:bg-yellow-900/30 border-yellow-200 dark:border-yellow-900';
      default:
        return 'text-gray-700 bg-gray-50 dark:text-gray-300 dark:bg-gray-900/30 border-gray-200 dark:border-gray-900';
    }
  };

  // Fetch Chapters
  const fetchChapters = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/chapters');
      const data = await res.json();
      if (data.success) {
        setChapters(data.data);
      } else {
        console.error('Failed to fetch chapters:', data.error);
      }
    } catch (error) {
      console.error('Error fetching chapters:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchChapters();
  }, []);

  // State for Add Chapter
  const [newChapter, setNewChapter] = useState({
    name: '',
    shortName: '',
    description: '',
    president: '',
    status: 'Aktif',
    color: '#3b82f6',
  });

  // State for Edit Chapter
  const [selectedChapter, setSelectedChapter] = useState(null);

  const handleAddSubmit = async () => {
    try {
      const res = await fetch('/api/chapters', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newChapter),
      });
      const data = await res.json();
      if (data.success) {
        setIsAddModalOpen(false);
        fetchChapters();
        setNewChapter({
          name: '',
          shortName: '',
          description: '',
          president: '',
          status: 'Aktif',
          color: '#3b82f6',
        });
      } else {
        alert('Hata: ' + data.error);
      }
    } catch (error) {
      console.error('Error adding chapter:', error);
      alert('Bir hata oluştu.');
    }
  };

  const handleEditClick = (chapter) => {
    setSelectedChapter({ ...chapter });
    setIsEditModalOpen(true);
  };

  const handleUpdateSubmit = async () => {
    if (!selectedChapter) return;
    try {
      const res = await fetch(`/api/chapters/${selectedChapter._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(selectedChapter),
      });
      const data = await res.json();
      if (data.success) {
        setIsEditModalOpen(false);
        fetchChapters();
      } else {
        alert('Hata: ' + data.error);
      }
    } catch (error) {
      console.error('Error updating chapter:', error);
      alert('Bir hata oluştu.');
    }
  };

  const handleDeleteClick = async (id) => {
    if (confirm('Bu chapterı silmek istediğinize emin misiniz?')) {
      try {
        const res = await fetch(`/api/chapters/${id}`, {
          method: 'DELETE',
        });
        const data = await res.json();
        if (data.success) {
          fetchChapters();
        } else {
          alert('Hata: ' + data.error);
        }
      } catch (error) {
        console.error('Error deleting chapter:', error);
        alert('Bir hata oluştu.');
      }
    }
  };

  const statuses = ['Aktif', 'Pasif', 'Askıda'];

  return (
    <main className="flex-1 overflow-y-auto p-8 scroll-smooth text-gray-900 dark:text-white">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
        <div className="flex flex-wrap justify-between items-end gap-3">
          <div className="flex flex-col gap-1">
            <h2 className="text-[#111318] dark:text-white tracking-tight text-[28px] font-bold leading-tight">
              Chapter Yönetimi
            </h2>
            <p className="text-[#616f89] dark:text-gray-400 text-sm font-normal">
              Öğrenci topluluklarını (chapter) oluşturun ve yönetin.
            </p>
          </div>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="bg-primary hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg flex items-center gap-2 transition-colors shadow-sm shadow-blue-500/30"
          >
            <span className="material-symbols-outlined text-[18px]">
              add_circle
            </span>
            Yeni Chapter Ekle
          </button>
        </div>

        <div className="bg-white dark:bg-[#1a202c] rounded-xl border border-[#e5e7eb] dark:border-[#2d3748] shadow-sm flex flex-col mb-8">
          <div className="p-6 border-b border-[#e5e7eb] dark:border-[#2d3748] flex flex-wrap gap-4 justify-between items-center">
            {/* Simple filter/search bar similar to users page */}
            <div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Chapter ara..."
                  className="pl-10 pr-4 py-2 border border-[#dbdfe6] dark:border-[#2d3748] rounded-lg text-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 w-full md:w-80"
                />
                <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-400 text-[18px]">
                  search
                </span>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#f8fafc] dark:bg-[#2d3748]/50 border-b border-[#e5e7eb] dark:border-[#2d3748]">
                  <th className="px-6 py-4 text-xs font-semibold text-[#616f89] dark:text-gray-400 uppercase tracking-wider">
                    Chapter Adı
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#616f89] dark:text-gray-400 uppercase tracking-wider">
                    Başkan
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#616f89] dark:text-gray-400 uppercase tracking-wider">
                    Üye Sayısı
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
                {isLoading ? (
                  <tr>
                    <td colSpan="5" className="p-4 text-center text-gray-500">
                      Yükleniyor...
                    </td>
                  </tr>
                ) : chapters.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="p-4 text-center text-gray-500">
                      Chapter bulunamadı.
                    </td>
                  </tr>
                ) : (
                  chapters.map((chapter) => (
                    <tr
                      key={chapter._id}
                      className="hover:bg-background-light dark:hover:bg-gray-800/50 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <div
                            className="size-10 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-sm"
                            style={{
                              backgroundColor: chapter.color || '#3b82f6',
                            }}
                          >
                            {chapter.shortName ||
                              chapter.name.substring(0, 2).toUpperCase()}
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm font-medium text-[#111318] dark:text-white">
                              {chapter.name}
                            </span>
                            <span className="text-xs text-[#616f89] dark:text-gray-400 max-w-[200px] truncate">
                              {chapter.description}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#616f89] dark:text-gray-400">
                        {chapter.president || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#616f89] dark:text-gray-400">
                        {chapter.memberCount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border ${getStatusColor(chapter.status)}`}
                        >
                          {chapter.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <button
                          onClick={() => handleEditClick(chapter)}
                          className="text-gray-400 hover:text-primary transition-colors p-1"
                        >
                          <span className="material-symbols-outlined text-[20px]">
                            edit
                          </span>
                        </button>
                        <button
                          onClick={() => handleDeleteClick(chapter._id)}
                          className="text-gray-400 hover:text-red-500 transition-colors p-1 ml-2"
                        >
                          <span className="material-symbols-outlined text-[20px]">
                            delete
                          </span>
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add Chapter Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Yeni Chapter Ekle"
      >
        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Chapter Adı
            </label>
            <input
              type="text"
              value={newChapter.name}
              onChange={(e) =>
                setNewChapter({ ...newChapter, name: e.target.value })
              }
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white"
              placeholder="Örn: Computer Society"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Kısa Ad (Kısaltma)
              </label>
              <input
                type="text"
                value={newChapter.shortName}
                onChange={(e) =>
                  setNewChapter({ ...newChapter, shortName: e.target.value })
                }
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white"
                placeholder="Örn: CS"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Tema Rengi
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={newChapter.color}
                  onChange={(e) =>
                    setNewChapter({ ...newChapter, color: e.target.value })
                  }
                  className="h-10 w-12 rounded cursor-pointer border-0 p-0"
                />
                <span className="text-xs text-gray-500">
                  {newChapter.color}
                </span>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Açıklama
            </label>
            <textarea
              rows="3"
              value={newChapter.description}
              onChange={(e) =>
                setNewChapter({ ...newChapter, description: e.target.value })
              }
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white resize-none"
              placeholder="Topluluk hakkında kısa bilgi..."
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Başkan (İsim)
              </label>
              <input
                type="text"
                value={newChapter.president}
                onChange={(e) =>
                  setNewChapter({ ...newChapter, president: e.target.value })
                }
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white"
                placeholder="Örn: Ali Veli"
              />
            </div>
            <CustomSelect
              label="Durum"
              options={statuses}
              value={newChapter.status}
              onChange={(val) => setNewChapter({ ...newChapter, status: val })}
            />
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
              Kaydet
            </button>
          </div>
        </form>
      </Modal>

      {/* Edit Chapter Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Chapter Düzenle"
      >
        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Chapter Adı
            </label>
            <input
              type="text"
              value={selectedChapter?.name || ''}
              onChange={(e) =>
                setSelectedChapter({ ...selectedChapter, name: e.target.value })
              }
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Kısa Ad (Kısaltma)
              </label>
              <input
                type="text"
                value={selectedChapter?.shortName || ''}
                onChange={(e) =>
                  setSelectedChapter({
                    ...selectedChapter,
                    shortName: e.target.value,
                  })
                }
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Tema Rengi
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={selectedChapter?.color || '#3b82f6'}
                  onChange={(e) =>
                    setSelectedChapter({
                      ...selectedChapter,
                      color: e.target.value,
                    })
                  }
                  className="h-10 w-12 rounded cursor-pointer border-0 p-0"
                />
                <span className="text-xs text-gray-500">
                  {selectedChapter?.color}
                </span>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Açıklama
            </label>
            <textarea
              rows="3"
              value={selectedChapter?.description || ''}
              onChange={(e) =>
                setSelectedChapter({
                  ...selectedChapter,
                  description: e.target.value,
                })
              }
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white resize-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Başkan (İsim)
              </label>
              <input
                type="text"
                value={selectedChapter?.president || ''}
                onChange={(e) =>
                  setSelectedChapter({
                    ...selectedChapter,
                    president: e.target.value,
                  })
                }
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white"
              />
            </div>
            <CustomSelect
              label="Durum"
              options={statuses}
              value={selectedChapter?.status || ''}
              onChange={(val) =>
                setSelectedChapter({ ...selectedChapter, status: val })
              }
            />
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
              onClick={handleUpdateSubmit}
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
