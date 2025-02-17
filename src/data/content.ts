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
import { SecurityCourse } from "@/types/security";

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
  about: About;
  certifications: Certifications;
  security: Security;
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
interface Education {
  school: string;
  major: string;
  degree: string;
  period: string;
  status: string;
  gpa?: string;
}

interface Experience {
  company: string;
  department: string;
  role: string;
  period: string;
  responsibilities: string[];
}

interface Certificate {
  name: string;
  issuer: string;
  date: string;
  expiry?: string;
  type: "certification" | "license" | "award";
  image?: string;
}

interface About {
  title: string;
  subtitle: string;
  education: Education[];
  experience: Experience[];
  clubs: {
    name: string;
    period: string;
    activities: string[];
  }[];
}

interface Certifications {
  title: string;
  subtitle: string;
  certificates: Certificate[];
}

interface Security {
  title: string;
  subtitle: string;
  overview: string;
  ctf: {
    platforms: {
      name: string;
      solved: number;
      totalProblems: number;
      profileUrl: string;
      achievements?: string[];
    }[];
    writeups: {
      title: string;
      platform: string;
      difficulty: string;
      tags: string[];
      writeupUrl: string;
      date: string;
    }[];
  };
  articles: {
    title: string;
    platform: "medium" | "tistory" | "github";
    date: string;
    tags: string[];
    url: string;
    description: string;
    thumbnail?: string;
  }[];
  teaching: {
    title: string;
    period: string;
    topics: string[];
    highlights: string[];
    documentation: {
      title: string;
      description: string;
      link: string;
      type: "ppt" | "github" | "blog";
    }[];
  };
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
    about: {
      title: "About Me",
      subtitle: "융합보안공학과 학생, 프론트엔드 개발자",
      education: [
        {
          school: "성신여자대학교",
          major: "융합보안공학",
          degree: "학사",
          period: "2020.02 ~ 2025.08",
          status: "졸업예정",
          gpa: "4.03/4.5",
        },
        // ... 다른 학력
      ],
      experience: [
        {
          company: "루나랩스",
          department: "디지털트윈개발부",
          role: "프론트엔드 개발자 및 인공지능 QA",
          period: "2022.12 ~ 2023.08",
          responsibilities: [
            "React와 Next.js를 활용한 웹 애플리케이션 개발",
            "AI 모델 품질 보증 업무 수행",
          ],
        },
        // ... 다른 경력
      ],
      clubs: [
        {
          name: "ConseQ",
          period: "2020.03 ~ 2022.06",
          activities: [
            "암호학, 리버싱, 빅데이터 엔지니어링, 머신러닝 스터디",
            "금융보안논문전 참가 (메타버스와 마이데이터 윤리적 규제 방안 논문 작성)",
          ],
        },
        // ... 다른 동아리 활동
      ],
    },
    certifications: {
      title: "자격증 & 수상",
      subtitle: "전문성을 입증하는 자격과 수상 경력",
      certificates: [
        {
          name: "리눅스마스터 2급",
          issuer: "정보통신기술자격검정(KAIT)",
          date: "2023.12",
          type: "certification",
          image: "/certificates/linux-master.png",
        },
        // ... 다른 자격증들
      ],
    },
    security: {
      title: "Security Experience & Articles",
      subtitle: "보안 기술 블로그 및 CTF 활동",
      overview: "보안 지식을 공유하고 CTF 문제를 해결하며 성장하고 있습니다.",
      ctf: {
        platforms: [
          {
            name: "Wargame.kr",
            solved: 15,
            totalProblems: 32,
            profileUrl: "https://wargame.kr/profile/yourusername",
            achievements: [
              "Image File Upload 취약점 문제 해결",
              "PHP Type Juggling 문제 해결",
            ],
          },
          {
            name: "Dreamhack",
            solved: 10,
            totalProblems: 25,
            profileUrl: "https://dreamhack.io/yourusername",
            achievements: [
              "XSS 취약점 시리즈 완료",
              "SQLi 기초 문제 시리즈 완료",
            ],
          },
        ],
        writeups: [
          {
            title: "File Upload Vulnerability in PHP",
            platform: "Wargame.kr",
            difficulty: "Medium",
            tags: ["File Upload", "PHP", "Web Security"],
            writeupUrl: "#",
            date: "2024.01.15",
          },
          {
            title: "Solving XSS Challenges",
            platform: "Dreamhack",
            difficulty: "Easy",
            tags: ["XSS", "JavaScript", "Web Security"],
            writeupUrl: "#",
            date: "2023.12.20",
          },
        ],
      },
      articles: [
        {
          title: "웹 취약점을 통한 해킹 기법과 대응 방안",
          platform: "tistory",
          date: "2024.02.15",
          tags: ["Web Security", "Penetration Testing", "보안"],
          url: "https://yourblog.tistory.com/1",
          description:
            "웹 애플리케이션에서 자주 발생하는 취약점들과 이에 대한 대응 방안을 정리했습니다.",
          thumbnail: "/articles/web-security.png",
        },
        {
          title: "ModSecurity를 이용한 WAF 구축하기",
          platform: "tistory",
          date: "2024.01.20",
          tags: ["WAF", "ModSecurity", "Apache"],
          url: "https://yourblog.tistory.com/2",
          description:
            "오픈소스 WAF인 ModSecurity를 이용하여 웹 방화벽을 구축하는 방법을 설명합니다.",
        },
        {
          title: "Frontend Security Best Practices",
          platform: "medium",
          date: "2024.03.05",
          tags: ["Frontend", "Security", "Web Development"],
          url: "https://medium.com/@yourusername/frontend-security",
          description:
            "프론트엔드 개발에서 고려해야 할 보안 사항들을 정리했습니다.",
          thumbnail: "/articles/frontend-security.png",
        },
        {
          title: "JavaScript Security Vulnerabilities",
          platform: "github",
          date: "2024.02.28",
          tags: ["JavaScript", "Security", "Web"],
          url: "https://github.com/yourusername/js-security",
          description:
            "자바스크립트 애플리케이션에서 발생할 수 있는 보안 취약점과 예방법을 다룹니다.",
        },
      ],
      teaching: {
        title: "보안 교육 프로그램 운영",
        period: "2024.03 ~ 2024.08",
        topics: ["웹 보안 기초", "시스템 해킹", "암호학 기초", "네트워크 보안"],
        highlights: [
          "20주 커리큘럼 기획 및 운영",
          "30명 이상의 학생 교육",
          "실습 중심의 교육 진행",
        ],
        documentation: [
          {
            title: "웹 보안 커리큘럼",
            description: "SQL Injection부터 XSS까지, 웹 보안 취약점 실습 자료",
            link: "https://github.com/yourusername/web-security-curriculum",
            type: "github",
          },
          {
            title: "시스템 해킹 실습",
            description: "버퍼 오버플로우 실습 환경 구축 및 실습 자료",
            link: "https://yourblog.tistory.com/system-hacking",
            type: "blog",
          },
        ],
      },
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
    about: {
      title: "About Me",
      subtitle: "Fusion Security Engineering Student, Front-end Developer",
      education: [
        {
          school: "Sungshin Women's University",
          major: "Fusion Security Engineering",
          degree: "Bachelor's",
          period: "2020.02 ~ 2025.08",
          status: "Expected to graduate",
          gpa: "4.03/4.5",
        },
        // ... other academic backgrounds
      ],
      experience: [
        {
          company: "Luna Labs",
          department: "Digital Twin Development Department",
          role: "Front-end developer and AI QA",
          period: "2022.12 ~ 2023.08",
          responsibilities: [
            "Web application development using React and Next.js",
            "Performing AI model quality assurance work",
          ],
        },
        // ... other careers
      ],
      clubs: [
        {
          name: "ConseQ",
          period: "2020.03 ~ 2022.06",
          activities: [
            "Crypto, reversing, big data engineering, machine learning study",
            "Participation in the Financial Security Paper Exhibition (Writing a paper on ethical regulation of metaverse and my data)",
          ],
        },
        // ... Other club activities
      ],
    },
    certifications: {
      title: "Certification & Awards",
      subtitle: "Qualifications and Awards that Prove Professionalism",
      certificates: [
        {
          name: "Linux Master Level 2",
          issuer:
            "Information and Communication Technology Qualification Test (KAIT)",
          date: "2023.12",
          type: "certification",
          image: "/certificates/linux-master.png",
        },
        // ... Other certifications
      ],
    },
    security: {
      title: "Security Experience & Articles",
      subtitle: "Security Technology Blog and CTF Activities",
      overview:
        "Sharing security knowledge, solving CTF problems, and growing.",
      ctf: {
        platforms: [
          {
            name: "Wargame.kr",
            solved: 15,
            totalProblems: 32,
            profileUrl: "https://wargame.kr/profile/yourusername",
            achievements: [
              "Image File Upload Vulnerability Problem Solved",
              "PHP Type Juggling Problem Solved",
            ],
          },
          {
            name: "Dreamhack",
            solved: 10,
            totalProblems: 25,
            profileUrl: "https://dreamhack.io/yourusername",
            achievements: [
              "XSS Vulnerability Series Completed",
              "SQLi Basic Problem Series Completed",
            ],
          },
        ],
        writeups: [
          {
            title: "File Upload Vulnerability in PHP",
            platform: "Wargame.kr",
            difficulty: "Medium",
            tags: ["File Upload", "PHP", "Web Security"],
            writeupUrl: "#",
            date: "2024.01.15",
          },
          {
            title: "Solving XSS Challenges",
            platform: "Dreamhack",
            difficulty: "Easy",
            tags: ["XSS", "JavaScript", "Web Security"],
            writeupUrl: "#",
            date: "2023.12.20",
          },
        ],
      },
      articles: [
        {
          title:
            "Hacking techniques and countermeasures through web vulnerabilities",
          platform: "tistory",
          date: "2024.02.15",
          tags: ["Web Security", "Penetration Testing", "보안"],
          url: "https://yourblog.tistory.com/1",
          description:
            "I have summarized vulnerabilities that frequently occur in web applications and countermeasures for them.",
          thumbnail: "/articles/web-security.png",
        },
        {
          title: "Building a WAF using ModSecurity",
          platform: "tistory",
          date: "2024.01.20",
          tags: ["WAF", "ModSecurity", "Apache"],
          url: "https://yourblog.tistory.com/2",
          description:
            "I will explain how to build a web firewall using ModSecurity, an open source WAF.",
        },
        {
          title: "Frontend Security Best Practices",
          platform: "medium",
          date: "2024.03.05",
          tags: ["Frontend", "Security", "Web Development"],
          url: "https://medium.com/@yourusername/frontend-security",
          description:
            "Security issues to consider in frontend development are summarized.",
          thumbnail: "/articles/frontend-security.png",
        },
        {
          title: "JavaScript Security Vulnerabilities",
          platform: "github",
          date: "2024.02.28",
          tags: ["JavaScript", "Security", "Web"],
          url: "https://github.com/yourusername/js-security",
          description:
            "Covering security vulnerabilities that can occur in JavaScript applications and how to prevent them.",
        },
      ],
      teaching: {
        title: "Operation of security education program",
        period: "2024.03 ~ 2024.08",
        topics: [
          "Web security basics",
          "System hacking",
          "Cryptography basics",
          "Network security",
        ],
        highlights: [
          "20-week curriculum planning and operation",
          "Education of more than 30 students",
          "Practice-oriented education",
        ],
        documentation: [
          {
            title: "Web security curriculum",
            description:
              "From SQL injection to XSS, web security vulnerability practice materials",
            link: "https://github.com/yourusername/web-security-curriculum",
            type: "github",
          },
          {
            title: "System hacking practice",
            description:
              "Building a buffer overflow practice environment and practice materials",
            link: "https://yourblog.tistory.com/system-hacking",
            type: "blog",
          },
        ],
      },
    },
  },
};
