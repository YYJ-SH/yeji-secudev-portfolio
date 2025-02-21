export const security = {
  ko: {
    security: {
      title: "보안 경험 & 연구",
      subtitle: "보안 기술 연구, 교육 및 CTF 활동 ",
      overview:
        "융합보안공학 과정 참여와 CTF 활동을 통해 사이버 보안 기술을 학습하고 연구하고 있습니다. 하나하나 학습해 나가겠습니다.",
      ctf: {
        platforms: [
          {
            name: "Dreamhack (LV1)",
            solved: 8,
            totalProblems: 212,
            profileUrl: "https://dreamhack.io/yourusername",
            achievements: ["베이비 단계 문제 해결", "기초 웹 취약점 문제 해결"],
          },
          {
            name: "Cryptohack",
            solved: 5,
            totalProblems: 50,
            profileUrl: "https://cryptohack.org/yourusername",
            achievements: ["기초 암호학 문제 해결", "해시 함수 관련 문제 해결"],
          },
          {
            name: "LeetCode",
            solved: 5,
            totalProblems: 2000,
            profileUrl: "https://leetcode.com/yourusername",
            achievements: ["알고리즘 기초 문제 해결"],
          },
        ],
        writeups: [
          {
            title: "융보공 AI CTF 출제자 라이트업",
            platform: "티스토리",
            difficulty: "Hard",
            tags: ["출제위원", "AI", "AI 보안", "CTF"],
            writeupUrl: "https://creamerburger.tistory.com/59",
            date: "2024.11.22",
          },
          {
            title: "Hack the Box Nmap 2탄",
            platform: "티스토리",
            difficulty: "Medium",
            tags: ["Hash Function", "AES", "SEED", "Java"],
            writeupUrl: "https://creamerburger.tistory.com/28",
            date: "2024.05.10",
          },
          {
            title: "알거나, 아예 모르거나(암호학)",
            platform: "개인 블로그",
            difficulty: "Easy",
            tags: ["CryptoHack", "Cipher", "XOR", "Python"],
            writeupUrl: "https://creamerburger.tistory.com/47",
            date: "2024.10.11",
          },
          {
            title: "주식을 사고 팔 때 가장 좋은 시기",
            platform: "개인 블로그",
            difficulty: "Easy",
            tags: ["LeetCode", "algorithm"],
            writeupUrl: "https://creamerburger.tistory.com/46",
            date: "2024.10.11",
          },
          {
            title: "XOR 입문",
            platform: "개인 블로그",
            difficulty: "Easy",
            tags: ["CryptoHack", "Cipher", "XOR", "Python"],
            writeupUrl: "https://creamerburger.tistory.com/43",
            date: "2024.10.11",
          },
          {
            title: "섹시한 역전 알고리즘",
            platform: "개인 블로그",
            difficulty: "Easy",
            tags: ["LeetCode", "algorithm"],
            writeupUrl: "https://creamerburger.tistory.com/44",
            date: "2024.10.11",
          },
          {
            title: "Cookie",
            platform: "개인 블로그",
            difficulty: "Easy",
            tags: ["DreamHack", "web", "cookie"],
            writeupUrl: "https://creamerburger.tistory.com/40",
            date: "2024.10.11",
          },
        ],
      },
      articles: [
       

        {
          title: " Hack the box로 Nmap 실습 도전",
          platform: "tistory",
          date: "2024.05.10",
          tags: ["Nmap", "Hackthebox", "Port Scan", "Network"],
          url: "https://creamerburger.tistory.com/27",
          description:
            "Nmap 명령어 설명과 hack the box에서 어떻게 다룰 수 있는지 설명하는 블로그 글입니다.",
          thumbnail: "/articles/nmap.png",
        },
        {
            title: "PIkit: The Ghost in Your Multi-Socket Machine(영문)",
            platform: "medium",
            date: "2024.01.14",
            tags: ["paper review", "English", "Pikit", "USENIX"],
            url: "https://medium.com/@creamerburger/pikit-the-ghost-in-your-multi-socket-machine-bfdf25bf9cf2",
            description:
              "알기 쉽게 논문을 풀어 설명한 Pikit 논문리뷰글입니다(영문으로 작성)",
            thumbnail: "/articles/pikit.png",
        },
        {
          title:
            "AI CTF 개최 회고록 - 초단기에 비숙련자들과 저예산으로 CTF 개최하기",
          platform: "tistory",
          date: "2025.01.10",
          tags: ["AI", "AI보안", "AI CTF", "출제자"],
          url: "https://creamerburger.tistory.com/50",
          description: "CTF 개최 회고록입니다.",
          thumbnail: "/articles/ctfsweat.png",
        },
        {
          title: "CTFd 구축하기",
          platform: "tistory",
          date: "2024.05.30",
          tags: ["CTFd", "CTFd 플랫폼 구축"],
          url: "https://creamerburger.tistory.com/53",
          description:
            "CTF 플랫폼인 CTFd 를 어떻게 올리는지 설명한 블로그 글입니다.",
          thumbnail: "/articles/setup.png",
        },
        {
          title: "[AVX 타이밍으로 ASLR 깨뜨리기]-논문리뷰",
          platform: "tistory",
          date: "2024.05.10",
          tags: ["paper review", "DAC", "ASLR", "AVX"],
          url: "https://creamerburger.tistory.com/51",
          description:
            "AVX Timing Side-Channel Attacks against Address Space Layout Randomization 논문 리뷰",
          thumbnail: "/articles/aslr.png",
        },
        {
            title: "[크롤링부터 매크로까지] BeautifulSoup 과 Selenium 활용하기",
            platform: "tistory",
            date: "2024. 5. 17",
            tags: ["크롤링", "매크로", "BeautifulSoup", "Selenium"],
            url: "https://creamerburger.tistory.com/32",
            description:
              "BeautifulSoup와 Selenium을 이용해 원하는 웹 페이지 크롤링 및 매크로 댓글다는 법",
            thumbnail: "/articles/macro.png",
          },
      ],
      teaching: {
        projects: [
          {
            id: "medical-device-security",
            title: "의료기기 보안 취약점 분석",
            period: "2024.10",
            description:
              "융보공 과정에서 진행한 의료기기 통신 프로토콜 분석 프로젝트입니다. Wireshark를 사용하여 DICOM 프로토콜을 분석하고, Metasploit으로 가상환경 취약점을 테스트했습니다.",
            role: "프로젝트 참여자",
            contribution: 100,
            mainTech: ["Wireshark", "DICOM", "Metasploit", "네트워크 보안"],
            thumbnail: "/security/medical-device.png",
            achievements: [
              "의료기기 통신 프로토콜(DICOM) 분석 및 이해",
              "Wireshark를 활용한 네트워크 패킷 분석",
              "Metasploit을 사용한 가상환경 취약점 테스트",
            ],
            teamSize: "1명",
            duration: "2주",
            documentation: [
              {
                type: "report",
                title: "의료기기 통신 보안 분석 보고서",
                description: "DICOM 프로토콜 분석 및 보안 취약점 테스트 결과",
                link: "https://github.com/yourusername/medical-device-security",
                thumbnail: "/security/dicom-doc.png",
                lastUpdated: "2024.10.20",
              },
            ],
            features: [
              "DICOM 프로토콜 패킷 캡처 및 분석",
              "의료기기 통신 취약점 조사",
              "가상환경에서 취약점 테스트",
            ],
            gallery: [
              "/security/dicom-analysis-1.png",
              "/security/dicom-analysis-2.png",
            ],
          },
          {
            id: "deepfake-audio-detection",
            title: "딥페이크 오디오 감지 시스템 개발",
            period: "2024.10",
            description:
              "융보공 과정에서 진행한 AI 보안 관련 프로젝트로, Hugging Face 모델을 활용하여 딥페이크 오디오를 감지하는 시스템을 개발했습니다.",
            role: "프로젝트 참여자",
            contribution: 100,
            mainTech: ["Hugging Face", "AI", "오디오 분석", "딥페이크"],
            thumbnail: "/security/deepfake-audio.png",
            achievements: [
              "딥페이크 오디오 기술의 원리와 위험성 학습",
              "Hugging Face 모델을 활용한 오디오 분석",
              "가짜 음성 탐지 시스템 구현",
            ],
            teamSize: "1명",
            duration: "2주",
            documentation: [
              {
                type: "report",
                title: "딥페이크 오디오 감지 시스템 보고서",
                description:
                  "AI 기반 오디오 딥페이크 감지 시스템 구현 및 테스트 결과",
                link: "https://github.com/yourusername/deepfake-audio-detection",
                thumbnail: "/security/deepfake-doc.png",
                lastUpdated: "2024.10.10",
              },
            ],
            features: [
              "오디오 특징 추출 및 분석",
              "딥러닝 모델을 활용한 가짜 음성 탐지",
              "실시간 오디오 스트림 분석 시스템",
            ],
            gallery: [
              "/security/deepfake-detection-1.png",
              "/security/deepfake-detection-2.png",
            ],
          },
          {
            id: "cyber-attack-simulation",
            title: "사이버 공격 시뮬레이션 실습",
            period: "2024.05 - 2024.10",
            description:
              "융보공 과정에서 진행한 다양한 사이버 공격 시뮬레이션 프로젝트입니다. DDoS 공격 시뮬레이션, Burp Suite를 활용한 웹 해킹, OWASP Juice Shop 취약점 분석 등을 포함합니다.",
            role: "프로젝트 참여자",
            contribution: 100,
            mainTech: ["DDoS", "Burp Suite", "OWASP", "웹 보안"],
            thumbnail: "/security/cyber-attack.png",
            achievements: [
              "DDoS 공격 원리 이해 및 시뮬레이션 실습",
              "Burp Suite를 활용한 웹 취약점 분석",
              "OWASP Top 10 취약점 실습 및 대응 방안 연구",
            ],
            teamSize: "1명",
            duration: "20주",
            documentation: [
              {
                type: "report",
                title: "사이버 공격 시뮬레이션 종합 보고서",
                description: "다양한 사이버 공격 기법 실습 및 분석 결과",
                link: "https://github.com/yourusername/cyber-attack-simulation",
                thumbnail: "/security/attack-doc.png",
                lastUpdated: "2024.10.25",
              },
            ],
            features: [
              "네트워크 공격 시뮬레이션 및 분석",
              "웹 취약점 테스트 및 보안 대응",
              "보안 도구 활용 및 취약점 분석 보고서 작성",
            ],
            gallery: [
              "/security/attack-simulation-1.png",
              "/security/attack-simulation-2.png",
              "/security/attack-simulation-3.png",
            ],
          },
          {
            id: "crypto-security",
            title: "암호화 알고리즘 분석 및 구현",
            period: "2024.04 - 2024.05",
            description:
              "융보공 과정에서 진행한 암호학 관련 프로젝트입니다. 해시함수, 블록암호(AES, SEED), 대칭키/비대칭키 암호화 등 다양한 암호 알고리즘을 분석하고 구현했습니다.",
            role: "프로젝트 참여자",
            contribution: 100,
            mainTech: ["암호학", "해시함수", "AES", "SEED", "Java", "Python"],
            thumbnail: "/security/crypto.png",
            achievements: [
              "다양한 해시함수 구현 및 성능 비교",
              "블록암호의 5가지 운영 모드 분석",
              "대칭키와 비대칭키 암호화 시간 및 보안성 비교",
            ],
            teamSize: "1명",
            duration: "6주",
            documentation: [
              {
                type: "report",
                title: "암호화 알고리즘 분석 보고서",
                description: "다양한 암호화 알고리즘의 구현 및 성능 분석",
                link: "https://github.com/yourusername/crypto-security",
                thumbnail: "/security/crypto-doc.png",
                lastUpdated: "2024.05.30",
              },
            ],
            features: [
              "다양한 해시함수 구현 및 성능 테스트",
              "블록암호 모드별 실험 및 분석",
              "암호화 알고리즘의 보안성 평가",
            ],
            gallery: ["/security/crypto-1.png", "/security/crypto-2.png"],
          },
          {
            id: "static-analysis",
            title: "정적/동적 분석 도구 활용 프로젝트",
            period: "2024.11",
            description:
              "융보공 과정에서 진행한 정적 분석과 동적 분석 도구를 활용한 코드 취약점 분석 프로젝트입니다. Bandit, Flawfinder 등의 도구를 활용하여 실제 코드의 취약점을 분석했습니다.",
            role: "프로젝트 참여자",
            contribution: 100,
            mainTech: [
              "정적 분석",
              "동적 분석",
              "Bandit",
              "Flawfinder",
              "코드 보안",
            ],
            thumbnail: "/security/static-analysis.png",
            achievements: [
              "정적 분석과 동적 분석의 원리 및 차이점 이해",
              "Bandit을 활용한 Python 코드 취약점 분석",
              "Flawfinder를 활용한 C/C++ 코드 보안 이슈 탐지",
            ],
            teamSize: "1명",
            duration: "2주",
            documentation: [
              {
                type: "report",
                title: "코드 취약점 분석 보고서",
                description:
                  "정적/동적 분석 도구를 활용한 코드 취약점 분석 결과",
                link: "https://github.com/yourusername/code-analysis",
                thumbnail: "/security/static-doc.png",
                lastUpdated: "2024.11.30",
              },
            ],
            features: [
              "정적 분석 도구를 활용한 코드 취약점 스캔",
              "탐지된 취약점 분석 및 해결 방안 연구",
              "보안 코딩 가이드라인 수립",
            ],
            gallery: [
              "/security/static-analysis-1.png",
              "/security/static-analysis-2.png",
            ],
          },
        ],
      },
    },
  },
  en: {
    security: {
      title: "Security Experience & Research",
      subtitle: "Security Technology Research, Education and CTF Activities",
      overview:
        "I am learning and researching cyber security technologies through security education programs and CTF participation.",
      ctf: {
        platforms: [
          {
            name: "Dreamhack",
            solved: 3,
            totalProblems: 100,
            profileUrl: "https://dreamhack.io/yourusername",
            achievements: [
              "Solved baby level problems",
              "Completed basic web vulnerability challenges",
            ],
          },
          {
            name: "Cryptohack",
            solved: 5,
            totalProblems: 50,
            profileUrl: "https://cryptohack.org/yourusername",
            achievements: [
              "Solved basic cryptography problems",
              "Completed hash function challenges",
            ],
          },
          {
            name: "LeetCode",
            solved: 5,
            totalProblems: 2000,
            profileUrl: "https://leetcode.com/yourusername",
            achievements: ["Solved basic algorithm problems"],
          },
        ],
        writeups: [
          {
            title: "Hash Functions and Encryption Algorithms Analysis",
            platform: "Personal Blog",
            difficulty: "Medium",
            tags: ["Hash Function", "AES", "SEED", "Java"],
            writeupUrl: "https://yourblog.tistory.com/writeup1",
            date: "2024.05.10",
          },
          {
            title: "Performance Comparison of Block Cipher Modes",
            platform: "Personal Blog",
            difficulty: "Medium",
            tags: ["Block Cipher", "AES", "ECB", "CBC", "CFB", "OFB", "CTR"],
            writeupUrl: "https://yourblog.tistory.com/writeup2",
            date: "2024.05.20",
          },
        ],
      },
      articles: [
        {
          title:
            "Analysis of Medical Device Communication Protocol (DICOM) and Security Vulnerabilities",
          platform: "tistory",
          date: "2024.10.15",
          tags: [
            "DICOM",
            "Wireshark",
            "Medical Devices",
            "Security",
            "Metasploit",
          ],
          url: "https://yourblog.tistory.com/article1",
          description:
            "Analysis of medical device communication protocol (DICOM) using Wireshark and vulnerability testing in virtual environments using Metasploit.",
          thumbnail: "/articles/dicom-analysis.png",
        },
        {
          title: "Deepfake Audio Detection Technology Research",
          platform: "tistory",
          date: "2024.10.10",
          tags: ["Deepfake", "Audio", "AI Security", "Hugging Face"],
          url: "https://yourblog.tistory.com/article2",
          description:
            "Research and experimental results on deepfake audio detection technology using Hugging Face models.",
          thumbnail: "/articles/deepfake-audio.png",
        },
        {
          title: "DDoS Attack Simulation and Defense Strategies",
          platform: "tistory",
          date: "2024.05.30",
          tags: ["DDoS", "Network Security", "Attack Simulation"],
          url: "https://yourblog.tistory.com/article3",
          description:
            "Analysis of DDoS attack principles and various defense strategies, along with actual simulation results.",
          thumbnail: "/articles/ddos-simulation.png",
        },
      ],
      teaching: {
        projects: [
          {
            id: "medical-device-security",
            title: "Medical Device Security Vulnerability Analysis",
            period: "2024.10",
            description:
              "A project analyzing medical device communication protocols conducted during the security engineering course. Used Wireshark to analyze DICOM protocol and tested vulnerabilities in virtual environments with Metasploit.",
            role: "Project Participant",
            contribution: 100,
            mainTech: ["Wireshark", "DICOM", "Metasploit", "Network Security"],
            thumbnail: "/security/medical-device.png",
            achievements: [
              "Analysis and understanding of medical device communication protocol (DICOM)",
              "Network packet analysis using Wireshark",
              "Vulnerability testing in virtual environments using Metasploit",
            ],
            teamSize: "1 person",
            duration: "2 weeks",
            documentation: [
              {
                type: "report",
                title: "Medical Device Communication Security Analysis Report",
                description:
                  "DICOM protocol analysis and security vulnerability test results",
                link: "https://github.com/yourusername/medical-device-security",
                thumbnail: "/security/dicom-doc.png",
                lastUpdated: "2024.10.20",
              },
            ],
            features: [
              "DICOM protocol packet capture and analysis",
              "Investigation of medical device communication vulnerabilities",
              "Vulnerability testing in virtual environments",
            ],
            gallery: [
              "/security/dicom-analysis-1.png",
              "/security/dicom-analysis-2.png",
            ],
          },
          {
            id: "deepfake-audio-detection",
            title: "Deepfake Audio Detection System Development",
            period: "2024.10",
            description:
              "An AI security project conducted during the security engineering course, developing a system to detect deepfake audio using Hugging Face models.",
            role: "Project Participant",
            contribution: 100,
            mainTech: ["Hugging Face", "AI", "Audio Analysis", "Deepfake"],
            thumbnail: "/security/deepfake-audio.png",
            achievements: [
              "Learning the principles and risks of deepfake audio technology",
              "Audio analysis using Hugging Face models",
              "Implementation of fake voice detection system",
            ],
            teamSize: "1 person",
            duration: "2 weeks",
            documentation: [
              {
                type: "report",
                title: "Deepfake Audio Detection System Report",
                description:
                  "Implementation and test results of AI-based audio deepfake detection system",
                link: "https://github.com/yourusername/deepfake-audio-detection",
                thumbnail: "/security/deepfake-doc.png",
                lastUpdated: "2024.10.10",
              },
            ],
            features: [
              "Audio feature extraction and analysis",
              "Fake voice detection using deep learning models",
              "Real-time audio stream analysis system",
            ],
            gallery: [
              "/security/deepfake-detection-1.png",
              "/security/deepfake-detection-2.png",
            ],
          },
          {
            id: "cyber-attack-simulation",
            title: "Cyber Attack Simulation Exercises",
            period: "2024.05 - 2024.10",
            description:
              "Various cyber attack simulation projects conducted during the security engineering course. Includes DDoS attack simulation, web hacking using Burp Suite, and OWASP Juice Shop vulnerability analysis.",
            role: "Project Participant",
            contribution: 100,
            mainTech: ["DDoS", "Burp Suite", "OWASP", "Web Security"],
            thumbnail: "/security/cyber-attack.png",
            achievements: [
              "Understanding DDoS attack principles and conducting simulation exercises",
              "Web vulnerability analysis using Burp Suite",
              "OWASP Top 10 vulnerability practice and research on countermeasures",
            ],
            teamSize: "1 person",
            duration: "20 weeks",
            documentation: [
              {
                type: "report",
                title: "Comprehensive Cyber Attack Simulation Report",
                description:
                  "Practice and analysis results of various cyber attack techniques",
                link: "https://github.com/yourusername/cyber-attack-simulation",
                thumbnail: "/security/attack-doc.png",
                lastUpdated: "2024.10.25",
              },
            ],
            features: [
              "Network attack simulation and analysis",
              "Web vulnerability testing and security response",
              "Security tool utilization and vulnerability analysis report writing",
            ],
            gallery: [
              "/security/attack-simulation-1.png",
              "/security/attack-simulation-2.png",
              "/security/attack-simulation-3.png",
            ],
          },
          {
            id: "crypto-security",
            title: "Cryptographic Algorithm Analysis and Implementation",
            period: "2024.04 - 2024.05",
            description:
              "Cryptography-related project conducted during the security engineering course. Analyzed and implemented various cryptographic algorithms including hash functions, block ciphers (AES, SEED), and symmetric/asymmetric key encryption.",
            role: "Project Participant",
            contribution: 100,
            mainTech: [
              "Cryptography",
              "Hash Functions",
              "AES",
              "SEED",
              "Java",
              "Python",
            ],
            thumbnail: "/security/crypto.png",
            achievements: [
              "Implementation and performance comparison of various hash functions",
              "Analysis of five operational modes of block ciphers",
              "Comparison of time and security between symmetric and asymmetric key encryption",
            ],
            teamSize: "1 person",
            duration: "6 weeks",
            documentation: [
              {
                type: "report",
                title: "Cryptographic Algorithm Analysis Report",
                description:
                  "Implementation and performance analysis of various encryption algorithms",
                link: "https://github.com/yourusername/crypto-security",
                thumbnail: "/security/crypto-doc.png",
                lastUpdated: "2024.05.30",
              },
            ],
            features: [
              "Implementation and performance testing of various hash functions",
              "Experimentation and analysis of block cipher modes",
              "Security evaluation of encryption algorithms",
            ],
            gallery: ["/security/crypto-1.png", "/security/crypto-2.png"],
          },
          {
            id: "static-analysis",
            title: "Static/Dynamic Analysis Tools Utilization Project",
            period: "2024.11",
            description:
              "A code vulnerability analysis project using static and dynamic analysis tools conducted during the security engineering course. Used tools such as Bandit and Flawfinder to analyze vulnerabilities in actual code.",
            role: "Project Participant",
            contribution: 100,
            mainTech: [
              "Static Analysis",
              "Dynamic Analysis",
              "Bandit",
              "Flawfinder",
              "Code Security",
            ],
            thumbnail: "/security/static-analysis.png",
            achievements: [
              "Understanding the principles and differences between static and dynamic analysis",
              "Python code vulnerability analysis using Bandit",
              "Detection of C/C++ code security issues using Flawfinder",
            ],
            teamSize: "1 person",
            duration: "2 weeks",
            documentation: [
              {
                type: "report",
                title: "Code Vulnerability Analysis Report",
                description:
                  "Code vulnerability analysis results using static/dynamic analysis tools",
                link: "https://github.com/yourusername/code-analysis",
                thumbnail: "/security/static-doc.png",
                lastUpdated: "2024.11.30",
              },
            ],
            features: [
              "Code vulnerability scanning using static analysis tools",
              "Analysis of detected vulnerabilities and research on solutions",
              "Establishment of secure coding guidelines",
            ],
            gallery: [
              "/security/static-analysis-1.png",
              "/security/static-analysis-2.png",
            ],
          },
        ],
      },
    },
  },
};
