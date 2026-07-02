import { useEffect, useState } from 'react';

function getDayProgress(): number {
  const now = new Date();
  const minutes = now.getHours() * 60 + now.getMinutes();
  return minutes / (24 * 60);
}

export function useTimeOfDay(): number {
  const [progress, setProgress] = useState(getDayProgress);

  useEffect(() => {
    const id = setInterval(() => {
      setProgress(getDayProgress());
    }, 30_000);
    return () => clearInterval(id);
  }, []);

  return progress;
}
