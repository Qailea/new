import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  getT: (en?: string, km?: string, zh?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('knsk_lang') as Language;
    return saved && ['km', 'en', 'zh'].includes(saved) ? saved : 'km';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('knsk_lang', lang);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    const dict = translations[language] || translations['km'];
    return dict[key] || translations['en'][key] || key;
  };

  const getT = (en?: string, km?: string, zh?: string): string => {
    if (language === 'km') return km || en || zh || '';
    if (language === 'zh') return zh || en || km || '';
    return en || km || zh || '';
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getT }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
