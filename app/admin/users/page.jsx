'use client';

import { useState, useEffect } from 'react';
import Modal from '@/components/Modal';
import CustomSelect from '@/components/CustomSelect';


export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Helper to get status color
  const getStatusColor = (status) => {
    switch (status) {
      case 'Aktif':
        return 'text-green-700 bg-green-50 dark:text-green-300 dark:bg-green-900/30 border-green-200 dark:border-green-900';
      case 'Pasif':
        return 'text-orange-700 bg-orange-50 dark:text-orange-300 dark:bg-orange-900/30 border-orange-200 dark:border-orange-900';
      case 'Yasaklı':
        return 'text-red-700 bg-red-50 dark:text-red-300 dark:bg-red-900/30 border-red-200 dark:border-red-900';
      default:
        return 'text-gray-700 bg-gray-50 dark:text-gray-300 dark:bg-gray-900/30 border-gray-200 dark:border-gray-900';
    }
  };

  const [chaptersList, setChaptersList] = useState([]);

  // Fetch Users & Chapters
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [usersRes, chaptersRes] = await Promise.all([
        fetch('/api/users'),
        fetch('/api/chapters'),
      ]);

      const usersData = await usersRes.json();
      const chaptersData = await chaptersRes.json();

      if (usersData.success) {
        setUsers(usersData.data);
      }
      if (chaptersData.success) {
        setChaptersList(chaptersData.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // State for Add User Form
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    role: 'Öğrenci',
    department: 'Bilgisayar Mühendisliği',
    chapter: 'Computer Society',
    phone: '',
    password: '',
    username: '',
    status: 'Aktif',
  });

  // State for Edit User Form
  const [selectedUser, setSelectedUser] = useState(null);

  const handleAddSubmit = async () => {
    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
      const data = await res.json();
      if (data.success) {
        setIsAddModalOpen(false);
        fetchData(); // Refresh list
        // Reset form
        setNewUser({
          name: '',
          email: '',
          role: 'Öğrenci',
          department: 'Bilgisayar Mühendisliği',
          chapter: '', // Reset to empty or default
          phone: '',
          password: '',
          username: '',
          status: 'Aktif',
        });
      } else {
        alert('Hata: ' + data.error);
      }
    } catch (error) {
      console.error('Error adding user:', error);
      alert('Bir hata oluştu.');
    }
  };

  const handleEditClick = (user) => {
    setSelectedUser({ ...user });
    setIsEditModalOpen(true);
  };

  const handleUpdateSubmit = async () => {
    if (!selectedUser) return;
    try {
      const res = await fetch(`/api/users/${selectedUser._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedUser),
      });
      const data = await res.json();
      if (data.success) {
        setIsEditModalOpen(false);
        fetchData();
      } else {
        alert('Hata: ' + data.error);
      }
    } catch (error) {
      console.error('Error updating user:', error);
      alert('Bir hata oluştu.');
    }
  };

  const handleDeleteClick = async (userId) => {
    if (confirm('Kullanıcıyı silmek istediğinize emin misiniz?')) {
      try {
        const res = await fetch(`/api/users/${userId}`, {
          method: 'DELETE',
        });
        const data = await res.json();
        if (data.success) {
          fetchData();
        } else {
          alert('Hata: ' + data.error);
        }
      } catch (error) {
        console.error('Error deleting user:', error);
        alert('Bir hata oluştu.');
      }
    }
  };

  const roles = ['Öğrenci', 'Topluluk Başkanı', 'Yönetici'];
  const departments = [
    'Bilgisayar Mühendisliği',
    'Elektrik-Elektronik Müh.',
    'Makine Mühendisliği',
    'Endüstri Mühendisliği',
    'Mimarlık',
  ];
  const chapterNames = chaptersList.map((c) => c.name);
  const statuses = ['Aktif', 'Beklemede', 'Yasaklı', 'Pasif'];

  return (
    <main className="flex-1 overflow-y-auto p-8 scroll-smooth text-gray-900 dark:text-white">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
        <div className="flex flex-wrap justify-between items-end gap-3">
          <div className="flex flex-col gap-1">
            <h2 className="text-[#111318] dark:text-white tracking-tight text-[28px] font-bold leading-tight">
              Kullanıcı Yönetimi
            </h2>
            <p className="text-[#616f89] dark:text-gray-400 text-sm font-normal">
              Sistemdeki kayıtlı kullanıcıları görüntüleyin ve yönetin.
            </p>
          </div>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="bg-primary hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg flex items-center gap-2 transition-colors shadow-sm shadow-blue-500/30"
          >
            <span className="material-symbols-outlined text-[18px]">
              person_add
            </span>
            Yeni Kullanıcı Ekle
          </button>
        </div>

        <div className="bg-white dark:bg-[#1a202c] rounded-xl border border-[#e5e7eb] dark:border-[#2d3748] shadow-sm flex flex-col mb-8">
          <div className="p-6 border-b border-[#e5e7eb] dark:border-[#2d3748] flex flex-wrap gap-4 justify-between items-center">
            <div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="İsim, e-posta veya rol ara..."
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
                    Kullanıcı
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#616f89] dark:text-gray-400 uppercase tracking-wider">
                    Rol
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#616f89] dark:text-gray-400 uppercase tracking-wider">
                    Bölüm
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#616f89] dark:text-gray-400 uppercase tracking-wider">
                    Son Görülme
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
                    <td
                      colSpan="6"
                      className="px-6 py-4 text-center text-sm text-gray-500"
                    >
                      Yükleniyor...
                    </td>
                  </tr>
                ) : users.length === 0 ? (
                  <tr>
                    <td
                      colSpan="6"
                      className="px-6 py-4 text-center text-sm text-gray-500"
                    >
                      Kullanıcı bulunamadı.
                    </td>
                  </tr>
                ) : (
                  users.map((user) => (
                    <tr
                      key={user._id}
                      className="hover:bg-background-light dark:hover:bg-gray-800/50 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <div className={`flex items-center justify-center size-10 rounded-full border ${
                            user.role === 'Yönetici' 
                              ? 'bg-primary/10 text-primary border-primary/20' 
                              : 'bg-gray-100 text-gray-500 border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400'
                          }`}>
                            <span className="material-symbols-outlined text-[20px]">
                              {user.role === 'Yönetici' ? 'admin_panel_settings' : 'person'}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm font-medium text-[#111318] dark:text-white">
                              {user.name}
                            </span>
                            <span className="text-xs text-[#616f89] dark:text-gray-400">
                              {user.email}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-[#111318] dark:text-white">
                          {user.role}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-[#616f89] dark:text-gray-300 max-w-[200px] truncate">
                        {user.department}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#616f89] dark:text-gray-400">
                        {user.lastActive
                          ? new Date(user.lastActive).toLocaleDateString(
                              'tr-TR',
                            )
                          : '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border ${getStatusColor(user.status)}`}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <button
                          onClick={() => handleEditClick(user)}
                          className="text-gray-400 hover:text-primary transition-colors p-1"
                        >
                          <span className="material-symbols-outlined text-[20px]">
                            edit
                          </span>
                        </button>
                        <button
                          onClick={() => handleDeleteClick(user._id)}
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
          {/* Pagination */}
          <div className="p-4 border-t border-[#e5e7eb] dark:border-[#2d3748] flex items-center justify-between">
            <span className="text-sm text-[#616f89] dark:text-gray-400">
              Toplam {users.length} kullanıcı gösteriliyor
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

      {/* Add User Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Yeni Kullanıcı Ekle"
      >
        <form className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Ad Soyad
              </label>
              <input
                type="text"
                value={newUser.name}
                onChange={(e) =>
                  setNewUser({ ...newUser, name: e.target.value })
                }
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white"
                placeholder="Örn: Ahmet Yılmaz"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Kullanıcı Adı
              </label>
              <input
                type="text"
                value={newUser.username}
                onChange={(e) =>
                  setNewUser({ ...newUser, username: e.target.value })
                }
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white"
                placeholder="Örn: ahmetyilmaz"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                E-posta
              </label>
              <input
                type="email"
                value={newUser.email}
                onChange={(e) =>
                  setNewUser({ ...newUser, email: e.target.value })
                }
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white"
                placeholder="Örn: ahmet@ornek.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Telefon Numarası
              </label>
              <input
                type="tel"
                value={newUser.phone}
                onChange={(e) =>
                  setNewUser({ ...newUser, phone: e.target.value })
                }
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white"
                placeholder="Örn: 0555 123 45 67"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <CustomSelect
              label="Bölüm"
              options={departments}
              value={newUser.department}
              onChange={(val) => setNewUser({ ...newUser, department: val })}
            />
            <CustomSelect
              label="Chapter"
              options={chapterNames}
              value={newUser.chapter}
              onChange={(val) => setNewUser({ ...newUser, chapter: val })}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Parola
              </label>
              <input
                type="password"
                value={newUser.password}
                onChange={(e) =>
                  setNewUser({ ...newUser, password: e.target.value })
                }
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white"
                placeholder="********"
              />
            </div>
            <CustomSelect
              label="Rol"
              options={roles}
              value={newUser.role}
              onChange={(val) => setNewUser({ ...newUser, role: val })}
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

      {/* Edit User Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Kullanıcı Düzenle"
      >
        <form className="flex flex-col gap-4">
          <div className="flex justify-center mb-2">
            <div className={`flex items-center justify-center w-20 h-20 rounded-full border-2 ${
              selectedUser?.role === 'Yönetici' 
                ? 'bg-primary/10 text-primary border-primary/20' 
                : 'bg-gray-100 text-gray-500 border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400'
            }`}>
              <span className="material-symbols-outlined text-[40px]">
                {selectedUser?.role === 'Yönetici' ? 'admin_panel_settings' : 'person'}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Ad Soyad
              </label>
              <input
                type="text"
                value={selectedUser?.name || ''}
                onChange={(e) =>
                  setSelectedUser({ ...selectedUser, name: e.target.value })
                }
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Kullanıcı Adı
              </label>
              <input
                type="text"
                value={selectedUser?.username || ''}
                onChange={(e) =>
                  setSelectedUser({ ...selectedUser, username: e.target.value })
                }
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white"
                placeholder="Örn: ahmetyilmaz"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                E-posta
              </label>
              <input
                type="email"
                value={selectedUser?.email || ''}
                onChange={(e) =>
                  setSelectedUser({ ...selectedUser, email: e.target.value })
                }
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Telefon Numarası
              </label>
              <input
                type="tel"
                value={selectedUser?.phone || ''}
                onChange={(e) =>
                  setSelectedUser({ ...selectedUser, phone: e.target.value })
                }
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white"
                placeholder="Örn: 0555 123 45 67"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <CustomSelect
              label="Bölüm"
              options={departments}
              value={selectedUser?.department || ''}
              onChange={(val) =>
                setSelectedUser({ ...selectedUser, department: val })
              }
            />
            <CustomSelect
              label="Chapter"
              options={chapterNames}
              value={selectedUser?.chapter || ''}
              onChange={(val) =>
                setSelectedUser({ ...selectedUser, chapter: val })
              }
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Parola
              </label>
              <input
                type="password"
                value={selectedUser?.password || ''}
                onChange={(e) =>
                  setSelectedUser({ ...selectedUser, password: e.target.value })
                }
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white"
                placeholder="********"
              />
            </div>
            <CustomSelect
              label="Rol"
              options={roles}
              value={selectedUser?.role || ''}
              onChange={(val) =>
                setSelectedUser({ ...selectedUser, role: val })
              }
            />
          </div>
          {/* Status Update for Edit */}
          <div>
            <CustomSelect
              label="Durum"
              options={statuses}
              value={selectedUser?.status || ''}
              onChange={(val) =>
                setSelectedUser({ ...selectedUser, status: val })
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
