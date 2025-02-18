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
}

interface RetroProjectCardProps {
  project: Project;
}

const RetroProjectCard = ({ project }: RetroProjectCardProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="p-6">
      <div className="relative group">
        {/* Scan line animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03)_50%,rgba(0,0,0,0.03)_50%)] bg-[length:100%_4px]" />
        </div>

        <Card
          className="relative border-2 border-purple-300/50 bg-gradient-to-b from-gray-50 to-white/80 backdrop-blur-sm
                       overflow-hidden shadow-[0_0_15px_rgba(147,51,234,0.1)]"
        >
          {/* Glowing corners */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-purple-400" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-purple-400" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-400" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-purple-400" />

          <div className="p-6">
            {/* Header Section */}
            <div className="mb-8 space-y-4">
              <div className="flex items-start justify-between">
                <h2
                  className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 
                             text-transparent bg-clip-text"
                >
                  {project.title}
                </h2>
                <span className="px-3 py-1 text-sm bg-purple-100 text-purple-600 rounded-full">
                  {project.period}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.mainTech.map((tech) => (
                  <Badge
                    key={tech}
                    className="bg-gradient-to-r from-cyan-50 to-purple-50 
                             text-purple-600 border border-purple-200"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Content Tabs */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-5 bg-purple-50 rounded-xl p-1">
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:bg-white data-[state=active]:text-purple-600"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="code"
                  className="data-[state=active]:bg-white data-[state=active]:text-purple-600"
                >
                  Core Code
                </TabsTrigger>
                <TabsTrigger
                  value="features"
                  className="data-[state=active]:bg-white data-[state=active]:text-purple-600"
                >
                  Features
                </TabsTrigger>
                <TabsTrigger
                  value="docs"
                  className="data-[state=active]:bg-white data-[state=active]:text-purple-600"
                >
                  Docs
                </TabsTrigger>
                <TabsTrigger
                  value="gallery"
                  className="data-[state=active]:bg-white data-[state=active]:text-purple-600"
                >
                  Gallery
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Main Image with Retro Frame */}
                  <div
                    className="relative group cursor-pointer"
                    onClick={() =>
                      setSelectedImage(project.thumbnail || project.gallery[0])
                    }
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-200/20 to-cyan-200/20 rounded-lg" />
                    <div className="relative border-2 border-purple-200 rounded-lg overflow-hidden">
                      <img
                        src={project.thumbnail || project.gallery[0]}
                        alt={project.title}
                        className="w-full h-64 object-cover"
                      />
                      {/* Retro Overlay Effect */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-purple-900/20" />
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:4px_100%]" />
                      {/* Zoom Hint */}
                      <div
                        className="absolute inset-0 bg-black/0 hover:bg-black/20 
                  flex items-center justify-center opacity-0 hover:opacity-100 
                  transition-all duration-300"
                      >
                        <span className="text-white bg-black/50 px-4 py-2 rounded-lg">
                          크게 보기
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-4">
                    <div className="prose">
                      <p className="text-gray-600 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-purple-600">
                        <Cpu className="w-4 h-4" />
                        <span>Role: {project.role}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-purple-600">
                        <Users className="w-4 h-4" />
                        <span>Team Size: {project.teamSize || "N/A"}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-purple-600">
                        <Calendar className="w-4 h-4" />
                        <span>
                          Duration: {project.duration || project.period}
                        </span>
                      </div>
                    </div>

                    <div className="pt-4">
                      <h3 className="text-lg font-semibold mb-2">
                        Key Achievements
                      </h3>
                      <ul className="space-y-2">
                        {project.achievements?.map((achievement, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mt-1" />
                            <span className="text-gray-600 text-sm">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="code" className="mt-6">
                <div className="relative group rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-purple-100/20 to-cyan-100/20 pointer-events-none" />
                  <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto">
                    <code className="text-sm">{project.coreCode}</code>
                  </pre>
                </div>
              </TabsContent>

              <TabsContent value="features" className="mt-6">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg
                               bg-gradient-to-r from-purple-50 to-cyan-50
                               border border-purple-200"
                    >
                      <Code className="w-5 h-5 text-purple-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>

              <TabsContent value="docs" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.documentation.map((doc, index) => (
                    <div
                      key={index}
                      className="group relative border border-purple-200 rounded-lg overflow-hidden
                               hover:border-purple-300 transition-colors"
                    >
                      {/* Document Preview */}
                      <div className="relative h-40">
                        <img
                          src={doc.thumbnail}
                          alt={doc.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/30" />
                      </div>

                      {/* Document Info */}
                      <div className="p-4">
                        <div className="flex items-center gap-2 text-sm text-purple-500 mb-2">
                          <FileText className="w-4 h-4" />
                          <span>{doc.type}</span>
                        </div>
                        <h3 className="font-medium text-gray-900 mb-1">
                          {doc.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                          {doc.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <Clock className="w-3 h-3" />
                            <span>Updated: {doc.lastUpdated}</span>
                          </div>
                          <a
                            href={doc.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm text-purple-600 hover:text-purple-700
                                     group-hover:gap-2 transition-all"
                          >
                            View
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="gallery" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="relative group rounded-lg overflow-hidden
                   border-2 border-purple-200 cursor-pointer"
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        src={image}
                        alt={`Project screenshot ${index + 1}`}
                        className="w-full h-48 object-cover transition-transform 
                   group-hover:scale-105 duration-300"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t 
                      from-purple-900/40 to-transparent 
                      opacity-0 group-hover:opacity-100 
                      transition-opacity flex items-center justify-center"
                      >
                        <span className="text-white bg-black/50 px-4 py-2 rounded-lg">
                          크게 보기
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            {/* Footer Links */}
            <div className="flex justify-end gap-4 mt-6">
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 rounded-lg
                         text-purple-600 hover:text-purple-700
                         bg-purple-50 hover:bg-purple-100
                         transition-colors"
              >
                <Github className="w-5 h-5" />
                View Code
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2 rounded-lg
                         text-cyan-600 hover:text-cyan-700
                         bg-cyan-50 hover:bg-cyan-100
                         transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </a>
            </div>
          </div>
        </Card>
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
