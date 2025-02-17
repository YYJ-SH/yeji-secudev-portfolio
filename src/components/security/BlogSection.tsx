// components/security/BlogSection.tsx
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BlogArticleCard } from './BlogArticleCard';

interface Article {
 title: string;
 platform: 'medium' | 'tistory' | 'github';
 date: string;
 tags: string[];
 url: string;
 description: string;
 thumbnail?: string;
}

interface BlogSectionProps {
 title: string;
 articles: Article[];
}

export const BlogSection = ({ title, articles }: BlogSectionProps) => {
 // 플랫폼별로 글 분류
 const groupedArticles = articles.reduce((acc, article) => {
   if (!acc[article.platform]) {
     acc[article.platform] = [];
   }
   acc[article.platform].push(article);
   return acc;
 }, {} as Record<string, Article[]>);

 return (
   <div className="space-y-12">
     <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 
                    text-transparent bg-clip-text">
       {title}
     </h2>

     {Object.entries(groupedArticles).map(([platform, platformArticles]) => (
       <div key={platform} className="space-y-6">
         <h3 className="text-2xl font-bold text-gray-900 capitalize">
           {platform === 'medium' ? 'Medium' : 
            platform === 'tistory' ? 'Tistory Blog' : 
            'GitHub Posts'}
         </h3>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {platformArticles.map((article) => (
             <BlogArticleCard key={article.url} article={article} />
           ))}
         </div>
       </div>
     ))}
   </div>
 );
};