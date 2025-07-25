export const portfolio = {
  ko: {
    portfolio: {
      title: "포트폴리오",
      description: "혁신적인 웹 솔루션과 보안 프로젝트들을 소개합니다.",
      projects: [
        {
          id: "phishing-guard",
          title: "피싱지킴이: 시니어를 위한 ALL IN ONE 피싱 탐지 및 교육 플랫폼",
          period: "2025.01 - 2025.04",
          description: "시니어들을 위한 이미지 & 데이터베이스 기반 피싱 사이트 탐지 및 교육 커뮤니티 입니다.",
          role: "프론트엔드 & 백 개발자 & 팀 리드",
          contribution: 80,
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
          liveDemo: "phishingguard-front-pro.vercel.app",
          githubLink: "https://github.com/YYJ-SH/phishingguardFront",
          documentation: [{
            type: "PDF",
            title: "피싱지킴이 플랫폼 발표 문서",
            description: "시니어들을 위한 이미지 & 데이터베이스 기반 피싱 사이트 탐지 및 교육 커뮤니티의 상세 기술 문서입니다.",
             link: "https://www.canva.com/design/DAGfLwWSO18/0Dv8MFOxHE3mJZE77S_8yw/view?utm_content=DAGfLwWSO18&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf68d8e2747",
            thumbnail: "/projects/phishing-tmb.png", // 실제 썸네일 이미지가 있다면 그 경로를
            lastUpdated: "2025-04-18", // 문서가 마지막으로 수정된 날짜
          }],
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
            },
            {
              type: "PDF",
              title: "AnonyData 비정형 개인정보 데이터 비식별화 개발발 문서",
              description: "비정형 데이터를 탐지하고 비식별화하는 AnonyData 플랫폼의 상세 기술 문서입니다.",
              link: "/projects/eva.pdf",
              thumbnail: "/projects/eva-doc-tumbnail.png", // 실제 썸네일 이미지가 있다면 그 경로를
              lastUpdated: "2024-02-18", // 문서가 마지막으로 수정된 날짜
            }
          ],
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
  "비식별 처리된 민감데이터 중앙 집중 관리",
  "학습용 비식별화 데이터 공유 플랫폼",
  "비밀키 기반 보안 강화 (파일 만료 및 자동 파괴 기능)"],
          gallery: ["/projects/evwa-1.gif", "/projects/evwa-2.gif", "/projects/evwa-3.gif", "/projects/evwa-4.gif"],
        },
        {
          id: "smart-maritime-logistics",
          title: "Seacurity: AI 기반 보안 자산 관리 플랫폼",
          period: "2023.12 - 2024.05",
          description: "해양물류 데이터를 AI와 보안 체크리스트를 기반으로 분석하여 안전한 자산 관리 시스템을 구축했습니다.",
          role: "백엔드 및 보안 담당",
          contribution: 60,
          mainTech: ["Django", "React", "MongoDB", "Docker", "AWS"],
          thumbnail: "/projects/suhemul.png",
          achievements: [
            "보안 체크리스트 기반 자산 관리 구현",
            "클라우드 기반 데이터 저장 및 분석",
            "보안 취약점 대응 시스템 구축",
          ],
          teamSize: "4명",
          duration: "5개월",
          liveDemo: "https://smart-maritime.example.com",
          githubLink: "https://github.com/YYJ-SH/smart-maritime",
          documentation: [
            {
              type: "PDF",
              title: "스마트해상물류 플랫폼 기술 문서",
              description: "해양물류 데이터를 AI와 보안 체크리스트를 기반으로 분석하여 안전한 자산 관리 시스템을 구축했습니다.",
              link: "/projects/suhemul.pdf",
              thumbnail: "/projects/hp-doc-tumbnail.png", // 실제 썸네일 이미지가 있다면 그 경로를
              lastUpdated: "2024-02-18", // 문서가 마지막으로 수정된 날짜
            },
            {
              type: "PDF",
              title: "스마트해상물류 플랫폼 발표 문서",
              description: "해양물류 데이터를 AI와 보안 체크리스트를 기반으로 분석하여 안전한 자산 관리 시스템을 구축했습니다.",
              link: "/projects/hp.pdf",
              thumbnail: "/projects/shm-doc-tumbnail.png", // 실제 썸네일 이미지가 있다면 그 경로를
              lastUpdated: "2024-02-18", // 문서가 마지막으로 수정된 날짜
            }
          
          ],
          coreCode: `class VulnerabilityDashboardView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            db = settings.MONGO_CLIENT['seacurity']
            assets_collection = db['assets']

            # 총 취약점 수
            total_vulnerabilities = assets_collection.aggregate([
                {"$unwind": "$checklist"},
                {"$match": {"checklist.answer": False}},
                {"$unwind": "$checklist.vulnerabilities"},
                {"$count": "total"}
            ])
            total_vulnerabilities = next(total_vulnerabilities, {}).get('total', 0)

            # 자산 유형별 취약점 수
            vulnerabilities_by_asset_type = list(assets_collection.aggregate([
                {"$unwind": "$checklist"},
                {"$match": {"checklist.answer": False}},
                {"$unwind": "$checklist.vulnerabilities"},
                {"$group": {"_id": "$type", "count": {"$sum": 1}}},
                {"$project": {"name": "$_id", "value": "$count", "_id": 0}}
            ]))

            # 심각도별 취약점 수
            severity_distribution = list(assets_collection.aggregate([
                {"$unwind": "$checklist"},
                {"$match": {"checklist.answer": False}},
                {"$unwind": "$checklist.vulnerabilities"},
                {"$group": {
                    "_id": "$checklist.vulnerabilities.severity",
                    "count": {"$sum": 1}
                }},
                {"$project": {"name": "$_id", "value": "$count", "_id": 0}}
            ]))

            # 최근 발견된 취약점
            recent_vulnerabilities = list(assets_collection.aggregate([
                {"$unwind": "$checklist"},
                {"$match": {"checklist.answer": False}},
                {"$unwind": "$checklist.vulnerabilities"},
                {"$sort": {"updated_at": -1}},
                {"$limit": 5},
                {"$project": {
                    "_id": 1,
                    "asset_name": "$attributes.name",
                    "asset_type": "$type",
                    "vulnerability": "$checklist.vulnerabilities.description",
                    "severity": "$checklist.vulnerabilities.severity",
                    "discovered_at": "$updated_at"
                }}
            ]))
`,
          features: [
            "AI 기반 취약점 점검",
            "MITER &ATTACK 네비게이션 연동",
            "보안 점검 체크리스트 적용",
            "ATTCK TREE 플로우차트 제공",
            "권한부여 및 로그인 기능",
            "USER FRIENDLY 대시보드",
          ],
          gallery: ["/projects/suhemul-1.png", "/projects/suhemul-2.png", "/projects/suhemul-3.png"],
        },
        {
          id: "dopark-numberplate",
          title: "DoPark: LPR 주차관리시스템",
          period: "2023.02",
          description: "인식률 99% 주차관리 시스템 개발. PyTorch를 활용한 차량 가짜 번호판 탐지 기능 포함.",
          role: "프론트엔드 개발자",
          contribution: 50,
          mainTech: ["JavaScript", "React", "Java", "Spring Boot"],
          thumbnail: "/projects/donam.png",
          achievements: [
            "차량 번호판 인식률 99% 달성",
            "SuperGlue를 활용한 위변조 번호판 탐지 모듈 개발",
            "Legacy migration : Jsp to React",
          ],
          teamSize: "5명",
          duration: "4개월",
          liveDemo: "",
          githubLink: "",
          documentation: [],
          coreCode: ` `,
          features: ["YOLO5 기반 차량 번호판 인식", "위변조 탐지 기능"],
          gallery: ["/projects/mj-1.png","/projects/mj-2.png","/projects/mj-3.png"],
        },
        {
          id: "ai-aquaponics",
          title: "아쿠아라티오: AI 전자동 아쿠아포닉스 수조",
          period: "2023.08",
          description: "Arduino와 YOLOv5를 활용하여 원격 급식 제어 및 실시간 어항 상태 모니터링 시스템을 개발했습니다.",
          role: "아두이노 & 프론트엔드 & 백엔드 개발자",
          contribution: 80,
          mainTech: ["Python", "JavaScript", "React NEXT", "Django"],
          thumbnail: "/projects/aqua-3.png",
          achievements: [
            "IoT 기반 실시간 수조 모니터링 및 원격 제어 구현",
            "AI 기반 식물 질병 진단 모델 개발",
            "MQTT 활용한 웹상 제어 솔루션"
          ],
          teamSize: "3명",
          duration: "2주",
          liveDemo: "",
          githubLink: "https://github.com/YYJ-SH/aquaponics",
          documentation: [
            {
              type: "PDF",
              title: "아쿠아포닉스 스타트업 창업경진대회 발표문서",
              description: "아쿠아포닉스의 시장가치와 기능에 대해 설명하는 발표문서입니다.",
              link: "/projects/aquaponics.pdf",
              thumbnail: "/projects/aqua-doc-tumbnail.png", // 실제 썸네일 이미지가 있다면 그 경로를
              lastUpdated: "2024-02-18", // 문서가 마지막으로 수정된 날짜
            },
          ],
          coreCode: `//  `,
          features: ["IoT 기반 어항 모니터링", "AI 식물 질병 진단", "자동사료급여", "관련상품 스마트스토어", "전문가 매칭"],
          gallery: ["/projects/aqua-1.gif", "/projects/aqua-2.gif", "/projects/aqua-2.png","/projects/aqua-1.png"],
        },
        {
          id: "yangjae-parking",
          title: "양재 AI 허브 주차관리 시스템 UI 개편",
          period: "2023.02",
          description: "양재 AI Hub 주차관리 시스템의 UX/UI를 전면 개편하여 사용성을 개선했습니다.",
          role: "프론트엔드 개발자",
          contribution: 100,
          mainTech: ["Next.js", "React"],
          thumbnail: "/projects/yj-1.png",
          achievements: [
            "주차 관리 UI/UX 개선",
            "모바일 페이지 별도 구축",
            "컴포넌트 단순화 페이지 제공"
          ],
          teamSize: "2명",
          duration: "3개월",
          liveDemo: "",
          githubLink: "",
          documentation: [],
          coreCode: ``,
          features: ["UX/UI 개선", "반응형 디자인 적용", "Description을 사용한 요약본 제공", "등록 시스템 개선", "웹앱 제공"],
          gallery: ["projects/yj-2.gif", "projects/yj-3.gif"],
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
    title: "Phishing Guard: ALL IN ONE phishing detection and education platform for seniors",
    period: "2024.01 - In progress",
    description: "Image & database-based phishing site detection and education community for seniors.",
    role: "Front-end & Back-end developer & Team lead",
    contribution: 70,
    mainTech: ["React", "Next.js", "Python", "Django", "MySql", "AWS", "Docker"],
    thumbnail: "/projects/phishing-guard.png",
    achievements: [
    "Docker container-based server deployment",
    "Implementation of the first phishing detection model based on bank data comparison",
    "Senior Friendly UI/UX design",
    "Applying a checklist based on the Financial Supervisory Service & KCI papers",
    ],
    teamSize: "4 people",
    duration: "In progress",
    liveDemo: "phishingguard-front-pro.vercel.app",
    githubLink: "https://github.com/YYJ-SH/phishingguardFront",
    documentation: [{
      type: "PDF",
      title: "PhishingGuard Platform Announcement Document",
      description: "Detailed technical documentation for the image & database-based phishing site detection and education community for seniors.",
      link: "https://www.canva.com/design/DAGfLwWSO18/0Dv8MFOxHE3mJZE77S_8yw/view?utm_content=DAGfLwWSO18&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf68d8e2747",
      thumbnail: "/projects/phishing-tmb.png",
      lastUpdated: "2025-04-18",
      }],
    coreCode: `# Modify the check_url method of the DatabaseChecker class
    def check_url(self, url):
    try:
    normalized_url = normalize_url(url)
    
    # Get all financial institution URLs
    self.cursor.execute("""
    SELECT CONVERT(name USING utf8mb4) as name, url
    FROM financial_institutions
    """)
    results = self.cursor.fetchall()
    
    # Create a dictionary
    financial_urls = {}
    for row in results:
    if row['url'] and row['name']: # null check
    financial_urls[row['url']] = {
    'name': row['name'].encode('utf-8').decode('utf-8')
    }
    
    # Debugging
    print("URL:", url)
    print("Normalized URL:", normalized_url)
    print("Financial URLs:", financial_urls)
    
    # Check data format before similarity check
    if not financial_urls:
    print("Warning: No financial URLs found in database")
    return None
    
    # Similarity check
    similarity_check = check_url_similarity(normalized_url, financial_urls)
    print("Similarity Check Result:", similarity_check)
    `,
    features: [
    "Voice guidance and font size adjustment function for seniors",
    "Phishing quiz & education page based on real cases",
    "Phishing report and phishing analysis & voting Community",
    "Image-based phishing analysis (URL, phone number, account number)",
    "AI-based phishing site analysis (checklist-based)",
    ],
    gallery: ["/projects/phishing-1.png", "/projects/phishing-2.png"],
    },
    {
    id: "deidentification-platform",
    title: "AnonyData: Unstructured personal data de-identification platform",
    period: "2024.03 - 2024.08",
    description: "A platform that automatically detects and de-identifies various unstructured data such as videos, images, and PDFs using YOLO-based AI models.",
    role: "Front-end & back-end development, AI learning, PM",
    contribution: 80,
    mainTech: ["React", "TypeScript", "Next.js", "TailwindCSS"],
    thumbnail: "/projects/evwa.png", achievements: [
    "Development of automatic face and vehicle license plate detection model",
    "Achieved 95% accuracy in face and license plate detection",
    "Implementation of self-PDF encryption and secure viewing function",
    "Establishment of centralized management system for de-identified data",
    ]
    ,
    teamSize: "4 people",
    duration: "6 months",
    liveDemo: "https://evwa.example.com",
    githubLink: "https://github.com/YYJ-SH/evwa",
    documentation: [
    {
    type: "PDF",
    title: "AnonyData unstructured personal information data de-identification platform document",
    description: "Detailed technical documentation of the AnonyData platform that detects and de-identifies unstructured data.",
    link: "/projects/evwa.pdf",
    thumbnail: "/projects/evwa-doc-tumbnail.png", // If there is an actual thumbnail image, the path to it is
    
    lastUpdated: "2024-02-18", // The date the document was last modified
    },
    {
    type: "PDF",
    title: "AnonyData Unstructured Personal Data De-identification Development Document",
    description: "Detailed technical documentation for the AnonyData platform that detects and de-identifies unstructured data.",
    link: "/projects/eva.pdf",
    thumbnail: "/projects/eva-doc-tumbnail.png", // If there is an actual thumbnail image, the path to it
    lastUpdated: "2024-02-18", // The date the document was last modified
    }
    ],
    coreCode: `for *xyxy, conf, cls in results.xyxy[0].cpu().numpy():
    x1, y1, x2, y2 = map(int, xyxy)
    class_id = int(cls)
    if class_id == 0 and 'face' in masking_targets: # face class
     faces_detected = True
     roi = img[y1:y2, x1:x2]
     masked_roi = apply_masking(roi, masking_method, masking_intensity)
     img[y1:y2, x1:x2] = np.where(mask[y1:y2, x1:x2, np.newaxis] == 1, masked_roi, roi)
     elif class_id == 1 and 'licensePlate' in masking_targets: # License plate class
     roi = img[y1:y2, x1:x2]
     masked_roi = apply_masking(roi, masking_method, masking_intensity)
     img[y1:y2, x1:x2] = np.where(mask[y1:y2, x1:x2, np.newaxis] == 1, masked_roi, roi)`,
    features: [
    "Automatic face and license plate detection",
    "Various masking options (full masking, pixelation, blurring)",
    "PDF encryption and secure viewing",
    "Centralized management of de-identified sensitive data",
    "Anonymized data sharing platform for learning",
    "Secret key-based enhanced security (file expiration and automatic destruction)"],
    gallery: ["/projects/evwa-1.gif", "/projects/evwa-2.gif", "/projects/evwa-3.gif", "/projects/evwa-4.gif"],
},
{
id: "smart-maritime-logistics",
title: "Seacurity: AI-based security asset management platform",
period: "2023.12 - 2024.05",
description: "We built a secure asset management system by analyzing maritime logistics data based on AI and security checklists.",
role: "Backend and Security Manager",
contribution: 60,
mainTech: ["Django", "React", "MongoDB", "Docker", "AWS"],
thumbnail: "/projects/suhemul.png",
achievements: [
"Implementation of security checklist-based asset management",
"Cloud-based data storage and analysis",
"Response to security vulnerabilities System construction",
],
teamSize: "4 people",
duration: "5 months",
liveDemo: "https://smart-maritime.example.com",
githubLink: "https://github.com/YYJ-SH/smart-maritime",
documentation: [
{
type: "PDF",
title: "Smart Maritime Logistics Platform Technical Document",
description: "We built a safe asset management system by analyzing marine logistics data based on AI and a security checklist.",
link: "/projects/suhemul.pdf",
thumbnail: "/projects/hp-doc-tumbnail.png", // If there is an actual thumbnail image, please provide the path
lastUpdated: "2024-02-18", // The date the document was last modified
},
{
type: "PDF",
title: "Smart Maritime Logistics Platform Announcement Document",
description: "Marine logistics data analyzed based on AI and security We have built a secure asset management system by analyzing the checklist.",
link: "/projects/hp.pdf",
thumbnail: "/projects/shm-doc-tumbnail.png", // If there is an actual thumbnail image, the path to it
lastUpdated: "2024-02-18", // The date the document was last modified
}

],
coreCode: `class VulnerabilityDashboardView(APIView):
authentication_classes = [JWTAuthentication]
permission_classes = [IsAuthenticated]

def get(self, request):
try:
db = settings.MONGO_CLIENT['seacurity']
assets_collection = db['assets']

# Total number of vulnerabilities
total_vulnerabilities = assets_collection.aggregate([
{"$unwind": "$checklist"},
{"$match": {"checklist.answer": False}}, {"$unwind": "$checklist.vulnerabilities"},
 {"$count": "total"}
 ])
 total_vulnerabilities = next(total_vulnerabilities, {}).get('total', 0)

 # Number of vulnerabilities by asset type
 vulnerabilities_by_asset_type = list(assets_collection.aggregate([
 {"$unwind": "$checklist"},
 {"$match": {"checklist.answer": False}},
 {"$unwind": "$checklist.vulnerabilities"},
 {"$group": {"_id": "$type", "count": {"$sum": 1}}},
 {"$project": {"name": "$_id", "value": "$count", "_id": 0}}
 ]))

 # Number of vulnerabilities by severity
 severity_distribution = list(assets_collection. aggregate([
 {"$unwind": "$checklist"},
 {"$match": {"checklist.answer": False}},
 {"$unwind": "$checklist.vulnerabilities"},
 {"$group": {
 "_id": "$checklist.vulnerabilities.severity",
 "count": {"$sum": 1}
 }},
 {"$project": {"name": "$_id", "value": "$count", "_id": 0}}
 ]))

 # Recently discovered vulnerabilities
 recent_vulnerabilities = list(assets_collection.aggregate([
 {"$unwind": "$checklist"},
 {"$match": {"checklist.answer": False}},
 {"$unwind": "$checklist.vulnerabilities"},
{"$sort": {"updated_at": -1}},
{"$limit": 5},
{"$project": {
"_id": 1,
"asset_name": "$attributes.name",
"asset_type": "$type",
"vulnerability": "$checklist.vulnerabilities.description",
"severity": "$checklist.vulnerabilities.severity",
"discovered_at": "$updated_at"
}}
]))
`,
features: [
"AI-based vulnerability check",
"MITER &ATTACK navigation integration",
"Security check checklist application",
"ATTCK TREE flowchart provided",
"Authorization and login function",
"USER FRIENDLY dashboard",
],
gallery: ["/projects/suhemul-1.png", "/projects/suhemul-2.png", "/projects/suhemul-3.png"],
},
{
id: "dopark-numberplate",
title: "DoPark: LPR parking management system",
period: "2023.02",
description: "Development of a parking management system with a recognition rate of 99%. Including a fake license plate detection feature using PyTorch.",
role: "Front-end developer",
contribution: 50,
mainTech: ["JavaScript", "React", "Java", "Spring Boot"],
thumbnail: "/projects/donam.png",
achievements: [
"Achieved 99% vehicle license plate recognition rate",
"Development of a forged license plate detection module using SuperGlue",
"Legacy migration : Jsp to React",
],
teamSize: "5 people",
duration: "4 months",
liveDemo: "",
githubLink: "",
documentation: [],
coreCode: `This is a private code`,
features: ["YOLO5-based vehicle license plate recognition", "Forgery detection function"],
gallery: ["/projects/mj-1.png","/projects/mj-2.png","/projects/mj-3.png"],
},
{
id: "ai-aquaponics",
title: "Aquaratio: AI fully automatic aquaponics tank",
period: "2023.08",
description: "Developed a remote feeding control and real-time fish tank condition monitoring system using Arduino and YOLOv5.",
role: "Arduino & Front-end & Back-end developer",
contribution: 80,
mainTech: ["Python", "JavaScript", "React NEXT", "Django"],
thumbnail: "/projects/aqua-3.png",
achievements: [
"IoT-based Implementation of real-time tank monitoring and remote control",
"Development of AI-based plant disease diagnosis model",
"Web-based control solution using MQTT"
],
teamSize: "3 people",
duration: "2 weeks",
liveDemo: "",
githubLink: "https://github.com/YYJ-SH/aquaponics",
documentation: [
{
type: "PDF",
title: "Aquaponics Startup Entrepreneurship Competition Presentation Document",
description: "This is a presentation document explaining the market value and functions of aquaponics.",
link: "/projects/aquaponics.pdf",
thumbnail: "/projects/aqua-doc-tumbnail.png", // If there is an actual thumbnail image, the path to it
lastUpdated: "2024-02-18", // The date the document was last modified
},
],
coreCode: `// This is private code`,
features: ["IoT-based fish tank monitoring", "AI plant disease diagnosis", "Automatic feed feeding", "Related product smart store", "Expert matching"],
gallery: ["/projects/aqua-1.gif", "/projects/aqua-2.gif", "/projects/aqua-2.png","/projects/aqua-1.png"],
},
{
id: "yangjae-parking",
title: "Yangjae AI Hub parking management system UI reorganization",
period: "2023.02",
description: "We have completely reorganized the UX/UI of the Yangjae AI Hub parking management system to improve usability.",
role: "Front-end developer",
contribution: 100,
mainTech: ["Next.js", "React"],
thumbnail: "/projects/yj-1.png",
achievements: [
"Parking management UI/UX Improvement",
"Building a separate mobile page",
"Providing a simplified component page"
],
teamSize: "2 people",
duration: "3 months",
liveDemo: "",
githubLink: "",
documentation: [],
coreCode: ``,
features: ["UX/UI Improvement", "Applying responsive design", "Providing a summary using Description", "Registration system improvement", "Providing a web app"],
gallery: ["projects/yj-2.gif", "projects/yj-3.gif"],
},
],
},
},

};
