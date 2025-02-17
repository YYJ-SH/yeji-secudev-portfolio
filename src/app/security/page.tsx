// app/security/page.tsx
'use client';

import { useLanguage } from '@/contexts/language-context';
import { content } from '@/data/content';
import { PlatformStatsCard } from '@/components/security/PlatformStatsCard';
import { WriteupCard } from '@/components/security/WriteUpCard';
import { BlogSection } from '@/components/security/BlogSection';
import { Card } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

export default function SecurityPage() {
  const { language } = useLanguage();
  const { security } = content[language];

  return (
    <main className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-16">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 
                       text-transparent bg-clip-text mb-4">
          {security.title}
        </h1>
        <p className="text-xl text-gray-700 font-medium">
          {security.subtitle}
        </p>
        <p className="mt-4 text-gray-600">
          {security.overview}
        </p>
      </section>

      {/* CTF Section */}
      <section className="container mx-auto px-6 mb-16">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 
                       text-transparent bg-clip-text mb-8">
          CTF & Problem Solving
        </h2>
        
        {/* Platform Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {security.ctf.platforms.map((platform) => (
            <PlatformStatsCard key={platform.name} platform={platform} />
          ))}
        </div>

        {/* Writeups */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">Write-ups</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {security.ctf.writeups.map((writeup) => (
              <WriteupCard key={writeup.title} writeup={writeup} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Articles Section */}
      <section className="container mx-auto px-6 mb-16">
        <BlogSection title="Security Articles" articles={security.articles} />
      </section>

      {/* Teaching Materials */}
      <section className="container mx-auto px-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 
                       text-transparent bg-clip-text mb-8">
          {security.teaching.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {security.teaching.documentation.map((doc) => (
            <Card key={doc.title} className="p-6 border-2 border-purple-300/50">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{doc.title}</h3>
              <p className="text-gray-600 mb-4">{doc.description}</p>
              <a 
                href={doc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700"
              >
                View Materials
                <ExternalLink className="w-4 h-4" />
              </a>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}