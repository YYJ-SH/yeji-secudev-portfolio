// app/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { content } from "@/data/content";
import { useLanguage } from "@/contexts/language-context";
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Square, Triangle, Circle } from 'lucide-react';

export default function Home() {
  const { language } = useLanguage();
  const { social, navCards, hero } = content[language];
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const brutalistColors = {
    about: "bg-orange-500",
    portfolio: "bg-lime-400", 
    security: "bg-pink-500",
    certifications: "bg-orange-500"
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Custom Cursor */}
      <div 
        className="fixed w-6 h-6 bg-orange-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${isHovered ? 2 : 1})`
        }}
      />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        {/* Geometric Shapes */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-orange-500 transform rotate-45" />
        <div className="absolute bottom-32 right-32 w-0 h-0 border-l-[30px] border-r-[30px] border-b-[50px] border-l-transparent border-r-transparent border-b-lime-400" />
        <div className="absolute top-1/2 left-10 w-12 h-12 bg-pink-500 rounded-full" />
        
        <div className="text-center z-10 container mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none">
            <span className="block transform -rotate-2">{hero.greeting}</span>
            <span className="block transform rotate-1 text-orange-500">{hero.name}</span>
            <span className="block transform -rotate-1 text-lime-400">{hero.role}</span>
          </h1>
          <p className="text-xl md:text-2xl font-bold mb-12 transform rotate-1 bg-lime-400 text-black p-4 inline-block max-w-2xl">
            {hero.description}
          </p>
          <div className="flex justify-center space-x-8">
            {social.map(({ icon: Icon, href, label }, index) => (
              <a
                key={href}
                href={href}
                aria-label={label}
                className={`w-16 h-16 flex items-center justify-center transform transition-transform cursor-pointer
                  ${index === 0 ? 'bg-white text-black rotate-45 hover:rotate-0' : ''}
                  ${index === 1 ? 'bg-orange-500 text-white -rotate-12 hover:rotate-0' : ''}
                  ${index === 2 ? 'bg-lime-400 text-black rotate-12 hover:rotate-0' : ''}
                `}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Icon className={`w-8 h-8 ${index === 0 ? 'transform -rotate-45' : index === 1 ? 'transform rotate-12' : 'transform -rotate-12'}`} />
              </a>
            ))}
          </div>
        </div>
        
        {/* Scattered Text */}
        <div className="absolute top-40 right-20 text-4xl md:text-6xl font-black opacity-20 transform rotate-12">
          CODE
        </div>
        <div className="absolute bottom-40 left-32 text-3xl md:text-4xl font-black opacity-20 transform -rotate-12">
          SECURITY
        </div>
      </section>

      {/* Navigation Cards Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-16 text-center transform rotate-1">
            EXPLORE <span className="text-orange-500">MY WORLD</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {navCards.map(({ title, description, icon: Icon, href }, index) => (
              <a
                key={title}
                href={href}
                className="relative group cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className={`absolute inset-0 ${brutalistColors[href.replace('/', '') as keyof typeof brutalistColors]} 
                  transform ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'} 
                  group-hover:rotate-0 transition-transform duration-300`} />
                <div className="relative bg-black p-8 transform group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl md:text-4xl font-black mb-2 transform group-hover:rotate-1 transition-transform">
                        {title}
                      </h3>
                      <p className="text-lg md:text-xl">{description}</p>
                    </div>
                    <div className="text-right">
                      <ArrowRight className="w-8 h-8 ml-auto group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white text-black flex items-center justify-center transform rotate-45">
                      <Icon className="w-6 h-6 transform -rotate-45" />
                    </div>
                    <span className="px-4 py-2 bg-lime-400 text-black font-bold transform hover:scale-105 transition-transform">
                      EXPLORE
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 transform rotate-1">
            LET'S <span className="text-orange-500">BUILD</span>
            <br />
            SOMETHING <span className="text-lime-400">AMAZING</span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 bg-pink-500 text-white p-6 transform -rotate-1 inline-block">
            Ready to collaborate on your next big project?
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <button className="px-8 py-4 bg-orange-500 text-white font-black text-xl transform hover:scale-105 transition-transform">
              GET IN TOUCH
            </button>
            <button className="px-8 py-4 border-4 border-white text-white font-black text-xl transform hover:scale-105 transition-transform">
              VIEW PORTFOLIO
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
