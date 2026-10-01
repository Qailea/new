import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Language } from '../../types';
import { Globe } from 'lucide-react';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const options: { code: Language; label: string; flag: string }[] = [
    { code: 'km', label: 'ភាសាខ្មែរ', flag: '🇰🇭' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'zh', label: '中文', flag: '🇨🇳' },
  ];

  return (
    <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
      <Globe className="w-4 h-4 text-slate-500 ml-1.5 mr-0.5 hidden sm:block" />
      {options.map((opt) => (
        <button
          key={opt.code}
          onClick={() => setLanguage(opt.code)}
          className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 ${
            language === opt.code
              ? 'bg-blue-900 text-white shadow-sm font-semibold'
              : 'text-slate-700 hover:text-blue-900 hover:bg-slate-200/70'
          }`}
          title={opt.label}
        >
          <span>{opt.flag}</span>
          <span className="hidden md:inline">{opt.label}</span>
        </button>
      ))}
    </div>
  );
};
