'use client';
import { useState, useEffect, useRef } from 'react';

export default function CustomSelect({
  label,
  options,
  value,
  onChange,
  placeholder = 'Seçiniz',
  className = '',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {label}
        </label>
      )}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-left text-gray-900 dark:text-white transition-colors"
      >
        <span className={!value ? 'text-gray-500 font-normal' : ''}>
          {value || placeholder}
        </span>
        <span
          className={`material-symbols-outlined text-gray-500 text-[20px] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        >
          expand_more
        </span>
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-1 w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-xl max-h-60 overflow-y-auto">
          {options.map((option) => (
            <div
              key={option}
              className={`px-3 py-2 text-sm cursor-pointer transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white ${
                value === option ? 'bg-primary/10 text-primary font-medium' : ''
              }`}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
