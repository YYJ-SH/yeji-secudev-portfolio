// contexts/language-context.tsx
'use client';

import { createContext, useContext, useState } from 'react';

type Language = 'ko' | 'en';

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'ko',
  toggleLanguage: () => null,
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ko');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'ko' ? 'en' : 'ko'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);