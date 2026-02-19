'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [pending, setPending] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setPending(true);

    try {
      const res = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (res?.error) {
        setError('Giriş başarısız. Lütfen bilgilerinizi kontrol edin.');
      } else {
        router.push('/admin');
        router.refresh();
      }
    } catch (err) {
      console.log(err);
      setError('Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col gap-2 text-center lg:text-left">
        <div className="flex justify-center lg:justify-start mb-6">
          <img src="/logo.png" alt="IEEE GAÜN Logo" className="h-24 w-auto object-contain" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Hoş Geldin!
        </h2>
        <p className="text-slate-500 dark:text-slate-400">
          Hesabına giriş yap ve topluluğuna katıl.
        </p>
      </div>

       {error && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-500 px-4 py-3 rounded-xl text-sm">
          {error}
        </div>
      )}

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
            E-posta Adresi
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <span className="material-symbols-outlined text-[20px]">
                mail
              </span>
            </div>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ornek@ogrenci.edu.tr"
              className="w-full rounded-xl border border-gray-300 dark:border-card-border bg-white dark:bg-slate-800/50 py-2.5 pl-10 pr-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-gray-900 dark:text-white transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
            Şifre
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <span className="material-symbols-outlined text-[20px]">
                lock
              </span>
            </div>
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              className="w-full rounded-xl border border-gray-300 dark:border-card-border bg-white dark:bg-slate-800/50 py-2.5 pl-10 pr-10 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-gray-900 dark:text-white transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">
                {showPassword ? 'visibility_off' : 'visibility'}
              </span>
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <span className="text-sm text-slate-600 dark:text-slate-400 select-none">
              Beni hatırla
            </span>
          </label>
          <Link
            href="#"
            className="text-sm font-medium text-primary hover:text-blue-700 transition-colors"
          >
            Şifremi unuttum
          </Link>
        </div>

        <button
          type="submit"
          disabled={pending}
          className="w-full py-3 px-4 bg-primary text-white rounded-xl text-sm font-bold hover:bg-blue-700 focus:ring-4 focus:ring-primary/20 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {pending ? (
            <span>Giriş Yapılıyor...</span>
          ) : (
            <>
              <span>Giriş Yap</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </>
          )}
        </button>
      </form>

      <div className="relative flex items-center py-2">
        <div className="flex-grow border-t border-gray-200 dark:border-gray-700"></div>
        <span className="flex-shrink-0 mx-4 text-xs font-medium text-gray-400 uppercase">
          Veya şununla devam et
        </span>
        <div className="flex-grow border-t border-gray-200 dark:border-gray-700"></div>
      </div>

      <button className="w-full py-2.5 px-4 bg-white dark:bg-slate-800 border border-gray-200 dark:border-card-border rounded-xl text-sm font-bold text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-2">
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          className="w-5 h-5"
        />
        <span>Google ile Giriş Yap</span>
      </button>

      {/* <div className="text-center text-sm text-slate-600 dark:text-slate-400">
        Hesabın yok mu?{' '}
        <Link
          href="/register"
          className="font-bold text-primary hover:text-blue-700 transition-colors"
        >
          Hemen Kayıt Ol
        </Link>
      </div> */}
    </div>
  );
}
