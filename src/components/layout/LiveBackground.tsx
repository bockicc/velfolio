import { useEffect } from 'react';
import { useTheme } from '../../providers/ThemeProvider';
import { getSkyColor } from '../../lib/colorInterpolation';
import { skyStops } from '../../config/theme';

export function LiveBackground() {
  const { dayProgress } = useTheme();

  useEffect(() => {
    const color = getSkyColor(dayProgress, skyStops);
    document.documentElement.style.setProperty('--sky-color', color);
  }, [dayProgress]);

  return (
    <div
      className="fixed inset-0 -z-10"
      style={{
        background: 'radial-gradient(circle at 50% 0%, var(--sky-color), #000)',
        willChange: 'background-color',
      }}
    />
  );
}
