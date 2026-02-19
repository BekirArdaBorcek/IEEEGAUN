'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col gap-2 text-center lg:text-left">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Kayıt İşlemleri Kapalı
        </h2>
        <p className="text-slate-500 dark:text-slate-400">
          Şu an için yeni üye kaydı alınmamaktadır.
        </p>
        <div className="text-center text-sm text-slate-600 dark:text-slate-400 mt-4">
          <Link
            href="/login"
            className="font-bold text-primary hover:text-blue-700 transition-colors"
          >
            Giriş Yap
          </Link>
        </div>
      </div>
    </div>
  );
}
