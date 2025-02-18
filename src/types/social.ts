import { LucideIcon } from "lucide-react";

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

export interface NavCard {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  gradient: string;
}

export interface Hero {
  greeting: string;
  role: string;
  name: string;
  description: string;
}