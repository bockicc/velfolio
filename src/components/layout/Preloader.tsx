import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAssetPreloader } from '../../hooks/useAssetPreloader';
import Loader from '../ui/animated-loader-1';

interface PreloaderProps {
  assetUrls: string[];
}

export function Preloader({ assetUrls }: PreloaderProps) {
  const ready = useAssetPreloader(assetUrls);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (ready) {
      const timer = setTimeout(() => setShow(false), 800);
      return () => clearTimeout(timer);
    }
  }, [ready]);

  if (assetUrls.length === 0) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100]"
        >
          <Loader />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
