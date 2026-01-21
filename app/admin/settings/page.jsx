'use client';

import { useState } from 'react';
import CustomSelect from '@/components/CustomSelect';

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    appName: 'Kampüs App',
    supportEmail: 'destek@kampus.edu.tr',
    description:
      'Üniversite öğrencileri için topluluk, etkinlik ve sosyalleşme platformu.',
    newUserRegistration: true,
    emailVerification: 'Zorunlu',
    domainRestriction: '@uni.edu.tr',
    twoFactorAuth: false,
    autoSlangFilter: true,
    newCommunityApproval: true,
    bannedWords: '',
    theme: 'light',
    notifications: {
      systemAlerts: true,
      newUser: true,
      weeklyReport: false,
    },
    backupFrequency: 'Günlük',
    maintenanceMode: false,
  });

  const emailVerificationOptions = ['Zorunlu', 'İsteğe Bağlı', 'Kapalı'];
  const backupFrequencyOptions = ['Günlük', 'Haftalık', 'Aylık'];

  return (
    <main className="flex-1 overflow-y-auto p-6 md:p-8 text-slate-900 dark:text-white">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Sistem Ayarları
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-1">
              Uygulamanın genel yapılandırmasını, güvenlik tercihlerini ve
              bildirimleri yönetin.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-white dark:bg-[#1a202c] border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 px-4 py-2.5 rounded-lg text-sm font-medium transition-all shadow-sm">
              <span className="material-symbols-outlined text-[20px]">
                history
              </span>
              <span>Log Kayıtları</span>
            </button>
            <button className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-all shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-[20px]">
                save
              </span>
              <span className="whitespace-nowrap">Değişiklikleri Kaydet</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Content (Left Column) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* General Settings */}
            <div className="bg-white dark:bg-[#1a202c] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded-lg text-blue-600 dark:text-blue-400">
                  <span className="material-symbols-outlined">tune</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Genel Ayarlar
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Temel platform bilgileri ve yapılandırması.
                  </p>
                </div>
              </div>
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Uygulama Adı
                    </label>
                    <input
                      className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#1a202c] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-sm px-3 py-2 text-sm"
                      type="text"
                      value={settings.appName}
                      onChange={(e) =>
                        setSettings({ ...settings, appName: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Destek E-postası
                    </label>
                    <input
                      className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#1a202c] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-sm px-3 py-2 text-sm"
                      type="email"
                      value={settings.supportEmail}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          supportEmail: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Platform Açıklaması
                  </label>
                  <textarea
                    className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#1a202c] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-sm px-3 py-2 text-sm"
                    rows="3"
                    value={settings.description}
                    onChange={(e) =>
                      setSettings({ ...settings, description: e.target.value })
                    }
                  />
                </div>
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                    Site Logosu
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="size-16 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center border border-dashed border-slate-300 dark:border-slate-700">
                      <div
                        className="bg-center bg-no-repeat bg-contain size-10"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCKFp5HMHmrAN_UYGixXztN8t5ht_4bffl0detff1GRhIN2Vktog-6HopB66v6GdC2z52o22a3Nn9k_vZgmNaP8Luu22Cp8CNJwsQRhCDyG6chN2mQE1VKVK7NID9ftTP0YmxKuu178yFCVlqctTUtCp9fQJ7daBx4_4PwEoPXWduo34ddO6m_-_0sGH99BlZJr57oxbhRFTnZYOpUVlARsBO0ImvEF8vxVeWJmhZ_zZtYXzZq4BSJwmSfMoH9A_3jIFLJpth9mcX4")',
                        }}
                      ></div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2">
                        <button className="px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-[#1a202c] border border-slate-300 dark:border-slate-600 rounded-md hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                          Değiştir
                        </button>
                        <button className="px-3 py-1.5 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors">
                          Kaldır
                        </button>
                      </div>
                      <p className="text-xs text-slate-500">
                        PNG veya SVG, max 2MB.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Security & Auth */}
            <div className="bg-white dark:bg-[#1a202c] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-2 rounded-lg text-purple-600 dark:text-purple-400">
                  <span className="material-symbols-outlined">
                    admin_panel_settings
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Güvenlik ve Yetkilendirme
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Kullanıcı kayıt ve erişim politikaları.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800/30">
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white">
                      Yeni Üye Kaydı
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Kullanıcıların yeni hesap oluşturmasına izin ver.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={settings.newUserRegistration}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          newUserRegistration: e.target.checked,
                        })
                      }
                    />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                  </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <CustomSelect
                    label="E-posta Doğrulaması"
                    options={emailVerificationOptions}
                    value={settings.emailVerification}
                    onChange={(val) =>
                      setSettings({ ...settings, emailVerification: val })
                    }
                  />
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Alan Adı Kısıtlaması
                    </label>
                    <input
                      className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#1a202c] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-sm px-3 py-2 text-sm"
                      placeholder="Örn: @edu.tr"
                      type="text"
                      value={settings.domainRestriction}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          domainRestriction: e.target.value,
                        })
                      }
                    />
                    <p className="text-xs text-slate-500 mt-1">
                      Sadece bu uzantıya sahip e-postalar kayıt olabilir.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <input
                    id="2fa"
                    type="checkbox"
                    checked={settings.twoFactorAuth}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        twoFactorAuth: e.target.checked,
                      })
                    }
                    className="mt-1 rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary bg-white dark:bg-[#1a202c]"
                  />
                  <label
                    htmlFor="2fa"
                    className="text-sm text-slate-600 dark:text-slate-300 cursor-pointer"
                  >
                    <span className="block font-medium text-slate-900 dark:text-white">
                      Adminler için 2FA Zorunluluğu
                    </span>
                    Yönetici paneline erişimi olan tüm kullanıcılar için iki
                    faktörlü doğrulamayı zorunlu tut.
                  </label>
                </div>
              </div>
            </div>

            {/* Content Policies */}
            <div className="bg-white dark:bg-[#1a202c] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-orange-50 dark:bg-orange-900/20 p-2 rounded-lg text-orange-600 dark:text-orange-400">
                  <span className="material-symbols-outlined">policy</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    İçerik Politikaları
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Topluluk ve etkinlik moderasyon kuralları.
                  </p>
                </div>
              </div>
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Otomatik Argo Filtresi
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={settings.autoSlangFilter}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          autoSlangFilter: e.target.checked,
                        })
                      }
                    />
                    <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Yeni Topluluk Onayı Gerektir
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={settings.newCommunityApproval}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          newCommunityApproval: e.target.checked,
                        })
                      }
                    />
                    <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500"></div>
                  </label>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Yasaklı Kelimeler Listesi
                  </label>
                  <textarea
                    className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#1a202c] text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-sm px-3 py-2 text-sm"
                    placeholder="Virgülle ayırarak giriniz..."
                    rows="2"
                    value={settings.bannedWords}
                    onChange={(e) =>
                      setSettings({ ...settings, bannedWords: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar (Right Column) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Theme Settings */}
            <div className="bg-white dark:bg-[#1a202c] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-slate-400">
                  palette
                </span>{' '}
                Site Teması
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-slate-600 dark:text-slate-400 block mb-2">
                    Varsayılan Mod
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() =>
                        setSettings({ ...settings, theme: 'light' })
                      }
                      className={`border rounded-lg p-2 flex flex-col items-center gap-1 transition-colors ${settings.theme === 'light' ? 'border-primary bg-slate-50 dark:bg-slate-800' : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                    >
                      <span
                        className={`material-symbols-outlined ${settings.theme === 'light' ? 'text-slate-900' : 'text-slate-500'}`}
                      >
                        light_mode
                      </span>
                      <span
                        className={`text-xs font-medium ${settings.theme === 'light' ? 'text-primary' : 'text-slate-500'}`}
                      >
                        Aydınlık
                      </span>
                    </button>
                    <button
                      onClick={() =>
                        setSettings({ ...settings, theme: 'dark' })
                      }
                      className={`border rounded-lg p-2 flex flex-col items-center gap-1 transition-colors ${settings.theme === 'dark' ? 'border-primary bg-slate-50 dark:bg-slate-800' : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                    >
                      <span
                        className={`material-symbols-outlined ${settings.theme === 'dark' ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}
                      >
                        dark_mode
                      </span>
                      <span
                        className={`text-xs font-medium ${settings.theme === 'dark' ? 'text-primary' : 'text-slate-500'}`}
                      >
                        Karanlık
                      </span>
                    </button>
                    <button
                      onClick={() =>
                        setSettings({ ...settings, theme: 'system' })
                      }
                      className={`border rounded-lg p-2 flex flex-col items-center gap-1 transition-colors ${settings.theme === 'system' ? 'border-primary bg-slate-50 dark:bg-slate-800' : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                    >
                      <span
                        className={`material-symbols-outlined ${settings.theme === 'system' ? 'text-slate-900' : 'text-slate-500'}`}
                      >
                        desktop_windows
                      </span>
                      <span
                        className={`text-xs font-medium ${settings.theme === 'system' ? 'text-primary' : 'text-slate-500'}`}
                      >
                        Sistem
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Notification Settings */}
            <div className="bg-white dark:bg-[#1a202c] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-slate-400">
                  notifications_active
                </span>{' '}
                Bildirim Ayarları
              </h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-2 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.notifications.systemAlerts}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        notifications: {
                          ...settings.notifications,
                          systemAlerts: e.target.checked,
                        },
                      })
                    }
                    className="rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary bg-white dark:bg-[#1a202c] size-4"
                  />
                  <span className="text-sm text-slate-700 dark:text-slate-300">
                    Sistem uyarılarını e-posta gönder
                  </span>
                </label>
                <label className="flex items-center gap-3 p-2 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.notifications.newUser}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        notifications: {
                          ...settings.notifications,
                          newUser: e.target.checked,
                        },
                      })
                    }
                    className="rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary bg-white dark:bg-[#1a202c] size-4"
                  />
                  <span className="text-sm text-slate-700 dark:text-slate-300">
                    Yeni üye bildirimleri (Admin)
                  </span>
                </label>
                <label className="flex items-center gap-3 p-2 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg transition-colors cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.notifications.weeklyReport}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        notifications: {
                          ...settings.notifications,
                          weeklyReport: e.target.checked,
                        },
                      })
                    }
                    className="rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary bg-white dark:bg-[#1a202c] size-4"
                  />
                  <span className="text-sm text-slate-700 dark:text-slate-300">
                    Haftalık özet raporu
                  </span>
                </label>
              </div>
            </div>

            {/* System & Backup */}
            <div className="bg-white dark:bg-[#1a202c] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-slate-400">
                  settings_system_daydream
                </span>{' '}
                Sistem &amp; Yedekleme
              </h3>
              <div className="mb-4 p-3 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-900/30 rounded-lg flex items-start gap-2">
                <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-[20px] mt-0.5">
                  check_circle
                </span>
                <div>
                  <p className="text-xs font-semibold text-emerald-800 dark:text-emerald-300">
                    Sistem Sağlıklı
                  </p>
                  <p className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-0.5">
                    Son yedekleme: Bugün 04:00
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <CustomSelect
                  label="Yedekleme Sıklığı"
                  options={backupFrequencyOptions}
                  value={settings.backupFrequency}
                  onChange={(val) =>
                    setSettings({ ...settings, backupFrequency: val })
                  }
                />
                <button className="w-full py-2 flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <span className="material-symbols-outlined text-[18px]">
                    download
                  </span>
                  Yedeği İndir
                </button>
                <hr className="border-slate-200 dark:border-slate-700 my-2" />
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-red-600 dark:text-red-400">
                    Bakım Modu
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={settings.maintenanceMode}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          maintenanceMode: e.target.checked,
                        })
                      }
                    />
                    <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-red-500"></div>
                  </label>
                </div>
                <p className="text-[10px] text-slate-400 leading-tight">
                  Aktif edildiğinde site sadece yöneticilere görünür.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-10"></div>
      </div>
    </main>
  );
}
