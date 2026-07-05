export type ProjectCategory = 'web' | 'video' | 'design' | 'marketing';

export type VideoSubCategory = 'clipping' | 'short-form' | 'long-form';

export interface VideoLink {
  platform: string;
  url: string;
  label?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: ProjectCategory;
  liveUrl?: string;
  repoUrl?: string;
  caseStudy: string;
  videoUrl?: string;
  subCategory?: VideoSubCategory;
  videoLinks?: VideoLink[];
}
