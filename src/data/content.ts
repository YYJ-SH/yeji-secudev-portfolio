import { about } from "@/data/about";
import { portfolio } from "../data/portfolio";
import { security } from "../data/security";
import { social } from "@/data/social";
import { certifications } from "../data/certifications";

export const content = {
  ko: {
    ...about.ko,
    ...portfolio.ko,
    ...security.ko,
    ...certifications.ko,
    ...social.ko,
    navCards: social.ko.navCards ?? [],
  },
  en: {
    ...about.en,
    ...portfolio.en,
    ...security.en,
    ...certifications.en,
    ...social.en,
    navCards: social.en.navCards ?? [],
  },
};