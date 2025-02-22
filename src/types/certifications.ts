export interface Certificate {
    name: string;
    issuer: string;
    date: string;
    expiry?: string;
    type: string;
    image?: string;
  }
  
  export interface Certifications {
    title: string;
    subtitle: string;
    certificates: Certificate[];
  }