export default function HeroSection() {
  return (
    <section className="relative w-full rounded-2xl overflow-hidden min-h-[400px] md:min-h-[480px] flex items-end group shadow-2xl shadow-gray-200/50 dark:shadow-none">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        data-alt="Crowd cheering at a large concert event with stage lights"
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAi5b5tMc4mm1ZmM2da7v_DkfycRxqcXi2BgKQtBeCdllDV_jzWGmR4jKf6ESo30M-NaBy5mt4UwIIE-co4jdHEb6uMNszb385lAJ2SiI-YYCwZljOlPdU7ANB8yHU_OpwLaoX1wuFxyBw_Ez83HOWrgupoXjNwHs8o4HGEEQqdeZkVupi6pM8TVENq-up8xi3Yk-HHfSzM0kaF7QGr8oiTCJp3xLwYT9nI87-Ej_RjXZljVWqKIRXzPInFjNbSb8MieQMWiELpHOg")',
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
            Bahar Festivali '24 Başlıyor!
          </h1>
          <p className="text-gray-100 text-sm md:text-lg font-light max-w-xl leading-relaxed drop-shadow-sm">
            Müzik, sanat ve eğlencenin kalbi kampüste atıyor. 3 gün sürecek bu
            dev organizasyonda yerini şimdiden ayırt.
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
