export type Lang = "pl" | "en";

export interface InterestItem {
  title: string;
  desc: string;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  description: string;
  skills?: string[];
}

export interface EducationEntry {
  degree: string;
  school: string;
  period: string;
  description: string;
}

export interface ProjectEntry {
  name: string;
  url: string;
  period: string;
  description: string;
}

export interface LanguageEntry {
  name: string;
  level: string;
}

export interface TranslationContent {
  status: string;
  name: string;
  surname: string;
  role: string;
  roleAccent: string;
  location: string;
  sections: {
    about: string;
    interests: string;
    experience: string;
    education: string;
    skills: string;
    certificates: string;
    languages: string;
    projects: string;
  };
  about: {
    quote: string;
    text: string;
  };
  interests: {
    tech: InterestItem;
    active: InterestItem;
    lifestyle: InterestItem;
  };
  experience: ExperienceEntry[];
  education: EducationEntry[];
  skills: Record<string, string>;
  certificates: string[];
  projects: ProjectEntry[];
  languages: LanguageEntry[];
  footer: string;
  security: string;
  ui: {
    readMore: string;
    readLess: string;
  };
}

export type Translations = Record<Lang, TranslationContent>;
