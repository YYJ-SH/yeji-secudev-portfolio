export interface SecurityCourse {
    week: number;
    date: string;
    title: string;
    topics: string[];
    tools: string[];
    files?: {
      name: string;
      link: string;
      type: 'ppt' | 'pdf' | 'code';
    }[];
    highlights?: string[];
    demo?: string;
  }

  interface Security {
    title: string;
    subtitle: string;
    overview: string;
    ctf: {
      platforms: {
        name: string; // 예: "HackTheBox", "TryHackMe", "Wargame.kr"
        rank?: string;
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
    teaching: {
      title: string;
      period: string;
      topics: string[];
      highlights: string[];
      documentation: {
        title: string;
        description: string;
        link: string;
        type: 'ppt' | 'github' | 'blog';
      }[];
    };
    articles: {
      title: string;
      platform: 'medium' | 'tistory' | 'github';
      date: string;
      tags: string[];
      url: string;
      description: string;
      thumbnail?: string;
    }[];
  }