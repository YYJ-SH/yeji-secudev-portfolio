// app/portfolio/page.tsx
'use client';

import  RetroProjectCard  from '@/components/portfolio/RetroProjectCard';
import { content } from '@/data/content';
import { useLanguage } from '@/contexts/language-context';

export default function PortfolioPage() {
  const { language } = useLanguage();
  const { title, description, projects } = content[language].portfolio;

  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="container mx-auto px-6 mb-16">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 
                       text-transparent bg-clip-text mb-4">
          {title}
        </h1>
        <p className="text-xl text-gray-700 font-medium">
          {description}
        </p>
      </section>

      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {projects.map((project) => (
            <RetroProjectCard 
              key={project.id} 
              project={project} 
            />
          ))}
        </div>
      </section>
    </main>
  );
}