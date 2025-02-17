export interface Project {
    id: string;
    title: string;
    period: string;
    description: string;
    role: string;
    contribution: number;
    mainTech: string[];
    thumbnail: string;
    achievements: string[];
    teamSize: string;
    duration: string;
    documentation: {
      type: string;
      title: string;
      description: string;
      link: string;
      thumbnail: string;
      lastUpdated: string;
    }[];
    coreCode: string;
    features: string[];
    gallery: string[];
  }