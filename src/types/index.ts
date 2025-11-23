export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  github?: string;
}

export interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  link: string;
}

export interface Experience {
  title: string;
  description: string;
  period: string;
}

export type Section = 'about' | 'skills' | 'projects' | 'blog' | 'experience' | 'contact' | null;
