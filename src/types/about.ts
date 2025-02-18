export interface Education {
    school: string;
    major: string;
    degree: string;
    period: string;
    status: string;
    gpa?: string;
  }
  
  export interface Experience {
    company: string;
    department: string;
    role: string;
    period: string;
    responsibilities: string[];
  }
  
  export interface Club {
    name: string;
    period: string;
    activities: string[];
  }
  
  export interface About {
    title: string;
    subtitle: string;
    education: Education[];
    experience: Experience[];
    clubs: Club[];
  }