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
  return (
    <a 
      href={writeup.writeupUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <Card className="relative border-2 border-purple-300/50 bg-gradient-to-b from-gray-50 to-white/80 
                     backdrop-blur-sm overflow-hidden shadow-[0_0_15px_rgba(147,51,234,0.1)]
                     hover:shadow-[0_0_20px_rgba(147,51,234,0.2)] transition-all">
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-purple-500" />
                <h3 className="text-lg font-bold text-gray-900">{writeup.title}</h3>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>{writeup.platform}</span>
                <span>•</span>
                <span className={`
                  ${writeup.difficulty === 'Easy' ? 'text-green-600' :
                    writeup.difficulty === 'Medium' ? 'text-yellow-600' :
                    'text-red-600'}
                `}>
                  {writeup.difficulty}
                </span>
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-purple-500 
                                 group-hover:rotate-45 transition-transform" />
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {writeup.tags.map((tag) => (
              <Badge 
                key={tag}
                className="bg-purple-50 text-purple-600 border-purple-200"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
            <CalendarDays className="w-4 h-4" />
            {writeup.date}
          </div>
        </div>
      </Card>
    </a>
  );
};