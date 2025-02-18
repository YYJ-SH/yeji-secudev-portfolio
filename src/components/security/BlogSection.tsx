// components/security/BlogSection.tsx
'use client';

import { useState } from 'react';
import { BlogArticleCard } from './BlogArticleCard';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Article {
  title: string;
  platform: string;
  date: string;
  tags: string[];
  url: string;
  description: string;
  thumbnail?: string;
}

interface BlogSectionProps {
  title: string;
  articles: Article[];
  itemsPerPage?: number;
}

export const BlogSection = ({ 
  title, 
  articles, 
  itemsPerPage = 6 
}: BlogSectionProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(articles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentArticles = articles.slice(startIndex, endIndex);

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 
                     text-transparent bg-clip-text">
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentArticles.map((article) => (
          <BlogArticleCard key={article.url} article={article} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-12">
          <Button
            variant="outline"
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>
          
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 ${
                  currentPage === page 
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'
                    : ''
                }`}
              >
                {page}
              </Button>
            ))}
          </div>

          <Button
            variant="outline"
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className="flex items-center gap-2"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  );
};