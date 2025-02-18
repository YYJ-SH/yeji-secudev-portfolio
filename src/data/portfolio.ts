export const portfolio = {
  ko: {
    portfolio: {
      title: "포트폴리오",
      description: "혁신적인 웹 솔루션과 보안 프로젝트들을 소개합니다.",
      projects: [
        {
          id: "phishing-guard",
          title: "피싱지킴이: 시니어를 위한 ALL IN ONE 피싱 탐지 및 교육 플랫폼",
          period: "2024.06 - 진행 중",
          description: "시니어들을 위한 이미지 & 데이터베이스 기반 피싱 사이트 탐지 및 교육 커뮤니티 입니다.",
          role: "프론트엔드 & 백 개발자 & 팀 리드",
          contribution: 70,
          mainTech: ["React", "Next.js", "Python", "Django", "MySql", "AWS", "Docker"],
          thumbnail: "/projects/phishing-guard.png",
          achievements: [
            "Docker 컨테이너 기반의 서버 배포",
            "최초 은행데이터 비교 기반 피싱 탐지 모델 구현",
            "시니어 프렌들리 UI/UX 디자인",
            "금융감독원 & KCI 논문 기반 체크리스트 적용",
          ],
          teamSize: "4명",
          duration: "진행 중",
          liveDemo: "https://phishing-guard.example.com",
          githubLink: "https://github.com/YYJ-SH/phishingguardFront",
          documentation: [],
          coreCode: `# DatabaseChecker 클래스의 check_url 메서드 수정
def check_url(self, url):
    try:
        normalized_url = normalize_url(url)
        
        # 모든 금융기관 URL 가져오기
        self.cursor.execute("""
            SELECT CONVERT(name USING utf8mb4) as name, url 
            FROM financial_institutions
        """)
        results = self.cursor.fetchall()
        
        # Dictionary 구성
        financial_urls = {}
        for row in results:
            if row['url'] and row['name']:  # null 체크
                financial_urls[row['url']] = {
                    'name': row['name'].encode('utf-8').decode('utf-8')
                }
        
        # 디버깅
        print("URL:", url)
        print("Normalized URL:", normalized_url)
        print("Financial URLs:", financial_urls)
        
        # 유사도 검사 전에 데이터 형식 확인
        if not financial_urls:
            print("Warning: No financial URLs found in database")
            return None
        
        # 유사도 검사
        similarity_check = check_url_similarity(normalized_url, financial_urls)
        print("Similarity Check Result:", similarity_check)
        `,
          features: [
            "시니어를 위한 음성 안내 및 폰트 사이즈 조절 기능",
            "실사례를 기반으로 만들어진 피싱 퀴즈&교육 페이지",
            "피싱 신고 및 피싱 분석 & 투표 커뮤니티",
            "이미지 기반 피싱 분석(URL, 전화번호, 계좌번호)",
            "AI 기반 피싱 사이트 분석 (체크리스트 기반)",
          ],
          gallery: ["/projects/phishing-1.png", "/projects/phishing-2.png"],
        },
        {
          id: "deidentification-platform",
          title: "AnonyData: 비정형 개인정보 데이터 비식별화 플랫폼",
          period: "2024.03 - 2024.08",
          description: "YOLO 기반 AI 모델을 활용하여 영상, 이미지, PDF 등 다양한 비정형 데이터를 자동 탐지하고 비식별화하는 플랫폼입니다.",
          role: "프론트엔드 & 백엔드 개발, AI학습, PM",
          contribution: 80,
          mainTech: ["React", "TypeScript", "Next.js", "TailwindCSS"],
          thumbnail: "/projects/evwa.png",
          achievements: [
  "얼굴 및 차량 번호판 자동 탐지 모델 개발",
  "얼굴 및 번호판 감지 정확도 95% 달성",
  "자체 PDF 암호화 및 보안 열람 기능 구현",
  "비식별 처리된 데이터의 중앙 집중식 관리 시스템 구축",
]
,
          teamSize: "4명",
          duration: "6개월",
          liveDemo: "https://evwa.example.com",
          githubLink: "https://github.com/YYJ-SH/evwa",
          documentation: [
            {
              type: "PDF",
              title: "AnonyData 비정형 개인정보 데이터 비식별화 플랫폼 문서",
              description: "비정형 데이터를 탐지하고 비식별화하는 AnonyData 플랫폼의 상세 기술 문서입니다.",
              link: "/projects/evwa.pdf",
              thumbnail: "/projects/evwa-doc-tumbnail.png", // 실제 썸네일 이미지가 있다면 그 경로를
              lastUpdated: "2024-02-18", // 문서가 마지막으로 수정된 날짜
            }],
          coreCode: `for *xyxy, conf, cls in results.xyxy[0].cpu().numpy():
                x1, y1, x2, y2 = map(int, xyxy)
                class_id = int(cls)
                if class_id == 0 and 'face' in masking_targets:  # 얼굴 클래스
                    faces_detected = True
                    roi = img[y1:y2, x1:x2]
                    masked_roi = apply_masking(roi, masking_method, masking_intensity)
                    img[y1:y2, x1:x2] = np.where(mask[y1:y2, x1:x2, np.newaxis] == 1, masked_roi, roi)
                elif class_id == 1 and 'licensePlate' in masking_targets:  # 번호판 클래스
                    roi = img[y1:y2, x1:x2]
                    masked_roi = apply_masking(roi, masking_method, masking_intensity)
                    img[y1:y2, x1:x2] = np.where(mask[y1:y2, x1:x2, np.newaxis] == 1, masked_roi, roi)`,
          features: [
  "얼굴 및 차량 번호판 자동 탐지",
  "다양한 마스킹 옵션(완전 마스킹, 픽셀화, 블러링)",
  "PDF 암호화 및 보안 열람 기능",
  "비식별 처리된 데이터의 중앙 집중식 저장 및 관리",
  "메타데이터 추가 및 검색 기능",
  "처리된 이미지 S3 자동 업로드 및 URL 반환",
  "마스킹 강도 조절 가능",
  "비밀키 기반 보안 강화 (파일 만료 및 자동 파괴 기능)"],
          gallery: ["/projects/evwa-1.gif", "/projects/evwa-2.gif", "/projects/evwa-3.gif", "/projects/evwa-4.gif"],
        },
        {
          id: "smart-maritime-logistics",
          title: "스마트 해양물류: AI 기반 자산 관리 플랫폼",
          period: "2023.12 - 2024.05",
          description: "해양물류 데이터를 AI와 보안 체크리스트를 기반으로 분석하여 안전한 자산 관리 시스템을 구축했습니다.",
          role: "백엔드 및 보안 담당",
          contribution: 60,
          mainTech: ["Django", "React", "MongoDB", "Docker", "AWS"],
          thumbnail: "/projects/maritime.png",
          achievements: [
            "보안 체크리스트 기반 자산 관리 구현",
            "클라우드 기반 데이터 저장 및 분석",
            "보안 취약점 대응 시스템 구축",
          ],
          teamSize: "6명",
          duration: "5개월",
          liveDemo: "https://smart-maritime.example.com",
          githubLink: "https://github.com/YYJ-SH/smart-maritime",
          documentation: [],
          coreCode: `// 해양물류 데이터 분석 로직...`,
          features: [
            "AI 기반 자산 관리",
            "보안 점검 체크리스트 적용",
            "실시간 데이터 시각화",
          ],
          gallery: ["/projects/maritime-1.png", "/projects/maritime-2.png"],
        },
        {
          id: "dopark-numberplate",
          title: "차량 번호판 위변조 탐지 시스템",
          period: "2023.02",
          description: "차량 번호판 위변조 탐지 및 주차관리 시스템 개발. PyTorch를 활용한 차량 가짜 번호판 탐지 기능 포함.",
          role: "프론트엔드 개발자",
          contribution: 50,
          mainTech: ["JavaScript", "React", "Java", "Spring Boot"],
          thumbnail: "/projects/dopark.png",
          achievements: [
            "차량 번호판 인식률 100% 달성",
            "SuperGlue 모듈 활용하여 위변조 번호판 탐지",
          ],
          teamSize: "5명",
          duration: "4개월",
          liveDemo: "",
          githubLink: "",
          documentation: [],
          coreCode: `// 차량 번호판 인식 AI 모델 로직...`,
          features: ["AI 기반 차량 번호판 인식", "위변조 탐지 기능"],
          gallery: [],
        },
        {
          id: "ai-aquaponics",
          title: "인공지능 아쿠아포닉스 수조",
          period: "2023.08",
          description: "Arduino와 YOLOv5를 활용하여 원격 급식 제어 및 실시간 어항 상태 모니터링 시스템을 개발했습니다.",
          role: "풀스택 개발자",
          contribution: 80,
          mainTech: ["Python", "JavaScript", "React NEXT", "Django"],
          thumbnail: "/projects/aquaponics.png",
          achievements: [
            "실시간 수질 모니터링 및 원격 제어 구현",
            "AI 기반 식물 질병 진단 모델 개발",
          ],
          teamSize: "3명",
          duration: "6개월",
          liveDemo: "",
          githubLink: "",
          documentation: [],
          coreCode: `// 아쿠아포닉스 원격 제어 로직...`,
          features: ["IoT 기반 어항 모니터링", "AI 식물 질병 진단"],
          gallery: [],
        },
        {
          id: "yangjae-parking",
          title: "양재 AI 허브 주차관리 시스템 UI 개편",
          period: "2023.02",
          description: "양재 AI Hub 주차관리 시스템의 UX/UI를 전면 개편하여 사용성을 개선했습니다.",
          role: "프론트엔드 개발자",
          contribution: 100,
          mainTech: ["Next.js", "React"],
          thumbnail: "/projects/yangjae.png",
          achievements: [
            "주차 관리 UI/UX 개선",
            "반응형 디자인 적용",
          ],
          teamSize: "2명",
          duration: "3개월",
          liveDemo: "",
          githubLink: "",
          documentation: [],
          coreCode: ``,
          features: ["UX/UI 개선", "반응형 디자인 적용"],
          gallery: [],
        },
      ],
    },
  },
  en: {
    portfolio: {
    title: "Portfolio",
    description: "Introducing innovative web solutions and security projects.",
    projects: [
    {
    id: "phishing-guard",
    title: "Phishing Guard: Phishing Site Detection and Reporting Platform",
    period: "2024.06 - In progress",
    description: "We developed an AI-based phishing detection system to analyze and report malicious URLs in real time.",
    role: "Front-end developer",
    contribution: 70,
    mainTech: ["React", "Next.js", "Python", "FastAPI", "MongoDB"],
    thumbnail: "/projects/phishing-guard.png",
    achievements: [
    "Achieved 95% phishing detection accuracy",
    "Automatic analysis of AI-based malicious URLs",
    "Building a database of reported sites (more than 1,000 cases stored)",
    ],
    teamSize: "4 people",
    duration: "In progress",
    liveDemo: "https://phishing-guard.example.com",
    githubLink: "https://github.com/YYJ-SH/phishing-guard",
    documentation: [],
    coreCode: `// Core logic of phishing detection AI model...`,
    features: [
    "User report function",
    "AI-based phishing site analysis",
    "Automatically save to database",
    ],
    gallery: ["/projects/phishing-1.png", "/projects/phishing-2.png"],
    },
    {
    id: "deidentification-platform",
    title: "Evewa: Unstructured data deidentification platform",
    period: "2024.03 - 2024.08",
    description: "Automatically detect and deidentify various unstructured data such as videos, images, and PDFs using YOLO-based AI models. Platform.",
    role: "Front-end development lead",
    contribution: 80,
    mainTech: ["React", "TypeScript", "Next.js", "TailwindCSS"],
    thumbnail: "/projects/evwa.png",
    achievements: [
    "40% improvement in performance of large-scale data processing",
    "Implementation of real-time de-identification processing",
    "Achievement of zero security vulnerabilities",
    ],
    teamSize: "5 people",
    duration: "6 months",
    liveDemo: "https://evwa.example.com",
    githubLink: "https://github.com/YYJ-SH/evwa",
    documentation: [],
    coreCode: `// Unstructured data de-identification logic...`,
    features: [
    "Automatic detection of unstructured data",
    "Real-time de-identification processing",
    "Policy-based masking",
    ],
    gallery: ["/projects/evwa-1.png", "/projects/evwa-2.png"],
    },
    {
    id: "smart-maritime-logistics",
    title: "Smart Maritime Logistics: AI-based Asset Management Platform",
    period: "2023.12 - 2024.05",
    description: "We built a safe asset management system by analyzing maritime logistics data based on AI and security checklists.",
    role: "Backend and Security Manager",
    contribution: 60,
    mainTech: ["Django", "React", "MongoDB", "Docker", "AWS"],
    thumbnail: "/projects/maritime.png",
    achievements: [
    "Implementation of Asset Management Based on Security Checklist",
    "Cloud-based Data Storage and Analysis",
    "Building a Security Vulnerability Response System",
    ],
    teamSize: "6 people",
    duration: "5 months",
    liveDemo: "https://smart-maritime.example.com",
    githubLink: "https://github.com/YYJ-SH/smart-maritime",
    documentation: [],
    coreCode: `// Marine logistics data analysis logic...`,
    features: [
    "AI-based asset management",
    "Security inspection checklist application",
    "Real-time data visualization",
    ],
    gallery: ["/projects/maritime-1.png", "/projects/maritime-2.png"],
    },
    {
    id: "dopark-numberplate",
    title: "Vehicle license plate forgery detection system",
    period: "2023.02",
    description: "Development of vehicle license plate forgery detection and parking management system. PyTorch-based fake license plate detection feature included.",
    role: "Front-end developer",
    contribution: 50,
    mainTech: ["JavaScript", "React", "Java", "Spring Boot"],
    thumbnail: "/projects/dopark.png",
    achievements: [
    "Achieved 100% vehicle license plate recognition rate",
    "Detecting forged license plates using SuperGlue module",
    ],
    teamSize: "5 people",
    duration: "4 months",
    liveDemo: "",
    githubLink: "",
    documentation: [],
    coreCode: `// Vehicle license plate recognition AI model logic...`,
    features: ["AI-based vehicle license plate recognition", "Forgery detection feature"],
    gallery: [],
    },
    {
    id: "ai-aquaponics",
    title: "Artificial Intelligence Aquaponics Tank", period: "2023.08",
    description: "Developed a remote feeding control and real-time fish tank condition monitoring system using Arduino and YOLOv5.",
    role: "Full-stack developer",
    contribution: 80,
    mainTech: ["Python", "JavaScript", "React NEXT", "Django"],
    thumbnail: "/projects/aquaponics.png",
    achievements: [
    "Implementation of real-time water quality monitoring and remote control",
    "Development of AI-based plant disease diagnosis model",
    ],
    teamSize: "3 people",
    duration: "6 months",
    liveDemo: "",
    githubLink: "",
    documentation: [],
    coreCode: `// Aquaponics remote control logic...`,
    features: ["IoT-based fish tank monitoring", "AI plant disease diagnosis"],
    gallery: [],
    },
    {
    id: "yangjae-parking",
    title: "Yangjae AI Hub parking management system UI reorganization",
    period: "2023.02",
    description: "We completely reorganized the UX/UI of the Yangjae AI Hub parking management system to improve usability.",
    role: "Front-end developer",
    contribution: 100,
    mainTech: ["Next.js", "React"],
    thumbnail: "/projects/yangjae.png",
    achievements: [
    "Parking management UI/UX improvement",
    "Responsive design application",
  ],
  teamSize: "2 people",
  duration: "3 months",
  liveDemo: "",
  githubLink: "",
  documentation: [],
  coreCode: ``,
  features: ["UX/UI improvements", "Responsive design applied"],
  gallery: [],
  },
  ],
  },
  },

};
