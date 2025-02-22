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
            role: "프로젝트 강사",
            contribution: 100,
            mainTech: ["Wireshark", "DICOM", "Metasploit", "네트워크 보안"],
            thumbnail: "/security/dicom.png",
            achievements: [
              "의료기기 통신 프로토콜(DICOM) 분석 및 이해",
              "Wireshark를 활용한 네트워크 패킷 분석",
              "Metasploit을 사용한 win 7 가상환경 취약점 테스트",
            ],
            teamSize: "1명",
            duration: "1주",
            documentation: [
              {
                type: "PDF",
                title: "동아리 발표자료",
                description: "DICOM 프로토콜 분석 및 메타스플로잇 실습",
                link: "/security/dicom.pdf",
                thumbnail: "/security/dicom-doc.png",
                lastUpdated: "2024.10.11",
              },
            ],
            features: [
              "DICOM 프로토콜 패킷 분석",
              "의료기기 통신 취약점 조사",
              "Metasploit 명령어 학습",
              "Win 7 가상환경에서 Metasploit으로 공격",
            ],
            gallery: [
              "/security/dicom-1.png",
              "/security/dicom-2.png",
            ],
          },
          {
            id: "deepfake-audio-detection",
            title: "딥페이크 오디오 감지 시스템 개발",
            period: "2024.10",
            description:
              "융보공 과정에서 진행한 AI 보안 관련 프로젝트로, Hugging Face 모델을 활용하여 딥페이크 오디오를 감지하는 시스템을 개발했습니다.",
            role: "프로젝트 강사",
            contribution: 100,
            mainTech: ["Hugging Face", "AI", "오디오 분석", "딥페이크"],
            thumbnail: "/security/deepfake.png",
            achievements: [
              "딥페이크 오디오 기술의 원리와 위험성 학습",
              "Hugging Face 활용법 학습",
              "Huggigface pipeline을 사용한 딥페이크 오디오 탐지기 개발 실습",
            ],
            teamSize: "1명",
            duration: "1주",
            documentation: [
              {
                type: "PDF",
                title: "딥페이크 오디오 감지 동아리 발표 보고서",
                description:
                  "딥페이크, 허깅페이스, 딥페이크 검출기 개발 실습에 관한 내용입니다.",
                link: "/security/deepfake.pdf",
                thumbnail: "/security/deepfake-doc.png",
                lastUpdated: "2024.10.05",
              },
            ],
            
            features: [
              "Huggingface 플랫폼 학습",
              "딥러닝 모델을 활용한 가짜 음성 탐지",
              "PyQt를 활용한 GUI 결과물",
            ],
            gallery: [
              "/security/deepfake-1.png",
              "/security/deepfake-2.png",
            ],
          },
          {
            id: "cyber-attack-simulation",
            title: "웹 해킹 시뮬레이션 실습",
            period: "2024.05 - 2024.10",
            description:
              "융보공 과정에서 진행한 다양한 웹 공격 시뮬레이션 프로젝트입니다. DDoS 공격 시뮬레이션, Burp Suite를 활용한 웹 해킹, OWASP Juice Shop 취약점 분석 등을 포함합니다.",
            role: "프로젝트 강사",
            contribution: 100,
            mainTech: ["DDoS", "Burp Suite", "OWASP", "웹 보안"],
            thumbnail: "/security/owasp.png",
            achievements: [
              "DDoS 공격 원리 이해 및 시뮬레이션 실습",
              "취약한 서버환경 설계 및 구축",
              "Burp Suite를 활용한 웹 취약점 분석",
              "OWASP Top 10 취약점 실습 및 대응 방안 연구",
            ],
            teamSize: "1명",
            duration: "3주",
            documentation: [
              {
                type: "code",
                title: "DDOS용 취약 서버 코드",
                description: "DDOS에 잘 다운될 수 있도록 무거운 함수로 이루어진 서버 코드입니다.",
                link: "https://github.com/YYJ-SH/ddostest",
                thumbnail: "/security/ddos-thumb.png",
                lastUpdated: "2024.10.25",
              },
              {
                type: "PDF",
                title: "DDOS 발표자료",
                description: "DDOS에 잘 다운될 수 있도록 무거운 함수로 이루어진 서버 코드입니다.",
                link: "/security/NINE.pdf",
                thumbnail: "/security/ddos-doc.png",
                lastUpdated: "2024.10.25",
              },
              {
                type: "PDF",
                title: "burp suite 발표자료",
                description: "burp suit 설치 및 실습.",
                link: "/security/burp.pdf",
                thumbnail: "/security/burp-1.png",
                lastUpdated: "2024.10.11",
              },
              {
                type: "PDF",
                title: "OWASP 발표자료",
                description: "OWASP juice shop 및 OWASP ZAP 실습.",
                link: "/security/owasp.pdf",
                thumbnail: "/security/owasp-zap.png",
                lastUpdated: "2024.10.25",
              },
            ],
            features: [
              "포트포워딩으로 구성한 자체서버 DDOS 공격",
              "OWASP ZAP을 통한 웹 취약점 스캔 실습",
              "Owasp Juice Shop 취약점 분석 보고서 작성",
              "Burp Suite를 활용한 가상 쇼핑몰 사이트 공격",

            ],
            gallery: [
              "/security/burp-2.png",
              "/security/burp-3.png",
              "/security/owasp-4.png",
            ],
          },
          {
            id: "crypto-security",
            title: "암호화 알고리즘 분석 및 구현",
            period: "2024.04 - 2024.05",
            description:
              "융보공 과정에서 진행한 암호학 관련 프로젝트입니다. 해시함수, 블록암호(AES, SEED), 대칭키/비대칭키 암호화 등 다양한 암호 알고리즘을 분석하고 구현했습니다.",
            role: "프로젝트 강사",
            contribution: 100,
            mainTech: ["암호학", "해시함수", "AES", "SEED", "Java", "Python"],
            thumbnail: "/security/hash-1.png",
            achievements: [
              "다양한 해시함수 구현 및 성능 비교",
              "블록암호의 5가지 운영 모드 분석",
              "대칭키와 비대칭키 암호화 시간 및 보안성 비교",
            ],
            teamSize: "1명",
            duration: "2주",
            documentation: [
              {
                type: "code",
                title: "암호화 알고리즘별 속도 비교 함수",
                description: "다양한 암호화 알고리즘 라이브러리 사용 및 성능 분석",
                link: "https://creamerburger.tistory.com/29",
                thumbnail: "/security/cpt-1.png",
                lastUpdated: "2024.05.30",
              },
              {
                type: "PDF",
                title: "해시함수 세션 발표자료",
                description: "다양한 암호화 알고리즘 라이브러리 사용 및 성능 분석",
                link: "https://creamerburger.tistory.com/29",
                thumbnail: "/security/cpt-2.png",
                lastUpdated: "2024.05.30",
              },
            ],
            features: [
              "다양한 해시함수 구현 및 성능 테스트",
              "블록암호 모드별 실험 및 분석",
              "암호화 알고리즘의 보안성 평가",
            ],
            gallery: ["/security/hash-2.png", "/security/hash-3.png"],
          },
          {
            id: "ai ctf",
            title: "융보공 AI CTF 개최",
            period: "2024.11",
            description:
              "CTFd 플랫폼과, AI를 사용하여 동아리 내에서 CTF & PIZZA라는 이름의 CTF를 개최했습니다.",
            role: "CTF 출제위원 & 총괄",
            contribution: 50,
            mainTech: [
              "AI CTF 문제",
              "AI 보안",
              "웹 호스팅",
              "CTFd 구축",
              "CTF 개최",
            ],
            thumbnail: "/security/ctf-1.png",
            achievements: [
              "CTF 참여자 만족도 90% 달성",
              "학과 최초 AI 보안 문제 출제",
              "초보자도 도전할 수 있는 PIZZA & LEARN 방식",
              "5문제 이상 웹 환경 호스팅, SQL 인젝션 문제 출제",
              "저예산 CTF 개최"
            ],
            teamSize: "4명",
            duration: "3주",
            documentation: [
              {
                type: "code",
                title: "CTF 출제 문제",
                description:
                  "CTF 개최 때 사용했던 문제들입니다.",
                link: "https://github.com/YYJ-SH/cftw",
                thumbnail: "/security/ctf-2.png",
                lastUpdated: "2024.11.30",
              },
              {
                type: "PDF",
                title: "CTF 주의사항",
                description:
                  "CTF 개최 때 사용했던 PDF 자료입니다",
                link: "https://github.com/yourusername/code-analysis",
                thumbnail: "/security/ctf-1.png",
                lastUpdated: "2024.11.30",
              },
              {
                type: "PDF",
                title: "CTF 라이트업",
                description:
                  "AI CTF 라이트업입니다. ",
                link: "https://creamerburger.tistory.com/59",
                thumbnail: "/security/ctf-3.png",
                lastUpdated: "2024.11.30",
              },
            ],
            features: [
              "AI 프롬프트 인젝션, 권한부여, API 체이닝, Jailbreaking 활용",
              "리버싱, 암호학, 웹 해킹, AI 해킹 총 4분야",
              "CTFd, Flask, 포트포워딩을 통해 구성된 100% 웹 환경",
              "SQlight를 활용한 실제 DB 인젝션 문제 출제"
            ],
            gallery: [
              "/security/ctf-4.png",
              "/security/ctf-5.png",
            ],
          },
        ],
      },
    },
  },
  en: {
    security: {
    title: "Security Experience & Research",
    subtitle: "Security Technology Research, Education, and CTF Activities",
    overview:
    "I am learning and researching cybersecurity technologies through participating in the Convergence Security Engineering course and CTF activities. I will learn them one by one.",
    ctf: {
    platforms: [
    {
    name: "Dreamhack (LV1)",
    solved: 8,
    totalProblems: 212,
    profileUrl: "https://dreamhack.io/yourusername",
    achievements: ["Basic Step Problem Solving", "Basic Web Vulnerability Problem Solving"],
    },
    {
    name: "Cryptohack",
    solved: 5,
    totalProblems: 50,
    profileUrl: "https://cryptohack.org/yourusername",
    achievements: ["Basic Cryptography Problem Solving", "Hash Function Related Problem Solving"],
    },
    {
    name: "LeetCode",
    solved: 5,
    totalProblems: 2000,
    profileUrl: "https://leetcode.com/yourusername",
    achievements: ["Algorithm Basic Problem Solving"],
    },
    ],
    writeups: [
    {
    title: "Yongbogong AI CTF Issuer Lightup",
    platform: "Tistory",
    difficulty: "Hard",
    tags: ["Examiner", "AI", "AI Security", "CTF"],
    writeupUrl: "https://creamerburger.tistory.com/59",
    date: "2024.11.22",
    },
    {
    title: "Hack the Box Nmap 2nd",
    platform: "Tistory",
    difficulty: "Medium",
    tags: ["Hash Function", "AES", "SEED", "Java"],
    writeupUrl: "https://creamerburger.tistory.com/28",
    date: "2024.05.10",
    },
    {
    title: "Know or Don't Know (Crypto)",
    platform: "Personal Blog",
    difficulty: "Easy",
    tags: ["CryptoHack", "Cipher", "XOR", "Python"],
    writeupUrl: "https://creamerburger.tistory.com/47",
    date: "2024.10.11",
    },
    {
    title: "The Best Time to Buy and Sell Stocks",
    platform: "Personal Blog",
    difficulty: "Easy",
    tags: ["LeetCode", "algorithm"],
    writeupUrl: "https://creamerburger.tistory.com/46",
    date: "2024.10.11",
    },
    {
    title: "XOR Introduction",
    platform: "Personal Blog",
    difficulty: "Easy",
    tags: ["CryptoHack", "Cipher", "XOR", "Python"],
    writeupUrl: "https://creamerburger.tistory.com/43",
    date: "2024.10.11",
    },
    {
    title: "Sexy Inversion Algorithm",
    platform: "Personal Blog",
    difficulty: "Easy",
    tags: ["LeetCode", "algorithm"],
    writeupUrl: "https://creamerburger.tistory.com/44",
    date: "2024.10.11",
    },
    {
    title: "Cookie",
    platform: "Personal Blog",
    difficulty: "Easy",
    tags: ["DreamHack", "web", "cookie"],
    writeupUrl: "https://creamerburger.tistory.com/40",
    date: "2024.10.11",
    },
    ],
    },
    articles: [
    
    {
    title: " Hack the box to practice Nmap",
    platform: "tistory",
    date: "2024.05.10",
    tags: ["Nmap", "Hackthebox", "Port Scan", "Network"],
    url: "https://creamerburger.tistory.com/27",
    description:
    "This is a blog post explaining the Nmap command and how to handle it in hack the box.",
    thumbnail: "/articles/nmap.png",
    },
    {
    title: "PIkit: The Ghost in Your Multi-Socket Machine(English)",
    platform: "medium",
    date: "2024.01.14",
    tags: ["paper review", "English", "Pikit", "USENIX"],
    url: "https://medium.com/@creamerburger/pikit-the-ghost-in-your-multi-socket-machine-bfdf25bf9cf2",
    description:
    "This is a Pikit paper review that explains the paper in an easy-to-understand way (written in English)",
    thumbnail: "/articles/pikit.png",
    },
    {
    title:
    "AI CTF hosting memoir - Hosting CTF with inexperienced people and low budget in a short period of time",
    platform: "tistory",
    date: "2025.01.10",
    tags: ["AI", "AI security", "AI CTF", "problem solver"],
    url: "https://creamerburger.tistory.com/50",
    description: "This is a CTF hosting memoir.",
    thumbnail: "/articles/ctfsweat.png",
    },
    {
    title: "Building CTFd",
    platform: "tistory",
    date: "2024.05.30",
    tags: ["CTFd", "Building CTFd Platform"],
    url: "https://creamerburger.tistory.com/53",
    description:
    "This is a blog post explaining how to upload CTFd, a CTF platform.",
    thumbnail: "/articles/setup.png",
    },
    {
    title: "[Breaking ASLR with AVX Timing] - Paper Review",
    platform: "tistory",
    date: "2024.05.10",
    tags: ["paper review", "DAC", "ASLR", "AVX"],
    url: "https://creamerburger.tistory.com/51",
    description:
    "AVX Timing Side-Channel Attacks against Address Space Layout Randomization Paper Review",
    thumbnail: "/articles/aslr.png",
    },
    {
    title: "[From Crawling to Macro] Using BeautifulSoup and Selenium",
    platform: "tistory",
    date: "2024. 5. 17",
    tags: ["Crawling", "Macro", "BeautifulSoup", "Selenium"],
    url: "https://creamerburger.tistory.com/32",
    description:
    "How to crawl desired web pages and add macro comments using BeautifulSoup and Selenium",
    thumbnail: "/articles/macro.png",
    },
    ],
    teaching: {
    projects: [
    {
    id: "medical-device-security",
    title: "Medical device security vulnerability analysis",
    period: "2024.10",
    description:
    "This is a medical device communication protocol analysis project conducted in the fusion course. We analyzed the DICOM protocol using Wireshark and tested virtual environment vulnerabilities with Metasploit.",
    role: "Project Instructor",
    contribution: 100,
    mainTech: ["Wireshark", "DICOM", "Metasploit", "Network Security"], thumbnail: "/security/dicom.png",
    achievements: [
    "Analysis and Understanding of Medical Device Communication Protocol (DICOM)",
    "Network Packet Analysis Using Wireshark",
    "Testing Vulnerabilities in Win 7 Virtual Environment Using Metasploit",
    ],
    teamSize: "1 person",
    duration: "1 week",
    documentation: [
    {
    type: "PDF",
    title: "Club Presentation Materials",
    description: "DICOM Protocol Analysis and Metasploit Practice",
    link: "/security/dicom.pdf",
    thumbnail: "/security/dicom-doc.png",
    lastUpdated: "2024.10.11",
    },
    ],
    features: [
    "DICOM Protocol Packet Analysis",
    "Investigating Medical Device Communication Vulnerabilities",
    "Learning Metasploit Commands",
    "Attacking in Win 7 Virtual Environment with Metasploit",
    ],
    gallery: [
    "/security/dicom-1.png",
    "/security/dicom-2.png",
    ],
    },
    {
    id: "deepfake-audio-detection",
    title: "Development of a Deepfake Audio Detection System",
    period: "2024.10",
    description:
    "As an AI security-related project conducted during the Convergence Engineering course, we developed a system to detect deepfake audio using the Hugging Face model.",
    role: "Project Instructor",
    contribution: 100,
    mainTech: ["Hugging Face", "AI", "Audio Analysis", "Deepfake"],
    thumbnail: "/security/deepfake.png",
    achievements: [
    "Learning the principles and risks of deepfake audio technology",
    "Learning how to use Hugging Face",
    "Development practice of a deepfake audio detector using the Huggigface pipeline",
    ],
    teamSize: "1 person",
    duration: "1 week",
    documentation: [
    {
    type: "PDF",
    title: "Deepfake Audio Detection Club Presentation Report",
    description:
    "Deepfake, Huggingface, Deepfake Detector Development Practice",
    link: "/security/deepfake.pdf",
    thumbnail: "/security/deepfake-doc.png",
    lastUpdated: "2024.10.05",
    },
    ],
    
    features: [
    "Huggingface Platform Learning",
    "Fake Voice Detection Using Deep Learning Model",
    "GUI Results Using PyQt",
    ],
    gallery: [
    "/security/deepfake-1.png",
    "/security/deepfake-2.png",
    ],
    },
    {
    id: "cyber-attack-simulation",
    title: "Web Hacking Simulation Practice",
    period: "2024.05 - 2024.10",
    description:
    "This is a variety of web attack simulation projects conducted during the fusion course. Includes DDoS attack simulation, web hacking using Burp Suite, OWASP Juice Shop vulnerability analysis, etc.",
    role: "Project Instructor",
    contribution: 100,
    mainTech: ["DDoS", "Burp Suite", "OWASP", "Web Security"],
    thumbnail: "/security/owasp.png",
    achievements: [
    "Understanding DDoS attack principles and simulation practice",
    "Designing and building a vulnerable server environment",
    "Web vulnerability analysis using Burp Suite",
    "OWASP Top 10 vulnerability practice and response method study",
    ],
    teamSize: "1 person",
    duration: "3 weeks",
    documentation: [
    {
    type: "code",
    title: "DDOS vulnerable server code",
    description: "Server code consisting of heavy functions so that it can be easily taken down by DDOS.",
    link: "https://github.com/YYJ-SH/ddostest",
    thumbnail: "/security/ddos-thumb.png",
    lastUpdated: "2024.10.25",
    },
    {
    type: "PDF",
    title: "DDOS presentation material",
    description: "Server code consisting of heavy functions so that it can be easily downloaded by DDOS.",
    link: "/security/NINE.pdf",
    thumbnail: "/security/ddos-doc.png",
    lastUpdated: "2024.10.25",
    },
    {
    type: "PDF",
    title: "burp suite presentation material",
    description: "burp suite installation and practice.",
    link: "/security/burp.pdf",
    thumbnail: "/security/burp-1.png",
    lastUpdated: "2024.10.11",
    },
    {
    type: "PDF",
    title: "OWASP presentation material",
    description: "OWASP juice shop and OWASP ZAP hands-on.",
    link: "/security/owasp.pdf",
    thumbnail: "/security/owasp-zap.png",
    lastUpdated: "2024.10.25",
    },
  ],
  features: [
  "DDOS attack on self-server configured with port forwarding",
  "Web vulnerability scanning practice using OWASP ZAP",
  "Writing Owasp Juice Shop vulnerability analysis report",
  "Virtual shopping mall site attack using Burp Suite",
  
  ],
  gallery: [
  "/security/burp-2.png",
  "/security/burp-3.png",
  "/security/owasp-4.png",
  ],
  },
  {
  id: "crypto-security",
  title: "Analysis and implementation of encryption algorithms",
  period: "2024.04 - 2024.05",
  description:
  "This is a cryptography-related project conducted during the Yongbogong course. We analyzed and implemented various encryption algorithms such as hash functions, block ciphers (AES, SEED), and symmetric/asymmetric key encryption.",
  role: "Project instructor",
  contribution: 100, mainTech: ["Crypto", "Hash Function", "AES", "SEED", "Java", "Python"],
  thumbnail: "/security/hash-1.png",
  achievements: [
  "Implementation of various hash functions and performance comparison",
  "Analysis of five operation modes of block ciphers",
  "Comparison of symmetric key and asymmetric key encryption time and security",
  ],
  teamSize: "1 person",
  duration: "2 weeks",
  documentation: [
  {
  type: "code",
  title: "Speed ​​comparison function by encryption algorithm",
  description: "Use of various encryption algorithm libraries and performance analysis",
  link: "https://creamerburger.tistory.com/29",
  thumbnail: "/security/cpt-1.png",
  lastUpdated: "2024.05.30",
  },
  {
  type: "PDF",
  title: "Hash Function Session Presentation Material",
  description: "Use of various encryption algorithm libraries and performance analysis",
  link: "https://creamerburger.tistory.com/29",
  thumbnail: "/security/cpt-2.png",
  lastUpdated: "2024.05.30",
  },
  ],
  features: [
  "Implementation of various hash functions and performance tests",
  "Experiment and analysis by block cipher mode",
  "Security evaluation of encryption algorithms",
  ],
  gallery: ["/security/hash-2.png", "/security/hash-3.png"],
  },
  {
  id: "ai ctf",
  title: "Yongbogong AI CTF held",
  period: "2024.11",
  description:
  "Using the CTFd platform and AI, a CTF called CTF & PIZZA was held within the club. ",
  role: "CTF Examination Committee & General Manager",
  contribution: 50,
  mainTech: [
  "AI CTF Problems",
  "AI Security",
  "Web Hosting",
  "CTFd Construction",
  "CTF Hosting",
  ],
  thumbnail: "/security/ctf-1.png",
  achievements: [
  "Achieved 90% satisfaction of CTF participants",
  "First AI security problem in the department",
  "PIZZA & LEARN method that even beginners can challenge",
  "Web environment hosting of 5 or more problems, SQL injection problem",
  "Low-budget CTF held"
  ],
  teamSize: "4 people",
  duration: "3 weeks",
  documentation: [
  {
  type: "code",
  title: "CTF Examination Problems",
  description:
  "These are the problems used when the CTF was held.",
  link: "https://github.com/YYJ-SH/cftw",
  thumbnail: "/security/ctf-2.png",
  lastUpdated: "2024.11.30",
  },
  {
  type: "PDF",
  title: "CTF Precautions",
  description:
  "This is the PDF data used during the CTF",
  link: "https://github.com/yourusername/code-analysis",
  thumbnail: "/security/ctf-1.png",
  lastUpdated: "2024.11.30",
  },
  {
  type: "PDF",
  title: "CTF Lightup",
  description:
  "This is AI CTF Lightup. ",
  link: "https://creamerburger.tistory.com/59",
  thumbnail: "/security/ctf-3.png",
  lastUpdated: "2024.11.30",
  },
  ],
  features: [
  "AI prompt injection, authorization, API chaining, Jailbreaking utilization",
  "Reversing, cryptography, web hacking, AI hacking in 4 fields",
  "100% web environment configured through CTFd, Flask, port forwarding",
  "Real DB injection problem using SQlight"
  ],
  gallery: [
  "/security/ctf-4.png",
  "/security/ctf-5.png",
  ],
  },
  ],
  },
  },
  },
};
