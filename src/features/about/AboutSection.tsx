import { Code2, TrendingUp, Clapperboard, Zap } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Web Development & UI/UX',
    desc: 'Kreiram brze, moderne i responsivne web sajtove sa fokusom na odličnom korisničkom iskustvu. Spoj estetike i performansi je moj prioritet.',
  },
  {
    icon: TrendingUp,
    title: 'Digitalni Marketing & Branding',
    desc: 'Pomažem brendovima da se istaknu u digitalnom svetu kroz jake vizuelne identitete i efektne marketinške strategije.',
  },
  {
    icon: Clapperboard,
    title: 'Kreativna Produkcija',
    desc: 'Bavim se video produkcijom, foto-montažom i dizajnom sadržaja. Pretvaram ideje u vizuelno snažne priče.',
  },
    {
    icon: Zap,
    title: 'Brzina & Preciznost',
    desc: 'Radim efikasno i organizovano, sa pažnjom na detalje. Svaki projekat završavam na vreme i na najvišem nivou.',
  },
];
export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-24 md:py-32">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-20 lg:items-start">
        <div>
          <h2 className="text-3xl font-bold text-white md:text-4xl">Nešto o meni</h2>
          <p className="mt-3 text-base leading-relaxed text-zinc-400">
            Web developer i UI/UX dizajner iz Srbije. Specijalizovan sam za kreiranje modernih, vizuelno atraktivnih i visoko funkcionalnih digitalnih proizvoda. Pored toga, interesuje me digitalni marketing, brending i kreativna produkcija.
          </p>
        </div>
        <div className="mt-12 lg:mt-0 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/5 bg-zinc-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:shadow-xl hover:shadow-black/30"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800">
                <item.icon className="h-5 w-5 text-gold-accent" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

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
          <p className="text-2xl font-bold text-zinc-100">Spreman da vidiš kako oživljavam ideje?</p>
          <a
            href="#portfolio"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-amber-500 px-8 py-4 text-lg font-semibold text-zinc-950 shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all duration-300 hover:bg-amber-400"
          >
            Istraži radove
          </a>
        </div>
      </div>
    </section>
  );
}
