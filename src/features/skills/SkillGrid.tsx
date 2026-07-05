import { useAnimationControls, motion } from 'framer-motion';
import { Code2, Film, Palette, BriefcaseBusiness, PenTool } from 'lucide-react';

interface Tool {
  name: string;
}

interface Category {
  icon: typeof Code2;
  title: string;
  subtext: string;
  tools: Tool[];
  locked?: boolean;
}

const categories: Category[] = [
  {
    icon: Code2,
    title: 'Web Development',
    subtext: 'Brzi i responsivni sajtovi',
    tools: [
      { name: 'HTML 5' },
      { name: 'CSS 3' },
      { name: 'JavaScript' },
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
      { name: 'Next.js' },
      { name: 'Python' },
      { name: 'PHP' },
      { name: 'UI/UX Design' },
      { name: 'Responsive Design' },
      { name: 'Performance Optimization' },
    ],
  },
      {
    icon: BriefcaseBusiness,
    title: 'Tehničko Savetovanje',
    subtext: 'Optimizacija poslovnih procesa i IT strategija.',
    tools: [
      { name: 'IT Consulting' },
      { name: 'Workflow Automation' },
      { name: 'Project Management' },
      { name: 'Tech Strategy' },
      { name: 'Business Analysis' },
      { name: 'Data Analysis' },
      { name: 'System Design' },
    ],
  },
    {
    icon: PenTool,
    title: 'Kreiranje sadržaja',
    subtext: 'Pisanje teksta, copywriting i kreiranje digitalnog sadržaja koji privlači i konvertuje.',
    tools: [
      { name: 'Copywriting' },
      { name: 'Content Strategy' },
      { name: 'SEO Writing' },
      { name: 'Social Media Copy' },
      { name: 'Blog Post Creation' },
      { name: 'Brand Storytelling' },
    ],
    locked: true,
  },
  {
    icon: Film,
    title: 'Video Produkcija',
    subtext: 'Snimanje, montaža i produkcija video sadržaja visokog kvaliteta.',
    tools: [
      { name: 'Video Editing' },
      { name: 'DaVinci Resolve' },
      { name: 'Adobe Premiere Pro' },
      { name: 'Adobe After Effects' },
      { name: 'Color Grading' },
      { name: 'Sound Design' },
      { name: 'Motion Graphics' },
      { name: 'Long Form Video' },
      { name: 'Short Form Video' },
    ],
    locked: true,
  },
  {
    icon: Palette,
    title: 'Digitalni Dizajn',
    subtext: 'Grafički dizajn, brending i kreiranje vizuelnog identiteta.',
    tools: [
      { name: 'Adobe Photoshop' },
      { name: 'Adobe Lightroom' },
      { name: 'Adobe Illustrator' },
      { name: 'Copywriting' },
      { name: 'Copywriting' },
      { name: 'UI/UX Design' },
      { name: 'Logo & Identity' },
      { name: 'Typography' },
      { name: 'Prototyping' },
      { name: 'Visual Assets' },
      { name: 'Photo Editing' },
      { name: 'Responsive Layouts' },
    ],
    locked: true,
  },
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

function LockedCategoryCard({ category, index }: { category: Category; index: number }) {
  const controls = useAnimationControls();

  function handleShake() {
    controls.start('shake').then(() => controls.set('idle'));
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className="group relative h-full cursor-not-allowed rounded-2xl border border-white/5 bg-zinc-900/50 p-8 transition-all duration-500">
        <div className="pointer-events-none select-none" style={{ opacity: 0.6 }}>
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-zinc-800">
            <category.icon className="h-7 w-7 text-gold-accent/50" />
          </div>
          <h3 className="mt-5 text-lg font-semibold text-white">{category.title}</h3>
          <p className="mt-1 text-sm text-zinc-500">{category.subtext}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {category.tools.map((tool) => (
              <span
                key={tool.name}
                className="rounded-md border border-white/5 bg-zinc-800/50 px-3 py-1 text-xs font-medium text-zinc-300"
              >
                {tool.name}
              </span>
            ))}
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

function ActiveCategoryCard({ category, index }: { category: Category; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className="group relative h-full rounded-2xl border border-white/5 bg-zinc-900/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:shadow-xl hover:shadow-black/30">
        <div
          className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ boxShadow: '0 0 40px rgba(212, 168, 60, 0.08)' }}
        />
        <div className="relative">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-zinc-800 transition-colors group-hover:bg-zinc-700/50">
            <category.icon className="h-7 w-7 text-gold-accent" />
          </div>
          <h3 className="mt-5 text-lg font-semibold text-white">{category.title}</h3>
          <p className="mt-1 text-sm text-zinc-500">{category.subtext}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {category.tools.map((tool) => (
              <span
                key={tool.name}
                className="rounded-md border border-white/5 bg-zinc-800/50 px-3 py-1 text-xs font-medium text-zinc-300 transition-colors group-hover:border-white/10"
              >
                {tool.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function SkillGrid() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-white md:text-4xl">Oblasti u kojima se ističem</h2>
        <p className="mt-3 max-w-lg text-zinc-400">
          Kombinujem višegodišnje iskustvo u web developmentu, dizajnu i kreativnoj produkciji.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {categories.map((category, index) =>
          category.locked ? (
            <LockedCategoryCard key={category.title} category={category} index={index} />
          ) : (
            <ActiveCategoryCard key={category.title} category={category} index={index} />
          ),
        )}
      </div>
    </section>
  );
}
