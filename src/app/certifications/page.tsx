// app/certifications/page.tsx
'use client';

import { useLanguage } from '@/contexts/language-context';
import { content } from '@/data/content';
import { CertificateCard } from '@/components/certifications/CertificateCard';

export default function CertificationsPage() {
  const { language } = useLanguage();
  const { certifications } = content[language];

  const certificatesByType = {
    certification: certifications.certificates.filter(cert => cert.type === 'certification'),
    license: certifications.certificates.filter(cert => cert.type === 'license'),
    award: certifications.certificates.filter(cert => cert.type === 'award')
  };

  return (
    <main className="min-h-screen pt-24 pb-16">
      <section className="container mx-auto px-6 mb-16">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 
                       text-transparent bg-clip-text mb-4">
          {certifications.title}
        </h1>
        <p className="text-xl text-gray-700 font-medium">
          {certifications.subtitle}
        </p>
      </section>

      <div className="container mx-auto px-6 space-y-16">
        {Object.entries(certificatesByType).map(([type, certs]) => (
          certs.length > 0 && (
            <section key={type}>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 capitalize">
                {type === 'certification' ? 'Certifications' : 
                 type === 'license' ? 'Licenses' : 'Awards'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certs.map((cert) => (
                  <CertificateCard key={cert.name} certificate={cert} />
                ))}
              </div>
            </section>
          )
        ))}
      </div>
    </main>
  );
}