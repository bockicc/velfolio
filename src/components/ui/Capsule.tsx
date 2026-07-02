import type { ReactNode } from 'react';

interface CapsuleProps {
  children: ReactNode;
  className?: string;
}

export function Capsule({ children, className = '' }: CapsuleProps) {
  return (
    <div
      className={`inline-flex items-center gap-6 sm:gap-8 rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-md shadow-2xl ${className}`}
    >
      {children}
    </div>
  );
}
