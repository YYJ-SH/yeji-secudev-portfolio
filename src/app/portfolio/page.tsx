// app/portfolio/page.tsx
'use client';

import { useState, useEffect } from 'react';
import RetroProjectCard from '@/components/portfolio/RetroProjectCard';
import { ProjectDetailModal } from '@/components/portfolio/ProjectDetailModal';
import { content } from '@/data/content';
import { useLanguage } from '@/contexts/language-context';
import { ArrowRight, ExternalLink, Github, Monitor, Smartphone, Globe } from 'lucide-react';

export default function PortfolioPage() {
  const { language } = useLanguage();
  const { title, description, projects } = content[language]?.portfolio || { 
    title: 'Portfolio', 
    description: 'My projects', 
    projects: [] 
  };
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const openProjectModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

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
          <h2 className="text-4xl md:text-6xl font-black mb-16 text-center transform rotate-1">
            SELECTED <span className="text-pink-500">WORKS</span>
          </h2>
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="relative group cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => openProjectModal(project)}
              >
                <div className={`absolute inset-0 ${
                  index % 3 === 0 ? 'bg-orange-500' : 
                  index % 3 === 1 ? 'bg-lime-400' : 'bg-pink-500'
                } transform ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'} 
                group-hover:rotate-0 transition-transform duration-300`} />
                
                <div className="relative bg-black border-4 border-white p-8 transform group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Project Info */}
                    <div className="order-2 md:order-1">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-2xl md:text-3xl font-black text-white">{project.title}</h3>
                        <div className="flex gap-2">
                          {project.githubLink && (
                            <div className="w-10 h-10 bg-white text-black flex items-center justify-center transform rotate-45 hover:rotate-0 transition-transform">
                              <Github className="w-5 h-5 transform -rotate-45" />
                            </div>
                          )}
                          {project.liveDemo && (
                            <div className="w-10 h-10 bg-lime-400 text-black flex items-center justify-center transform -rotate-45 hover:rotate-0 transition-transform">
                              <ExternalLink className="w-5 h-5 transform rotate-45" />
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="mb-4">
                        <span className="text-orange-500 font-bold">{project.period}</span>
                        <span className="text-gray-400 ml-4">팀: {project.teamSize}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.mainTech?.map((tech, i) => (
                          <span 
                            key={i} 
                            className="px-3 py-1 bg-white text-black font-bold text-sm transform hover:scale-105 transition-transform border-2 border-black"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-pink-500 flex items-center justify-center transform rotate-45">
                          <Monitor className="w-6 h-6 transform -rotate-45" />
                        </div>
                        <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform text-pink-500" />
                        <span className="text-xl font-black">VIEW PROJECT</span>
                      </div>
                    </div>
                    
                    {/* Project Image */}
                    <div className="order-1 md:order-2 relative">
                      <div className="relative overflow-hidden border-4 border-white">
                        <div className="relative w-full pt-[60%]"> {/* 5:3 비율 컨테이너 */}
                          {project.thumbnail ? (
                            <img 
                              src={project.thumbnail} 
                              alt={project.title}
                              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center">
                              <span className="text-6xl">🚀</span>
                            </div>
                          )}
                        </div>
                        <div className="absolute top-4 right-4 flex gap-2">
                          <div className="w-6 h-6 bg-orange-500 transform rotate-45" />
                          <div className="w-6 h-6 bg-lime-400 rounded-full" />
                        </div>
                      </div>
                    </div>
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

      {/* Project Detail Modal */}
      <ProjectDetailModal
        isOpen={isModalOpen}
        project={selectedProject}
        onClose={closeProjectModal}
      />
    </main>
  );
}
