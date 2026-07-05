import type { Project } from '../../types/project';

export const projects: Project[] = [
  // ── Video: Clipping ──────────────────────────────────────
  {
    id: 'video-clip-1',
    title: 'Twitch Highlights Vol.1 — 2024 Compilation',
    description: 'Najbolji momenti sa Twitch streamova — brza montaža sa custom overlay-ima i tranzicijama.',
    image: 'poc-projekti/Projekat-1.png',
    category: 'video',
    subCategory: 'clipping',
    tags: ['Twitch', 'Kick', 'Rumble', 'Highlights', 'Montaža'],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoLinks: [
      { platform: 'Twitch', url: 'https://twitch.tv/example', label: 'Twitch kanal' },
      { platform: 'Kick', url: 'https://kick.com/example', label: 'Kick kanal' },
    ],
    caseStudy: 'Montaža najboljih trenutaka sa nedeljnih streamova, sinhronizacija sa muzikom i dodavanje custom grafike.',
  },
  {
    id: 'video-clip-2',
    title: 'Rumble Exkluziv — Borilački Highlight Reel',
    description: 'Ekskluzivni klipovi sa Rumble platforme — akcioni momenti i analiza borbi.',
    image: 'poc-projekti/Projekat-2.png',
    category: 'video',
    subCategory: 'clipping',
    tags: ['Rumble', 'Highlight Reel', 'Sports', 'Montaža'],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoLinks: [
      { platform: 'Rumble', url: 'https://rumble.com/example', label: 'Rumble kanal' },
    ],
    caseStudy: 'Selekcija najboljih momenata i kreiranje napetog narativa kroz brzu montažu.',
  },
  // ── Video: Short-form ────────────────────────────────────
  {
    id: 'video-short-1',
    title: 'TikTok Trendovi — Serija Kratkog Sadržaja',
    description: 'Serija TikTok i Reels videa sa viralnom muzikom, efektima i brzim rezovima.',
    image: 'poc-projekti/Projekat-3.png',
    category: 'video',
    subCategory: 'short-form',
    tags: ['TikTok', 'Instagram Reels', 'YouTube Shorts', 'Trendovi', 'Viral'],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoLinks: [
      { platform: 'TikTok', url: 'https://tiktok.com/@example', label: 'TikTok profil' },
      { platform: 'Instagram', url: 'https://instagram.com/example', label: 'Instagram Reels' },
    ],
    caseStudy: 'Kreiranje kratkog i dinamičnog sadržaja prilagođenog svakoj platformi — vertikalni format, brzi hook-ovi i optimizacija za algoritam.',
  },
  // ── Video: Long-form ─────────────────────────────────────
  {
    id: 'video-long-1',
    title: 'Dokumentarac — Kraljevo Kroz Vekove',
    description: 'Celovečernji dokumentarni film o istoriji Kraljeva sa naracijom, arhivskim snimcima i originalnom muzikom.',
    image: 'poc-projekti/Projekat-4.png',
    category: 'video',
    subCategory: 'long-form',
    tags: ['YouTube', 'Dokumentarac', 'Montaža', 'Produkcija', 'Naracija'],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoLinks: [
      { platform: 'YouTube', url: 'https://youtube.com/watch?v=example', label: 'Pogledaj na YouTube' },
    ],
    caseStudy: 'Potpuna produkcija — od istraživanja i pisanja scenarija, preko snimanja i montaže, do kolor korekcije i zvuka.',
  },
  {
    id: 'video-long-2',
    title: 'Full Edit — Gaming Montage "Epic Comeback"',
    description: 'Full-length gaming edit sa sinhronizovanom muzikom, SFX-ovima i cinematics sekvencama.',
    image: 'poc-projekti/Projekat-5.png',
    category: 'video',
    subCategory: 'long-form',
    tags: ['YouTube', 'Gaming', 'Montaža', 'SFX', 'Cinematics'],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoLinks: [
      { platform: 'YouTube', url: 'https://youtube.com/watch?v=example', label: 'Pogledaj na YouTube' },
    ],
    caseStudy: 'Slojevita montaža sa custom SFX-ovima, color gradingom i dinamičnim pacingom za maksimalan utisak.',
  },

  // ── Web projects ─────────────────────────────────────────
  {
    id: 'project-1',
    title: 'Balačević - Digitalni Spomenar',
    description: 'Interaktivna platforma za čuvanje sećanja na jednog jedinog Djordja Balaševića, koja je razvijena sa fokusom na emotivno korisničko iskustvo.',
    image: 'poc-projekti/Projekat-1.png',
    category: 'web',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX Design', 'Responsive Design', 'Accessibility', 'Performance Optimization'],
    liveUrl: 'https://bockicc.github.io/panonskimornar-v3/',
    caseStudy:
      'Ovaj projekat je razvijen sa ciljem rešavanja specifičnog problema koristeći moderne web tehnologije. Arhitektura je fokusirana na performanse i razvojno iskustvo.',
  },
  {
    id: 'project-2',
    title: 'Padel Platz - Sportski centar u Kraljevu',
    description: 'Rezervacioni sistem visokih performansi koji omogućava jednostavno zakazivanje termina za igrače.',
    image: 'poc-projekti/Projekat-2.png',
    category: 'web',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX Design', 'Responsive Design', 'Accessibility', 'Performance Optimization'],
    liveUrl: 'https://bockicc.github.io/padelplatz-v3.6/',
    caseStudy:
      'Vizuelizacija podataka u realnom vremenu zahtevala je pažljivo upravljanje stanjem i efikasne strategije za ponovno renderovanje.',
  },
  {
    id: 'project-3',
    title: 'Oring 024 - Montažne kuće',
    description: 'Prezentacioni sajt sa fokusom na konverziju, dizajniran da istakne kvalitet i pouzdanost gradnje.',
    image: 'poc-projekti/Projekat-3.png',
    category: 'web',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX Design', 'Responsive Design', 'Accessibility', 'Performance Optimization'],
    liveUrl: 'https://bockicc.github.io/oring024-v3/',
    caseStudy:
      'Vizuelizacija podataka u realnom vremenu zahtevala je pažljivo upravljanje stanjem i efikasne strategije za ponovno renderovanje.',
  },
  {
    id: 'project-4',
    title: 'Beauty factory',
    description: 'Moderan portfolio sajt koji odražava estetiku i luksuz salona lepote kroz minimalistički dizajn.',
    image: 'poc-projekti/Projekat-4.png',
    category: 'web',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX Design', 'Responsive Design', 'Accessibility', 'Performance Optimization'],
    liveUrl: 'https://bockicc.github.io/beauty-factory-v3/',
    caseStudy:
      'Vizuelizacija podataka u realnom vremenu zahtevala je pažljivo upravljanje stanjem i efikasne strategije za ponovno renderovanje.',
  },
  {
    id: 'project-5',
    title: 'Elektrotehna92',
    description: 'Tehnički prezentacioni sajt optimizovan za prikazivanje usluga i stručnosti u domenu elektroinstalacija.',
    image: 'poc-projekti/Projekat-5.png',
    category: 'web',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX Design', 'Responsive Design', 'Accessibility', 'Performance Optimization'],
    liveUrl: 'https://bockicc.github.io/elektrotehna92-v3/',
    caseStudy:
      'Vizuelizacija podataka u realnom vremenu zahtevala je pažljivo upravljanje stanjem i efikasne strategije za ponovno renderovanje.',
  },
  {
    id: 'project-6',
    title: 'Lovely pets groomer - Salon za negu kućnih ljubimaca u Kruševcu',
    description: 'Vizuelno dopadljiv sajt za salon za negu kućnih ljubimaca, optimizovan za brzo pronalaženje informacija.',
    image: 'poc-projekti/Projekat-6.png',
    category: 'web',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX Design', 'Responsive Design', 'Accessibility', 'Performance Optimization'],
    liveUrl: 'https://bockicc.github.io/lovely-pets-groomer-v3/',
    caseStudy:
      'Vizuelizacija podataka u realnom vremenu zahtevala je pažljivo upravljanje stanjem i efikasne strategije za ponovno renderovanje.',
  },
  {
    id: 'project-7',
    title: 'Elena Apartmani - Apartmani u Vrnjačkoj Banji',
    description: 'Booking platforma za apartmane sa intuitivnim interfejsom za pregled smeštajnih jedinica.',
    image: 'poc-projekti/Projekat-7.png',
    category: 'web',
    tags: ['React', 'Tailwind CSS', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PHP', 'UI/UX Design', 'Responsive Design', 'Accessibility', 'Performance Optimization'],
    liveUrl: 'https://bockicc.github.io/elena-apartmani/',
    caseStudy:
      'Vizuelizacija podataka u realnom vremenu zahtevala je pažljivo upravljanje stanjem i efikasne strategije za ponovno renderovanje.',
  },
  {
    id: 'project-8',
    title: 'Musola Tende - Proizvodnja i montaža tendi i pergola u Novom Sadu',
    description: 'Katalog proizvoda sa naprednim filterima za lakši odabir tendi i pergola po meri.',
    image: 'poc-projekti/Projekat-8.png',
    category: 'web',
    tags: ['React', 'Tailwind CSS', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PHP', 'UI/UX Design', 'Responsive Design', 'Accessibility', 'Performance Optimization'],
    liveUrl: 'https://bockicc.github.io/musola-tende/',
    caseStudy:
      'Vizuelizacija podataka u realnom vremenu zahtevala je pažljivo upravljanje stanjem i efikasne strategije za ponovno renderovanje.',
  },
  {
    id: 'project-9',
    title: 'Agro Lines - Poljoprivredna mehanizacija',
    description: 'Korporativni web sajt koji jasno prikazuje industrijska rešenja i tehničke specifikacije mehanizacije.',
    image: 'poc-projekti/Projekat-9.png',
    category: 'web',
    tags: ['React', 'Tailwind CSS', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PHP', 'UI/UX Design', 'Responsive Design', 'Accessibility', 'Performance Optimization'],
    liveUrl: 'https://bockicc.github.io/agro-lines/',
    caseStudy:
      'Vizuelizacija podataka u realnom vremenu zahtevala je pažljivo upravljanje stanjem i efikasne strategije za ponovno renderovanje.',
  },
  {
    id: 'Projekat-10',
    title: 'Vasic Rolet - Proizvodnja i distribucija roleta',
    description: 'Razvoj korporativnog web sajta za Vasic Rolet sa fokusom na jasno predstavljanje industrijskih rešenja.',
    image: 'poc-projekti/Projekat-10.png',
    category: 'web',
    tags: ['React', 'Tailwind CSS', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PHP', 'UI/UX Design', 'Responsive Design', 'Accessibility', 'Performance Optimization'],
    liveUrl: 'https://bockicc.github.io/vasic-rolet/',
    caseStudy:
      'Vizuelizacija podataka u realnom vremenu zahtevala je pažljivo upravljanje stanjem i efikasne strategije za ponovno renderovanje.',
  },
];
