export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-card-border bg-white dark:bg-background-dark py-8">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 text-gray-900 dark:text-white">
          <span className="material-symbols-outlined text-primary">school</span>
          <span className="font-bold">UniCommunity</span>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-right">
          © 2024 UniCommunity. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
