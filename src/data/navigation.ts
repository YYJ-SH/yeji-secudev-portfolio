// data/navigation.ts
import { User, Code, Shield, Award } from 'lucide-react';

export const navigation = {
  ko: {
    logo: '보안&개발 예지',
    menu: [
      { href: '/about', label: '소개', icon: User },
      { href: '/portfolio', label: '포트폴리오', icon: Code },
      { href: '/security', label: '보안', icon: Shield },
      { href: '/certifications', label: '자격증', icon: Award }
    ]
  },
  en: {
    logo: 'YEJI.SEC&DEV',
    menu: [
      { href: '/about', label: 'About', icon: User },
      { href: '/portfolio', label: 'Portfolio', icon: Code },
      { href: '/security', label: 'Security', icon: Shield },
      { href: '/certifications', label: 'Certifications', icon: Award }
    ]
  }
};