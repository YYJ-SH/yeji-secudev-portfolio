export const portfolio = {
    ko: {
      portfolio: {
        title: "포트폴리오",
        description: "혁신적인 웹 솔루션과 보안 프로젝트들을 소개합니다.",
        projects: [
          {
            id: "deidentification-platform",
            title: "비정형 데이터 비식별화 플랫폼",
            period: "2024.03 - 2024.08",
            description: "다양한 형태의 비정형 데이터를 자동으로 탐지하고 비식별화하는 플랫폼 개발",
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
              }
            ],
            coreCode: `// 비식별화 처리 핵심 로직...`,
            features: [
              "비정형 데이터 자동 탐지",
              "실시간 비식별화 처리",
              "정책 기반 마스킹",
            ],
            gallery: ["/api/placeholder/600/300", "/api/placeholder/600/300"],
          }
        ],
      },
    },
    en: {
      portfolio: {
        title: "Portfolio",
        description: "Introducing innovative web solutions and security projects.",
        projects: [
          {
            id: "deidentification-platform",
            title: "Unstructured Data De-identification Platform",
            period: "2024.03 - 2024.08",
            description: "Development of a platform that automatically detects and de-identifies various types of unstructured data",
            role: "Frontend Development Lead",
            contribution: 80,
            mainTech: ["React", "TypeScript", "Next.js", "TailwindCSS"],
            thumbnail: "/api/placeholder/800/600",
            achievements: [
              "40% improvement in large-scale data processing performance",
              "Implementation of real-time de-identification processing",
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
              }
            ],
            coreCode: `// De-identification processing core logic...`,
            features: [
              "Automatic detection of unstructured data",
              "Real-time de-identification processing",
              "Policy-based masking",
            ],
            gallery: ["/api/placeholder/600/300", "/api/placeholder/600/300"],
          }
        ],
      },
    },
  };