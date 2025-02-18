export interface Certificate {
    name: string;
    issuer: string;
    date: string;
    expiry?: string;
    type: "certification" | "license" | "award";
    image?: string;
  }
  
  export interface Certifications {
    title: string;
    subtitle: string;
    certificates: Certificate[];
  }