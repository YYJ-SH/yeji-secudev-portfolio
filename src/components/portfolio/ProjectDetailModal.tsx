// components/portfolio/ProjectDetailModal.tsx
'use client';

import { useState, useEffect } from 'react';
import { X, Github, ExternalLink, Calendar, Users, Code, FileText, Clock, ArrowUpRight, Monitor, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageModal } from '../common/ImageModal';

interface Project {
  title: string;
  period: string;
  description: string;
  role: string;
  contribution: number;
  mainTech: string[];
  thumbnail: string;
  achievements: string[];
  teamSize: string;
  duration: string;
  documentation: {
    type: string;
    title: string;
    description: string;
    link: string;
    thumbnail: string;
    lastUpdated: string;
  }[];
  coreCode: string;
  features: string[];
  gallery: string[];
  liveDemoLink?: string;
  githubLink?: string;
}

interface ProjectDetailModalProps {
  isOpen: boolean;
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal = ({ isOpen, project, onClose }: ProjectDetailModalProps) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // 모바일 감지
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 모달 내에서도 커스텀 커서 추적 (데스크톱만)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (isOpen && !isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isMobile]);

  if (!isOpen || !project) return null;

  const tabs = [
    { id: 'overview', label: 'OVERVIEW', icon: Monitor, mobileLabel: '개요' },
    { id: 'code', label: 'CODE', icon: Code, mobileLabel: '코드' },
    { id: 'features', label: 'FEATURES', icon: FileText, mobileLabel: '기능' },
    { id: 'docs', label: 'DOCS', icon: FileText, mobileLabel: '문서' },
    { id: 'gallery', label: 'GALLERY', icon: Monitor, mobileLabel: '갤러리' }
  ];

  const currentTabIndex = tabs.findIndex(tab => tab.id === activeTab);
  const nextTab = () => {
    const nextIndex = (currentTabIndex + 1) % tabs.length;
    setActiveTab(tabs[nextIndex].id);
  };
  const prevTab = () => {
    const prevIndex = currentTabIndex === 0 ? tabs.length - 1 : currentTabIndex - 1;
    setActiveTab(tabs[prevIndex].id);
  };

  if (isMobile) {
    return (
      <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
        {/* Mobile Header */}
        <div className="relative border-b-2 border-white p-4 bg-black">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-black text-white truncate flex-1 mr-4">
              {project.title}
            </h2>
            <div className="flex gap-2">
              {project.githubLink && (
                <a 
                  href={project.githubLink}
                  className="w-10 h-10 bg-white text-black flex items-center justify-center border-2 border-black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {project.liveDemoLink && (
                <a 
                  href={project.liveDemoLink}
                  className="w-10 h-10 bg-lime-400 text-black flex items-center justify-center border-2 border-black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
              <button 
                onClick={onClose}
                className="w-10 h-10 bg-pink-500 text-white flex items-center justify-center border-2 border-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Tab Navigation */}
        <div className="border-b-2 border-white bg-black">
          <div className="flex items-center justify-between p-4">
            <button 
              onClick={prevTab}
              className="w-10 h-10 bg-orange-500 text-white flex items-center justify-center border-2 border-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex-1 mx-4">
              <div className="bg-lime-400 text-black p-2 text-center border-2 border-black">
                <span className="font-black text-sm">{tabs[currentTabIndex].mobileLabel}</span>
              </div>
            </div>
            
            <button 
              onClick={nextTab}
              className="w-10 h-10 bg-orange-500 text-white flex items-center justify-center border-2 border-white"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          {/* Mobile Tab Indicator */}
          <div className="flex">
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                className={`flex-1 h-1 ${index === currentTabIndex ? 'bg-lime-400' : 'bg-gray-600'}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Content */}
        <div className="h-[calc(100vh-140px)] overflow-y-auto p-4">
          {/* 여기에 모바일 콘텐츠 렌더링 */}
          {renderTabContent(activeTab, project, setSelectedImage, true)}
        </div>

        {/* Image Modal */}
        <ImageModal
          isOpen={!!selectedImage}
          imageUrl={selectedImage || ""}
          alt={project.title}
          onClose={() => setSelectedImage(null)}
        />
      </div>
    );
  }

  // Desktop Layout
  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
      {/* Custom Cursor for Desktop */}
      <div 
        className="fixed w-6 h-6 bg-pink-500 rounded-full pointer-events-none z-[60] mix-blend-difference transition-transform duration-150"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
      />

      {/* Desktop Header */}
      <div className="relative border-b-4 border-white p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl md:text-4xl font-black text-white">
            {project.title}
          </h2>
          <div className="flex gap-4">
            {project.githubLink && (
              <a 
                href={project.githubLink}
                className="w-12 h-12 bg-white text-black flex items-center justify-center transform rotate-45 hover:rotate-0 transition-transform border-2 border-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6 transform -rotate-45" />
              </a>
            )}
            {project.liveDemoLink && (
              <a 
                href={project.liveDemoLink}
                className="w-12 h-12 bg-lime-400 text-black flex items-center justify-center transform -rotate-45 hover:rotate-0 transition-transform border-2 border-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-6 h-6 transform rotate-45" />
              </a>
            )}
            <button 
              onClick={onClose}
              className="w-12 h-12 bg-pink-500 text-white flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform border-2 border-white"
            >
              <X className="w-6 h-6 transform -rotate-12" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="flex h-[calc(100vh-120px)]">
        {/* Desktop Sidebar Tabs */}
        <div className="w-64 border-r-4 border-white bg-black p-6 flex-shrink-0">
          <div className="space-y-4">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full p-4 font-black text-left border-4 border-white transform transition-all
                  ${activeTab === tab.id 
                    ? 'bg-orange-500 text-white translate-x-2' 
                    : 'bg-black text-white hover:bg-lime-400 hover:text-black hover:translate-x-1'
                  }
                  ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0`}
              >
                <div className="flex items-center gap-3">
                  <tab.icon className="w-5 h-5" />
                  {tab.label}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Content Area */}
        <div className="flex-1 overflow-y-auto p-8">
          {renderTabContent(activeTab, project, setSelectedImage, false)}
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={!!selectedImage}
        imageUrl={selectedImage || ""}
        alt={project.title}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};

// 탭 콘텐츠 렌더링 함수 분리
function renderTabContent(activeTab: string, project: any, setSelectedImage: (url: string) => void, isMobile: boolean) {
  switch (activeTab) {
    case 'overview':
      return (
        <div className="space-y-6 md:space-y-8">
          {/* Project Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div 
              className="relative group cursor-pointer" 
              onClick={() => setSelectedImage(project.thumbnail || project.gallery[0])}
            >
              <div className={`absolute inset-0 bg-pink-500 transform ${isMobile ? '' : 'rotate-3'}`} />
              <div className={`relative border-2 md:border-4 border-white transform ${isMobile ? '' : 'group-hover:rotate-0'} transition-transform`}>
                <div className="relative w-full pt-[66.67%]"> {/* 3:2 비율 컨테이너 */}
                  <img
                    src={project.thumbnail || project.gallery[0]}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300">
                  <span className="text-white bg-orange-500 px-3 md:px-4 py-2 font-black border border-white text-sm md:text-base">
                    {isMobile ? '확대' : 'ZOOM IN'}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div className={`bg-white text-black p-4 md:p-6 transform ${isMobile ? '' : '-rotate-1'} border-2 md:border-4 border-lime-400`}>
                <p className="font-bold text-sm md:text-lg">{project.description}</p>
              </div>

              <div className="space-y-3 md:space-y-4">
                <div className="bg-orange-500 text-white p-3 md:p-4 border-2 md:border-4 border-white">
                  <div className="flex items-center gap-2 mb-1 md:mb-2">
                    <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="font-black text-sm md:text-base">기간</span>
                  </div>
                  <span className="font-bold text-sm md:text-base">{project.period}</span>
                </div>

                <div className="bg-lime-400 text-black p-3 md:p-4 border-2 md:border-4 border-white">
                  <div className="flex items-center gap-2 mb-1 md:mb-2">
                    <Users className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="font-black text-sm md:text-base">팀 규모</span>
                  </div>
                  <span className="font-bold text-sm md:text-base">{project.teamSize}</span>
                </div>

                <div className="bg-pink-500 text-white p-3 md:p-4 border-2 md:border-4 border-white">
                  <div className="flex items-center gap-2 mb-1 md:mb-2">
                    <Code className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="font-black text-sm md:text-base">역할</span>
                  </div>
                  <span className="font-bold text-sm md:text-base">{project.role}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-xl md:text-2xl font-black text-lime-400">기술 스택</h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {project.mainTech.map((tech: string, index: number) => (
                <span
                  key={tech}
                  className={`px-2 md:px-4 py-1 md:py-2 font-bold border-2 md:border-4 border-black text-xs md:text-base
                    ${index % 3 === 0 ? 'bg-orange-500 text-white' : 
                      index % 3 === 1 ? 'bg-lime-400 text-black' : 'bg-pink-500 text-white'}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-xl md:text-2xl font-black text-orange-500">주요 성과</h3>
            <div className="space-y-2 md:space-y-3">
              {project.achievements.map((achievement: string, index: number) => (
                <div key={index} className="relative group">
                  <div className={`absolute inset-0 ${index % 2 === 0 ? 'bg-lime-400' : 'bg-pink-500'} transform ${isMobile ? '' : 'rotate-1'}`} />
                  <div className={`relative bg-black border-2 md:border-4 border-white p-3 md:p-4 transform ${isMobile ? '' : 'group-hover:translate-x-2 group-hover:translate-y-2'} transition-transform`}>
                    <div className="flex items-start gap-2 md:gap-3">
                      <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-lime-400 rounded-full mt-2 md:mt-3 flex-shrink-0" />
                      <span className="text-white font-bold text-sm md:text-base">{achievement}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case 'code':
      return (
        <div className="space-y-4 md:space-y-6">
          <h3 className="text-2xl md:text-3xl font-black text-orange-500">핵심 코드</h3>
          <div className="relative">
            <div className={`absolute inset-0 bg-orange-500 transform ${isMobile ? '' : 'rotate-1'}`} />
            <div className="relative bg-black border-2 md:border-4 border-white p-3 md:p-6">
              <pre className="text-lime-400 font-mono text-xs md:text-sm overflow-x-auto whitespace-pre-wrap">
                <code>{project.coreCode || "비공개 코드입니다"}</code>
              </pre>
            </div>
          </div>
        </div>
      );

    case 'features':
      return (
        <div className="space-y-4 md:space-y-6">
          <h3 className="text-2xl md:text-3xl font-black text-lime-400">주요 기능</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {project.features.map((feature: string, index: number) => (
              <div key={index} className="relative group">
                <div className={`absolute inset-0 ${
                  index % 3 === 0 ? 'bg-orange-500' : 
                  index % 3 === 1 ? 'bg-lime-400' : 'bg-pink-500'
                } transform ${isMobile ? '' : `${index % 2 === 0 ? 'rotate-2' : '-rotate-2'} group-hover:rotate-0`} transition-transform`} />
                <div className={`relative bg-black border-2 md:border-4 border-white p-3 md:p-4 transform ${isMobile ? '' : 'group-hover:translate-x-2 group-hover:translate-y-2'} transition-transform`}>
                  <div className="flex items-center gap-2 md:gap-3">
                    <Code className="w-4 h-4 md:w-5 md:h-5 text-lime-400 flex-shrink-0" />
                    <span className="text-white font-bold text-sm md:text-base">{feature}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case 'docs':
      return (
        <div className="space-y-4 md:space-y-6">
          <h3 className="text-2xl md:text-3xl font-black text-pink-500">문서</h3>
          <div className="space-y-4 md:space-y-6">
            {project.documentation.map((doc: any, index: number) => (
              <div key={index} className="relative group">
                <div className={`absolute inset-0 ${index % 2 === 0 ? 'bg-pink-500' : 'bg-orange-500'} 
                  transform ${isMobile ? '' : 'rotate-1 group-hover:rotate-0'} transition-transform`} />
                <div className={`relative bg-black border-2 md:border-4 border-white p-4 md:p-6 transform ${isMobile ? '' : 'group-hover:translate-x-4 group-hover:translate-y-4'} transition-transform`}>
                  <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                    <div className="w-20 h-20 md:w-24 md:h-24 border-2 md:border-4 border-white overflow-hidden flex-shrink-0">
                      <img src={doc.thumbnail} alt={doc.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-lime-400 font-bold mb-2">
                        <FileText className="w-3 h-3 md:w-4 md:h-4" />
                        <span className="text-xs md:text-sm">{doc.type}</span>
                      </div>
                      <h4 className="font-black text-white mb-2 text-sm md:text-lg">{doc.title}</h4>
                      <p className="text-gray-300 mb-3 md:mb-4 text-xs md:text-sm">{doc.description}</p>
                      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-0">
                        <span className="text-xs text-gray-400">업데이트: {doc.lastUpdated}</span>
                        <a
                          href={doc.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-lime-400 text-black px-3 md:px-4 py-1 md:py-2 font-black text-xs md:text-sm border border-black"
                        >
                          문서 보기
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case 'gallery':
      return (
        <div className="space-y-4 md:space-y-6">
          <h3 className="text-2xl md:text-3xl font-black text-orange-500">프로젝트 갤러리</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            {project.gallery.map((image: string, index: number) => (
              <div
                key={index}
                className="relative group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className={`absolute inset-0 ${
                  index % 3 === 0 ? 'bg-orange-500' : 
                  index % 3 === 1 ? 'bg-lime-400' : 'bg-pink-500'
                } transform ${isMobile ? '' : 'rotate-2 group-hover:rotate-0'} transition-transform`} />
                <div className={`relative border-2 md:border-4 border-white overflow-hidden transform ${isMobile ? '' : 'group-hover:translate-x-3 group-hover:translate-y-3'} transition-transform`}>
                  <div className="relative w-full pt-[75%]"> {/* 4:3 비율 컨테이너 */}
                    <img
                      src={image}
                      alt={`Project screenshot ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-all">
                    <span className="text-white bg-orange-500 px-3 md:px-4 py-2 font-black border border-white text-sm md:text-base">
                      {isMobile ? '확대' : 'EXPAND'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
}
