// app/about/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/language-context';
import { content } from '@/data/content';
import { Timeline } from '@/components/about/Timeline';
import { EducationCard } from '@/components/about/EducationCard';
import { ExperienceCard } from '@/components/about/ExperienceCard';
import { ClubActivities } from '@/components/about/ClubActivities';
import { GraduationCap, Briefcase, Users, Code, Shield, Laptop } from 'lucide-react';

export default function AboutPage() {
  const { language } = useLanguage();
  
  // 올바른 데이터 접근 경로
  const aboutData = content[language]?.about;
  const { title, subtitle, education, experience, clubs } = aboutData || { 
    title: 'About Me', 
    subtitle: 'Developer', 
    education: [], 
    experience: [], 
    clubs: [] 
  };

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 배열인지 확인
  if (!Array.isArray(education) || !Array.isArray(experience) || !Array.isArray(clubs)) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">About Loading...</h1>
          <p className="text-xl">데이터를 불러오는 중입니다.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Custom Cursor */}
      <div 
        className="fixed w-6 h-6 bg-lime-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        {/* Geometric Shapes */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-lime-400 transform rotate-45" />
        <div className="absolute bottom-10 right-20 w-12 h-12 bg-orange-500 rounded-full" />
        <div className="absolute top-1/2 right-10 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-pink-500" />
        
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none">
                <span className="block transform -rotate-2">ABOUT</span>
                <span className="block transform rotate-1 text-orange-500">ME</span>
              </h1>
              <div className="space-y-6">
                <p className="text-xl leading-relaxed bg-white text-black p-6 transform rotate-1 brutalist-shadow">
                  {subtitle}
                </p>
                <p className="text-xl leading-relaxed bg-lime-400 text-black p-6 transform -rotate-1 brutalist-shadow">
                  {language === 'ko' 
                    ? '보안과 개발의 경계에서 혁신적인 솔루션을 만들어갑니다.'
                    : 'Creating innovative solutions at the intersection of security and development.'
                  }
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-orange-500 to-pink-500 transform rotate-3" />
              <div className="absolute top-8 left-8 w-full h-96 bg-lime-400 transform -rotate-3" />
              <div className="absolute top-16 left-16 w-full h-96 bg-white transform rotate-1 flex items-center justify-center">
                <div className="text-8xl">🔐</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scattered Text */}
        <div className="absolute top-40 right-32 text-4xl md:text-6xl font-black opacity-20 transform rotate-12">
          SECURE
        </div>
        <div className="absolute bottom-20 left-32 text-3xl md:text-4xl font-black opacity-20 transform -rotate-12">
          DEVELOP
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-8 mb-16">
            <div className="w-16 h-16 bg-orange-500 flex items-center justify-center transform rotate-45">
              <GraduationCap className="w-8 h-8 transform -rotate-45" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black transform -rotate-1">
              {language === 'ko' ? '학력' : 'EDUCATION'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <EducationCard key={edu.school} education={edu} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-8 mb-16">
            <div className="w-16 h-16 bg-lime-400 flex items-center justify-center transform -rotate-45">
              <Briefcase className="w-8 h-8 transform rotate-45 text-black" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black transform rotate-1">
              {language === 'ko' ? '경력' : 'EXPERIENCE'}
            </h2>
          </div>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={exp.company} className="relative group">
                <div className={`absolute inset-0 ${index % 3 === 0 ? 'bg-orange-500' : index % 3 === 1 ? 'bg-lime-400' : 'bg-pink-500'} 
                  transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} 
                  group-hover:rotate-0 transition-transform duration-300`} />
                <div className="relative bg-black border-4 border-white p-8 transform group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-3xl font-black mb-2 text-white">{exp.company}</h3>
                      <p className="text-xl mb-2 text-gray-300">{exp.role}</p>
                      <p className="text-orange-500 font-bold">{exp.period}</p>
                    </div>
                    <div className="w-12 h-12 bg-white text-black flex items-center justify-center transform rotate-45">
                      <Code className="w-6 h-6 transform -rotate-45" />
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.responsibilities?.map((responsibility, i) => (
                      <li key={i} className="text-lg text-gray-300 flex items-start gap-2">
                        <span className="w-2 h-2 bg-lime-400 rounded-full mt-3 flex-shrink-0" />
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Club Activities Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-8 mb-16">
            <div className="w-16 h-16 bg-pink-500 flex items-center justify-center transform rotate-45">
              <Users className="w-8 h-8 transform -rotate-45" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black transform -rotate-1">
              {language === 'ko' ? '동아리 활동' : 'ACTIVITIES'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clubs.map((club, index) => (
              <div key={club.name} className="relative group">
                <div className={`absolute inset-0 ${index % 3 === 0 ? 'bg-orange-500' : index % 3 === 1 ? 'bg-lime-400' : 'bg-pink-500'} 
                  transform ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'} 
                  group-hover:rotate-0 transition-transform duration-300`} />
                <div className="relative bg-black border-4 border-white p-6 transform group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300">
                  <h3 className="text-xl font-black mb-2 text-white">{club.name}</h3>
                  <p className="text-orange-500 font-bold mb-4">{club.period}</p>
                  <ul className="space-y-1">
                    {club.activities?.map((activity, i) => (
                      <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                        <span className="w-1 h-1 bg-lime-400 rounded-full mt-2 flex-shrink-0" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Showcase */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 transform rotate-1">
            MY <span className="text-orange-500">SUPERPOWERS</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Shield, label: 'SECURITY', color: 'bg-orange-500' },
              { icon: Code, label: 'DEVELOPMENT', color: 'bg-lime-400' },
              { icon: Laptop, label: 'RESEARCH', color: 'bg-pink-500' },
              { icon: Users, label: 'LEADERSHIP', color: 'bg-orange-500' }
            ].map(({ icon: Icon, label, color }, index) => (
              <div key={label} className="relative group">
                <div className={`absolute inset-0 ${color} transform ${index % 2 === 0 ? 'rotate-12' : '-rotate-12'} 
                  group-hover:rotate-0 transition-transform duration-300`} />
                <div className="relative bg-black border-4 border-white p-6 transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300">
                  <Icon className="w-12 h-12 text-white mx-auto mb-4" />
                  <p className="text-lg font-black text-white">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
