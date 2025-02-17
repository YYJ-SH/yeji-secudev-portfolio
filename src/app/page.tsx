// app/page.tsx
"use client";

import { content } from "@/data/content";
import { useLanguage } from "@/contexts/language-context";

export default function Home() {
  const { language } = useLanguage();
  const { social, navCards, hero } = content[language];
  const gradients: { [key: string]: string } = {
    about: "from-cyan-400 to-blue-500",
    portfolio: "from-purple-400 to-pink-500",
    security: "from-pink-500 to-purple-600",
    certifications: "from-cyan-400 to-purple-500"
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-8">
              <div>
                <h1 className="text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                    {hero.greeting}
                    <br />
                    {hero.role}
                    <br />
                    {hero.name}
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mt-6">{hero.description}</p>
              </div>
              <div className="flex space-x-4">
                {social.map(({ icon: Icon, href, label }) => (
                  <a
                    key={href}
                    href={href}
                    aria-label={label}
                    className="p-3 border border-purple-200 rounded-xl bg-white/50
                             hover:bg-purple-50 transition-colors"
                  >
                    <Icon className="w-6 h-6 text-purple-600" />
                  </a>
                ))}
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 rounded-full blur-3xl" />
              <div className="relative border-2 border-purple-200/50 rounded-full overflow-hidden">
                <img
                  src="/profile2.png"
                  alt="Yeji Yu"
                  className="w-full rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {navCards.map(({ title, description, icon: Icon, href }) => (
            <a
  
  key={title}
  href={href}
  className="p-6 rounded-xl border border-purple-200/50 bg-white/50
           hover:bg-purple-50/50 transition-all duration-300 group"
>
<div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4
                 group-hover:scale-110 transition-transform bg-gradient-to-r
                 ${gradients[href.replace('/', '') as keyof typeof gradients]}`}>
    <Icon className="w-6 h-6 text-white" />
  </div>
  <h3 className="text-xl mb-2 bg-gradient-to-r from-gray-600 via-purple-900 to-gray-900 
                 text-transparent bg-clip-text font-bold">{title}</h3>
  <p className="text-gray-700 font-medium">{description}</p>
</a>
))}
          </div>
        </div>
      </section>
    </main>
  );
}
