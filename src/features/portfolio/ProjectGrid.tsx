import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Video, Palette, Film, Image } from 'lucide-react';
import { projects } from './projects.data';
import { ProjectCard } from './ProjectCard';
import { VideoModal } from './VideoModal';
import type { ProjectCategory, ProjectSubCategory, Project } from '../../types/project';

const filters: { id: ProjectCategory; label: string; icon: typeof Globe }[] = [
  { id: 'web', label: 'Web', icon: Globe },
  { id: 'video', label: 'Video', icon: Video },
  { id: 'design', label: 'Design', icon: Palette },
];

const videoSubFilters: { id: ProjectSubCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'Sve' },
  { id: 'clipping', label: 'Clipping' },
  { id: 'short-form', label: 'Short-form' },
  { id: 'long-form', label: 'Long-form' },
];

const designSubFilters: { id: ProjectSubCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'Sve' },
  { id: 'branding', label: 'Branding' },
  { id: 'social-media', label: 'Social Media' },
  { id: 'layout-type', label: 'Layout & Type' },
  { id: 'photo-editing', label: 'Photo Editing' },
];

const subFilterConfig: Record<ProjectCategory, { id: ProjectSubCategory | 'all'; label: string }[] | null> = {
  web: null,
  video: videoSubFilters,
  design: designSubFilters,
};

export function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('web');
  const [activeSubFilter, setActiveSubFilter] = useState<ProjectSubCategory | 'all'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const currentSubFilters = subFilterConfig[activeFilter];

  const filteredProjects = projects.filter((p) => {
    if (p.category !== activeFilter) return false;
    if (currentSubFilters && activeSubFilter !== 'all') {
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

      {currentSubFilters && (
        <div className="mt-4 flex flex-wrap gap-2">
          {currentSubFilters.map(({ id, label }) => (
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
          {filteredProjects.length === 0 ? (
            <motion.div
              key={`${activeFilter}-${activeSubFilter}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="flex flex-col items-center justify-center py-16 text-center"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-800/50 ring-1 ring-white/5">
                {activeFilter === 'video' ? (
                  <Film className="h-7 w-7 text-zinc-500" />
                ) : (
                  <Image className="h-7 w-7 text-zinc-500" />
                )}
              </div>
              <p className="text-lg font-semibold text-zinc-300">Sadržaji u pripremi</p>
              <p className="mt-1.5 text-sm text-zinc-500">
                Uskoro stižu novi radovi.
              </p>
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
