'use client';

import { useState } from 'react';
import Modal from '@/components/Modal';
import CustomSelect from '@/components/CustomSelect';

export default function UsersPage() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Ayşe Demir',
      email: 'ayse.demir@example.com',
      role: 'Öğrenci',
      department: 'Bilgisayar Mühendisliği',
      status: 'Aktif',
      statusColor:
        'text-green-700 bg-green-50 dark:text-green-300 dark:bg-green-900/30 border-green-200 dark:border-green-900',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDc1foDH1oFwPCW4CVwiruf_y3nktHtrOU6WWQJT9WeJW7XuCkWZp3JBQC19HaKIzqoV10CvxsZO3O19UeUgfOA4jltWk-TbPPGqw6joOMix5uzAN4_ezuQPQB_HmnpnLxj0jYyRvPR8cQ8tv0ZHnGDILyxC5mKj0gGDj2jCm9YUbOtOr6IdYybRbPWuIQh3ANwH4r4eEebyNv_hhGBL2by8OjAhsQrPbz-Woxv-8gN3p-GFg3f5p_iT__kkgzqd6Dsdz5ZZuoyFPI',
      lastActive: 'Bugün, 09:30',
      chapter: 'Computer Society',
      phone: '0555 123 45 67',
    },
    {
      id: 2,
      name: 'Mehmet Can',
      email: 'mehmet.can@example.com',
      role: 'Öğrenci',
      department: 'Elektrik-Elektronik Müh.',
      status: 'Pasif',
      statusColor:
        'text-orange-700 bg-orange-50 dark:text-orange-300 dark:bg-orange-900/30 border-orange-200 dark:border-orange-900',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBKevsPmYkmtveANiQBL6-Ppev31nGdTyuPHepbl17QaPSWQ2G0iwpgGnx6ZFFbrp7bJWNa4u8bZR3Kb0X5LzEKb3plxZiFKfMqmIkiE6tJNTJNs3_ybL2PO_dIs8z7DYU02OZi-aUaCWdO5nI9wbY2pLw4I4Pzswj0LIbVOyZzXAwV8wNLpm5xvWqE65HGIHOzNY3OICHk5njgE12fcPxD8eic0okr3arbiwRc6BCo3hMySqFKNnXHojG7K_3F-YvYpwOzBw4LTCM',
      lastActive: 'Dün, 14:20',
      chapter: 'PES',
      phone: '0555 987 65 43',
    },
    {
      id: 3,
      name: 'Zeynep Yılmaz',
      email: 'zeynep.yilmaz@example.com',
      role: 'Topluluk Başkanı',
      department: 'Endüstri Mühendisliği',
      status: 'Aktif',
      statusColor:
        'text-green-700 bg-green-50 dark:text-green-300 dark:bg-green-900/30 border-green-200 dark:border-green-900',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDWtmrHHdD_TSq7X2Hqdh1hcfig9sNYr3RJ-8lezWWTnqK4jo0EgWx5cgfZfsgHLyp9scG-hE_cZ5kVzVAhPlYmMWjSCzNDzKCFu1MhJrdjk-lkxUIv4vpUBXKOY3VGub1js1dmMA6whHsSrgV22GymUGzbaipZZ00gdvdCHpw9ISSMydMCdIp2ci1dmyW6Msge5XvcyM68rXQA9fAHgREYfRgKW0k6mbFftWTnGUYQcuH07PA44uA8gXvoYyU0cVS3e2q2cs-RRiA',
      lastActive: '12 Mayıs, 18:45',
      chapter: 'WIE',
      phone: '0555 555 55 55',
    },
    {
      id: 4,
      name: 'Burak Şen',
      email: 'burak.sen@example.com',
      role: 'Öğrenci',
      department: 'Makine Mühendisliği',
      status: 'Yasaklı',
      statusColor:
        'text-red-700 bg-red-50 dark:text-red-300 dark:bg-red-900/30 border-red-200 dark:border-red-900',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC1NN0OEd7Rg-qsi1zWmufBQWLSjb7x2Mvhz_xonCMjPdmcnmkXfnHAxzoVsngOalW_e5RiORRJDlttl7fJlw9M0jqSktnOA2g7VxQQvWOCHakAFSoCEJkbsUpDSjj0MzXFasUvsME1d4Y1wRjEiGtQUUbUpxLTSwNZcM0xiRpdD93Vwp2VXiNV45VoAErJV08UT7YmP4Zur-MgKYrl6aejFtDbIrxsX1eJUW09wBbkIkAt9sQ9mMDLz61rMwnVIgEQuDpSYpDAuqM',
      lastActive: '11 Mayıs, 09:12',
      chapter: 'RAS',
      phone: '0500 000 00 00',
    },
    {
      id: 5,
      name: 'Elif Kaya',
      email: 'elif.kaya@example.com',
      role: 'Öğrenci',
      department: 'Mimarlık',
      status: 'Aktif',
      statusColor:
        'text-green-700 bg-green-50 dark:text-green-300 dark:bg-green-900/30 border-green-200 dark:border-green-900',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD3wWdi79707nIkCIPNS0UxH6ZIEPfJPIi8GTR6aO7p9WgSwnUucvJ5LERbiYnc4tYQGZQsAOIwWvamOozpXogvt1AEkLLzSEKAXz3e2IkKhIl5YrykB7LNM-dNwhEvqHz_8so6u7xU1eIvA3gpwOXg4irN6MdPgOjrq2FFY8v-AECnV8xMyA5hhP7xZAYFaJ3otxlKU2gLCohNUajH9VplKXyU_c_gxhvpoL0oZ-Hc-7W2iSLctckDexuzRBM81j5MO_4wrdJMOzs',
      lastActive: 'Bugün, 10:15',
      chapter: 'CS',
      phone: '0532 123 45 67',
    },
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

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

  const handleEditClick = (user) => {
    setSelectedUser({ ...user });
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = (userId) => {
    if (confirm('Kullanıcıyı silmek istediğinize emin misiniz?')) {
      setUsers(users.filter((u) => u.id !== userId));
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
  const chapters = ['Computer Society', 'PES', 'WIE', 'RAS', 'CS'];
  const statuses = ['Aktif', 'Beklemede', 'Yasaklı'];

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
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="hover:bg-background-light dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div
                          className="bg-gray-200 size-10 rounded-full bg-cover border border-gray-200 dark:border-gray-700"
                          style={{
                            backgroundImage: `url("${user.image}")`,
                          }}
                        ></div>
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
                      {user.lastActive}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border ${user.statusColor}`}
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
                        onClick={() => handleDeleteClick(user.id)}
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
              options={chapters}
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
            <div
              className="w-20 h-20 rounded-full bg-gray-200 dark:bg-gray-700 bg-cover bg-center border-2 border-primary/20"
              style={{ backgroundImage: `url("${selectedUser?.image}")` }}
            ></div>
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
              options={chapters}
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
