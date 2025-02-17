// app/page.tsx
import { GraduationCap, Code, Shield, Award } from 'lucide-react';
import { Github, Mail, Linkedin } from 'lucide-react';

export default function Home() {
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
                    안녕하세요,<br />
                    웹 개발자<br />
                    유예지 입니다.
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mt-6">
                  보안을 아는 프론트엔드 개발자로서,<br />
                  혁신적이고 안전한 웹 솔루션을 만들어냅니다.
                </p>
              </div>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="p-3 border border-purple-200 rounded-xl bg-white/50 hover:bg-purple-50 transition-colors"
                  >
                    <link.icon className="w-6 h-6 text-purple-600" />
                  </a>
                ))}
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 rounded-full blur-3xl" />
              <div className="relative border-2 border-purple-200/50 rounded-full overflow-hidden">
                <img src="/profile.jpg" alt="Yeji Yu" className="w-full rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {navCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="p-6 rounded-xl border border-purple-200/50 bg-white/50
                         hover:bg-purple-50/50 transition-all duration-300
                         group"
              >
                <div className={`bg-gradient-to-r ${card.gradient} w-12 h-12 
                              rounded-lg flex items-center justify-center mb-4
                              group-hover:scale-110 transition-transform`}>
                  <card.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const socialLinks = [
  { icon: Github, href: 'https://github.com/yourusername' },
  { icon: Linkedin, href: 'https://linkedin.com/in/yourusername' },
  { icon: Mail, href: 'mailto:contact@example.com' }
];

const navCards = [
  {
    title: '학력 및 경력',
    description: '성신여자대학교 융합보안공학과에서의 여정',
    icon: GraduationCap,
    href: '/about',
    gradient: 'from-cyan-400 to-blue-500'
  },
  {
    title: '프로젝트',
    description: '웹 개발 프로젝트 포트폴리오',
    icon: Code,
    href: '/portfolio',
    gradient: 'from-purple-400 to-pink-500'
  },
  {
    title: '보안 교육',
    description: '20주 커리큘럼 교육 및 CTF 활동',
    icon: Shield,
    href: '/security',
    gradient: 'from-pink-500 to-purple-600'
  },
  {
    title: '자격증',
    description: '전문성을 입증하는 자격증들',
    icon: Award,
    href: '/certifications',
    gradient: 'from-cyan-400 to-purple-500'
  }
];