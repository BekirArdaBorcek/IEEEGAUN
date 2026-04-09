'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md text-gray-900">
      <div className="px-6 md:px-16 py-3 flex items-center justify-between max-w-[1440px] mx-auto w-full">
        <div className="flex items-center gap-25">
          <Link
            className="flex items-center gap-3 text-gray-900 hover:opacity-80 transition-opacity"
            href="/"
          >
            <div className="size-12 flex items-center justify-center rounded-lg relative">
              <Image 
                src="/logo.png" 
                alt="IEEE GAÜN Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
            <h2 className="text-lg font-bold tracking-tight">IEEE GAÜN</h2>
          </Link>
          <nav className="hidden lg:flex items-center gap-6 text-gray-700">
            <Link
              className="text-sm font-medium hover:text-primary transition-colors"
              href="/"
            >
              Ana Sayfa
            </Link>
            <Link
              className="text-sm font-medium hover:text-primary transition-colors"
              href="/etkinlikler"
            >
              Etkinlikler
            </Link>
            <Link
              className="text-sm font-medium hover:text-primary transition-colors"
              href="/chapters"
            >
              Chapterlar
            </Link>
            {/* <Link
              className="text-sm font-medium hover:text-primary transition-colors"
              href="/forum"
            >
              Forum
            </Link> */}
          </nav>
        </div>
        <div className="flex flex-1 justify-end gap-4 items-center">
          <button
            className="lg:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
          <div className="hidden md:flex relative w-full max-w-[320px]">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <span className="material-symbols-outlined text-[20px]">
                search
              </span>
            </div>
            <input
              className="block w-full rounded-lg border-none bg-gray-100 py-2 pl-10 pr-3 text-sm placeholder:text-gray-400 focus:ring-2 focus:ring-primary text-gray-900"
              placeholder="Etkinlik veya topluluk ara..."
              type="text"
            />
          </div>
          <div className="hidden sm:flex gap-3">
            <Link
              href="/login"
              className="flex items-center justify-center h-9 px-4 rounded-lg border border-gray-200 bg-white text-sm font-bold hover:bg-gray-50 transition-colors text-gray-700"
            >
              Giriş Yap
            </Link>
            <Link
              href="/register"
              className="flex items-center justify-center h-9 px-4 rounded-lg bg-primary text-white text-sm font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-primary/30"
            >
              Kayıt Ol
            </Link>
          </div>
          <div className="flex sm:hidden">
            <span className="material-symbols-outlined text-gray-400">
              account_circle
            </span>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white/80 backdrop-blur-md p-4 flex flex-col gap-4 text-gray-700">
          <nav className="flex flex-col gap-4">
            <Link
              className="text-sm font-medium hover:text-primary transition-colors"
              href="/"
            >
              Ana Sayfa
            </Link>
            <Link
              className="text-sm font-medium hover:text-primary transition-colors"
              href="/etkinlikler"
            >
              Etkinlikler
            </Link>
            <Link
              className="text-sm font-medium hover:text-primary transition-colors"
              href="/chapters"
            >
              Chapterlar
            </Link>
            {/* <Link
              className="text-sm font-medium hover:text-primary transition-colors"
              href="/forum"
            >
              Forum
            </Link> */}
          </nav>
          <div className="flex flex-col gap-3">
            <Link
              href="/login"
              className="flex items-center justify-center h-9 px-4 rounded-lg border border-gray-200 bg-white text-sm font-bold hover:bg-gray-50 transition-colors text-gray-700"
            >
              Giriş Yap
            </Link>
            <Link
              href="/register"
              className="flex items-center justify-center h-9 px-4 rounded-lg bg-primary text-white text-sm font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-primary/30"
            >
              Kayıt Ol
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
