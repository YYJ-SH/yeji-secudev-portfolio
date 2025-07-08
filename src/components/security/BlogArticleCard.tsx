// components/security/BlogArticleCard.tsx
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink, BookOpen, ArrowUpRight } from 'lucide-react';

interface Article {
  title: string;
  platform: string;
  date: string;
  tags: string[];
  url: string;
  description: string;
  thumbnail?: string;
}

export const BlogArticleCard = ({ article }: { article: Article }) => {
  const platformColors: { [key: string]: string } = {
    medium: 'bg-orange-500',
    tistory: 'bg-lime-400',
    github: 'bg-pink-500'
  };

  const platformColor = platformColors[article.platform] || 'bg-orange-500';

  return (
    <div className="relative group">
      {/* Brutalist Shadow */}
      <div className={`absolute inset-0 ${platformColor} transform rotate-2 group-hover:rotate-0 transition-transform duration-300`} />
      
      <div className="relative bg-black border-4 border-white min-h-[510px] transform group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300">
        {/* Thumbnail if exists */}
        {article.thumbnail && (
          <div className="relative h-48 overflow-hidden border-b-4 border-white">
            <img 
              src={article.thumbnail} 
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute top-4 right-4 w-8 h-8 bg-lime-400 transform rotate-45 border-2 border-black" />
          </div>
        )}

        <div className="p-6">
          {/* Platform Badge & Date */}
          <div className="flex items-center justify-between mb-4">
            <div className={`${platformColor} text-black px-3 py-1 font-black text-sm border-2 border-black transform hover:scale-105 transition-transform uppercase flex items-center gap-2`}>
              <BookOpen className="w-3 h-3" />
              {article.platform}
            </div>
            <div className="flex items-center gap-2 text-lime-400 font-bold">
              <Calendar className="w-4 h-4" />
              {article.date}
            </div>
          </div>

          {/* Title & Description */}
          <div className="space-y-4 mb-6">
            <h3 className="text-xl font-black text-white transform hover:rotate-1 transition-transform leading-tight">
              {article.title}
            </h3>
            <div className="bg-white text-black p-3 transform -rotate-1 border-2 border-lime-400">
              <p className="font-bold text-sm line-clamp-2">
                {article.description}
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {article.tags.map((tag, index) => (
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

          {/* Read More Link */}
          <a 
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-pink-500 text-white px-4 py-2 font-black text-sm hover:scale-105 transition-transform border-2 border-white"
          >
            READ MORE
            <div className="w-6 h-6 bg-white text-pink-500 flex items-center justify-center transform rotate-45">
              <ArrowUpRight className="w-3 h-3 transform -rotate-45" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
