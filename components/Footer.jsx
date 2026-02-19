export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-card-border bg-white dark:bg-background-dark py-8">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 text-gray-900 dark:text-white">
          <img src="/logo.png" alt="IEEE GAÜN Logo" className="h-10 w-auto object-contain" />
          <span className="font-bold">IEEE GAÜN</span>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-right">
          © 2026 IEEE GAÜN. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
