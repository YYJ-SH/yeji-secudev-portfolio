// components/about/EducationCard.tsx
import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar, Star } from 'lucide-react';

interface EducationProps {
  education: {
    school: string;
    major: string;
    degree: string;
    period: string;
    status: string;
    gpa?: string;
  };
}

export const EducationCard = ({ education }: EducationProps) => {
  return (
    <div className="relative group">
      {/* Scanline animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03)_50%,rgba(0,0,0,0.03)_50%)] bg-[length:100%_4px]" />
      </div>

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
                {education.school}
              </h3>
              <p className="text-gray-600 font-medium">{education.major}</p>
            </div>
            <div className="flex gap-2 items-center px-3 py-1 bg-purple-100 text-purple-600 
                          rounded-full text-sm">
              <GraduationCap className="w-4 h-4" />
              {education.degree}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-4 h-4 text-purple-500" />
              <span>{education.period}</span>
            </div>
            {education.gpa && (
              <div className="flex items-center gap-2 text-gray-600">
                <Star className="w-4 h-4 text-purple-500" />
                <span>GPA: {education.gpa}</span>
              </div>
            )}
          </div>

          <div className="mt-4 inline-block px-3 py-1 bg-gradient-to-r from-purple-50 to-cyan-50 
                        border border-purple-200 rounded-full text-sm text-purple-600">
            {education.status}
          </div>
        </div>
      </Card>
    </div>
  );
};