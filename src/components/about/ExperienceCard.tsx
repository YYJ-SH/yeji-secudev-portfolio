// components/about/ExperienceCard.tsx
import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

interface ExperienceProps {
  experience: {
    company: string;
    department: string;
    role: string;
    period: string;
    responsibilities: string[];
  };
}

export const ExperienceCard = ({ experience }: ExperienceProps) => {
    return (
      <div className="relative pl-16">
        {/* Timeline dot */}
        <div className="absolute left-6 -translate-x-1/2 top-6 w-4 h-4 rounded-full border-2 
                      border-purple-400 bg-white" />
  
        <div className="relative group">
          <Card className="relative border-2 border-purple-300/50 bg-gradient-to-b from-gray-50 to-white/80 
                         backdrop-blur-sm overflow-hidden shadow-[0_0_15px_rgba(147,51,234,0.1)]">
            {/* Glowing corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-purple-400" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-purple-400" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-400" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-purple-400" />
  
            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 
                               text-transparent bg-clip-text">
                    {experience.company}
                  </h3>
                  <p className="text-gray-600 font-medium">{experience.department}</p>
                </div>
                <div className="flex gap-2 items-center px-3 py-1 bg-purple-100 text-purple-600 
                              rounded-full text-sm">
                  <Briefcase className="w-4 h-4" />
                  {experience.role}
                </div>
              </div>
  
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-4 h-4 text-purple-500" />
                <span>{experience.period}</span>
              </div>
  
              <div className="space-y-2">
                {experience.responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-500 mt-1" />
                    <span className="text-gray-600">{responsibility}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  };