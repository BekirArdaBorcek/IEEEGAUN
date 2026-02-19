import Link from 'next/link';

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen w-full flex">
      {/* Left Side - Hero/Branding (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-800"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        {/* Decorative Elements */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

        <div className="relative z-10 flex flex-col justify-between p-12 text-white h-full">
          <div>
            <Link
              href="/"
              className="flex items-center gap-3 w-fit hover:opacity-90 transition-opacity"
            >
              <div className="size-12 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-xl border border-white/30 shadow-xl">
                <span className="material-symbols-outlined text-[28px]">
                  school
                </span>
              </div>
              <span className="text-3xl font-bold tracking-tight">
                UniCommunity
              </span>
            </Link>
          </div>
          <div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Kampüs Yaşamının
              <br />
              <span className="text-blue-200">Dijital Kalbi</span>
            </h1>
            <p className="text-blue-100 text-xl max-w-md leading-relaxed">
              Topluluklara katıl, etkinlikleri keşfet ve üniversite hayatını
              dolu dolu yaşa. Senin topluluğun, senin alanın.
            </p>
          </div>
          <div className="text-sm text-blue-200 font-medium">
            © 2026 IEEE GAÜN. Tüm hakları saklıdır.
          </div>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 md:p-12 bg-white dark:bg-background-dark relative">
        <div className="lg:hidden absolute top-6 left-6">
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
