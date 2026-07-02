import { motion, useAnimationControls } from 'framer-motion';
import type { Skill } from '../../types/skill';
import { GlowCard } from '../../components/ui/GlowCard';

interface LockedSkillCardProps {
  skill: Skill;
  index: number;
}

function LockIcon() {
  return (
    <svg className="h-5 w-5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
  );
}

export function LockedSkillCard({ skill, index }: LockedSkillCardProps) {
  const controls = useAnimationControls();

  function handleClick() {
    controls.start('shake').then(() => {
      controls.set('idle');
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
    >
      <motion.div
        animate={controls}
        variants={{
          idle: { x: 0 },
          shake: {
            x: [0, -4, 4, -4, 4, 0],
            transition: { duration: 0.4 },
          },
        }}
      >
        <GlowCard
          className="flex cursor-not-allowed flex-col items-center gap-3 p-6 text-center opacity-60"
          onClick={handleClick}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800">
            <LockIcon />
          </div>
          <span className="text-sm font-medium text-zinc-500">{skill.name}</span>
        </GlowCard>
      </motion.div>
    </motion.div>
  );
}
