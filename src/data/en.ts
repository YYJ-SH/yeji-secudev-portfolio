import {
    Github,
    Mail,
    Linkedin,
    GraduationCap,
    Code,
    Shield,
    Award,
  } from "lucide-react";
  
  export const enContent = {
    hero: {
      greeting: "Hello,",
      role: "Web Developer",
      name: "Yeji Yu",
      description: "A frontend developer with security expertise,\nbuilding innovative and secure web solutions.",
    },
    social: [
      {
        icon: Github,
        href: "https://github.com/yourusername",
        label: "Github Profile",
      },
      {
        icon: Linkedin,
        href: "https://linkedin.com/in/yourusername",
        label: "LinkedIn Profile",
      },
      {
        icon: Mail,
        href: "mailto:contact@example.com",
        label: "Send Email",
      },
    ],
    navCards: [
      {
        title: "Education & Career",
        description: "Journey at Sungshin Women's University",
        icon: GraduationCap,
        href: "/about",
        gradient: "from-cyan-400 to-blue-500",
      },
      {
        title: "Projects",
        description: "Web Development Portfolio",
        icon: Code,
        href: "/portfolio",
        gradient: "from-purple-400 to-pink-500",
      },
      {
        title: "Security",
        description: "20-week Curriculum & CTF Activities",
        icon: Shield,
        href: "/security",
        gradient: "from-pink-500 to-purple-600",
      },
      {
        title: "Certifications",
        description: "Professional Certifications",
        icon: Award,
        href: "/certifications",
        gradient: "from-cyan-400 to-purple-500",
      },
    ],
    // ... rest of English content
  } as const;