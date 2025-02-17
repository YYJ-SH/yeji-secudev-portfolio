// // components/portfolio/ProjectCard.tsx
// 'use client';

// import { Card } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Badge } from "@/components/ui/badge";
// import { Github, ExternalLink, Code } from 'lucide-react';
// import { Project } from "@/data/content";

// interface ProjectCardProps {
//   project: Project;  // 타입은 아래에 정의
// }

// export const ProjectCard = ({ project }: ProjectCardProps) => {
//   return (
//     <Card className="overflow-hidden border border-purple-200/50 bg-white/50">
//       {/* Thumbnail Image */}
//       <div className="relative h-48 overflow-hidden">
//         <img 
//           src={project.thumbnail} 
//           alt={project.title}
//           className="w-full h-full object-cover transition-transform 
//                      hover:scale-105 duration-500"
//         />
//         <div className="absolute bottom-0 left-0 right-0 h-20 
//                       bg-gradient-to-t from-black/50 to-transparent" />
//       </div>

//       {/* Content */}
//       <div className="p-6">
//         <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        
//         <Tabs defaultValue="overview" className="mt-4">
//           <TabsList className="grid w-full grid-cols-3">
//             <TabsTrigger value="overview">Overview</TabsTrigger>
//             <TabsTrigger value="technical">Technical</TabsTrigger>
//             <TabsTrigger value="results">Results</TabsTrigger>
//           </TabsList>

//           <TabsContent value="overview" className="mt-4 space-y-4">
//             <p className="text-gray-700">{project.description}</p>
//             <div className="flex flex-wrap gap-2">
//               {project.skills.map((skill) => (
//                 <Badge key={skill} variant="outline">
//                   {skill}
//                 </Badge>
//               ))}
//             </div>
//           </TabsContent>

//           <TabsContent value="technical" className="mt-4 space-y-4">
//             <div>
//               <h3 className="font-semibold mb-2">주요 기술</h3>
//               <div className="space-y-2">
//                 {project.technicalDetails.map((detail, idx) => (
//                   <div key={idx} className="flex items-start gap-2">
//                     <Code className="w-4 h-4 mt-1 text-purple-600" />
//                     <span>{detail}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </TabsContent>

//           <TabsContent value="results" className="mt-4 space-y-4">
//             <div>
//               <h3 className="font-semibold mb-2">주요 성과</h3>
//               <ul className="space-y-2">
//                 {project.achievements.map((achievement, idx) => (
//                   <li key={idx} className="flex items-start gap-2">
//                     <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2" />
//                     <span>{achievement}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </TabsContent>
//         </Tabs>

//         {/* Links */}
//         <div className="flex gap-4 mt-6">
//           {project.demoUrl && (
//             <a 
//               href={project.demoUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 text-purple-600 hover:text-purple-700"
//             >
//               <ExternalLink className="w-4 h-4" />
//               Demo
//             </a>
//           )}
//           {project.githubUrl && (
//             <a 
//               href={project.githubUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 text-purple-600 hover:text-purple-700"
//             >
//               <Github className="w-4 h-4" />
//               Code
//             </a>
//           )}
//         </div>
//       </div>
//     </Card>
//   );
// };