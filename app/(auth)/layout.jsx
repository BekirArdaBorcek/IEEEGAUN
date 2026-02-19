import Link from 'next/link';

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen w-full flex bg-white dark:bg-background-dark">
      {/* Content */}
      <div className="w-full flex flex-col justify-center items-center p-6 md:p-12 relative">
        <div className="absolute top-6 left-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-900 dark:text-white font-bold"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Ana Sayfa
          </Link>
        </div>
        <div className="w-full max-w-[420px]">{children}</div>
      </div>
    </div>
  );
}
