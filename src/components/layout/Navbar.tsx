import { useEffect, useState } from 'react';

const links = [
  { href: '#hero', label: 'Početna' },
  { href: '#about', label: 'O meni' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#skills', label: 'Veštine' },
  { href: '#services', label: 'Usluge' },
  { href: '#contact', label: 'Kontakt' },
];

export function Navbar() {
  const [active, setActive] = useState('');

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

  return (
    <nav className="fixed top-6 left-1/2 z-50 -translate-x-1/2 rounded-full px-6 sm:px-8 py-3 shadow-xl bg-black/80 border border-white/5 inline-flex items-center gap-4 sm:gap-6">
      <div className="flex items-center gap-5 sm:gap-7">
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
        className="text-xs sm:text-sm whitespace-nowrap rounded-full bg-zinc-950 border border-gold-muted/40 px-5 py-1.5 font-medium tracking-wider text-gold-accent/80 transition-all duration-300 hover:border-gold-muted/70 hover:text-gold-accent"
      >
        Stupimo u kontakt
      </a>
    </nav>
  );
}
