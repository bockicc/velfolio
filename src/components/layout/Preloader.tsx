import { motion, AnimatePresence } from 'framer-motion';
import { useAssetPreloader } from '../../hooks/useAssetPreloader';
import Loader from '../ui/animated-loader-1';

interface PreloaderProps {
  assetUrls: string[];
}

export function Preloader({ assetUrls }: PreloaderProps) {
  const ready = useAssetPreloader(assetUrls);

  return (
    <AnimatePresence>
      {!ready && (
        <motion.div
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
