import { LayoutGrid, TrendingUp, Megaphone, BriefcaseBusiness } from 'lucide-react';

const services = [
  {
    icon: LayoutGrid,
    title: 'Web & E-commerce Rešenja',
    desc: 'Dizajniram i razvijam brze, moderne i skalabilne veb platforme koje su prilagođene tvojim poslovnim ciljevima i svim tipovima uređaja.',
  },
  {
    icon: TrendingUp,
    title: 'Optimizacija i SEO Rast',
    desc: 'Ne pravim samo sajtove – činim ih vidljivim. Optimizujem performanse i SEO strukturu kako bi tvoj brend bio prvi izbor kada kupci pretražuju tvoju delatnost.',
  },
  {
    icon: Megaphone,
    title: 'Digitalni Marketing & Vođenje profila',
    desc: 'Preuzimam brigu o tvom digitalnom prisustvu. Od strategije nastupa do vođenja profila, kreiram sadržaj koji gradi poverenje i privlači nove klijente.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Konsultacije i Tehnička Podrška 24/7',
    desc: 'Tvoj IT partner na duge staze. Bilo da ti treba strateško savetovanje za rast poslovanja ili redovno održavanje sistema, tu sam da osiguram da tehnologija radi za tebe.',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-24 md:py-32">
      <h2 className="text-3xl font-bold text-white md:text-4xl">Šta nudim</h2>
      <p className="mt-3 max-w-lg text-zinc-400">
        Profesionalna digitalna rešenja kreirana da ubrzaju tvoj rast i izdvoje te od konkurencije.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="group rounded-2xl border border-white/5 bg-zinc-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:shadow-xl hover:shadow-black/30"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 transition-colors group-hover:bg-zinc-700/50">
              <service.icon className="h-6 w-6 text-gold-accent" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-white">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{service.desc}</p>
          </div>
        ))}
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
          <p className="text-2xl font-bold text-zinc-100">Tvoj biznis zaslužuje vrhunsku prezentaciju. Hajde da počnemo.</p>
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
