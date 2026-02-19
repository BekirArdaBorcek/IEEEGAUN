export default function EventCard({
  imageSrc,
  imageAlt,
  dateMonth,
  dateDay,
  category,
  categoryColorClass,
  title,
  description,
  location,
  attendees,
  attendeeCount,
  buttonText,
  compact = false,
}) {
  return (
    <article className="flex flex-col h-full rounded-2xl overflow-hidden bg-white dark:bg-card-dark border border-gray-200 dark:border-card-border group hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-primary/10 transition-all duration-300">
      <div className={`relative ${compact ? 'h-36' : 'h-48'} overflow-hidden`}>
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          alt={imageAlt}
          src={imageSrc}
        />
        <div className="absolute top-3 right-3 bg-white/95 dark:bg-black/70 backdrop-blur text-gray-900 dark:text-white px-3 py-1.5 rounded-lg text-xs font-bold uppercase shadow-sm flex flex-col items-center leading-tight">
          <span className="text-[10px] text-gray-500 dark:text-gray-400">
            {dateMonth}
          </span>
          <span className="text-lg">{dateDay}</span>
        </div>
        <div className="absolute top-3 left-3">
          <span
            className={`${categoryColorClass} text-white px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide shadow-sm`}
          >
            {category}
          </span>
        </div>
      </div>
      <div
        className={`flex flex-col flex-1 ${compact ? 'p-3 gap-2' : 'p-5 gap-3'}`}
      >
        <div className="flex-1">
          <h3
            className={`${compact ? 'text-base' : 'text-lg'} font-bold text-gray-900 dark:text-white leading-tight mb-2 group-hover:text-primary transition-colors`}
          >
            {title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
            {description}
          </p>
        </div>
        <div
          className={`flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-white/5 ${compact ? 'pt-2' : 'pt-3'}`}
        >
          <span
            className={`material-symbols-outlined ${compact ? 'text-[14px]' : 'text-[16px]'}`}
          >
            location_on
          </span>
          <span>{location}</span>
        </div>
        <div className="flex items-center justify-between mt-1">
          <div className="flex -space-x-2">
            {attendees.map((attendee, index) => (
              <img
                key={index}
                className={`${compact ? 'w-6 h-6' : 'w-7 h-7'} rounded-full border-2 border-white dark:border-card-dark`}
                alt="User Avatar"
                src={attendee}
              />
            ))}
            <div
              className={`${compact ? 'w-6 h-6' : 'w-7 h-7'} rounded-full border-2 border-white dark:border-card-dark bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-[10px] font-bold text-gray-600 dark:text-gray-300`}
            >
              +{attendeeCount}
            </div>
          </div>
          <button
            className={`bg-primary text-white hover:bg-blue-700 ${compact ? 'px-3 py-1.5' : 'px-4 py-2'} rounded-lg text-xs font-bold transition-colors shadow-md shadow-primary/20`}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </article>
  );
}
