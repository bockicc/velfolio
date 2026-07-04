import { Mail, MapPin, Clock } from 'lucide-react';
import { useContactForm } from './useContactForm';

const contactDetails = [
  { icon: Mail, label: '/' },
  { icon: MapPin, label: 'Kruševac, Srbija' },
  { icon: Clock, label: 'Pon - Ned : 24/7' },
];

const iconSize = 18;

function GithubIcon() {
  return (
    <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <rect x={2} y={2} width={20} height={20} rx={5} />
      <circle cx={12} cy={12} r={5} />
      <circle cx={17.5} cy={6.5} r={1.2} fill="currentColor" stroke="none" />
    </svg>
  );
}

function TiktokIcon() {
  return (
    <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

const socialLinks = [
  { icon: GithubIcon, href: '#', label: 'GitHub' },
  { icon: InstagramIcon, href: '#', label: 'Instagram' },
  { icon: TiktokIcon, href: '#', label: 'TikTok' },
  { icon: WhatsappIcon, href: '#', label: 'WhatsApp' },
  { icon: XIcon, href: '#', label: 'X (Twitter)' },
  { icon: DiscordIcon, href: '#', label: 'Discord' },
];

export function ContactForm() {
  const {
    values,
    honeypot,
    submitting,
    success,
    error,
    setField,
    setHoneypot,
    handleSubmit,
  } = useContactForm();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    handleSubmit();
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-24 md:py-32">
      <h2 className="mb-3 text-center text-3xl font-bold text-white md:text-4xl">Kontaktirajte me</h2>
      <p className="mb-14 text-center text-zinc-400">
        Slobodno pusti poruku, odgovoriću u najkraćem roku.
      </p>

      <div className="grid gap-12 md:grid-cols-2">
        <div className="rounded-2xl border border-white/5 bg-zinc-900/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:shadow-xl hover:shadow-black/30">
          <span className="mb-1 inline-block text-xs font-medium tracking-wider text-zinc-500 uppercase">
            Kontakt podaci
          </span>
          <ul className="mt-5 space-y-4">
            {contactDetails.map((item) => (
              <li key={item.label}>
                <span className="flex items-center gap-3 text-sm text-zinc-300">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-800">
                    <item.icon className="h-4 w-4 text-gold-accent" />
                  </span>
                  {item.label}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 border-t border-white/5 pt-6">
            <span className="text-xs font-medium tracking-wider text-zinc-500 uppercase">Društvene mreže</span>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 text-zinc-400 transition-colors hover:bg-zinc-700 hover:text-gold-accent"
                >
                  <link.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div>
          <span className="mb-1 inline-block text-xs font-medium tracking-wider text-zinc-500 uppercase">
            Pošaljite direktan upit
          </span>

          {success ? (
            <p className="mt-6 text-center text-green-400">
              Poruka uspešno poslata. Javiću Vam se u najkraćem roku.
            </p>
          ) : (
            <form onSubmit={onSubmit} className="mt-5 space-y-5">
              <div aria-hidden="true" className="absolute -z-10 h-0 overflow-hidden opacity-0">
                <label htmlFor="honeypot">Leave this empty</label>
                <input
                  id="honeypot"
                  name="honeypot"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="name" className="mb-1 block text-sm text-zinc-400">
                  Ime
                </label>
                <input
                  id="name"
                  type="text"
                  value={values.name}
                  onChange={(e) => setField('name', e.target.value)}
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-white placeholder-zinc-500 focus:border-gold-accent focus:outline-none"
                  placeholder="Unesite Vaše ime"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1 block text-sm text-zinc-400">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={(e) => setField('email', e.target.value)}
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-white placeholder-zinc-500 focus:border-gold-accent focus:outline-none"
                  placeholder="tvoj@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1 block text-sm text-zinc-400">
                  Poruka
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={values.message}
                  onChange={(e) => setField('message', e.target.value)}
                  className="w-full resize-none rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-white placeholder-zinc-500 focus:border-gold-accent focus:outline-none"
                  placeholder="Iznesite Vaša pitanja ili zahteve ovde..."
                />
              </div>

              {error && <p className="text-sm text-red-400">{error}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-lg bg-gold px-4 py-2.5 font-medium text-black transition-colors hover:bg-gold-accent disabled:opacity-50"
              >
                {submitting ? 'Slanje...' : 'Pošalji poruku'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
