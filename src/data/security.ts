export const security = {
    ko: {
      security: {
        title: "보안 경험 & 연구",
        subtitle: "보안 기술 연구, 교육 및 CTF 활동",
        overview: "CTF 참여 및 보안 연구를 통해 사이버 보안 기술을 익히고 연구하고 있습니다.",
        ctf: {
            platforms: [
                {
                    name: "Wargame.kr",
                    solved: 30,
                    totalProblems: 50,
                    profileUrl: "https://wargame.kr/profile/yourusername",
                    achievements: [
                        "Image File Upload 취약점 해결",
                        "PHP Type Juggling 문제 해결",
                        "Blind SQL Injection 공격 실습"
                    ],
                },
                {
                    name: "Dreamhack",
                    solved: 20,
                    totalProblems: 40,
                    profileUrl: "https://dreamhack.io/yourusername",
                    achievements: [
                        "XSS 취약점 문제 해결",
                        "SQLi 기초 문제 해결",
                        "Linux Privilege Escalation 실습"
                    ],
                }
            ],
            writeups: [
                {
                    title: "파일 업로드 취약점 분석 및 해결",
                    platform: "Wargame.kr",
                    difficulty: "Medium",
                    tags: ["File Upload", "PHP", "Web Security"],
                    writeupUrl: "https://yourblog.tistory.com/writeup1",
                    date: "2024.01.15",
                },
                {
                    title: "XSS 취약점 공격 및 방어",
                    platform: "Dreamhack",
                    difficulty: "Easy",
                    tags: ["XSS", "JavaScript", "Web Security"],
                    writeupUrl: "https://yourblog.tistory.com/writeup2",
                    date: "2023.12.20",
                }
            ],
        },
        articles: [
            {
                title: "웹 취약점을 통한 해킹 기법과 대응 방안",
                platform: "tistory",
                date: "2024.02.15",
                tags: ["Web Security", "Penetration Testing", "보안"],
                url: "https://yourblog.tistory.com/article1",
                description: "웹 애플리케이션에서 자주 발생하는 취약점들과 이에 대한 대응 방안을 정리했습니다.",
                thumbnail: "/articles/web-security.png",
            },
            {
                title: "ModSecurity를 이용한 WAF 구축하기",
                platform: "tistory",
                date: "2024.01.20",
                tags: ["WAF", "ModSecurity", "Apache"],
                url: "https://yourblog.tistory.com/article2",
                description: "오픈소스 WAF인 ModSecurity를 이용하여 웹 방화벽을 구축하는 방법을 설명합니다.",
            }
        ],
        teaching: {
          projects: [
            {
              id: "burp-suite-training",
              title: "Burp Suite를 활용한 웹 해킹 실습",
              period: "2024.10 - 2024.11",
              description: "웹 애플리케이션 보안 실습을 위해 Burp Suite를 활용하여 프록시 서버를 설정하고 취약점을 분석하였습니다.",
              role: "강의 기획 및 실습 지도",
              contribution: 100,
              mainTech: ["Burp Suite", "웹 보안", "취약점 분석"],
              thumbnail: "/security/burp-suite.png",
              achievements: [
                "웹 보안 원리 및 Burp Suite 사용법 강의",
                "SQL Injection, XSS 취약점 탐지 및 분석",
                "수강생 15명 대상 실습 진행"
              ],
              teamSize: "1명",
              duration: "4주",
              documentation: [
                {
                  type: "lecture",
                  title: "Burp Suite 개요 및 사용법",
                  description: "Burp Suite의 핵심 기능과 웹 애플리케이션 보안 실습 과정",
                  link: "https://github.com/yourusername/burp-suite-guide",
                  thumbnail: "/security/burp-doc.png",
                  lastUpdated: "2024.10.15"
                }
              ],
              coreCode: `// Burp Suite 인터셉트 프록시 설정 코드\nproxy = {\n  host: \"127.0.0.1\",\n  port: 8080\n};`,
              features: [
                "Burp Suite 인터셉트 프록시 활용",
                "SQL Injection, XSS 분석 실습",
                "보안 취약점 리포트 작성"
              ],
              gallery: [
                "/security/burp-training-1.png",
                "/security/burp-training-2.png"
              ]
            },
            {
              id: "ddos-simulation",
              title: "DDoS 공격 시뮬레이션 실습",
              period: "2024.06",
              description: "DDoS 공격을 이해하고 방어하는 방법을 학습하기 위해 MHDDoS 및 LOIC 도구를 활용한 실습을 진행했습니다.",
              role: "실습 기획 및 진행",
              contribution: 100,
              mainTech: ["DDoS", "네트워크 보안", "MHDDoS"],
              thumbnail: "/security/ddos.png",
              achievements: [
                "DDoS 공격의 원리와 방어 방법 강의",
                "MHDDoS를 활용한 공격 시뮬레이션 실습",
                "서버 부하 테스트 및 방어 기술 연구"
              ],
              teamSize: "1명",
              duration: "2주",
              documentation: [
                {
                  type: "lecture",
                  title: "DDoS 공격 원리 및 대응 전략",
                  description: "DDoS 공격 기법을 분석하고 효과적인 대응 전략을 수립하는 방법",
                  link: "https://drive.google.com/your-pdf-link",
                  thumbnail: "/security/ddos-doc.png",
                  lastUpdated: "2024.06.10"
                }
              ],
              coreCode: `// Python 기반 DDoS 공격 코드\nimport requests\nwhile True:\n  requests.get(\"http://target-site.com\")`,
              features: [
                "MHDDoS를 활용한 DDoS 공격 시뮬레이션",
                "서버 부하 테스트 및 방어 전략 수립",
                "방화벽 및 WAF 설정 실습"
              ],
              gallery: [
                "/security/ddos-training-1.png",
                "/security/ddos-training-2.png"
              ]
            }
          ]
        }
      }
    },
    en: {
        security: {
        title: "Security Experience & Research",
        subtitle: "Security Technology Research, Education, and CTF Activities",
        overview: "I am learning and researching cybersecurity technology through CTF participation and security research.",
        ctf: {
        platforms: [
        {
        name: "Wargame.kr",
        solved: 30,
        totalProblems: 50,
        profileUrl: "https://wargame.kr/profile/yourusername",
        achievements: [
        "Image File Upload Vulnerability Resolution",
        "PHP Type Juggling Problem Resolution",
        "Blind SQL Injection Attack Practice"
        ],
        },
        {
        name: "Dreamhack",
        solved: 20,
        totalProblems: 40,
        profileUrl: "https://dreamhack.io/yourusername",
        achievements: [
        "XSS Vulnerability Resolution",
        "SQLi Basic Problem Resolution",
        "Linux Privilege Escalation Practice"
        ],
        }
        ],
        writeups: [
        {
        title: "File Upload Vulnerability Analysis and Resolution",
        platform: "Wargame.kr",
        difficulty: "Medium",
        tags: ["File Upload", "PHP", "Web Security"],
        writeupUrl: "https://yourblog.tistory.com/writeup1",
        date: "2024.01.15",
        },
        {
        title: "XSS Vulnerability Attack and Defense",
        platform: "Dreamhack",
        difficulty: "Easy",
        tags: ["XSS", "JavaScript", "Web Security"],
        writeupUrl: "https://yourblog.tistory.com/writeup2",
        date: "2023.12.20",
        }
        ],
        },
        articles: [
        {
        title: "Hacking Techniques and Responses through Web Vulnerabilities room",
        platform: "tistory",
        date: "2024.02.15",
        tags: ["Web Security", "Penetration Testing", "Security"],
        url: "https://yourblog.tistory.com/article1",
        description: "I have summarized vulnerabilities that frequently occur in web applications and countermeasures for them.",
        thumbnail: "/articles/web-security.png",
        },
        {
        title: "Building a WAF using ModSecurity",
        platform: "tistory",
        date: "2024.01.20",
        tags: ["WAF", "ModSecurity", "Apache"],
        url: "https://yourblog.tistory.com/article2",
        description: "I will explain how to build a web firewall using ModSecurity, an open source WAF.",
        }
        ],
        teaching: {
        projects: [
        {
        id: "burp-suite-training",
        title: "Web Hacking Practice Using Burp Suite",
        period: "2024.10 - 2024.11",
        description: "For web application security practice, we used Burp Suite to set up a proxy server and analyze vulnerabilities.",
        role: "Course Planning and Practice Guidance",
        contribution: 100,
        mainTech: ["Burp Suite", "Web Security", "Vulnerability Analysis"],
        thumbnail: "/security/burp-suite.png",
        achievements: [
        "Web Security Principles and Burp Suite Usage Lecture",
        "SQL Injection, XSS Vulnerability Detection and Analysis",
        "Practical Training for 15 Students"
        ],
        teamSize: "1 person",
        duration: "4 weeks",
        documentation: [
        {
        type: "lecture",
        title: "Burp Suite Overview and Usage",
        description: "Burp Suite's Core Functions and Web Application Security Practice Course", link: "https://github.com/yourusername/burp-suite-guide",
        thumbnail: "/security/burp-doc.png",
        lastUpdated: "2024.10.15"
        }
        ],
        coreCode: `// Burp Suite intercept proxy configuration code\nproxy = {\n host: \"127.0.0.1\",\n port: 8080\n};`,
        features: [
        "Using Burp Suite intercept proxy",
        "SQL Injection, XSS analysis practice",
        "Writing a security vulnerability report"
        ],
        gallery: [
        "/security/burp-training-1.png",
        "/security/burp-training-2.png"
        ]
        },
        {
        id: "ddos-simulation",
        title: "DDoS attack simulation practice",
        period: "2024.06",
        description: "We conducted a hands-on exercise using MHDDoS and LOIC tools to learn how to understand and defend against DDoS attacks.",
        role: "Practical training planning and execution",
        contribution: 100,
        mainTech: ["DDoS", "Network security", "MHDDoS"],
        thumbnail: "/security/ddos.png",
        achievements: [
        "DDoS attack principles and defense methods lecture",
        "Attack simulation practice using MHDDoS",
        "Server load testing and defense technology research"
        ],
        teamSize: "1 person",
        duration: "2 weeks",
        documentation: [
        {
        type: "lecture",
        title: "DDoS attack principles and response strategies",
        description: "How to analyze DDoS attack techniques and establish effective response strategies",
        link: "https://drive.google.com/your-pdf-link",
thumbnail: "/security/ddos-doc.png",
lastUpdated: "2024.06.10"
}
],
coreCode: `// Python-based DDoS attack code\nimport requests\nwhile True:\n requests.get(\"http://target-site.com\")`,
features: [
"DDoS attack simulation using MHDDoS",
"Server load testing and defense strategy establishment",
"Firewall and WAF setting practice"
],
gallery: [
"/security/ddos-training-1.png",
"/security/ddos-training-2.png"
]
}
]
}
}
}


};
