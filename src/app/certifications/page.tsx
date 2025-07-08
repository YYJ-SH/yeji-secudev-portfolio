'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/language-context';
import { content } from '@/data/content';
import { CertificateCard } from '@/components/certifications/CertificateCard';
import { Award, BookOpen, Trophy, Star, Zap } from 'lucide-react';

export default function CertificationsPage() {
  const { language } = useLanguage();
  const { certifications } = content[language];
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // 마우스 위치 추적
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const certificatesByType = {
    certification: certifications.certificates.filter(cert => cert.type === 'certification'),
    license: certifications.certificates.filter(cert => cert.type === 'license'),
    award: certifications.certificates.filter(cert => cert.type === 'award')
  };

  // 언어에 따른 섹션 제목 설정
  const getSectionTitle = (type: string) => {
    if (language === 'ko') {
      switch (type) {
        case 'certification':
          return '자격증';
        case 'license':
          return '교육사항';
        case 'award':
          return '수상경력';
        default:
          return type;
      }
    } else {
      switch (type) {
        case 'certification':
          return 'CERTIFICATIONS';
        case 'license':
          return 'EDUCATION';
        case 'award':
          return 'AWARDS';
        default:
          return type.toUpperCase();
      }
    }
  };

  // 섹션별 아이콘
  const getSectionIcon = (type: string) => {
    switch (type) {
      case 'certification':
        return Award;
      case 'license':
        return BookOpen;
      case 'award':
        return Trophy;
      default:
        return Star;
    }
  };

  // 섹션별 색상
  const getSectionColor = (type: string) => {
    switch (type) {
      case 'certification':
        return 'bg-orange-500';
      case 'license':
        return 'bg-lime-400';
      case 'award':
        return 'bg-pink-500';
      default:
        return 'bg-orange-500';
    }
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Custom Cursor */}
      <div 
        className="fixed w-6 h-6 bg-lime-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${isHovered ? 2 : 1})`
        }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        {/* Geometric Shapes */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-orange-500 transform rotate-45" />
        <div className="absolute bottom-20 right-32 w-12 h-12 bg-lime-400 rounded-full" />
        <div className="absolute top-1/2 right-10 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-pink-500" />
        
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none">
            <span className="block transform -rotate-2">CERTIFICATES</span>
            <span className="block transform rotate-1 text-orange-500">&</span>
            <span className="block transform -rotate-1 text-lime-400">ACHIEVEMENTS</span>
          </h1>
          <p className="text-xl md:text-2xl font-bold mb-12 transform rotate-1 bg-pink-500 text-white p-6 inline-block max-w-3xl">
            {certifications.subtitle}
          </p>
        </div>
        
        {/* Scattered Text */}
        <div className="absolute top-40 right-20 text-4xl md:text-6xl font-black opacity-20 transform rotate-12">
          CERTIFIED
        </div>
        <div className="absolute bottom-32 left-32 text-3xl md:text-4xl font-black opacity-20 transform -rotate-12">
          EXPERT
        </div>
      </section>

      {/* Certificates Sections */}
      <div className="container mx-auto px-6 space-y-20 pb-20">
        {Object.entries(certificatesByType).map(([type, certs], sectionIndex) => (
          certs.length > 0 && (
            <section key={type}>
              <div className="flex items-center gap-8 mb-16">
                <div className={`w-16 h-16 ${getSectionColor(type)} flex items-center justify-center transform rotate-45 border-4 border-white`}>
                  {(() => {
                    const Icon = getSectionIcon(type);
                    return <Icon className="w-8 h-8 text-white transform -rotate-45" />;
                  })()}
                </div>
                <h2 className="text-4xl md:text-6xl font-black transform hover:rotate-1 transition-transform">
                  {getSectionTitle(type)}
                </h2>
              </div>
              
              <div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {certs.map((cert, index) => (
                  <CertificateCard 
                    key={cert.name} 
                    certificate={cert} 
                    colorIndex={index}
                    sectionType={type}
                  />
                ))}
              </div>
            </section>
          )
        ))}
      </div>

      {/* Achievement Stats */}
      <section className="py-20 px-8 border-t-4 border-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-16 text-center transform rotate-1">
            ACHIEVEMENT <span className="text-orange-500">STATS</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(certificatesByType).map(([type, certs], index) => (
              certs.length > 0 && (
                <div key={type} className="relative group">
                  <div className={`absolute inset-0 ${getSectionColor(type)} transform ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'} group-hover:rotate-0 transition-transform duration-300`} />
                  <div className="relative bg-black border-4 border-white p-8 transform group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300 text-center">
                    <div className="w-16 h-16 bg-white text-black flex items-center justify-center mx-auto mb-4 transform rotate-45">
                      <span className="text-3xl font-black transform -rotate-45">{certs.length}</span>
                    </div>
                    <h3 className="text-xl font-black text-white">{getSectionTitle(type)}</h3>
                    <p className="text-gray-300 mt-2">
                      {language === 'ko' ? '개 보유' : 'Achieved'}
                    </p>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
