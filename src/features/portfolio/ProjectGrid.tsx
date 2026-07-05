import { useState, useCallback } from 'react';
import { motion, AnimatePresence, useAnimationControls } from 'framer-motion';
import { Globe, Video, Palette, Megaphone, Film } from 'lucide-react';
import { projects } from './projects.data';
import { ProjectCard } from './ProjectCard';
import { VideoModal } from './VideoModal';
import type { ProjectCategory, VideoSubCategory, Project } from '../../types/project';

const filters: { id: ProjectCategory; label: string; icon: typeof Globe }[] = [
  { id: 'web', label: 'Web', icon: Globe },
  { id: 'video', label: 'Video', icon: Video },
  { id: 'design', label: 'Design', icon: Palette },
  { id: 'marketing', label: 'Marketing', icon: Megaphone },
];

const videoSubFilters: { id: VideoSubCategory | 'all'; label: string; icon: typeof Film }[] = [
  { id: 'all', label: 'Sve', icon: Film },
  { id: 'clipping', label: 'Clipping', icon: Film },
  { id: 'short-form', label: 'Short-form', icon: Film },
  { id: 'long-form', label: 'Long-form', icon: Film },
];

function ChainPadlock() {
  return (
    <svg className="h-20 w-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="35" y="45" width="30" height="28" rx="4" className="stroke-zinc-600" strokeWidth="2" fill="rgba(39,39,42,0.6)" />
      <path d="M38 45V37a12 12 0 0 1 24 0v8" className="stroke-zinc-600" strokeWidth="2" strokeLinecap="round" />
      <circle cx="50" cy="57" r="3" className="fill-zinc-500" />
      <rect x="48" y="57" width="4" height="8" rx="1" className="fill-zinc-500" />
      <path d="M68 52c-4-3-10-3-14 0" className="stroke-zinc-600" strokeWidth="2" strokeLinecap="round" />
      <circle cx="72" cy="50" r="5" className="stroke-zinc-600" strokeWidth="2" fill="rgba(39,39,42,0.6)" />
      <circle cx="72" cy="50" r="2" className="fill-zinc-500" />
    </svg>
  );
}

function LockedVideoCard({ label }: { label: string }) {
  const controls = useAnimationControls();
  const handleShake = useCallback(() => {
    controls.start('shake').then(() => controls.set('idle'));
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="group relative h-full cursor-not-allowed rounded-2xl border border-white/5 bg-zinc-900/50 p-8 transition-all duration-500">
        <div className="pointer-events-none select-none" style={{ opacity: 0.6 }}>
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-zinc-800">
            <Film className="h-7 w-7 text-gold-accent/50" />
          </div>
          <h3 className="mt-5 text-lg font-semibold text-white">{label}</h3>
          <p className="mt-1 text-sm text-zinc-500">Video sadržaj u pripremi</p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-md border border-white/5 bg-zinc-800/50 px-3 py-1 text-xs font-medium text-zinc-300">Montaža</span>
            <span className="rounded-md border border-white/5 bg-zinc-800/50 px-3 py-1 text-xs font-medium text-zinc-300">Produkcija</span>
            <span className="rounded-md border border-white/5 bg-zinc-800/50 px-3 py-1 text-xs font-medium text-zinc-300">Post-produkcija</span>
          </div>
        </div>

        <div
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 60%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 60%)',
          }}
        />

        <motion.div
          className="absolute inset-0 z-10 flex cursor-not-allowed flex-col items-center justify-center"
          animate={controls}
          variants={{
            idle: { x: 0 },
            shake: {
              x: [0, -5, 5, -5, 5, -3, 3, 0],
              transition: { duration: 0.5 },
            },
          }}
          onMouseEnter={handleShake}
          onClick={handleShake}
        >
          <ChainPadlock />
          <span className="mt-3 select-none text-xs font-medium tracking-wider text-zinc-600 uppercase">
            Uskoro dostupno
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}

