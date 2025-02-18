// app/about/page.tsx
'use client';

import { useLanguage } from '@/contexts/language-context';
import { content } from '@/data/content';
import { Timeline } from '@/components/about/Timeline';
import { EducationCard } from '@/components/about/EducationCard';
import { ExperienceCard } from '@/components/about/ExperienceCard';
import { ClubActivities } from '@/components/about/ClubActivities';

export default function AboutPage() {
  const { language } = useLanguage();
  const { about } = content[language];

  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="container mx-auto px-6 mb-16">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 
                       text-transparent bg-clip-text mb-4">
          {about.title}
        </h1>
        <p className="text-xl text-gray-700 font-medium">
          {about.subtitle}
        </p>
      </section>

      <div className="container mx-auto px-6 space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-gray-700 mb-8">{
            language === 'ko' ? '학력' : 'Education'
            }</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {about.education.map((edu) => (
              <EducationCard key={edu.school} education={edu} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-700 mb-8">
            {language === 'ko' ? '경력' : 'Experience'}
          </h2>
          <Timeline>
            {about.experience.map((exp) => (
              <ExperienceCard key={exp.company} experience={exp} />
            ))}
          </Timeline>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-700 mb-8">{
            language === 'ko' ? '동아리 활동' : 'Club Activities'
            }</h2>
          <ClubActivities clubs={about.clubs} />
        </section>
      </div>
    </main>
  );
}