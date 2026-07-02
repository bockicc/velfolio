import { motion } from 'framer-motion';
import type { Skill } from '../../types/skill';
import { GlowCard } from '../../components/ui/GlowCard';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
    >
      <GlowCard className="flex flex-col items-center gap-3 p-6 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800 text-2xl">
          {skill.icon ? (
            <img src={skill.icon} alt={skill.name} className="h-6 w-6" />
          ) : (
            <span className="text-zinc-400">*</span>
          )}
        </div>
        <span className="text-sm font-medium text-white">{skill.name}</span>
      </GlowCard>
    </motion.div>
  );
}
