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
      {/* Brutalist Shadow */}
      <div className="absolute inset-0 bg-lime-400 transform rotate-2 group-hover:rotate-0 transition-transform duration-300" />
      
      <div className="relative bg-black border-4 border-white p-6 transform group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300">
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <h3 className="text-xl font-black text-white transform hover:rotate-1 transition-transform">
                {education.school}
              </h3>
              <div className="bg-orange-500 text-black p-2 transform -rotate-1 border-2 border-black inline-block">
                <p className="font-bold text-sm">{education.major}</p>
              </div>
            </div>
            <div className="w-12 h-12 bg-pink-500 flex items-center justify-center transform rotate-45 border-2 border-white">
              <GraduationCap className="w-6 h-6 text-white transform -rotate-45" />
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-white text-black p-3 transform rotate-1 border-2 border-lime-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-black" />
                <span className="font-bold text-sm">{education.degree} • {education.period}</span>
              </div>
            </div>
            
            {education.gpa && (
              <div className="bg-pink-500 text-white p-3 transform -rotate-1 border-2 border-white">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-white" />
                  <span className="font-bold text-sm">GPA: {education.gpa}</span>
                </div>
              </div>
            )}
          </div>

          <div className="bg-lime-400 text-black px-4 py-2 transform hover:scale-105 transition-transform border-2 border-black inline-block">
            <span className="font-black text-sm uppercase">{education.status}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
