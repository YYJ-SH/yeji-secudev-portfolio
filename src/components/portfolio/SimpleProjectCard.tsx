// components/portfolio/SimpleProjectCard.tsx
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, CalendarDays, ExternalLink, Github, Monitor, Users } from 'lucide-react';

interface Project {
  id: string;
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
  documentation: any[];
  coreCode: string;
  features: string[];
  gallery: string[];
  liveDemoLink?: string;
  githubLink?: string;
}

export const SimpleProjectCard = ({ project, onClick }: { project: Project; onClick?: () => void }) => {
  return (
    <div 
      className="block group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative">
        {/* Brutalist Shadow */}
        <div className="absolute inset-0 bg-orange-500 transform rotate-2 group-hover:rotate-0 transition-transform duration-300" />
        
        <div className="relative bg-black border-4 border-white p-6 transform group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300">
          <div className="flex items-start justify-between mb-4">
            <div className="space-y-3 flex-1">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-lime-400 flex items-center justify-center transform rotate-45 border-2 border-black">
                  <Monitor className="w-4 h-4 text-black transform -rotate-45" />
                </div>
                <h3 className="text-lg font-black text-white leading-tight">{project.title}</h3>
              </div>
              
              <div className="flex items-center gap-3 flex-wrap">
                <span className="bg-white text-black px-3 py-1 font-bold text-sm border-2 border-black">
                  {project.teamSize}
                </span>
                <span className="bg-pink-500 text-white px-3 py-1 font-black text-sm border-2 border-black transform hover:scale-105 transition-transform">
                  {project.role}
                </span>
              </div>
            </div>
            
            <div className="flex gap-2 ml-4">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white text-black flex items-center justify-center transform rotate-45 hover:rotate-0 transition-transform border-2 border-black"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-4 h-4 transform -rotate-45" />
                </a>
              )}
              {project.liveDemoLink && (
                <a
                  href={project.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-lime-400 text-black flex items-center justify-center transform -rotate-45 hover:rotate-0 transition-transform border-2 border-black"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-4 h-4 transform rotate-45" />
                </a>
              )}
              <div className="w-8 h-8 bg-pink-500 flex items-center justify-center transform -rotate-12 group-hover:rotate-0 transition-transform border-2 border-white">
                <ExternalLink className="w-4 h-4 text-white transform rotate-12" />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-4">
            <div className="bg-white text-black p-3 transform rotate-1 border-2 border-lime-400">
              <p className="font-bold text-sm leading-relaxed">{project.description}</p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-4 flex flex-wrap gap-2">
            {project.mainTech.slice(0, 6).map((tech, index) => (
              <span 
                key={tech}
                className={`px-2 py-1 font-bold text-xs border-2 border-black transform hover:scale-105 transition-transform
                  ${index % 3 === 0 ? 'bg-orange-500 text-white' : 
                    index % 3 === 1 ? 'bg-lime-400 text-black' : 'bg-pink-500 text-white'}`}
              >
                {tech}
              </span>
            ))}
            {project.mainTech.length > 6 && (
              <span className="px-2 py-1 font-bold text-xs border-2 border-black bg-gray-600 text-white">
                +{project.mainTech.length - 6}
              </span>
            )}
          </div>

          {/* Period */}
          <div className="flex items-center gap-2 text-lime-400 font-bold">
            <CalendarDays className="w-4 h-4" />
            {project.period}
          </div>
        </div>
      </div>
    </div>
  );
};
