export const security = {
  ko: {
    security: {
      title: "보안 경험 & 연구",
      subtitle: "보안 기술 연구, 교육 및 CTF 활동",
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
            id: "ai ctf",
            title: "융보공 AI CTF 개최",
            period: "2024.11",
            description:
              "CTFd 플랫폼과, AI를 사용하여 동아리 내에서 CTF & PIZZA라는 이름의 CTF를 개최했습니다.",
            role: "CTF 출제위원 & 총괄",
            contribution: 50,
            mainTech: ["AI CTF 문제", "AI 보안", "웹 호스팅", "CTFd 구축", "CTF 개최"],
            thumbnail: "/security/ctf-1.png",
            achievements: [
              "CTF 참여자 만족도 90% 달성",
              "학과 최초 AI 보안 문제 출제",
              "초보자도 도전할 수 있는 PIZZA & LEARN 방식",
              "5문제 이상 웹 환경 호스팅, SQL 인젝션 문제 출제",
              "저예산 CTF 개최",
            ],
            teamSize: "4명",
            duration: "3주",
            documentation: [
              {
                type: "code",
                title: "CTF 출제 문제",
                description: "CTF 개최 때 사용했던 문제들입니다.",
                link: "https://github.com/YYJ-SH/cftw",
                thumbnail: "/security/ctf-2.png",
                lastUpdated: "2024.11.30",
              },
            ],
            features: [
              "AI 프롬프트 인젝션, 과도한 권한, API 체이닝, Jailbreaking 활용",
              "리버싱, 암호학, 웹 해킹, AI 해킹 총 4분야",
              "CTFd, Flask, 포트포워딩을 통해 구성된 100% 웹 환경",
            ],
            gallery: ["/security/ctf-4.png", "/security/ctf-5.png"],
          },
          {
            "id": "network-forensics-wireshark",
            "title": "와이어샤크를 이용한 네트워크 패킷 분석 및 이미지 복원",
            "period": "2024.09",
            "description": "Wireshark를 사용하여 네트워크 패킷을 분석하고, 파일 시그니처에 대한 이해를 바탕으로 HTTP 스트림에서 이미지를 수동으로 추출하고 복원하는 과정을 실습한 디지털 포렌식 기초 프로젝트입니다.",
            "role": "프로젝트 강사",
            "contribution": 100,
            "mainTech": ["Wireshark", "네트워크 포렌식", "파일 시그니처", "HxD"],
            "thumbnail": "/security/wireshark-project.png",
            "achievements": [
              "Wireshark를 활용한 네트워크 패킷 캡처 및 분석",
              "HTTP 스트림에서 Raw 데이터를 추출하는 방법 학습",
              "파일 시그니처(JPEG)를 기반으로 이미지 수동 복원 실습",
              "HxD Hex 에디터를 사용한 바이너리 데이터 분석"
            ],
            "teamSize": "1명",
            "duration": "1주",
            "documentation": [
              {
                "type": "PDF",
                "title": "강의 발표 자료",
                "description": "네트워크 패킷에서 이미지 복원하기 Wireshark 실습 강의 자료입니다.",
                "link": "/security/wireshark.pdf",
                "thumbnail": "/security/wireshark-slides.png",
                "lastUpdated": "2024.09.15"
              },
              {
                "type": "video",
                "title": "강의 영상",
                "description": "프로젝트 실습 전체 과정을 담은 강의 영상입니다.",
                "link": "https://drive.google.com/file/d/1dHKI1wQXKVAClbo-nQREu3VISq1cXtom/view?usp=sharing",
                "thumbnail": "/security/wireshark-video.png",
                "lastUpdated": "2024.09.15"
              }
            ],
            "features": [
              "HTTP 패킷 필터링 및 스트림 추적",
              "JPEG 파일의 SOI(FF D8) 및 EOI(FF D9) 시그니처 분석",
              "HxD를 이용한 불필요한 헤더 데이터 제거 및 파일 저장"
            ],
            "gallery": [
              "/security/wireshark-gallery-1.png",
              "/security/wireshark-gallery-2.png"
            ]
          },
          {

                        id: "MCP ctf",
            
                        title: "융보공 MCP CTF 개최",
            
                        period: "2024.07",
            
                        description:
            
                          "CTFd 플랫폼과, MCP를 사용하여 동아리 내에서 CTF & PIZZA라는 이름의 CTF를 2회차 개최했습니다.",
            
                        role: "CTF 출제위원 & 총괄",
            
                        contribution: 80,
            
                        mainTech: [
            
                          "MCP CTF 문제",
            
                          "MCP 보안",
            
                          "Flask 자동 호스팅",
            
                          "리버스 프록시",
            
                          "Cloud & Docker 구축",
            
                        ],
            
                        thumbnail: "/security/ctf2-0.png",
            
                        achievements: [
            
                          "CTF 참여자 만족도 100% 달성",
            
                          "학과 최초 MCP 보안 문제 출제",
            
                          "전 부원이 출제한 13 문제 호스팅 자동화",
            
                          "7문제 이상 웹 환경 호스팅, MCP 및 스테가노그래피 문제 출제",
            
                       
            
                        ],
            
                        teamSize: "2명",
            
                        duration: "2주",
            
                        documentation: [
            
                          {
            
                            type: "code",
            
                            title: "CTF 출제 문제",
            
                            description:
            
                              "MCP 문제입니다(도커배포)",
            
                            link: "https://github.com/YYJ-SH/dmcp",
            
                            thumbnail: "/security/ctf2-5.png",
            
                            lastUpdated: "2025.07.04",
            
                          },
            
                          {
            
                            type: "PDF",
            
                            title: "CTF MCP 라이트업",
            
                            description:
            
                              "CTF 개최 때 사용했던 PDF 자료입니다",
            
                            link: "/security/2025_ctf_writeup-1.pdf",
            
                            thumbnail: "/security/ctf2-3.png",
            
                            lastUpdated: "2024.11.30",
            
                          },
            
                          {
            
                            type: "PDF",
            
                            title: "CTF 기타 출제 라이트업",
            
                            description:
            
                              "MCP 외 스테가노그래피 및 웹 문제 라이트업입니다. ",
            
                              link: "/security/2025_ctf_writeup-2.pdf",
            
                            thumbnail: "/security/ctf2-6.png",
            
                            lastUpdated: "2024.07.04",
            
                          },
            
                        ],
            
                        features: [
            
                          "툴 포이즈닝, 사용자 인증 우회, 토큰 탈취 MCP 문제 구현 ",
            
                          "CVE-2024-43425 취약점 활용한 문제 출제",
            
                          "CTFd, Flask, 포트포워딩을 통해 구성된 100% 웹 환경",
            
                          "Docker를 활용한 자동화된 문제 배포",
            
                        ],
            
                        gallery: [
            
                          "/security/ctf2-1.png",
            
                          "/security/ctf2-2.png",
            
                          "/security/ctf2-3.png",
            
                          "/security/ctf2-4.png",
            
                          "/security/ctf2-5.png",
            
                          "/security/ctf2-6.png",
            
                       
            
                        ],
            
                      },
          {
            id: "cve-rag",
            title: "CVE-RAG: AI 코드 생성기 취약점 방지 프레임워크",
            period: "2024.03 - 2025.05",
            description:
              "최신 CVE 데이터베이스를 활용하는 RAG 시스템을 통해 AI 코드 생성 전 보안 템플릿을 자동으로 생성하여, 취약한 라이브러리 추천 문제를 선제적으로 방지하는 프레임워크입니다.",
            role: "연구 개발",
            contribution: 100,
            mainTech: ["RAG", "LLM", "CVE", "Python", "TF-IDF", "Cursor AI"],
            thumbnail: "/security/cverag-project.png",
            achievements: [
              "AI 생성 코드의 의존성 취약점 100% 감소 달성",
              "안전한 라이브러리 버전 사용률 100% 향상",
              "ASK 2025 학술대회 논문 게재 및 발표",
            ],
            teamSize: "1명",
            duration: "3개월",
            documentation: [
              {
                type: "PDF",
                title: "CVE-RAG 연구 논문",
                description: "AI 코드 생성기의 취약 라이브러리 추천 방지를 위한 템플릿 프레임워크",
                link: "/papers/CVE-RAG.pdf",
                thumbnail: "/security/cverag-paper-thumb.png",
                lastUpdated: "2025.05.12",
              },
              {
                type: "PDF",
                title: "CVE-RAG 발표 자료",
                description: "프로젝트 아키텍처, 실험 결과 및 분석을 포함한 발표 자료입니다.",
                link: "/papers/CVE-RAG-presentation.pdf",
                thumbnail: "/security/cverag-slides-thumb.png",
                lastUpdated: "2025.05.12",
              },
            ],
            features: [
              "RAG 기술과 CVE 데이터베이스를 결합한 취약점 정보 검색",
              "Cursor AI 도구에 적용 가능한 .cursorrules 보안 템플릿 자동 생성",
              "구체적 취약점 기반의 안전한 라이브러리 버전 제약 조건 제시",
            ],
            gallery: ["/security/cverag-gallery-1.png", "/security/cverag-gallery-2.png"],
          },
          {
            id: "vsat-threat-modeling",
            title: "선박 사이버 보안 위협 모델링 연구",
            period: "2024.10",
            description:
              "VSAT 및 위성 통신 시스템의 취약점을 분석하고, STRIDE 및 DREAD 위협 모델링을 통해 강화된 보안 체크리스트를 제시한 연구 프로젝트입니다.",
            role: "연구원",
            contribution: 100,
            mainTech: ["VSAT", "선박보안", "위협 모델링", "STRIDE", "DREAD"],
            thumbnail: "/security/vsat-project.png",
            achievements: [
              "ACK 2024 학술대회 논문 게재 및 발표",
              "STRIDE/DREAD 기반의 정량적 보안 체크리스트 개발",
            ],
            teamSize: "4명",
            duration: "2개월",
            documentation: [
              {
                type: "PDF",
                title: "VSAT 연구 논문",
                description: "선박 사이버 보안 위협 모델링 연구 논문입니다.",
                link: "/papers/vsat.pdf",
                thumbnail: "/security/vsat-paper-thumb.png",
                lastUpdated: "2024.10.16",
              },
              {
                type: "PDF",
                title: "VSAT 발표 자료",
                description: "ACK 2024에서 발표한 자료입니다.",
                link: "/papers/vsat-presentation.pdf",
                thumbnail: "/security/vsat-slides-thumb.png",
                lastUpdated: "2024.10.16",
              },
            ],
            features: [
              "선박 통신 데이터 흐름 분석(DFD)",
              "공격 트리 분석을 통한 잠재적 위협 경로 파악",
              "DREAD 모델을 이용한 정량적 위험 평가",
            ],
            gallery: ["/security/vsat-gallery-1.png"],
          },
          {
            id: "de-identification-study",
            title: "비식별화 기법 성능 평가 연구",
            period: "2024.10",
            description:
              "인간과 AI의 인식 차이를 기반으로 마스킹, 가우시안 블러, 모자이크 기법의 성능을 비교 분석하여 최적의 비식별화 방안을 제시한 연구 프로젝트입니다.",
            role: "연구원",
            contribution: 100,
            mainTech: ["비식별화", "개인정보보호", "AI 재식별", "데이터 유용성", "OpenCV"],
            thumbnail: "/security/de-recog-project.png",
            achievements: [
              "ACK 2024 학술대회 논문 게재 및 발표",
              "인간/AI 비식별률 및 데이터 유용성 동시 평가 모델 제시",
            ],
            teamSize: "4명",
            duration: "2개월",
            documentation: [
              {
                type: "PDF",
                title: "비식별화 연구 논문",
                description: "인간 및 AI 실험 기반 비식별화 기법 성능 평가 논문입니다.",
                link: "/papers/de-recog.pdf",
                thumbnail: "/security/de-recog-paper-thumb.png",
                lastUpdated: "2024.10.16",
              },
               {
                type: "PDF",
                title: "비식별화 발표 자료",
                description: "ACK 2024에서 발표한 자료입니다.",
                link: "/papers/de-recog-presentation.pdf",
                thumbnail: "/security/de-recog-slides-thumb.png",
                lastUpdated: "2024.10.16",
              }
            ],
            features: [
              "인간 설문 및 AI 재식별 실험 설계",
              "PSNR, SSIM을 통한 이미지 품질 정량 분석",
              "객체 탐지 정확도를 통한 데이터 유용성 측정",
            ],
            gallery: ["/security/de-recog-gallery-1.png"],
          },
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
            ],
            gallery: ["/security/dicom-1.png", "/security/dicom-2.png"],
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
                description: "딥페이크, 허깅페이스, 딥페이크 검출기 개발 실습에 관한 내용입니다.",
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
            gallery: ["/security/deepfake-1.png", "/security/deepfake-2.png"],
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
            ],
            features: [
              "포트포워딩으로 구성한 자체서버 DDOS 공격",
              "OWASP ZAP을 통한 웹 취약점 스캔 실습",
              "Owasp Juice Shop 취약점 분석 보고서 작성",
            ],
            gallery: ["/security/burp-2.png", "/security/burp-3.png", "/security/owasp-4.png"],
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
            ],
            features: [
              "다양한 해시함수 구현 및 성능 테스트",
              "블록암호 모드별 실험 및 분석",
              "암호화 알고리즘의 보안성 평가",
            ],
            gallery: ["/security/hash-2.png", "/security/hash-3.png"],
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
            id: "ai ctf",
            title: "Yongbogong AI CTF held",
            period: "2024.11",
            description: "Using the CTFd platform and AI, a CTF called CTF & PIZZA was held within the club.",
            role: "CTF Committee & General Manager",
            contribution: 50,
            mainTech: ["AI CTF Problems", "AI Security", "Web Hosting", "CTFd Setup", "CTF Hosting"],
            thumbnail: "/security/ctf-1.png",
            achievements: [
              "Achieved 90% satisfaction among CTF participants",
              "First AI security problem in the department",
            ],
            teamSize: "4 people",
            duration: "3 weeks",
            documentation: [
              {
                type: "code",
                title: "CTF Challenge Problems",
                description: "These are the problems used during the CTF.",
                link: "https://github.com/YYJ-SH/cftw",
                thumbnail: "/security/ctf-2.png",
                lastUpdated: "2024.11.30",
              },
            ],
            features: [
              "Utilized AI prompt injection, excessive permissions, API chaining, and jailbreaking",
              "Covered four fields: reversing, cryptography, web hacking, and AI hacking",
            ],
            gallery: ["/security/ctf-4.png", "/security/ctf-5.png"],
          },
          {
            id: "MCP ctf",
            title: "Yongbogong MCP CTF held",
            period: "2024.07",
            description: "Using the CTFd platform and MCP, the 2nd CTF called CTF & PIZZA was held within the club.",
            role: "CTF Committee & General Manager",
            contribution: 80,
            mainTech: ["MCP CTF Problem", "MCP Security", "Flask Auto-Hosting", "Reverse Proxy", "Cloud & Docker"],
            thumbnail: "/security/ctf2-0.png",
            achievements: [
              "Achieved 100% satisfaction among CTF participants",
              "First MCP security problem in the department",
              "Automated hosting for 13 problems created by all members",
            ],
            teamSize: "2 people",
            duration: "2 weeks",
            documentation: [
              {
                type: "code",
                title: "CTF Challenge Problems",
                description: "MCP problems (Docker deployment).",
                link: "https://github.com/YYJ-SH/dmcp",
                thumbnail: "/security/ctf2-3.png",
                lastUpdated: "2025.07.04",
              },
            ],
            features: [
              "Implemented problems for tool poisoning, user auth bypass, and token theft",
              "Created a challenge based on the CVE-2024-43425 vulnerability",
              "Automated problem deployment using Docker",
            ],
            gallery: ["/security/ctf2-1.png", "/security/ctf2-2.png"],
          },
          {
            "id": "network-forensics-wireshark",
            "title": "Network Packet Analysis & Image Restoration using Wireshark",
            "period": "2024.09",
            "description": "A basic digital forensics project involving analyzing network packets with Wireshark and practicing manual extraction and restoration of images from HTTP streams based on an understanding of file signatures.",
            "role": "Project Instructor",
            "contribution": 100,
            "mainTech": ["Wireshark", "Network Forensics", "File Signature", "HxD"],
            "thumbnail": "/security/wireshark-project.png",
            "achievements": [
              "Captured and analyzed network packets using Wireshark",
              "Learned how to extract Raw data from HTTP streams",
              "Practiced manually restoring images based on file signatures (JPEG)",
              "Analyzed binary data using the HxD Hex Editor"
            ],
            "teamSize": "1 person",
            "duration": "1 week",
            "documentation": [
              {
                "type": "PDF",
                "title": "Lecture Slides",
                "description": "Presentation slides for the Wireshark lab on restoring images from network packets.",
                "link": "/security/wireshark.pdf",
                "thumbnail": "/security/wireshark-slides.png",
                "lastUpdated": "2024.09.15"
              },
              {
                "type": "video",
                "title": "Lecture Video",
                "description": "A video recording of the entire project lab session.",
                "link": "https://drive.google.com/file/d/1dHKI1wQXKVAClbo-nQREu3VISq1cXtom/view?usp=sharing",
                "thumbnail": "/security/wireshark-video.png",
                "lastUpdated": "2024.09.15"
              }
            ],
            "features": [
              "HTTP packet filtering and stream following",
              "Analysis of JPEG file SOI (FF D8) and EOI (FF D9) signatures",
              "Removing unnecessary header data and saving files using HxD"
            ],
            "gallery": [
              "/security/wireshark-gallery-1.png",
              "/security/wireshark-gallery-2.png"
            ]
          },
          {
            id: "cve-rag",
            title: "CVE-RAG: A Framework for Preventing Vulnerable Dependencies in AI Code Generators",
            period: "2024.03 - 2025.05",
            description: "A research project that developed a framework to preemptively prevent AI code generators from recommending vulnerable libraries by automatically creating security templates using a RAG system and the latest CVE database.",
            role: "Research & Development",
            contribution: 100,
            mainTech: ["RAG", "LLM", "CVE", "Python", "TF-IDF", "Cursor AI"],
            thumbnail: "/security/cverag-project.png",
            achievements: [
              "Achieved 100% reduction in dependency vulnerabilities in AI-generated code",
              "Improved safe library version usage rate to 100%",
              "Published and presented at the ASK 2025 conference",
            ],
            teamSize: "1 person",
            duration: "3 months",
            documentation: [
              {
                type: "PDF",
                title: "CVE-RAG Research Paper",
                description: "A Template Framework to Prevent Vulnerable Library Recommendations in AI Code Generators.",
                link: "/papers/CVE-RAG.pdf",
                thumbnail: "/security/cverag-paper-thumb.png",
                lastUpdated: "2025.05.12",
              },
              {
                type: "PDF",
                title: "CVE-RAG Presentation",
                description: "Presentation slides including project architecture, experiment results, and analysis.",
                link: "/papers/CVE-RAG-presentation.pdf",
                thumbnail: "/security/cverag-slides-thumb.png",
                lastUpdated: "2025.05.12",
              },
            ],
            features: [
              "Vulnerability information retrieval combining RAG technology and CVE database",
              "Automatic generation of .cursorrules security templates for Cursor AI",
              "Provides specific, vulnerability-based version constraints",
            ],
            gallery: ["/security/cverag-gallery-1.png", "/security/cverag-gallery-2.png"],
          },
          {
            id: "vsat-threat-modeling",
            title: "Maritime Cyber Security Threat Modeling Research",
            period: "2024.10",
            description: "A research project that analyzed vulnerabilities in VSAT and satellite communication systems and proposed an enhanced security checklist using STRIDE and DREAD threat modeling.",
            role: "Researcher",
            contribution: 100,
            mainTech: ["VSAT", "Maritime Security", "Threat Modeling", "STRIDE", "DREAD"],
            thumbnail: "/security/vsat-project.png",
            achievements: [
              "Published and presented at the ACK 2024 conference",
              "Developed a quantitative security checklist based on STRIDE/DREAD",
            ],
            teamSize: "4 people",
            duration: "2 months",
            documentation: [
              {
                type: "PDF",
                title: "VSAT Research Paper",
                description: "A research paper on maritime cyber security threat modeling.",
                link: "/papers/vsat.pdf",
                thumbnail: "/security/vsat-paper-thumb.png",
                lastUpdated: "2024.10.16",
              },
              {
                type: "PDF",
                title: "VSAT Presentation",
                description: "Presented at the ACK 2024 conference.",
                link: "/papers/vsat-presentation.pdf",
                thumbnail: "/security/vsat-slides-thumb.png",
                lastUpdated: "2024.10.16",
              },
            ],
            features: [
              "Data Flow Diagram (DFD) analysis of vessel communications",
              "Identification of potential threat paths via attack tree analysis",
              "Quantitative risk assessment using the DREAD model",
            ],
            gallery: ["/security/vsat-gallery-1.png"],
          },
          {
            id: "de-identification-study",
            title: "Performance Evaluation of De-identification Techniques",
            period: "2024.10",
            description: "A research project that analyzed the performance of masking, Gaussian blur, and mosaic techniques based on human and AI perception to propose optimal de-identification methods.",
            role: "Researcher",
            contribution: 100,
            mainTech: ["De-identification", "Privacy", "AI Re-identification", "Data Utility", "OpenCV"],
            thumbnail: "/security/de-recog-project.png",
            achievements: [
              "Published and presented at the ACK 2024 conference",
              "Proposed a model for concurrently evaluating human/AI de-identification rates and data utility",
            ],
            teamSize: "4 people",
            duration: "2 months",
            documentation: [
              {
                type: "PDF",
                title: "De-identification Research Paper",
                description: "Performance evaluation of de-identification techniques based on human and AI experiments.",
                link: "/papers/de-recog.pdf",
                thumbnail: "/security/de-recog-paper-thumb.png",
                lastUpdated: "2024.10.16",
              },
              {
                type: "PDF",
                title: "De-identification Presentation",
                description: "Presented at the ACK 2024 conference.",
                link: "/papers/de-recog-presentation.pdf",
                thumbnail: "/security/de-recog-slides-thumb.png",
                lastUpdated: "2024.10.16",
              },
            ],
            features: [
              "Experimental design for human surveys and AI re-identification tests",
              "Quantitative image quality analysis using PSNR and SSIM",
              "Measurement of data utility via object detection accuracy",
            ],
            gallery: ["/security/de-recog-gallery-1.png"],
          },
          {
            id: "medical-device-security",
            title: "Medical Device Security Vulnerability Analysis",
            period: "2024.10",
            description: "A project in the Convergence Security course to analyze medical device communication protocols. Analyzed DICOM protocol using Wireshark and tested vulnerabilities in a virtual environment with Metasploit.",
            role: "Project Instructor",
            contribution: 100,
            mainTech: ["Wireshark", "DICOM", "Metasploit", "Network Security"],
            thumbnail: "/security/dicom.png",
            achievements: [
              "Analyzed and understood the DICOM medical communication protocol",
              "Utilized Wireshark for network packet analysis",
              "Tested vulnerabilities on a Windows 7 VM using Metasploit",
            ],
            teamSize: "1 person",
            duration: "1 week",
            documentation: [
              {
                type: "PDF",
                title: "Club Presentation Slides",
                description: "DICOM protocol analysis and Metasploit lab.",
                link: "/security/dicom.pdf",
                thumbnail: "/security/dicom-doc.png",
                lastUpdated: "2024.10.11",
              },
            ],
            features: [
              "DICOM protocol packet analysis",
              "Research on medical device communication vulnerabilities",
              "Learning Metasploit commands",
            ],
            gallery: ["/security/dicom-1.png", "/security/dicom-2.png"],
          },
          {
            id: "deepfake-audio-detection",
            title: "Deepfake Audio Detection System Development",
            period: "2024.10",
            description: "An AI security project from the Convergence Security course, developing a system to detect deepfake audio using a Hugging Face model.",
            role: "Project Instructor",
            contribution: 100,
            mainTech: ["Hugging Face", "AI", "Audio Analysis", "Deepfake"],
            thumbnail: "/security/deepfake.png",
            achievements: [
              "Learned the principles and risks of deepfake audio technology",
              "Practiced using the Hugging Face platform",
              "Developed a deepfake audio detector using the Hugging Face pipeline",
            ],
            teamSize: "1 person",
            duration: "1 week",
            documentation: [
              {
                type: "PDF",
                title: "Deepfake Audio Detection Club Presentation",
                description: "Contents on deepfakes, Hugging Face, and building a detector.",
                link: "/security/deepfake.pdf",
                thumbnail: "/security/deepfake-doc.png",
                lastUpdated: "2024.10.05",
              },
            ],
            features: [
              "Learning the Hugging Face platform",
              "Detecting fake voices using a deep learning model",
              "Creating a GUI with PyQt",
            ],
            gallery: ["/security/deepfake-1.png", "/security/deepfake-2.png"],
          },
          {
            id: "cyber-attack-simulation",
            title: "Web Hacking Simulation Lab",
            period: "2024.05 - 2024.10",
            description: "Various web attack simulation projects from the Convergence Security course, including DDoS simulations, web hacking with Burp Suite, and OWASP Juice Shop vulnerability analysis.",
            role: "Project Instructor",
            contribution: 100,
            mainTech: ["DDoS", "Burp Suite", "OWASP", "Web Security"],
            thumbnail: "/security/owasp.png",
            achievements: [
              "Understood DDoS principles through simulation",
              "Analyzed web vulnerabilities using Burp Suite",
              "Practiced on OWASP Top 10 vulnerabilities",
            ],
            teamSize: "1 person",
            duration: "3 weeks",
            documentation: [
              {
                type: "code",
                title: "Vulnerable Server Code for DDoS",
                description: "A server with heavy functions designed to be susceptible to DDoS attacks.",
                link: "https://github.com/YYJ-SH/ddostest",
                thumbnail: "/security/ddos-thumb.png",
                lastUpdated: "2024.10.25",
              },
            ],
            features: [
              "DDoS attack on a self-hosted server via port forwarding",
              "Web vulnerability scanning with OWASP ZAP",
              "Analysis of the Owasp Juice Shop application",
            ],
            gallery: ["/security/burp-2.png", "/security/burp-3.png", "/security/owasp-4.png"],
          },
          {
            id: "crypto-security",
            title: "Encryption Algorithm Analysis & Implementation",
            period: "2024.04 - 2024.05",
            description: "A cryptography project from the Convergence Security course. Analyzed and implemented various crypto algorithms like hash functions, block ciphers (AES, SEED), and symmetric/asymmetric key encryption.",
            role: "Project Instructor",
            contribution: 100,
            mainTech: ["Cryptography", "Hash Functions", "AES", "SEED", "Java", "Python"],
            thumbnail: "/security/hash-1.png",
            achievements: [
              "Implemented and compared performance of various hash functions",
              "Analyzed five modes of operation for block ciphers",
              "Compared speed and security of symmetric vs. asymmetric key encryption",
            ],
            teamSize: "1 person",
            duration: "2 weeks",
            documentation: [
              {
                type: "code",
                title: "Speed Comparison Function for Crypto Algorithms",
                description: "Using and analyzing the performance of various crypto libraries.",
                link: "https://creamerburger.tistory.com/29",
                thumbnail: "/security/cpt-1.png",
                lastUpdated: "2024.05.30",
              },
            ],
            features: [
              "Performance testing of various hash functions",
              "Experimenting with and analyzing block cipher modes",
              "Evaluating the security of cryptographic algorithms",
            ],
            gallery: ["/security/hash-2.png", "/security/hash-3.png"],
          },
        ],
      },
    },
  },
};