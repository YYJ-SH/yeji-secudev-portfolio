export const security = {
    ko: {
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
            description: "웹 애플리케이션에서 자주 발생하는 취약점들과 이에 대한 대응 방안을 정리했습니다.",
            thumbnail: "/articles/web-security.png",
          },
          {
            title: "ModSecurity를 이용한 WAF 구축하기",
            platform: "tistory",
            date: "2024.01.20",
            tags: ["WAF", "ModSecurity", "Apache"],
            url: "https://yourblog.tistory.com/2",
            description: "오픈소스 WAF인 ModSecurity를 이용하여 웹 방화벽을 구축하는 방법을 설명합니다.",
          }
        ],
        teaching: {
          projects: [
            {
              id: "web-security-curriculum",
              title: "웹 해킹 기초 커리큘럼",
              period: "2024.03 - 2024.08",
              description: "20주 과정의 웹 보안 커리큘럼을 기획하고 운영했습니다. SQL Injection부터 XSS까지 다양한 웹 취약점을 다루었습니다.",
              role: "커리큘럼 기획 및 강의",
              contribution: 100,
              mainTech: ["Web Security", "SQL Injection", "XSS", "File Upload"],
              thumbnail: "/security/web-curriculum.png",
              achievements: [
                "30명의 학생 대상 강의 진행",
                "실습 환경 구축 및 운영",
                "CTF 문제 출제"
              ],
              teamSize: "1명",
              duration: "20주",
              documentation: [
                {
                  type: "lecture",
                  title: "SQL Injection 기초",
                  description: "SQL Injection 취약점의 이해와 실습",
                  link: "https://github.com/yourusername/sql-injection-lecture",
                  thumbnail: "/security/sqli-lecture.png",
                  lastUpdated: "2024.03.15"
                }
              ],
              coreCode: `// SQL Injection 실습 코드
  async function loginUser(username, password) {
    const query = \`SELECT * FROM users 
      WHERE username = '\${username}' 
      AND password = '\${password}'\`;
    // 취약한 코드 예시
  }`,
              features: [
                "hands-on 실습 환경",
                "단계별 학습 자료",
                "실전 문제 제공"
              ],
              gallery: [
                "/security/lecture1.png",
                "/security/lecture2.png"
              ]
            }
          ]
        }
      },
    },
    en: {
      security: {
        title: "Security Experience & Articles",
        subtitle: "Security Technology Blog and CTF Activities",
        overview: "Sharing security knowledge, solving CTF problems, and growing.",
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
            title: "Hacking Techniques and Countermeasures through Web Vulnerabilities",
            platform: "tistory",
            date: "2024.02.15",
            tags: ["Web Security", "Penetration Testing", "Security"],
            url: "https://yourblog.tistory.com/1",
            description: "A summary of common web application vulnerabilities and their countermeasures.",
            thumbnail: "/articles/web-security.png",
          },
          {
            title: "Building a WAF using ModSecurity",
            platform: "tistory",
            date: "2024.01.20",
            tags: ["WAF", "ModSecurity", "Apache"],
            url: "https://yourblog.tistory.com/2",
            description: "Guide to building a web application firewall using the open-source WAF ModSecurity.",
          }
        ],
        teaching: {
          projects: [
            {
              id: "web-security-curriculum",
              title: "Web Hacking Basics Curriculum",
              period: "2024.03 - 2024.08",
              description: "Planned and operated a 20-week web security curriculum. Covered various web vulnerabilities from SQL Injection to XSS.",
              role: "Curriculum Planning and Lecturer",
              contribution: 100,
              mainTech: ["Web Security", "SQL Injection", "XSS", "File Upload"],
              thumbnail: "/security/web-curriculum.png",
              achievements: [
                "Conducted lectures for 30 students",
                "Built and operated practice environment",
                "Created CTF problems"
              ],
              teamSize: "1 person",
              duration: "20 weeks",
              documentation: [
                {
                  type: "lecture",
                  title: "SQL Injection Basics",
                  description: "Understanding and practicing SQL Injection vulnerabilities",
                  link: "https://github.com/yourusername/sql-injection-lecture",
                  thumbnail: "/security/sqli-lecture.png",
                  lastUpdated: "2024.03.15"
                }
              ],
              coreCode: `// SQL Injection practice code
  async function loginUser(username, password) {
    const query = \`SELECT * FROM users 
      WHERE username = '\${username}' 
      AND password = '\${password}'\`;
    // Vulnerable code example
  }`,
              features: [
                "Hands-on practice environment",
                "Step-by-step learning materials",
                "Real-world problem scenarios"
              ],
              gallery: [
                "/security/lecture1.png",
                "/security/lecture2.png"
              ]
            }
          ]
        }
      },
    },
  };