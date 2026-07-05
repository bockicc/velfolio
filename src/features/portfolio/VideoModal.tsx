import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import type { Project } from '../../types/project';
import { Modal } from '../../components/ui/Modal';

interface VideoModalProps {
  project: Project | null;
  onClose: () => void;
}

export function VideoModal({ project, onClose }: VideoModalProps) {
  if (!project) return null;

  return (
    <Modal open={!!project} onClose={onClose} size="xl">
      <motion.div layoutId={`project-${project.id}`}>
        {project.videoUrl && (
          <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-lg bg-black">
            <iframe
              src={project.videoUrl}
              title={project.title}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
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
        <p className="mt-4 leading-relaxed text-zinc-300">{project.description}</p>
        {project.videoLinks && project.videoLinks.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.videoLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-gold-muted/50 px-4 py-2 text-sm font-medium text-zinc-200 transition-colors hover:bg-gold-muted/20"
              >
                <ExternalLink className="h-4 w-4" />
                {link.label || link.platform}
              </a>
            ))}
          </div>
        )}
      </motion.div>
    </Modal>
  );
}
