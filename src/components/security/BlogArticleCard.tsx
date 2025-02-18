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
  const platformIcons = {
    medium: BookOpen,
    tistory: BookOpen,
    github: BookOpen
  };

  const platformColors = {
    medium: 'from-slate-50 to-gray-50',
    tistory: 'from-orange-50 to-rose-50',
    github: 'from-purple-50 to-cyan-50'
  };

  const PlatformIcon = platformIcons[article.platform];

  return (
    <div className="relative group">
      <Card className="relative border-2 border-purple-300/50 bg-gradient-to-b from-gray-50 to-white/80 
                     backdrop-blur-sm overflow-hidden shadow-[0_0_15px_rgba(147,51,234,0.1)]
                     hover:shadow-[0_0_20px_rgba(147,51,234,0.2)] transition-all">
        {/* Thumbnail if exists */}
        {article.thumbnail && (
          <div className="relative h-48 overflow-hidden">
            <img 
              src={article.thumbnail} 
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        )}

        <div className="p-6">
          {/* Platform Badge & Date */}
          <div className="flex items-center justify-between mb-4">
            <Badge 
              className={`bg-gradient-to-r ${platformColors[article.platform]} 
                       text-gray-700 border-gray-200 capitalize flex items-center gap-1`}
            >
              <PlatformIcon className="w-3 h-3" />
              {article.platform}
            </Badge>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <Calendar className="w-4 h-4" />
              {article.date}
            </div>
          </div>

          {/* Title & Description */}
          <div className="space-y-2 mb-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 
                         text-transparent bg-clip-text group-hover:from-cyan-600 group-hover:to-purple-600 
                         transition-all duration-300">
              {article.title}
            </h3>
            <p className="text-gray-600 line-clamp-2">
              {article.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {article.tags.map((tag) => (
              <span 
                key={tag}
                className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-purple-50 to-cyan-50 
                         text-gray-600 border border-purple-100"
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
            className="inline-flex items-center gap-1 text-sm text-purple-600 hover:text-purple-700
                     group-hover:gap-2 transition-all"
          >
            Read More
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </Card>
    </div>
  );
};