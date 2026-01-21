'use client';

import Modal from '@/components/Modal';
import CustomSelect from '@/components/CustomSelect';
import { useState } from 'react';

export default function RewardsPage() {
  const [activeTab, setActiveTab] = useState('rewards');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedReward, setSelectedReward] = useState(null);

  const [newReward, setNewReward] = useState({
    name: '',
    category: 'Merch',
    description: '',
    points: '',
    stock: '',
    totalStock: '',
    status: 'Aktif',
    image: '',
  });

  const categories = [
    'Merch',
    'Yiyecek & İçecek',
    'Eğitim',
    'Etkinlik',
    'Diğer',
  ];
  const statuses = ['Aktif', 'Pasif', 'Tükendi'];

  const [rewards, setRewards] = useState([
    {
      id: 1,
      name: 'Üniversite Hoodie',
      category: 'Merch',
      description: 'Standart Logo, M-L-XL',
      points: 2500,
      stock: 12,
      totalStock: 50,
      status: 'Aktif',
      statusColor:
        'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCIkLUaL_WwAwIUM-0tm2ZUybRNkkaI9QNHC-nPB1lcvrcVm_W8WR_rEwJTi50KeNR_i-E8HSf7b4ahiLpbmQoie8p6SMP_qj_60sz_Znnkx6REYWOCYJ3HokdxcfTi6XhkDuCulQ-4uDjWOyY_V52o7EZTNEIVTnpaIb3K0NMnCnycMFWupQ0lv-3sqiTuhrUaK63_01nXUkMlJQbg1YudxsRmVaxe2inqCYdPAgGgsMpJ2KeprkN9GEtmLbln7aax3BF5SiIeS54',
      progressColor: 'bg-orange-500',
      progressWidth: '24%',
    },
    {
      id: 2,
      name: 'Bedava Kahve',
      category: 'Yiyecek & İçecek',
      description: 'Kampüs Kantinlerinde',
      points: 450,
      stock: 145,
      totalStock: 500,
      status: 'Aktif',
      statusColor:
        'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCg5IIMMAdjoU6rGT-LuhspsS7HHecKtB9jyVhTXjrC7TG9Y8VNhjhFFdvHczR5pFAoccFQGBJCduLCMfkOAdkPltg9sf5uN139o7WKAUhrBdPy58k4dAtPmabp2x_Z_3VAgF-hkviMB1zyP149m4D4pnjK6mBh9rqm9Ipvg4ObHO3E5KY3Lezb_RZ-9jeueyHPeJ78zq-oFjCuDb8WXA47TF4YQMe2PKvT9wFGebgqe01Ylmwv5lFniGXAzZVggVvCA1zIYzIVjUY',
      progressColor: 'bg-green-500',
      progressWidth: '29%',
    },
    {
      id: 3,
      name: '%20 Kitap İndirimi',
      category: 'Eğitim',
      description: 'Merkez Kitabevi',
      points: 800,
      stock: 'Sınırsız',
      totalStock: null,
      status: 'Pasif',
      statusColor:
        'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAeBlUjs1JKFz6O-edCq1JHSpIVsmBRT5eea3_VxRmoJV5GdCH4-tZ6tR_OPiePNNHNCToJrCN6kPU8S156PLsx13DipYFONF7-5Qj8VsRCQHxVyEdMXJD7ZzbKQgCBDUZ865ZSx6-nA94RiJ9VP2g3ODEEg2pmb53kPbTMhaGyL5-eClrWG2vBwfgZltWjxQuOJAYHBjFIzuQkvwbttyWQWJf7eXP__dUPQo_k5b6k4miQ4rSJJ0k6g3FjCDEUj_TH-QgmMpEc1c4',
      progressColor: 'bg-blue-500',
      progressWidth: '100%',
    },
    {
      id: 4,
      name: 'Bahar Şenliği VIP',
      category: 'Etkinlik',
      description: 'Özel Alan Girişi',
      points: 5000,
      stock: 0,
      totalStock: 10,
      status: 'Tükendi',
      statusColor:
        'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC2JYwQqR4UflO511R4vfHeIQy1QQOBmKUlzdn8eEpKe_L4QWqvYHl8O2qP9wC1yRtHvhKRf9tQsgXGuzdD5Ywy_EN_LT5zoOjM-dunoqJZAI7VtFPMe_N3wPxDo8BSiL1b4rFxvVQM9OKdhzGOzan3J2dWwnXBgryRgSjv0VM7klORCOviv61My6tv__HzewHDleXPgpVdESxVKmUaqrmAQ6inS0mJJQfPeYkS2enHifW50TQa973ojGBA2OGgEGA20gtxAofEHqw',
      progressColor: 'bg-red-500',
      progressWidth: '0%',
    },
  ]);

  const handleEditClick = (reward) => {
    setSelectedReward({ ...reward });
    setIsEditModalOpen(true);
  };

  const handleImageUpload = (e, isEdit = false) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (isEdit) {
          setSelectedReward({ ...selectedReward, image: reader.result });
        } else {
          setNewReward({ ...newReward, image: reader.result });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <main className="flex-1 overflow-y-auto p-8 scroll-smooth text-gray-900 dark:text-white">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
        {/* Page Heading & Actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-[#111318] dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">
              Ödüller & Seviyeler
            </h1>
            <p className="text-[#616f89] dark:text-gray-400 text-base font-normal">
              Ödül envanterini yönetin ve öğrenci seviye sistemini yapılandırın.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="flex items-center justify-center gap-2 h-10 px-5 bg-primary text-white rounded-lg text-sm font-bold shadow-md hover:bg-blue-700 transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">add</span>
              <span>Yeni Ödül Ekle</span>
            </button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-1 p-5 rounded-xl border border-[#e5e7eb] bg-white dark:bg-[#1a202c] dark:border-[#2d3748] shadow-sm">
            <div className="flex items-center gap-2 text-[#616f89] dark:text-gray-400 mb-1">
              <span className="material-symbols-outlined text-[20px]">
                inventory_2
              </span>
              <p className="text-sm font-medium">Aktif Ödüller</p>
            </div>
            <p className="text-[#111318] dark:text-white text-2xl font-bold">
              24
            </p>
            <div className="text-xs text-green-600 flex items-center gap-1 mt-1">
              <span className="material-symbols-outlined text-[16px]">
                trending_up
              </span>
              <span>Bu ay +3 yeni eklendi</span>
            </div>
          </div>
          <div className="flex flex-col gap-1 p-5 rounded-xl border border-[#e5e7eb] bg-white dark:bg-[#1a202c] dark:border-[#2d3748] shadow-sm">
            <div className="flex items-center gap-2 text-[#616f89] dark:text-gray-400 mb-1">
              <span className="material-symbols-outlined text-[20px]">
                stars
              </span>
              <p className="text-sm font-medium">Dağıtılan Toplam Puan</p>
            </div>
            <p className="text-[#111318] dark:text-white text-2xl font-bold">
              1.2M
            </p>
            <div className="text-xs text-[#616f89] mt-1">
              Geçen haftaya göre %12 artış
            </div>
          </div>
          <div className="flex flex-col gap-1 p-5 rounded-xl border border-[#e5e7eb] bg-white dark:bg-[#1a202c] dark:border-[#2d3748] shadow-sm">
            <div className="flex items-center gap-2 text-[#616f89] dark:text-gray-400 mb-1">
              <span className="material-symbols-outlined text-[20px]">
                leaderboard
              </span>
              <p className="text-sm font-medium">Ortalama Kullanıcı Seviyesi</p>
            </div>
            <p className="text-[#111318] dark:text-white text-2xl font-bold">
              Seviye 3
            </p>
            <div className="text-xs text-[#616f89] mt-1">Max Seviye 5</div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="border-b border-[#dbdfe6] dark:border-[#4a5568]">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab('rewards')}
              className={`group flex items-center gap-2 border-b-[3px] pb-3 pt-2 ${
                activeTab === 'rewards'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-[#616f89] hover:text-[#111318] dark:hover:text-gray-200'
              } transition-colors`}
            >
              <span
                className={`material-symbols-outlined text-[20px] ${activeTab !== 'rewards' ? 'group-hover:text-[#111318]' : ''}`}
              >
                list_alt
              </span>
              <p className="text-sm font-bold tracking-[0.015em]">
                Ödül Listesi
              </p>
            </button>
            <button
              onClick={() => setActiveTab('levels')}
              className={`group flex items-center gap-2 border-b-[3px] pb-3 pt-2 ${
                activeTab === 'levels'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-[#616f89] hover:text-[#111318] dark:hover:text-gray-200'
              } transition-colors`}
            >
              <span
                className={`material-symbols-outlined text-[20px] ${activeTab !== 'levels' ? 'group-hover:text-[#111318]' : ''}`}
              >
                tune
              </span>
              <p className="text-sm font-medium tracking-[0.015em]">
                Seviye Ayarları
              </p>
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`group flex items-center gap-2 border-b-[3px] pb-3 pt-2 ${
                activeTab === 'history'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-[#616f89] hover:text-[#111318] dark:hover:text-gray-200'
              } transition-colors`}
            >
              <span
                className={`material-symbols-outlined text-[20px] ${activeTab !== 'history' ? 'group-hover:text-[#111318]' : ''}`}
              >
                history
              </span>
              <p className="text-sm font-medium tracking-[0.015em]">
                Kullanıcı Geçmişi
              </p>
            </button>
          </div>
        </div>

        {/* Content Area: Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Rewards List (Main) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-white dark:bg-[#1a202c] p-4 rounded-xl border border-[#e5e7eb] dark:border-[#2d3748] shadow-sm">
              <div className="relative flex-1 min-w-[200px]">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#9ca3af]">
                  search
                </span>
                <input
                  className="w-full pl-10 pr-4 py-2 bg-[#f9fafb] dark:bg-[#2d3748] border border-[#e5e7eb] dark:border-[#4a5568] rounded-lg text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none text-[#111318] dark:text-white"
                  placeholder="Ödül ara..."
                  type="text"
                />
              </div>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-[#1a202c] border border-[#e5e7eb] dark:border-[#4a5568] rounded-lg text-sm font-medium text-[#616f89] hover:bg-gray-50 dark:hover:bg-gray-700">
                  <span className="material-symbols-outlined text-[18px]">
                    filter_list
                  </span>
                  Filtrele
                </button>
                <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-[#1a202c] border border-[#e5e7eb] dark:border-[#4a5568] rounded-lg text-sm font-medium text-[#616f89] hover:bg-gray-50 dark:hover:bg-gray-700">
                  <span className="material-symbols-outlined text-[18px]">
                    sort
                  </span>
                  Sırala
                </button>
              </div>
            </div>

            {/* Rewards Table */}
            <div className="bg-white dark:bg-[#1a202c] rounded-xl border border-[#e5e7eb] dark:border-[#2d3748] shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#f9fafb] dark:bg-[#2d3748] border-b border-[#e5e7eb] dark:border-[#4a5568]">
                      <th className="py-3 px-6 text-xs font-semibold uppercase tracking-wider text-[#616f89] dark:text-gray-400">
                        Ödül
                      </th>
                      <th className="py-3 px-6 text-xs font-semibold uppercase tracking-wider text-[#616f89] dark:text-gray-400">
                        Kategori
                      </th>
                      <th className="py-3 px-6 text-xs font-semibold uppercase tracking-wider text-[#616f89] dark:text-gray-400">
                        Puan Değeri
                      </th>
                      <th className="py-3 px-6 text-xs font-semibold uppercase tracking-wider text-[#616f89] dark:text-gray-400">
                        Stok
                      </th>
                      <th className="py-3 px-6 text-xs font-semibold uppercase tracking-wider text-[#616f89] dark:text-gray-400">
                        Durum
                      </th>
                      <th className="py-3 px-6 text-right text-xs font-semibold uppercase tracking-wider text-[#616f89] dark:text-gray-400">
                        İşlemler
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e5e7eb] dark:divide-[#4a5568]">
                    {rewards.map((reward) => (
                      <tr
                        key={reward.id}
                        className="group hover:bg-gray-50 dark:hover:bg-[#323c52] transition-colors"
                      >
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-4">
                            <div
                              className="size-12 rounded-lg bg-gray-100 dark:bg-gray-700 bg-cover bg-center shrink-0 border border-gray-200"
                              style={{
                                backgroundImage: `url('${reward.image}')`,
                              }}
                            ></div>
                            <div>
                              <p className="font-semibold text-[#111318] dark:text-white">
                                {reward.name}
                              </p>
                              <p className="text-xs text-[#616f89]">
                                {reward.description}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-sm text-[#616f89] dark:text-gray-400">
                          {reward.category}
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-1 font-bold text-primary">
                            <span className="material-symbols-outlined text-[16px]">
                              stars
                            </span>
                            {reward.points}
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="w-full max-w-[80px]">
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-[#111318] dark:text-white font-medium">
                                {reward.stock}
                              </span>
                              <span className="text-[#616f89]">
                                {reward.totalStock
                                  ? `/ ${reward.totalStock}`
                                  : ''}
                              </span>
                            </div>
                            <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full ${reward.progressColor}`}
                                style={{ width: reward.progressWidth }}
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${reward.statusColor}`}
                          >
                            {reward.status}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => handleEditClick(reward)}
                              className="text-[#616f89] hover:text-primary p-1 transition-colors"
                            >
                              <span className="material-symbols-outlined text-[20px]">
                                edit
                              </span>
                            </button>
                            <button className="text-[#616f89] hover:text-red-500 p-1 transition-colors">
                              <span className="material-symbols-outlined text-[20px]">
                                delete
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-4 border-t border-[#e5e7eb] dark:border-[#4a5568] flex items-center justify-between">
                <p className="text-sm text-[#616f89]">
                  Toplam {rewards.length} sonuçtan 1-{rewards.length} arası
                  gösteriliyor
                </p>
                <div className="flex gap-2">
                  <button
                    className="px-3 py-1 border border-[#e5e7eb] dark:border-[#4a5568] rounded-lg text-sm disabled:opacity-50 text-[#616f89] dark:text-gray-400"
                    disabled
                  >
                    Önceki
                  </button>
                  <button className="px-3 py-1 border border-[#e5e7eb] dark:border-[#4a5568] rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-[#2d3748] text-[#616f89] dark:text-gray-400">
                    Sonraki
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Level Structure & Quick Actions */}
          <div className="flex flex-col gap-6">
            {/* Level Status Card */}
            <div className="bg-white dark:bg-[#1a202c] p-6 rounded-xl border border-[#e5e7eb] dark:border-[#2d3748] shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-[#111318] dark:text-white">
                  Seviye Yapısı
                </h3>
                <button className="text-sm text-primary font-medium hover:underline">
                  Düzenle
                </button>
              </div>
              <div className="relative space-y-6">
                {/* Vertical Line */}
                <div className="absolute left-[19px] top-3 bottom-3 w-0.5 bg-gray-200 dark:bg-gray-700 -z-10"></div>
                {/* Level 1 */}
                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center border-2 border-white dark:border-[#1a202c] shrink-0 font-bold z-10">
                    1
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="flex justify-between items-center mb-1">
                      <p className="font-bold text-[#111318] dark:text-white">
                        Çaylak
                      </p>
                      <span className="text-xs font-mono text-[#616f89] bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded">
                        0 XP
                      </span>
                    </div>
                    <p className="text-xs text-[#616f89]">
                      Başlangıç seviyesi. Temel rozetler açık.
                    </p>
                  </div>
                </div>
                {/* Level 2 */}
                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center border-2 border-white dark:border-[#1a202c] shrink-0 font-bold z-10">
                    2
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="flex justify-between items-center mb-1">
                      <p className="font-bold text-[#111318] dark:text-white">
                        Kaşif
                      </p>
                      <span className="text-xs font-mono text-[#616f89] bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded">
                        1000 XP
                      </span>
                    </div>
                    <p className="text-xs text-[#616f89]">
                      Ödül dükkanı erişimi. Profil çerçevesi.
                    </p>
                  </div>
                </div>
                {/* Level 3 */}
                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-full bg-blue-500 text-white flex items-center justify-center border-2 border-white dark:border-[#1a202c] shrink-0 font-bold shadow-lg shadow-blue-500/30 z-10">
                    3
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="flex justify-between items-center mb-1">
                      <p className="font-bold text-[#111318] dark:text-white">
                        Lider
                      </p>
                      <span className="text-xs font-mono text-[#616f89] bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded">
                        5000 XP
                      </span>
                    </div>
                    <p className="text-xs text-[#616f89]">
                      Topluluk kurma hakkı. Özel etkinlikler.
                    </p>
                  </div>
                </div>
                {/* Level 4 */}
                <div className="flex items-start gap-4 opacity-60">
                  <div className="size-10 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center border-2 border-white dark:border-[#1a202c] shrink-0 font-bold z-10">
                    4
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="flex justify-between items-center mb-1">
                      <p className="font-bold text-[#111318] dark:text-white">
                        Efsane
                      </p>
                      <span className="text-xs font-mono text-[#616f89] bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded">
                        15000 XP
                      </span>
                    </div>
                    <p className="text-xs text-[#616f89]">
                      VIP ödüller. Mentorluk programı.
                    </p>
                  </div>
                </div>
              </div>
              <button className="w-full mt-6 py-2 border border-dashed border-[#dbdfe6] dark:border-gray-600 rounded-lg text-sm text-[#616f89] hover:bg-gray-50 dark:hover:bg-[#2d3748] transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[18px]">
                  add
                </span>
                Yeni Seviye Tanımla
              </button>
            </div>

            {/* Recent Activity Log (Mini) */}
            <div className="bg-white dark:bg-[#1a202c] p-6 rounded-xl border border-[#e5e7eb] dark:border-[#2d3748] shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-[#111318] dark:text-white uppercase tracking-wider">
                  Son Aktiviteler
                </h3>
                <a
                  className="text-xs text-primary font-medium hover:underline"
                  href="#"
                >
                  Tümünü Gör
                </a>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-3 items-start">
                  <div
                    className="size-8 rounded-full bg-gray-200 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBC7xvrXVE-msHNsw8vRpUKYfTw9AfpWcIJi5GKKFZYkh0cS6f379BGVGiaI-Wnm-M8AaOhkf1lS1YZob9kzhZ1anZELbbFD_MtziuuM4tWQkXYFVzU_yqxaYYmka-jdc4X-GOFxeG-Z3R1TJw6FYD35eR6ZOQGhfZy1Ttd3VdCDKXF_FPMSQmQuDJy2epjdz1itYKpGTGVOL3Ews_sV9POHS1X-_LFc9jQdhsXm3ZGqqypDcbHb4nxidGg0kuGVA_jBEG9ao3Xa7c")',
                    }}
                  ></div>
                  <div>
                    <p className="text-sm text-[#111318] dark:text-white">
                      <span className="font-bold">Ahmet Y.</span> "Bedava Kahve"
                      aldı.
                    </p>
                    <p className="text-xs text-[#616f89] mt-0.5">2 dk önce</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="size-8 rounded-full bg-blue-100 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_upward
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-[#111318] dark:text-white">
                      <span className="font-bold">Elif K.</span> Seviye 3'e
                      yükseldi!
                    </p>
                    <p className="text-xs text-[#616f89] mt-0.5">15 dk önce</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div
                    className="size-8 rounded-full bg-gray-200 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBayd1n2jhc_YniSnQ3Tv4bIsoopy_EPyeaKSV1nuoEGs7bYc1eJ-79-1IziloxaU_qXuTTW_1JIq1MdK4KZG5n6OPHCTc0cax-76O8GN6rmA5t-FIz-b9mxrsFi72WSl-eoY67mwdFz5rRQH0RQ9aJ64o0vVs29DCJmVhcXJZGMK67tZKEa7Thb8dkH12eNH7_pglK1ysrXmjxrw1HWJjXnTd_MLGfq90FgISh8uFiqbOViTymSzoE15X9TVaXsr4UowTdg3vV4kI")',
                    }}
                  ></div>
                  <div>
                    <p className="text-sm text-[#111318] dark:text-white">
                      <span className="font-bold">Caner D.</span> 250 XP
                      kazandı.
                    </p>
                    <p className="text-xs text-[#616f89] mt-0.5">1 saat önce</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Reward Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Yeni Ödül Ekle"
      >
        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Görsel
            </label>
            <div className="flex justify-center">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e)}
                className="hidden"
                id="add-reward-image"
              />
              <label
                htmlFor="add-reward-image"
                className="cursor-pointer group relative flex flex-col items-center justify-center w-32 h-32 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-700 hover:border-primary bg-gray-50 dark:bg-gray-800 transition-colors overflow-hidden"
              >
                {newReward.image ? (
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url("${newReward.image}")` }}
                  >
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="material-symbols-outlined text-white">
                        edit
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center text-gray-400 group-hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-3xl mb-1">
                      add_photo_alternate
                    </span>
                    <span className="text-xs font-medium">Görsel Yükle</span>
                  </div>
                )}
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Ödül Adı
            </label>
            <input
              type="text"
              value={newReward.name}
              onChange={(e) =>
                setNewReward({ ...newReward, name: e.target.value })
              }
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white"
              placeholder="Örn: Üniversite Hoodie"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <CustomSelect
              label="Kategori"
              options={categories}
              value={newReward.category}
              onChange={(val) => setNewReward({ ...newReward, category: val })}
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Puan Değeri
              </label>
              <input
                type="number"
                value={newReward.points}
                onChange={(e) =>
                  setNewReward({ ...newReward, points: e.target.value })
                }
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white"
                placeholder="Örn: 500"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Açıklama
            </label>
            <textarea
              value={newReward.description}
              onChange={(e) =>
                setNewReward({ ...newReward, description: e.target.value })
              }
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white"
              placeholder="Ödül hakkında kısa bilgi..."
              rows="3"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Stok Adedi
            </label>
            <input
              type="number"
              value={newReward.stock}
              onChange={(e) =>
                setNewReward({ ...newReward, stock: e.target.value })
              }
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white"
              placeholder="Örn: 50"
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
              Ekle
            </button>
          </div>
        </form>
      </Modal>

      {/* Edit Reward Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Ödül Düzenle"
      >
        <form className="flex flex-col gap-4">
          {selectedReward && (
            <div className="flex justify-center mb-2">
              <div
                className="w-32 h-32 rounded-lg bg-gray-200 dark:bg-gray-700 bg-cover bg-center border-2 border-primary/20"
                style={{ backgroundImage: `url("${selectedReward.image}")` }}
              ></div>
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Ödül Adı
            </label>
            <input
              type="text"
              value={selectedReward?.name || ''}
              onChange={(e) =>
                setSelectedReward({ ...selectedReward, name: e.target.value })
              }
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <CustomSelect
              label="Kategori"
              options={categories}
              value={selectedReward?.category || ''}
              onChange={(val) =>
                setSelectedReward({ ...selectedReward, category: val })
              }
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Puan Değeri
              </label>
              <input
                type="number"
                value={selectedReward?.points || ''}
                onChange={(e) =>
                  setSelectedReward({
                    ...selectedReward,
                    points: e.target.value,
                  })
                }
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Açıklama
            </label>
            <textarea
              value={selectedReward?.description || ''}
              onChange={(e) =>
                setSelectedReward({
                  ...selectedReward,
                  description: e.target.value,
                })
              }
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white"
              rows="3"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Stok Adedi
              </label>
              <input
                type="number"
                value={selectedReward?.stock || ''}
                onChange={(e) =>
                  setSelectedReward({
                    ...selectedReward,
                    stock: e.target.value,
                  })
                }
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white"
              />
            </div>
            <CustomSelect
              label="Durum"
              options={statuses}
              value={selectedReward?.status || ''}
              onChange={(val) =>
                setSelectedReward({ ...selectedReward, status: val })
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
