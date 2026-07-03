import { motion } from 'framer-motion';
import type { Project } from '../../types/project';
import { Modal } from '../../components/ui/Modal';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  if (!project) return null;

  return (
    <Modal open={!!project} onClose={onClose}>
      <motion.div layoutId={`project-${project.id}`}>
        <div className="mb-4 aspect-video w-full overflow-hidden rounded-lg bg-zinc-800">
          <img
            src={import.meta.env.BASE_URL + project.image}
            alt={project.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <h2 className="text-2xl font-bold text-white">{project.title}</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-zinc-800 px-2.5 py-0.5 text-xs text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="mt-4 text-zinc-300 leading-relaxed">{project.caseStudy}</p>
        <div className="mt-6 flex gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-gold px-4 py-2 text-sm font-medium text-black hover:bg-gold-accent transition-colors"
            >
              Sajt uživo
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-gold-muted/50 px-4 py-2 text-sm font-medium text-zinc-200 hover:bg-gold-muted/20 transition-colors"
            >
              Izvorni kod
            </a>
          )}
        </div>
      </motion.div>
    </Modal>
  );
}
