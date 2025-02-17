// components/providers/theme-provider.tsx
'use client';

import { createContext, useContext, useState } from 'react';
import { themes, ThemeName } from '@/lib/themes';

interface Theme {
  colors: {
    primary: {
      light: string;
      main: string;
      dark: string;
      gradient: string;
    };
    secondary: {
      light: string;
      main: string;
      dark: string;
    };
    background: string;
    text: string;
  };
  effects: {
    scanline: boolean;
    glow: boolean;
  };
}

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: ThemeName) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: themes.retro,
  setTheme: () => null
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes.retro);

  const handleThemeChange = (themeName: ThemeName) => {
    setCurrentTheme(themes[themeName]);
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, setTheme: handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);