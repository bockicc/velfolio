import { useEffect, useRef, useState } from 'react';

export type ScrollDirection = 'up' | 'down';

export function useScrollDirection(): ScrollDirection {
  const lastScrollY = useRef(0);
  const [direction, setDirection] = useState<ScrollDirection>('down');

  useEffect(() => {
    function handleScroll() {
      const current = window.scrollY;
      if (current > lastScrollY.current) {
        setDirection('down');
      } else if (current < lastScrollY.current) {
        setDirection('up');
      }
      lastScrollY.current = current;
    }

    let ticking = false;
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return direction;
}
