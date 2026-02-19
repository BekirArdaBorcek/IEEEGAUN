'use client';

import { useState } from 'react';
import Modal from '@/components/Modal';

export default function ForumModerationPage() {
  const [reports, setReports] = useState([
    {
      id: 1,
      type: 'Yorum',
      content:
        'Bu etkinlik tamamen zaman kaybıydı, organizasyon berbattı. Kimseye tavsiye etmem...',
      author: 'Mehmet Yılmaz',
      reportedBy: 'Ayşe Demir',
      reason: 'Hakaret / Aşağılama',
      date: '2 saat önce',
      status: 'Beklemede',
      statusColor:
        'text-yellow-700 bg-yellow-50 dark:text-yellow-300 dark:bg-yellow-900/30 border-yellow-200 dark:border-yellow-900',
    },
    {
      id: 2,
      type: 'Konu',
      content: 'Ücretli ödev yapılır, tez yazılır. İletişim için DM...',
      author: 'Caner Erkin',
      reportedBy: 'Sistem',
      reason: 'Spam / Reklam',
      date: '5 saat önce',
      status: 'Beklemede',
      statusColor:
        'text-yellow-700 bg-yellow-50 dark:text-yellow-300 dark:bg-yellow-900/30 border-yellow-200 dark:border-yellow-900',
    },
    {
      id: 3,
      type: 'Yorum',
      content: 'Sen ne anlarsın ki zaten, boş yapma.',
      author: 'Ali Veli',
      reportedBy: 'Fatma Şahin',
      reason: 'Zorbalık',
      date: '1 gün önce',
      status: 'İncelendi',
      statusColor:
        'text-blue-700 bg-blue-50 dark:text-blue-300 dark:bg-blue-900/30 border-blue-200 dark:border-blue-900',
    },
    {
      id: 4,
      type: 'Konu',
      content: 'Yasa dışı bahis sitesi reklamı...',
      author: 'Bot Hesap',
      reportedBy: 'Ahmet K.',
      reason: 'Yasa Dışı İçerik',
      date: '2 gün önce',
      status: 'Kaldırıldı',
      statusColor:
        'text-red-700 bg-red-50 dark:text-red-300 dark:bg-red-900/30 border-red-200 dark:border-red-900',
    },
  ]);

  const [selectedReport, setSelectedReport] = useState(null);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  const handleReviewClick = (report) => {
    setSelectedReport(report);
    setIsReviewModalOpen(true);
  };

  const handleAction = (action) => {
    if (!selectedReport) return;

    let newStatus = '';
    let newStatusColor = '';

    if (action === 'approve') {
      newStatus = 'Onaylandı';
      newStatusColor =
        'text-green-700 bg-green-50 dark:text-green-300 dark:bg-green-900/30 border-green-200 dark:border-green-900';
    } else if (action === 'remove') {
      newStatus = 'Kaldırıldı';
      newStatusColor =
        'text-red-700 bg-red-50 dark:text-red-300 dark:bg-red-900/30 border-red-200 dark:border-red-900';
    } else {
      newStatus = 'İncelendi';
      newStatusColor =
        'text-blue-700 bg-blue-50 dark:text-blue-300 dark:bg-blue-900/30 border-blue-200 dark:border-blue-900';
    }

    setReports(
      reports.map((r) =>
        r.id === selectedReport.id
          ? { ...r, status: newStatus, statusColor: newStatusColor }
          : r,
      ),
    );
    setIsReviewModalOpen(false);
  };

  return (
    <main className="flex-1 overflow-y-auto p-8 scroll-smooth text-gray-900 dark:text-white">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <h2 className="text-[#111318] dark:text-white tracking-tight text-[28px] font-bold leading-tight">
            Forum Denetimi
          </h2>
          <p className="text-[#616f89] dark:text-gray-400 text-sm font-normal">
            Bildirilen içerikleri inceleyin ve gerekli aksiyonları alın.
          </p>
        </div>

        <div className="bg-white dark:bg-[#1a202c] rounded-xl border border-[#e5e7eb] dark:border-[#2d3748] shadow-sm flex flex-col mb-8">
          <div className="p-6 border-b border-[#e5e7eb] dark:border-[#2d3748] flex flex-wrap gap-4 justify-between items-center">
            <div className="flex gap-2">
              <button className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg text-xs font-bold text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                Tümü
              </button>
              <button className="px-3 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-xs font-medium text-gray-600 dark:text-gray-400 transition-colors">
                Bekleyenler
              </button>
              <button className="px-3 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-xs font-medium text-gray-600 dark:text-gray-400 transition-colors">
                İncelenenler
              </button>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 border border-[#dbdfe6] dark:border-[#2d3748] rounded-lg text-xs font-medium text-[#111318] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-1 transition-colors">
                <span className="material-symbols-outlined text-[16px]">
                  filter_alt
                </span>{' '}
                Filtrele
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#f8fafc] dark:bg-[#2d3748]/50 border-b border-[#e5e7eb] dark:border-[#2d3748]">
                  <th className="px-6 py-4 text-xs font-semibold text-[#616f89] dark:text-gray-400 uppercase tracking-wider">
                    İçerik Türü
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#616f89] dark:text-gray-400 uppercase tracking-wider">
                    Bildirilme Nedeni
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#616f89] dark:text-gray-400 uppercase tracking-wider">
                    Yazar / Bildiren
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#616f89] dark:text-gray-400 uppercase tracking-wider">
                    Tarih
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#616f89] dark:text-gray-400 uppercase tracking-wider">
                    Durum
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#616f89] dark:text-gray-400 uppercase tracking-wider text-right">
                    İncele
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e5e7eb] dark:divide-[#2d3748]">
                {reports.map((report) => (
                  <tr
                    key={report.id}
                    className="hover:bg-background-light dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`size-8 rounded-lg flex items-center justify-center ${
                            report.type === 'Konu'
                              ? 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300'
                              : 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300'
                          }`}
                        >
                          <span className="material-symbols-outlined text-[18px]">
                            {report.type === 'Konu' ? 'article' : 'chat_bubble'}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-[#111318] dark:text-white">
                          {report.type}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded">
                        {report.reason}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-[#111318] dark:text-white">
                          {report.author}
                        </span>
                        <span className="text-xs text-[#616f89] dark:text-gray-400">
                          Bildiren: {report.reportedBy}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#616f89] dark:text-gray-400">
                      {report.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border ${report.statusColor}`}
                      >
                        {report.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <button
                        onClick={() => handleReviewClick(report)}
                        className="text-primary hover:text-blue-700 transition-colors font-medium text-sm"
                      >
                        Detaylar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Review Modal */}
      <Modal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        title="Bildirim İnceleme"
      >
        <div className="flex flex-col gap-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase mb-2">
              Bildirilen İçerik
            </h4>
            <p className="text-gray-900 dark:text-white text-sm leading-relaxed">
              "{selectedReport?.content}"
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="block text-xs font-bold text-gray-500 dark:text-gray-400 mb-1">
                İçerik Sahibi
              </span>
              <span className="text-gray-900 dark:text-white font-medium">
                {selectedReport?.author}
              </span>
            </div>
            <div>
              <span className="block text-xs font-bold text-gray-500 dark:text-gray-400 mb-1">
                Bildiren Kullanıcı
              </span>
              <span className="text-gray-900 dark:text-white font-medium">
                {selectedReport?.reportedBy}
              </span>
            </div>
            <div>
              <span className="block text-xs font-bold text-gray-500 dark:text-gray-400 mb-1">
                Bildirim Sebebi
              </span>
              <span className="text-red-600 dark:text-red-400 font-bold">
                {selectedReport?.reason}
              </span>
            </div>
            <div>
              <span className="block text-xs font-bold text-gray-500 dark:text-gray-400 mb-1">
                Tarih
              </span>
              <span className="text-gray-900 dark:text-white">
                {selectedReport?.date}
              </span>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <span className="block text-sm font-bold text-gray-900 dark:text-white mb-3">
              Aksiyon Al
            </span>
            <div className="flex gap-3">
              <button
                onClick={() => handleAction('approve')}
                className="flex-1 py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-bold transition-colors shadow-sm"
              >
                Sorun Yok (Onayla)
              </button>
              <button
                onClick={() => handleAction('remove')}
                className="flex-1 py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-bold transition-colors shadow-sm"
              >
                İçeriği Kaldır
              </button>
              <button
                onClick={() => handleAction('dismiss')}
                className="flex-1 py-2 px-4 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg text-sm font-bold transition-colors"
              >
                Sonra İncele
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </main>
  );
}
