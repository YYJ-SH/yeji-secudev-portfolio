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
    <nav className="fixed top-0 w-full z-50 border-b border-purple-200/30 backdrop-blur-md bg-white/70">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="relative group flex items-center gap-2"
          >
            {/* 아이콘 추가 */}
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-600 to-purple-600 
                          rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">Y</span>
            </div>
            <div className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 
                          text-transparent bg-clip-text">
              {logoText}
            </div>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r 
                          from-cyan-600 to-purple-600 group-hover:w-full 
                          transition-all duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm tracking-wider text-gray-600 hover:text-purple-600 
                         transition-colors relative group flex items-center gap-2"
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                {item.label}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 
                              group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-sm text-gray-600 hover:text-purple-600 
                       transition-colors group"
            >
              <Globe className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
              <span>{language.toUpperCase()}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="text-gray-600"
            >
              <Globe className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm tracking-wider text-gray-600 hover:text-purple-600 
                           transition-colors px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};