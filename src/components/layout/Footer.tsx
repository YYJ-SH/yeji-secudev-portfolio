// components/layout/Footer.tsx
'use client';

import { useLanguage } from '@/contexts/language-context';
import { Github, Linkedin, Mail, Heart, Code, Coffee } from 'lucide-react';

export const Footer = () => {
  const { language } = useLanguage();

  const social = [
    { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' }
  ];

  return (
    <footer className="bg-black text-white border-t-4 border-orange-500 py-16">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-3xl font-black mb-4 transform -rotate-2">
              YEJI.DEV
            </h3>
            <p className="text-lg mb-6 bg-lime-400 text-black p-4 transform rotate-1">
              {language === 'ko' 
                ? '보안과 개발의 완벽한 조화를 추구합니다.'
                : 'Pursuing the perfect harmony of security and development.'
              }
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-2xl font-black mb-6 transform rotate-1">
              QUICK <span className="text-orange-500">LINKS</span>
            </h4>
            <div className="space-y-4">
              {[
                { label: language === 'ko' ? '소개' : 'ABOUT', href: '/about' },
                { label: language === 'ko' ? '포트폴리오' : 'PORTFOLIO', href: '/portfolio' },
                { label: language === 'ko' ? '보안' : 'SECURITY', href: '/security' },
                { label: language === 'ko' ? '자격증' : 'CERTIFICATES', href: '/certifications' }
              ].map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-lg font-bold text-gray-300 hover:text-lime-400 transition-colors transform hover:scale-105"
                  style={{ transform: `rotate(${index % 2 === 0 ? '1deg' : '-1deg'})` }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-2xl font-black mb-6 transform -rotate-1">
              GET IN <span className="text-pink-500">TOUCH</span>
            </h4>
            <div className="flex gap-4 mb-6">
              {social.map(({ icon: Icon, href, label }, index) => (
                <a
                  key={href}
                  href={href}
                  aria-label={label}
                  className={`w-12 h-12 flex items-center justify-center transform transition-transform hover:scale-110
                    ${index === 0 ? 'bg-white text-black rotate-45 hover:rotate-0' : ''}
                    ${index === 1 ? 'bg-orange-500 text-white -rotate-12 hover:rotate-0' : ''}
                    ${index === 2 ? 'bg-lime-400 text-black rotate-12 hover:rotate-0' : ''}
                  `}
                >
                  <Icon className={`w-6 h-6 ${
                    index === 0 ? 'transform -rotate-45' : 
                    index === 1 ? 'transform rotate-12' : 
                    'transform -rotate-12'
                  }`} />
                </a>
              ))}
            </div>
            <p className="text-lg bg-pink-500 text-white p-4 transform rotate-1">
              {language === 'ko' 
                ? '함께 멋진 프로젝트를 만들어보세요!'
                : 'Let\'s build something awesome together!'
              }
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t-2 border-white mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-lg">
              <span>Made with</span>
              <Heart className="w-5 h-5 text-pink-500 animate-pulse" />
              <span>&</span>
              <Code className="w-5 h-5 text-orange-500" />
              <span>&</span>
              <Coffee className="w-5 h-5 text-lime-400" />
            </div>
            <div className="text-lg font-black transform rotate-1">
              © 2024 YEJI YU - ALL RIGHTS RESERVED
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
