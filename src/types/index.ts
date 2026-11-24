export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: 'mobile' | 'fullstack' | 'backend' | 'automation';
  type: 'flagship' | 'client' | 'independent';
  role: string;
  platforms?: string[];
  technologies: string[];
  metrics?: { label: string; value: string }[];
  overview: string;
  architectureHighlights: {
    title: string;
    description: string;
  }[];
  engineeringValue: string;
  businessApplication?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  badge?: string;
  location?: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
}

export interface SkillGroup {
  category: string;
  summary: string;
  skills: { name: string; level?: 'Core' | 'Advanced' | 'Production' }[];
}

export interface ServiceItem {
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  suitableFor: string;
}
