import Link from 'next/link';

export default function ForumPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center min-h-[50vh] text-center px-4">
      <div className="bg-gray-100 dark:bg-card-dark p-8 rounded-full mb-6 animate-pulse">
        <span className="material-symbols-outlined text-6xl text-gray-400 dark:text-gray-500">
          construction
        </span>
      </div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
        Forum Şu Anda Devre Dışı
      </h1>
      <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-8">
        Forum bölümümüz bakım ve geliştirme çalışmalarımız nedeniyle geçici olarak erişime kapatılmıştır. Anlayışınız için teşekkür ederiz.
      </p>
      <Link 
        href="/" 
        className="px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-primary/30 flex items-center gap-2"
      >
        <span className="material-symbols-outlined">arrow_back</span>
        Ana Sayfaya Dön
      </Link>
    </div>
  );
}
