import { useState, type ReactNode, type MouseEvent } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

export function GlowCard({ children, className = '', glowColor = 'rgba(212,168,60,0.15)', onClick }: GlowCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative cursor-pointer rounded-2xl border border-white/5 bg-zinc-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:shadow-xl hover:shadow-black/30 ${className}`}
      style={{
        boxShadow: hovered ? `0 0 30px ${glowColor}` : `0 0 0px ${glowColor}`,
        transition: 'box-shadow 0.3s ease, border-color 0.3s ease, transform 0.3s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
