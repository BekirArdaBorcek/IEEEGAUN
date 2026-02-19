'use client';

import { useState, useEffect } from 'react';
import Modal from '@/components/Modal';
import CustomSelect from '@/components/CustomSelect';

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [chapters, setChapters] = useState([]); // For selection dropdown
  const [isLoading, setIsLoading] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Status Helper
  const getStatusColor = (status) => {
    switch (status) {
      case 'Devam Ediyor':
        return 'text-blue-700 bg-blue-50 dark:text-blue-300 dark:bg-blue-900/30 border-blue-200 dark:border-blue-900';
      case 'Tamamlandı':
        return 'text-green-700 bg-green-50 dark:text-green-300 dark:bg-green-900/30 border-green-200 dark:border-green-900';
      case 'İptal':
        return 'text-red-700 bg-red-50 dark:text-red-300 dark:bg-red-900/30 border-red-200 dark:border-red-900';
      default: // Planlama
        return 'text-gray-700 bg-gray-50 dark:text-gray-300 dark:bg-gray-900/30 border-gray-200 dark:border-gray-900';
    }
  };

  // Fetch Data
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [projectsRes, chaptersRes] = await Promise.all([
        fetch('/api/projects'),
        fetch('/api/chapters'),
      ]);

      const projectsData = await projectsRes.json();
      const chaptersData = await chaptersRes.json();

      if (projectsData.success) setProjects(projectsData.data);
      if (chaptersData.success) setChapters(chaptersData.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const chapterNames = chapters.map((c) => c.name);

  // Add State
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    chapter: '',
    status: 'Planlama',
    progress: 0,
    isAdmiral: false,
    teamSize: 1,
  });

  // Edit State
  const [selectedProject, setSelectedProject] = useState(null);

  const handleAddSubmit = async () => {
    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProject),
      });
      const data = await res.json();
      if (data.success) {
        setIsAddModalOpen(false);
        fetchData();
        setNewProject({
          title: '',
          description: '',
          chapter: '',
          status: 'Planlama',
          progress: 0,
          isAdmiral: false,
          teamSize: 1,
        });
      } else {
        alert('Hata: ' + data.error);
      }
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  const handleUpdateSubmit = async () => {
    if (!selectedProject) return;
    try {
      const res = await fetch(`/api/projects/${selectedProject._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(selectedProject),
      });
      const data = await res.json();
      if (data.success) {
        setIsEditModalOpen(false);
        fetchData();
      } else {
        alert('Hata: ' + data.error);
      }
    } catch (error) {
      console.error('Error updating project:', error);
    }
  };

  const handleDeleteClick = async (id) => {
    if (confirm('Projeyi silmek istediğinize emin misiniz?')) {
      try {
        const res = await fetch(`/api/projects/${id}`, { method: 'DELETE' });
        const data = await res.json();
        if (data.success) {
          fetchData();
        } else {
          alert('Hata: ' + data.error);
        }
      } catch (error) {
        console.error('Error deleting project:', error);
      }
    }
  };

  const handleEditClick = (project) => {
    setSelectedProject({ ...project });
    setIsEditModalOpen(true);
  };

  const statuses = ['Planlama', 'Devam Ediyor', 'Tamamlandı', 'İptal'];

  return (
    <main className="flex-1 overflow-y-auto p-8 scroll-smooth text-gray-900 dark:text-white">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
        <div className="flex flex-wrap justify-between items-end gap-3">
          <div className="flex flex-col gap-1">
            <h2 className="text-[#111318] dark:text-white tracking-tight text-[28px] font-bold leading-tight">
              Proje Yönetimi
            </h2>
            <p className="text-[#616f89] dark:text-gray-400 text-sm font-normal">
              Topluluk projelerini takip edin ve yönetin.
            </p>
          </div>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="bg-primary hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg flex items-center gap-2 transition-colors shadow-sm shadow-blue-500/30"
          >
            <span className="material-symbols-outlined text-[18px]">
              add_task
            </span>
            Yeni Proje Ekle
          </button>
        </div>

        <div className="bg-white dark:bg-[#1a202c] rounded-xl border border-[#e5e7eb] dark:border-[#2d3748] shadow-sm flex flex-col mb-8">
          <div className="p-6 border-b border-[#e5e7eb] dark:border-[#2d3748] flex flex-wrap gap-4 justify-between items-center">
            <div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Proje ara..."
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
                    Proje Adı
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#616f89] dark:text-gray-400 uppercase tracking-wider">
                    Chapter
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#616f89] dark:text-gray-400 uppercase tracking-wider">
                    İlerleme
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#616f89] dark:text-gray-400 uppercase tracking-wider">
                    Ekip
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#616f89] dark:text-gray-400 uppercase tracking-wider">
                    Durum
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#616f89] dark:text-gray-400 uppercase tracking-wider">
                    Amiral
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#616f89] dark:text-gray-400 uppercase tracking-wider text-right">
                    İşlemler
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e5e7eb] dark:divide-[#2d3748]">
                {isLoading ? (
                  <tr>
                    <td colSpan="7" className="p-4 text-center text-gray-500">
                      Yükleniyor...
                    </td>
                  </tr>
                ) : projects.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="p-4 text-center text-gray-500">
                      Proje bulunamadı.
                    </td>
                  </tr>
                ) : (
                  projects.map((project) => (
                    <tr
                      key={project._id}
                      className="hover:bg-background-light dark:hover:bg-gray-800/50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-[#111318] dark:text-white">
                            {project.title}
                          </span>
                          <span className="text-xs text-[#616f89] dark:text-gray-400 max-w-[200px] truncate">
                            {project.description}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#616f89] dark:text-gray-400">
                        {project.chapter}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#616f89] dark:text-gray-400 w-32">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                            <div
                              className="bg-primary h-1.5 rounded-full"
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-xs">{project.progress}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#616f89] dark:text-gray-400">
                        {project.teamSize} Kişi
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border ${getStatusColor(project.status)}`}
                        >
                          {project.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {project.isAdmiral ? (
                          <span className="material-symbols-outlined text-yellow-500 text-[20px]">
                            star
                          </span>
                        ) : (
                          <span className="material-symbols-outlined text-gray-300 dark:text-gray-700 text-[20px]">
                            star_border
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <button
                          onClick={() => handleEditClick(project)}
                          className="text-gray-400 hover:text-primary transition-colors p-1"
                        >
                          <span className="material-symbols-outlined text-[20px]">
                            edit
                          </span>
                        </button>
                        <button
                          onClick={() => handleDeleteClick(project._id)}
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

      {/* Add Project Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Yeni Proje Ekle"
      >
        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Proje Adı
            </label>
            <input
              type="text"
              value={newProject.title}
              onChange={(e) =>
                setNewProject({ ...newProject, title: e.target.value })
              }
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Açıklama
            </label>
            <textarea
              rows="2"
              value={newProject.description}
              onChange={(e) =>
                setNewProject({ ...newProject, description: e.target.value })
              }
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white resize-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <CustomSelect
              label="Chapter"
              options={chapterNames}
              value={newProject.chapter}
              onChange={(val) => setNewProject({ ...newProject, chapter: val })}
            />
            <CustomSelect
              label="Durum"
              options={statuses}
              value={newProject.status}
              onChange={(val) => setNewProject({ ...newProject, status: val })}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                İlerleme (%)
              </label>
              <input
                type="number"
                min="0"
                max="100"
                value={newProject.progress}
                onChange={(e) =>
                  setNewProject({
                    ...newProject,
                    progress: parseInt(e.target.value),
                  })
                }
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Ekip Büyüklüğü
              </label>
              <input
                type="number"
                min="1"
                value={newProject.teamSize}
                onChange={(e) =>
                  setNewProject({
                    ...newProject,
                    teamSize: parseInt(e.target.value),
                  })
                }
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="add_admiral"
              checked={newProject.isAdmiral}
              onChange={(e) =>
                setNewProject({ ...newProject, isAdmiral: e.target.checked })
              }
              className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <label
              htmlFor="add_admiral"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 select-none"
            >
              Bu bir Amiral Proje (Flagship)
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
              Kaydet
            </button>
          </div>
        </form>
      </Modal>

      {/* Edit Project Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Projeyi Düzenle"
      >
        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Proje Adı
            </label>
            <input
              type="text"
              value={selectedProject?.title || ''}
              onChange={(e) =>
                setSelectedProject({
                  ...selectedProject,
                  title: e.target.value,
                })
              }
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Açıklama
            </label>
            <textarea
              rows="2"
              value={selectedProject?.description || ''}
              onChange={(e) =>
                setSelectedProject({
                  ...selectedProject,
                  description: e.target.value,
                })
              }
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white resize-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <CustomSelect
              label="Chapter"
              options={chapterNames}
              value={selectedProject?.chapter || ''}
              onChange={(val) =>
                setSelectedProject({ ...selectedProject, chapter: val })
              }
            />
            <CustomSelect
              label="Durum"
              options={statuses}
              value={selectedProject?.status || ''}
              onChange={(val) =>
                setSelectedProject({ ...selectedProject, status: val })
              }
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                İlerleme (%)
              </label>
              <input
                type="number"
                min="0"
                max="100"
                value={selectedProject?.progress || 0}
                onChange={(e) =>
                  setSelectedProject({
                    ...selectedProject,
                    progress: parseInt(e.target.value),
                  })
                }
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Ekip Büyüklüğü
              </label>
              <input
                type="number"
                min="1"
                value={selectedProject?.teamSize || 1}
                onChange={(e) =>
                  setSelectedProject({
                    ...selectedProject,
                    teamSize: parseInt(e.target.value),
                  })
                }
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="edit_admiral"
              checked={selectedProject?.isAdmiral || false}
              onChange={(e) =>
                setSelectedProject({
                  ...selectedProject,
                  isAdmiral: e.target.checked,
                })
              }
              className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <label
              htmlFor="edit_admiral"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 select-none"
            >
              Bu bir Amiral Proje (Flagship)
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
