import { motion } from 'framer-motion';
import type { Project } from '../../types/project';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const hasValidUrl = true;

  return (
    <motion.div
      layoutId={`project-${project.id}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b from-zinc-900/80 to-zinc-950/80 shadow-md transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.12] hover:shadow-xl hover:shadow-black/30">
        <div className="aspect-video w-full overflow-hidden bg-zinc-800/50">
          <img
            src={import.meta.env.BASE_URL + project.image}
            alt={project.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="p-5">
          <h3 className="text-base font-semibold text-white">{project.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium tracking-wide text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
          {hasValidUrl && (
            <div className="mt-4">
              <a
                href={project.liveUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-base font-semibold text-gold-accent transition-all duration-300 hover:scale-105 hover:text-gold-light"
              >
                Pogledajte sajt <span aria-hidden="true">→</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
