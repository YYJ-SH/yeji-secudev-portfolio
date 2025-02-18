import {
    Github,
    Mail,
    Linkedin,
    GraduationCap,
    Code,
    Shield,
    Award,
  } from "lucide-react";
  
  export const social = {
    ko: {
      hero: {
        greeting: "안녕하세요,",
        role: "웹 개발자",
        name: "유예지 입니다.",
        description: "보안을 아는 프론트엔드 개발자로서,\n혁신적이고 안전한 웹 솔루션을 만들어냅니다.",
      },
      social: [
        {
          icon: Github,
          href: "https://github.com/yourusername",
          label: "Github 프로필",
        },
        {
          icon: Linkedin,
          href: "https://linkedin.com/in/yourusername",
          label: "LinkedIn 프로필",
        },
        {
          icon: Mail,
          href: "mailto:contact@example.com",
          label: "이메일 보내기",
        },
      ],
      navCards: [
        {
          title: "학력 및 경력",
          description: "성신여자대학교 융합보안공학과에서의 여정",
          icon: GraduationCap,
          href: "/about",
          gradient: "from-cyan-400 to-blue-500",
        },
        {
          title: "프로젝트",
          description: "웹 개발 프로젝트 포트폴리오",
          icon: Code,
          href: "/portfolio",
          gradient: "from-purple-400 to-pink-500",
        },
        {
          title: "보안 교육",
          description: "20주 커리큘럼 교육 및 CTF 활동",
          icon: Shield,
          href: "/security",
          gradient: "from-pink-500 to-purple-600",
        },
        {
          title: "자격증",
          description: "전문성을 입증하는 자격증들",
          icon: Award,
          href: "/certifications",
          gradient: "from-cyan-400 to-purple-500",
        },
      ],
    },
    en: {
      hero: {
        greeting: "Hello,",
        role: "Web Developer",
        name: "Yeji Yu",
        description: "A frontend developer with security expertise,\nbuilding innovative and secure web solutions.",
      },
      social: [
        {
          icon: Github,
          href: "https://github.com/yourusername",
          label: "Github Profile",
        },
        {
          icon: Linkedin,
          href: "https://linkedin.com/in/yourusername",
          label: "LinkedIn Profile",
        },
        {
          icon: Mail,
          href: "mailto:contact@example.com",
          label: "Send Email",
        },
      ],
      navCards: [
        {
          title: "Education & Career",
          description: "Journey at Sungshin Women's University",
          icon: GraduationCap,
          href: "/about",
          gradient: "from-cyan-400 to-blue-500",
        },
        {
          title: "Projects",
          description: "Web Development Portfolio",
          icon: Code,
          href: "/portfolio",
          gradient: "from-purple-400 to-pink-500",
        },
        {
          title: "Security",
          description: "20-week Curriculum & CTF Activities",
          icon: Shield,
          href: "/security",
          gradient: "from-pink-500 to-purple-600",
        },
        {
          title: "Certifications",
          description: "Professional Certifications",
          icon: Award,
          href: "/certifications",
          gradient: "from-cyan-400 to-purple-500",
        },
      ],
    },
  };