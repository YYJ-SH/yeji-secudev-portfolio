// data/content.ts
import {
  Github,
  Mail,
  Linkedin,
  GraduationCap,
  Code,
  Shield,
  Award,
} from "lucide-react";
import { LucideIcon } from "lucide-react";
import { Project } from "@/types/portfolio";

interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

interface NavCard {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  gradient: string;
}

interface Content {
  hero: Hero;
  social: SocialLink[];
  navCards: NavCard[];
  portfolio: portfolio;
}

interface Hero {
  greeting: string;
  role: string;
  name: string;
  description: string;
}
export interface portfolio {
  title: string;
  description: string;
  projects: Project[];
}

export const content: Record<"ko" | "en", Content> = {
  ko: {
    hero: {
      greeting: "안녕하세요,",
      role: "웹 개발자",
      name: "유예지 입니다.",
      description:
        "보안을 아는 프론트엔드 개발자로서,\n혁신적이고 안전한 웹 솔루션을 만들어냅니다.",
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
    portfolio: {
      title: "포트폴리오",
      description: "혁신적인 웹 솔루션과 보안 프로젝트들을 소개합니다.",
      projects: [
        {
          id: "deidentification-platform",
          title: "비정형 데이터 비식별화 플랫폼",
          period: "2024.03 - 2024.08",
          description:
            "다양한 형태의 비정형 데이터를 자동으로 탐지하고 비식별화하는 플랫폼 개발",
          role: "프론트엔드 개발 리드",
          contribution: 80,
          mainTech: ["React", "TypeScript", "Next.js", "TailwindCSS"],
          thumbnail: "/api/placeholder/800/600",
          achievements: [
            "대용량 데이터 처리 성능 40% 개선",
            "실시간 비식별화 처리 구현",
            "보안 취약점 Zero 달성",
          ],
          teamSize: "5명",
          duration: "6개월",
          documentation: [
            {
              type: "technical",
              title: "기술 설계 문서",
              description: "시스템 아키텍처 및 핵심 알고리즘 설명",
              link: "#",
              thumbnail: "/api/placeholder/400/300",
              lastUpdated: "2024-05-15",
            },
            // ... 더 많은 문서들
          ],
          coreCode: `// 비식별화 처리 핵심 로직...`,
          features: [
            "비정형 데이터 자동 탐지",
            "실시간 비식별화 처리",
            "정책 기반 마스킹",
          ],
          gallery: ["/api/placeholder/600/300", "/api/placeholder/600/300"],
        },
        {
          id: "deidentification-platform2",
          title: "비정형 데이터 비식별화 플랫폼",
          period: "2024.03 - 2024.08",
          description:
            "다양한 형태의 비정형 데이터를 자동으로 탐지하고 비식별화하는 플랫폼 개발",
          role: "프론트엔드 개발 리드",
          contribution: 80,
          mainTech: ["React", "TypeScript", "Next.js", "TailwindCSS"],
          thumbnail: "/api/placeholder/800/600",
          achievements: [
            "대용량 데이터 처리 성능 40% 개선",
            "실시간 비식별화 처리 구현",
            "보안 취약점 Zero 달성",
          ],
          teamSize: "5명",
          duration: "6개월",
          documentation: [
            {
              type: "technical",
              title: "기술 설계 문서",
              description: "시스템 아키텍처 및 핵심 알고리즘 설명",
              link: "#",
              thumbnail: "/api/placeholder/400/300",
              lastUpdated: "2024-05-15",
            },
            // ... 더 많은 문서들
          ],
          coreCode: `// 비식별화 처리 핵심 로직...`,
          features: [
            "비정형 데이터 자동 탐지",
            "실시간 비식별화 처리",
            "정책 기반 마스킹",
          ],
          gallery: ["/api/placeholder/600/300", "/api/placeholder/600/300"],
        },
        // 더 많은 프로젝트들...
      ],
    },
  },
  en: {
    hero: {
      greeting: "Hello,",
      role: "Web Developer",
      name: "Yeji Yu",
      description:
        "A frontend developer with security expertise,\nbuilding innovative and secure web solutions.",
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
    portfolio: {
      title: "Portfolio",
      description:
        "Introducing innovative web solutions and security projects.",
      projects: [
        {
          id: "deidentification-platform",
          title: "Unstructured data deidentification platform",
          period: "2024.03 - 2024.08",
          description:
            "Development of a platform that automatically detects and deidentifies various types of unstructured data",
          role: "Front-end development lead",
          contribution: 80,
          mainTech: ["React", "TypeScript", "Next.js", "TailwindCSS"],
          thumbnail: "/api/placeholder/800/600",
          achievements: [
            "40% improvement in large-scale data processing performance",
            "Implementation of real-time deidentification processing",
            "Achievement of zero security vulnerabilities",
          ],
          teamSize: "5 people",
          duration: "6 months",
          documentation: [
            {
              type: "technical",
              title: "Technical Design Document",
              description: "System Architecture and Core Algorithm Description",
              link: "#",
              thumbnail: "/api/placeholder/400/300",
              lastUpdated: "2024-05-15",
            },
            // ... more documents
          ],
          coreCode: `// De-identification processing core logic...`,
          features: [
            "Automatic detection of unstructured data",
            "Real-time de-identification processing",
            "Policy-based masking",
          ],
          gallery: ["/api/placeholder/600/300", "/api/placeholder/600/300"],
        },
        {
          id: "deidentification-platform2",
          title: "Unstructured data deidentification platform",
          period: "2024.03 - 2024.08",
          description:
            "Development of a platform that automatically detects and deidentifies various types of unstructured data",
          role: "Front-end development lead",
          contribution: 80,
          mainTech: ["React", "TypeScript", "Next.js", "TailwindCSS"],
          thumbnail: "/api/placeholder/800/600",
          achievements: [
            "40% improvement in large-scale data processing performance",
            "Implementation of real-time deidentification processing",
            "Achievement of zero security vulnerabilities",
          ],
          teamSize: "5 people",
          duration: "6 months",
          documentation: [
            {
              type: "technical",
              title: "Technical Design Document",
              description: "System Architecture and Core Algorithm Description",
              link: "#",
              thumbnail: "/api/placeholder/400/300",
              lastUpdated: "2024-05-15",
            },
            // ... more documents
          ],
          coreCode: `// De-identification processing core logic...`,
          features: [
            "Automatic detection of unstructured data",
            "Real-time de-identification processing",
            "Policy-based masking",
          ],
          gallery: ["/api/placeholder/600/300", "/api/placeholder/600/300"],
        },
        // more projects...
      ],
    },
  },
};
