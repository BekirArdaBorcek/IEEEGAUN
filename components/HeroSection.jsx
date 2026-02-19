export default function HeroSection({ event }) {
  if (!event) return null;

  return (
    <section className="relative w-full rounded-2xl overflow-hidden min-h-[400px] md:min-h-[480px] flex items-end group shadow-2xl shadow-gray-200/50 dark:shadow-none">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        data-alt={event.title}
        style={{
          backgroundImage: `url("${event.image || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'}")`,
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
      <div className="relative z-10 p-6 md:p-10 w-full max-w-3xl flex flex-col gap-4 md:gap-6">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/90 text-white text-xs font-bold uppercase tracking-wider w-fit backdrop-blur-sm shadow-sm">
          <span className="material-symbols-outlined text-[16px]">star</span>
          Öne Çıkan
        </span>
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white drop-shadow-md">
            {event.title}
          </h1>
          <p className="text-gray-100 text-sm md:text-lg font-light max-w-xl leading-relaxed drop-shadow-sm line-clamp-3">
            {event.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-4 pt-2">
          <button className="h-12 px-6 rounded-lg bg-primary text-white text-base font-bold hover:bg-blue-600 transition-colors flex items-center gap-2 shadow-lg shadow-primary/30">
            <span>Hemen Kaydol</span>
            <span className="material-symbols-outlined text-[20px]">
              arrow_forward
            </span>
          </button>
          <button className="h-12 px-6 rounded-lg bg-white/10 backdrop-blur-md border border-white/30 text-white text-base font-bold hover:bg-white/20 transition-colors">
            Detayları İncele
          </button>
        </div>
      </div>
    </section>
  );
}
