// components/security/WriteupCard.tsx
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, CalendarDays, ExternalLink } from 'lucide-react';

interface Writeup {
  title: string;
  platform: string;
  difficulty: string;
  tags: string[];
  writeupUrl: string;
  date: string;
}

export const WriteupCard = ({ writeup }: { writeup: Writeup }) => {
  const difficultyColors = {
    'Easy': 'bg-lime-400',
    'Medium': 'bg-orange-500', 
    'Hard': 'bg-pink-500'
  };

  return (
    <a 
      href={writeup.writeupUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div className="relative">
        {/* Brutalist Shadow */}
        <div className="absolute inset-0 bg-orange-500 transform rotate-2 group-hover:rotate-0 transition-transform duration-300" />
        
        <div className="relative bg-black border-4 border-white p-6 transform group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300">
          <div className="flex items-start justify-between mb-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-lime-400 flex items-center justify-center transform rotate-45 border-2 border-black">
                  <FileText className="w-4 h-4 text-black transform -rotate-45" />
                </div>
                <h3 className="text-lg font-black text-white">{writeup.title}</h3>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="bg-white text-black px-3 py-1 font-bold text-sm border-2 border-black">
                  {writeup.platform}
                </span>
                <span className={`px-3 py-1 font-black text-sm border-2 border-black text-black transform hover:scale-105 transition-transform
                  ${difficultyColors[writeup.difficulty as keyof typeof difficultyColors] || 'bg-gray-500'}`}>
                  {writeup.difficulty}
                </span>
              </div>
            </div>
            
            <div className="w-10 h-10 bg-pink-500 flex items-center justify-center transform -rotate-12 group-hover:rotate-0 transition-transform border-2 border-white">
              <ExternalLink className="w-5 h-5 text-white transform rotate-12" />
            </div>
          </div>

          <div className="mb-4 flex flex-wrap gap-2">
            {writeup.tags.map((tag, index) => (
              <span 
                key={tag}
                className={`px-2 py-1 font-bold text-xs border-2 border-black transform hover:scale-105 transition-transform
                  ${index % 3 === 0 ? 'bg-orange-500 text-white' : 
                    index % 3 === 1 ? 'bg-lime-400 text-black' : 'bg-pink-500 text-white'}`}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 text-lime-400 font-bold">
            <CalendarDays className="w-4 h-4" />
            {writeup.date}
          </div>
        </div>
      </div>
    </a>
  );
};
