import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  ExternalLink,
  Code,
  Cpu,
  Users,
  Calendar,
  CheckCircle2,
  FileText,
  Clock,
  ArrowUpRight,
  Monitor,
} from "lucide-react";
import { ImageModal } from "../common/ImageModal";

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

interface RetroProjectCardProps {
  project: Project;
}

const RetroProjectCard = ({ project }: RetroProjectCardProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="p-6">
      <div className="relative group">
        {/* Brutalist Card Container */}
        <div className="absolute inset-0 bg-orange-500 transform rotate-2 group-hover:rotate-0 transition-transform duration-300" />
        
        <div className="relative bg-black border-4 border-white transform group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300">
          {/* Brutalist Header */}
          <div className="p-6 border-b-4 border-white">
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-2xl md:text-3xl font-black text-white leading-tight">
                {project.title}
              </h2>
              <div className="flex gap-2">
                {project.githubLink && (
                  <a 
                    href={project.githubLink}
                    className="w-10 h-10 bg-white text-black flex items-center justify-center transform rotate-45 hover:rotate-0 transition-transform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 transform -rotate-45" />
                  </a>
                )}
                {project.liveDemoLink && (
                  <a 
                    href={project.liveDemoLink}
                    className="w-10 h-10 bg-lime-400 text-black flex items-center justify-center transform -rotate-45 hover:rotate-0 transition-transform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5 transform rotate-45" />
                  </a>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.mainTech.map((tech, index) => (
                <span
                  key={tech}
                  className={`px-3 py-1 font-bold text-sm border-2 border-black transform hover:scale-105 transition-transform
                    ${index % 3 === 0 ? 'bg-orange-500 text-white' : 
                      index % 3 === 1 ? 'bg-lime-400 text-black' : 'bg-pink-500 text-white'}`}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="bg-white text-black p-4 transform rotate-1">
              <p className="font-bold text-lg">{project.description}</p>
            </div>
          </div>

          {/* Brutalist Tabs */}
          <Tabs defaultValue="overview" className="w-full">
            <div className="border-b-4 border-white">
              <TabsList className="grid w-full grid-cols-5 bg-black rounded-none h-auto">
                {[
                  { value: "overview", label: "OVERVIEW" },
                  { value: "code", label: "CODE" },
                  { value: "features", label: "FEATURES" },
                  { value: "docs", label: "DOCS" },
                  { value: "gallery", label: "GALLERY" }
                ].map((tab, index) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className={`font-black text-white border-r-4 border-white last:border-r-0 
                      data-[state=active]:bg-orange-500 data-[state=active]:text-white
                      hover:bg-lime-400 hover:text-black transform hover:scale-105 transition-all
                      ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value="overview" className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Brutalist Image Container */}
                <div className="relative group cursor-pointer" onClick={() => setSelectedImage(project.thumbnail || project.gallery[0])}>
                  <div className="absolute inset-0 bg-pink-500 transform rotate-3" />
                  <div className="relative border-4 border-white transform group-hover:rotate-0 transition-transform">
                    <img
                      src={project.thumbnail || project.gallery[0]}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300">
                      <span className="text-white bg-orange-500 px-4 py-2 font-black border-2 border-white">
                        ZOOM IN
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-lime-400 font-bold">
                      <Cpu className="w-5 h-5" />
                      <span>ROLE: {project.role}</span>
                    </div>
                    <div className="flex items-center gap-2 text-lime-400 font-bold">
                      <Users className="w-5 h-5" />
                      <span>TEAM: {project.teamSize || "N/A"}</span>
                    </div>
                    <div className="flex items-center gap-2 text-lime-400 font-bold">
                      <Calendar className="w-5 h-5" />
                      <span>PERIOD: {project.period}</span>
                    </div>
                  </div>

                  <div className="bg-lime-400 text-black p-4 transform -rotate-1">
                    <h3 className="text-lg font-black mb-2">KEY ACHIEVEMENTS</h3>
                    <ul className="space-y-2">
                      {project.achievements?.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0" />
                          <span className="font-bold text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="code" className="p-6">
              <div className="relative">
                <div className="absolute inset-0 bg-orange-500 transform rotate-1" />
                <div className="relative bg-black border-4 border-white p-4 transform group-hover:rotate-0 transition-transform">
                  <pre className="text-lime-400 font-mono text-sm overflow-x-auto">
                    <code>{project.coreCode || "비공개 코드입니다"}</code>
                  </pre>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="features" className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="relative group"
                  >
                    <div className={`absolute inset-0 ${
                      index % 3 === 0 ? 'bg-orange-500' : 
                      index % 3 === 1 ? 'bg-lime-400' : 'bg-pink-500'
                    } transform ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'} 
                    group-hover:rotate-0 transition-transform`} />
                    <div className="relative bg-black border-2 border-white p-3 transform group-hover:translate-x-1 group-hover:translate-y-1 transition-transform">
                      <div className="flex items-center gap-3">
                        <Code className="w-5 h-5 text-lime-400 flex-shrink-0" />
                        <span className="text-white font-bold text-sm">{feature}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="docs" className="p-6">
              <div className="space-y-4">
                {project.documentation.map((doc, index) => (
                  <div key={index} className="relative group">
                    <div className={`absolute inset-0 ${index % 2 === 0 ? 'bg-pink-500' : 'bg-orange-500'} 
                      transform rotate-1 group-hover:rotate-0 transition-transform`} />
                    <div className="relative bg-black border-4 border-white p-4 transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform">
                      <div className="flex items-start gap-4">
                        <div className="w-20 h-20 border-2 border-white overflow-hidden">
                          <img src={doc.thumbnail} alt={doc.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 text-lime-400 font-bold mb-2">
                            <FileText className="w-4 h-4" />
                            <span>{doc.type}</span>
                          </div>
                          <h3 className="font-black text-white mb-1">{doc.title}</h3>
                          <p className="text-gray-300 text-sm mb-2">{doc.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-400">Updated: {doc.lastUpdated}</span>
                            <a
                              href={doc.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-lime-400 text-black px-3 py-1 font-black text-sm hover:scale-105 transition-transform"
                            >
                              VIEW DOC
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="gallery" className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.gallery.map((image, index) => (
                  <div
                    key={index}
                    className="relative group cursor-pointer"
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className={`absolute inset-0 ${
                      index % 3 === 0 ? 'bg-orange-500' : 
                      index % 3 === 1 ? 'bg-lime-400' : 'bg-pink-500'
                    } transform rotate-2 group-hover:rotate-0 transition-transform`} />
                    <div className="relative border-4 border-white overflow-hidden transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform">
                      <img
                        src={image}
                        alt={`Project screenshot ${index + 1}`}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/0 hover:bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-all">
                        <span className="text-white bg-orange-500 px-4 py-2 font-black border-2 border-white">
                          EXPAND
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <ImageModal
        isOpen={!!selectedImage}
        imageUrl={selectedImage || ""}
        alt={project.title}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};

export default RetroProjectCard;
