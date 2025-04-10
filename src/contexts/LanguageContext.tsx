'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import trTopbar from '../../languages/topbar/tr.json';
import enTopbar from '../../languages/topbar/en.json';
import arTopbar from '../../languages/topbar/ar.json';
import trNavbar from '../../languages/navbar/tr.json';
import enNavbar from '../../languages/navbar/en.json';
import arNavbar from '../../languages/navbar/ar.json';
import trSlider from '../../languages/slider/tr.json';
import enSlider from '../../languages/slider/en.json';
import arSlider from '../../languages/slider/ar.json';

export type Language = 'tr' | 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  tr: {
    topbar: trTopbar,
    nav: trNavbar,
    slider: trSlider
  },
  en: {
    topbar: enTopbar,
    nav: enNavbar,
    slider: enSlider
  },
  ar: {
    topbar: arTopbar,
    nav: arNavbar,
    slider: arSlider
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('tr');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: unknown = translations[language];
    
    for (const k of keys) {
      if (typeof value === 'object' && value !== null) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 