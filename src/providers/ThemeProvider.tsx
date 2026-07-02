import { createContext, useContext, type ReactNode } from 'react';
import { useTimeOfDay } from '../hooks/useTimeOfDay';

interface ThemeContextValue {
  dayProgress: number;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const dayProgress = useTimeOfDay();

  return (
    <ThemeContext.Provider value={{ dayProgress }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
