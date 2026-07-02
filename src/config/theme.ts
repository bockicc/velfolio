export interface ColorStop {
  t: number;
  color: string;
}

export const skyStops: ColorStop[] = [
  { t: 0.00, color: '#1a1712' },
  { t: 0.21, color: '#2a231d' },
  { t: 0.27, color: '#d4a83c' },
  { t: 0.45, color: '#2a231d' },
  { t: 0.75, color: '#fbbf24' },
  { t: 0.85, color: '#2a231d' },
  { t: 1.00, color: '#1a1712' },
];

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export const animationDurations = {
  skyTransition: 90_000,
  preloaderFade: 800,
  modalTransition: 0.4,
  capsuleSlide: 0.3,
  shake: 0.4,
  staggerChildren: 0.1,
  scrollReveal: 0.6,
} as const;