function CategoryComingSoon({ category }: { category: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="col-span-full flex flex-col items-center justify-center py-12 text-center"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-800/50 ring-1 ring-white/5 mb-5">
        <Film className="h-7 w-7 text-zinc-500" />
      </div>
      <p className="text-lg font-semibold text-zinc-300">Coming Soon</p>
      <p className="mt-1.5 text-sm text-zinc-500">
        {category} radovi su u pripremi. Pogledaj Web projekte.
      </p>
    </motion.div>
  );
}

export function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('web');
  const [activeSubFilter, setActiveSubFilter] = useState<VideoSubCategory | 'all'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((p) => {
    if (p.category !== activeFilter) return false;
    if (activeFilter === 'video' && activeSubFilter !== 'all') {
      return p.subCategory === activeSubFilter;
    }
    return true;
  });

  const handleFilterChange = (id: ProjectCategory) => {
    setActiveFilter(id);
    setActiveSubFilter('all');
  };

  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-4 py-24 md:py-32">
      <h2 className="text-3xl font-bold text-white md:text-4xl">Moji radovi</h2>
      <p className="mt-3 max-w-lg text-zinc-400">
        Pažljivo kreirana digitalna rešenja koja spajaju moderan dizajn, odličnu funkcionalnost i visoke performanse.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-2 rounded-2xl border border-white/[0.06] bg-zinc-900/50 p-1.5 sm:flex sm:flex-wrap sm:w-fit">
        {filters.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => handleFilterChange(id)}
            className={`relative flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors sm:justify-start ${
              activeFilter === id
                ? 'text-white'
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            {activeFilter === id && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 rounded-xl bg-white/10"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              <Icon className="h-4 w-4" />
              {label}
            </span>
          </button>
        ))}
      </div>

      {activeFilter === 'video' && (
        <div className="mt-4 flex flex-wrap gap-2">
          {videoSubFilters.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveSubFilter(id)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                activeSubFilter === id
                  ? 'bg-gold/20 text-gold-accent ring-1 ring-gold/30'
                  : 'bg-zinc-800/50 text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}

      <div className="mt-6">
        <AnimatePresence mode="popLayout">
          {activeFilter === 'design' || activeFilter === 'marketing' ? (
            <CategoryComingSoon key={activeFilter} category={filters.find((f) => f.id === activeFilter)?.label ?? ''} />
          ) : activeFilter === 'video' && filteredProjects.length === 0 ? (
            <motion.div
              key={`${activeFilter}-${activeSubFilter}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {activeSubFilter === 'all'
                ? videoSubFilters
                    .filter((f) => f.id !== 'all')
                    .map((f) => <LockedVideoCard key={f.id} label={f.label} />)
                : (
                  <LockedVideoCard
                    label={videoSubFilters.find((f) => f.id === activeSubFilter)?.label ?? ''}
                  />
                )}
            </motion.div>
          ) : (
            <motion.div
              key={`${activeFilter}-${activeSubFilter}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onSelect={setSelectedProject}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <VideoModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <div className="relative left-1/2 -mx-[50vw] mt-24 w-screen overflow-hidden border-y border-zinc-800">
        <div
          className="absolute inset-0 z-0 bg-[url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80)] bg-cover bg-center opacity-40"
          style={{
            maskImage: 'linear-gradient(180deg, transparent, black 0%, black 70%, transparent)',
            WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 70%, transparent)',
          }}
        />
        <div className="absolute inset-0 z-[1] bg-black/70" />
        <div className="absolute left-1/2 top-1/2 z-[2] h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-32 text-center">
          <p className="text-2xl font-bold text-zinc-100">Spreman da podigneš svoj biznis na viši nivo?</p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-amber-500 px-8 py-4 text-lg font-semibold text-zinc-950 shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all duration-300 hover:bg-amber-400"
          >
            Započnimo saradnju
          </a>
        </div>
      </div>
    </section>
  );
}
