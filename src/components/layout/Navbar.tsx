// components/layout/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '@/components/providers/theme-provider';
import { useLanguage } from '@/contexts/language-context';
import { Menu, X, Globe } from 'lucide-react';
import { navigation } from '@/data/navigation';

export const Navbar = () => {
  const { theme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = navigation[language].menu;
  const logoText = navigation[language].logo;

  return (
    <nav className="fixed top-0 w-full z-50 bg-black border-b-4 border-orange-500">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="relative group flex items-center gap-2"
          >
            <div className="text-2xl md:text-3xl font-black transform -rotate-2 text-white hover:text-orange-500 transition-colors">
              YEJI.DEV
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-black text-lg text-white hover:text-orange-500 transition-colors transform hover:scale-110"
                style={{ transform: `rotate(${index % 2 === 0 ? '1deg' : '-1deg'})` }}
              >
                {item.label.toUpperCase()}
              </Link>
            ))}
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="w-12 h-12 bg-lime-400 text-black flex items-center justify-center transform rotate-45 hover:rotate-0 transition-transform font-black"
            >
              <span className="transform -rotate-45">{language.toUpperCase()}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="w-10 h-10 bg-lime-400 text-black flex items-center justify-center transform rotate-45 font-bold"
            >
              <span className="transform -rotate-45 text-sm">{language.toUpperCase()}</span>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="w-12 h-12 bg-orange-500 text-white flex items-center justify-center transform hover:scale-110 transition-transform"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-black">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-black text-lg text-white hover:text-orange-500 transition-colors px-2 py-1 transform"
                  style={{ transform: `rotate(${index % 2 === 0 ? '1deg' : '-1deg'})` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
