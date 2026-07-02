import { useEffect, useState } from 'react';

export function useAssetPreloader(assetUrls: string[]): boolean {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const promises = assetUrls.map((url) => {
        if (url.endsWith('.woff2') || url.endsWith('.woff')) {
          return document.fonts.load(`1em "${url}"`).catch(() => {});
        }
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve();
          img.src = url;
        });
      });

      await Promise.all(promises);
      if (!cancelled) setReady(true);
    }

    load();
    return () => { cancelled = true; };
  }, [assetUrls]);

  return ready;
}
