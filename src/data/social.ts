import {
    Github,
    Mail,
    Linkedin,
    GraduationCap,
    Code,
    Shield,
    Award,
    NotebookPen
  } from "lucide-react";
  
  export const social = {
    ko: {
      hero: {
        greeting: "안녕하세요,",
        role: "보안과 개발을 잇는 ",
        name: "융합 엔지니어 유예지 입니다.",
        description: `보안과 개발을 융합하여 안전한 웹 서비스를 구축하는 개발자입니다.\n보안성과 사용자 경험을 동시에 고려한 솔루션을 연구하고 있습니다.`,
      },
      social: [
        {
          icon: Github,
          href: "https://github.com/YYJ-SH",
          label: "Github 프로필",
        },
        {
          icon: Linkedin,
          href: "https://www.linkedin.com/in/%EC%98%88%EC%A7%80-%EC%9C%A0-05a007341/",
          label: "LinkedIn 프로필",
        },
        {
          icon: NotebookPen,
          href: "https://creamerburger.tistory.com/",
          label: "기술 블로그",
        },
      ],
      navCards: [
        {
          title: "학력 및 경력",
          description: `✅ 융합보안공학 전공, 보안과 개발 융합 연구\n✅ 루나랩스 프론트엔드 개발 및 AI QA 경험\n✅ IT 운영팀 인턴, 보안성과 유지보수를 고려한 개발`,
          icon: GraduationCap,
          href: "/about",
          gradient: "from-cyan-400 to-blue-500",
        },
        {
          title: "프로젝트",
          description: `✅ OpenCV·YOLO 활용, 번호판 인식 시스템 개발 (정확도 99%)✅비정형 개인정보 비식별화 플랫폼 개발\n ✅PWA·Docker·AWS 활용한 웹 서비스 구축`,
          icon: Code,
          href: "/portfolio",
          gradient: "from-purple-400 to-pink-500",
        },
        {
          title: "보안 & AI 연구",
          description: `✅ AI CTF 기획 및 운영, AI 모델 보안 연구\n✅ MITRE ATT&CK 활용, 클라우드 보안 위협 분석\n✅ DevSecOps 연구`,
          icon: Shield,
          href: "/security",
          gradient: "from-pink-500 to-purple-600",
        },
        {
          title: "자격증 & 수상",
          description: `✅ Azure Security 인증 보유\n✅ ACK 2024 학부논문 수상\n✅ 제5회 정보보안 웹·앱 개발 아이디어 공모전 (최우수상) `,
          icon: Award,
          href: "/certifications",
          gradient: "from-cyan-400 to-purple-500",
        },
      ],
    },
    en: {
      hero: {
        greeting: "I'm",
        role: "Fusion Security Engineer Bridging Dev & Security",
        name: "Yeji Yu",
        description: `A developer integrating security into web applications.\nResearching secure and user-friendly solutions.`,
      },
      social: [
        {
          icon: Github,
          href: "https://github.com/YYJ-SH",
          label: "Github Profile",
        },
        {
          icon: Linkedin,
          href: "https://www.linkedin.com/in/%EC%98%88%EC%A7%80-%EC%9C%A0-05a007341/",
          label: "LinkedIn Profile",
        },
        {
          icon: Mail,
          href: "mailto:creamerburger@gmail.com",
          label: "Send Email",
        },
      ],
      navCards: [
        {
          title: "Education & Career",
          description: `✅ Studied Fusion Security Engineering, integrating security & development\n✅ Frontend Developer & AI QA at Luna Labs\n✅ IT Operations Intern, ensuring security & maintainability`,
          icon: GraduationCap,
          href: "/about",
          gradient: "from-cyan-400 to-blue-500",
        },
        {
          title: "Projects",
          description: `✅ Built license plate recognition system (99% accuracy) using OpenCV & YOLO\n✅ Developed AI-driven data anonymization platform\n✅ Implemented secure web services with PWA, Docker, AWS`,
          icon: Code,
          href: "/portfolio",
          gradient: "from-purple-400 to-pink-500",
        },
        {
          title: "Security & AI Research",
          description: `✅ Organized AI CTF, researching security vulnerabilities in AI models\n✅ Conducted cloud security threat analysis using MITRE ATT&CK\n✅ Explored container & serverless security applications`,
          icon: Shield,
          href: "/security",
          gradient: "from-pink-500 to-purple-600",
        },
        {
          title: "Certifications & Awards",
          description: `✅ Azure Security Certification\n✅ Published research paper in Financial Security Conference\n✅ Grand Prize in Convergence Security Software Competition`,
          icon: Award,
          href: "/certifications",
          gradient: "from-cyan-400 to-purple-500",
        },
      ],
    },
  };
  