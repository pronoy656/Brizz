"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { en } from './en';
import { bn } from './bn';

type Language = 'en' | 'bn';
type Dictionary = typeof en;

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('briizz_lang') as Language;
    if (saved && (saved === 'en' || saved === 'bn')) {
      setLang(saved);
    }
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('briizz_lang', newLang);
  };

  const t = (key: string) => {
    const dict = lang === 'bn' ? bn : en;
    const keys = key.split('.');
    let value: any = dict;
    for (const k of keys) {
      if (value[k] === undefined) {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
      value = value[k];
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
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
