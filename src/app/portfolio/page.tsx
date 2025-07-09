// app/portfolio/page.tsx
'use client';

import { useState, useEffect } from 'react';
import RetroProjectCard from '@/components/portfolio/RetroProjectCard';
import { content } from '@/data/content';
import { useLanguage } from '@/contexts/language-context';
import { Code, Rocket, Zap, Target } from 'lucide-react';

export default function PortfolioPage() {
  const { language } = useLanguage();
  const { title, description, projects } = content[language]?.portfolio || { 
    title: 'Portfolio', 
    description: 'My projects', 
    projects: [] 
  };
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // projects가 배열인지 확인
  if (!Array.isArray(projects)) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Portfolio Loading...</h1>
          <p className="text-xl">프로젝트 데이터를 불러오는 중입니다.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Custom Cursor */}
      <div 
        className="fixed w-6 h-6 bg-pink-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${isHovered ? 2 : 1})`
        }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        {/* Geometric Shapes */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-pink-500 transform rotate-45" />
        <div className="absolute bottom-20 right-32 w-12 h-12 bg-lime-400 rounded-full" />
        <div className="absolute top-1/2 left-10 w-0 h-0 border-l-[25px] border-r-[25px] border-b-[40px] border-l-transparent border-r-transparent border-b-orange-500" />
        
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none">
            <span className="block transform -rotate-2">MY</span>
            <span className="block transform rotate-1 text-pink-500">PORTFOLIO</span>
          </h1>
          <p className="text-xl md:text-2xl font-bold mb-12 transform rotate-1 bg-lime-400 text-black p-6 inline-block max-w-3xl">
            {description}
          </p>
        </div>
        
        {/* Scattered Text */}
        <div className="absolute top-40 right-20 text-4xl md:text-6xl font-black opacity-20 transform rotate-12">
          BUILD
        </div>
        <div className="absolute bottom-32 left-32 text-3xl md:text-4xl font-black opacity-20 transform -rotate-12">
          CREATE
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-8 mb-16">
            <div className="w-16 h-16 bg-pink-500 flex items-center justify-center transform rotate-45 border-4 border-white">
              <Rocket className="w-8 h-8 text-white transform -rotate-45" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black transform rotate-1">
              SELECTED <span className="text-pink-500">WORKS</span>
            </h2>
          </div>

          {/* Project Cards Grid */}
          <div 
            className="grid grid-cols-1 xl:grid-cols-2 gap-16"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {projects.map((project) => (
              <RetroProjectCard 
                key={project.id} 
                project={project} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Showcase */}
      <section className="py-20 px-8 border-t-4 border-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-16 transform rotate-1">
            TECH <span className="text-orange-500">STACK</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Code, label: 'FRONTEND', color: 'bg-orange-500', skills: ['React', 'Next.js', 'TypeScript'] },
              { icon: Zap, label: 'BACKEND', color: 'bg-lime-400', skills: ['Python', 'Django', 'Node.js'] },
              { icon: Target, label: 'SECURITY', color: 'bg-pink-500', skills: ['Penetration Testing', 'OWASP', 'CTF'] },
              { icon: Rocket, label: 'DEVOPS', color: 'bg-orange-500', skills: ['Docker', 'AWS', 'CI/CD'] }
            ].map(({ icon: Icon, label, color, skills }, index) => (
              <div key={label} className="relative group">
                <div className={`absolute inset-0 ${color} transform ${index % 2 === 0 ? 'rotate-12' : '-rotate-12'} 
                  group-hover:rotate-0 transition-transform duration-300`} />
                <div className="relative bg-black border-4 border-white p-6 transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300">
                  <Icon className="w-12 h-12 text-white mx-auto mb-4" />
                  <h3 className="text-lg font-black text-white mb-3">{label}</h3>
                  <div className="space-y-1">
                    {skills.map((skill) => (
                      <div key={skill} className="text-xs text-gray-300 font-bold">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 transform rotate-1">
            WANT TO <span className="text-orange-500">COLLABORATE?</span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 bg-pink-500 text-white p-6 transform -rotate-1 inline-block">
            Let's build something amazing together!
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <button className="px-8 py-4 bg-orange-500 text-white font-black text-xl transform hover:scale-105 transition-transform border-4 border-white">
              START A PROJECT
            </button>
            <button className="px-8 py-4 border-4 border-white text-white font-black text-xl transform hover:scale-105 transition-transform">
              VIEW MORE WORK
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
