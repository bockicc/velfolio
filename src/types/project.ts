export type ProjectCategory = 'web' | 'video' | 'design' | 'marketing';

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
}
