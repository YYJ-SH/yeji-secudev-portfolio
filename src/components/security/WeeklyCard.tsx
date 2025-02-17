// components/security/WeeklyCard.tsx
import { SecurityCourse } from '@/types/security';
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  FileText,
  CheckCircle2,
  Download,
  ExternalLink,
  Wrench as Tool

} from 'lucide-react';

interface WeeklyCardProps {
  course: SecurityCourse;
}

export const WeeklyCard = ({ course }: WeeklyCardProps) => {
  return (
    <div className="relative group">
      <Card className="relative border-2 border-purple-300/50 bg-gradient-to-b from-gray-50 to-white/80 
                     backdrop-blur-sm overflow-hidden shadow-[0_0_15px_rgba(147,51,234,0.1)]">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="bg-purple-50">
                  Week {course.week}
                </Badge>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  {course.date}
                </div>
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 
                           text-transparent bg-clip-text">
                {course.title}
              </h3>
            </div>
          </div>

          {/* Content */}
          <Tabs defaultValue="topics" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-purple-50 rounded-xl p-1">
              <TabsTrigger value="topics">Topics</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
              <TabsTrigger value="materials">Materials</TabsTrigger>
            </TabsList>

            <TabsContent value="topics" className="mt-4">
              <ul className="space-y-2">
                {course.topics.map((topic, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-500 mt-1" />
                    <span className="text-gray-600">{topic}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="tools" className="mt-4">
              <div className="flex flex-wrap gap-2">
                {course.tools.map((tool) => (
                  <Badge 
                    key={tool}
                    className="bg-gradient-to-r from-cyan-50 to-purple-50 
                             text-purple-600 border border-purple-200"
                  >
                    <Tool className="w-3 h-3 mr-1" />
                    {tool}
                  </Badge>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="materials" className="mt-4">
              <div className="space-y-3">
                {course.files?.map((file) => (
                  <a
                    key={file.name}
                    href={file.link}
                    className="flex items-center justify-between p-3 rounded-lg
                             bg-gradient-to-r from-purple-50 to-cyan-50
                             border border-purple-200 group"
                  >
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-purple-500" />
                      <span className="text-gray-700">{file.name}</span>
                    </div>
                    <Download className="w-4 h-4 text-purple-500 
                                    group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Demo Link */}
          {course.demo && (
            <div className="mt-4">
              <a
                href={course.demo}
                className="flex items-center gap-2 text-sm text-purple-600 hover:text-purple-700"
              >
                <ExternalLink className="w-4 h-4" />
                View Demo
              </a>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};