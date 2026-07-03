import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const links = [
  { href: '#hero', label: 'Početna' },
  { href: '#about', label: 'O meni' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#skills', label: 'Veštine' },
  { href: '#services', label: 'Usluge' },
  { href: '#contact', label: 'Kontakt' },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

export function Navbar() {
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const ids = ['hero', 'about', 'portfolio', 'skills', 'services', 'contact'];
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(`#${id}`);
          }
        },
        { rootMargin: '-40% 0px -50% 0px' },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-6 left-1/2 z-50 -translate-x-1/2 rounded-full px-5 sm:px-8 py-3 shadow-xl bg-black/80 border border-white/5 inline-flex items-center w-[calc(100%-2rem)] md:w-auto justify-between gap-4 sm:gap-6">
        <span className="md:hidden text-gold-accent font-semibold tracking-widest text-lg leading-none select-none">
          V.B.
        </span>
        <div className="hidden md:flex items-center gap-5 sm:gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-xs sm:text-sm whitespace-nowrap transition-colors tracking-wide ${
                active === link.href
                  ? 'text-gold-accent'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden md:inline-flex text-xs sm:text-sm whitespace-nowrap rounded-full bg-zinc-950 border border-gold-muted/40 px-5 py-1.5 font-medium tracking-wider text-gold-accent/80 transition-all duration-300 hover:border-gold-muted/70 hover:text-gold-accent"
        >
          Stupimo u kontakt
        </a>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex items-center justify-center h-9 w-9 rounded-full text-zinc-300 hover:text-gold-accent hover:bg-white/5 transition-all duration-300"
          aria-label={menuOpen ? 'Zatvori meni' : 'Otvori meni'}
        >
          {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              variants={{
                hidden: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
                visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="flex flex-col items-center gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              {links.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  variants={itemVariants}
                  onClick={closeMenu}
                  className={`text-lg tracking-wider transition-colors ${
                    active === link.href
                      ? 'text-gold-accent'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                variants={itemVariants}
                onClick={closeMenu}
                className="mt-2 rounded-full bg-zinc-950 border border-gold-muted/40 px-8 py-3 font-medium tracking-wider text-gold-accent/80 transition-all duration-300 hover:border-gold-muted/70 hover:text-gold-accent"
              >
                Stupimo u kontakt
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
