import type { Skill } from '../../types/skill';

export const skills: Skill[] = [
  { id: 'HTML 5', name: 'HTML 5', icon: '/icons/html5.svg', category: 'Frontend', locked: false },
  { id: 'CSS 3', name: 'CSS 3', icon: '/icons/css3.svg', category: 'Frontend', locked: false },
  { id: 'JavaScript', name: 'JavaScript', icon: '/icons/javascript.svg', category: 'Frontend', locked: false },
  { id: 'tailwind', name: 'Tailwind CSS', icon: '/icons/tailwind.svg', category: 'Frontend', locked: false },
  { id: 'supabase', name: 'Supabase', icon: '/icons/supabase.svg', category: 'Backend', locked: false },
  { id: 'nextjs', name: 'Next.js', icon: '/icons/nextjs.svg', category: 'Frontend', locked: true },
  { id: 'rust', name: 'Rust', icon: '/icons/rust.svg', category: 'Language', locked: true },
  { id: 'graphql', name: 'GraphQL', icon: '/icons/graphql.svg', category: 'Backend', locked: true },
];
