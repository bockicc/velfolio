import { ThemeProvider } from './providers/ThemeProvider';
import { LiveBackground } from './components/layout/LiveBackground';
import { Navbar } from './components/layout/Navbar';
import { Preloader } from './components/layout/Preloader';
import { Hero } from './features/hero/Hero';
import { AboutSection } from './features/about/AboutSection';
import { ProjectGrid } from './features/portfolio/ProjectGrid';
import { SkillGrid } from './features/skills/SkillGrid';
import { ServicesSection } from './features/services/ServicesSection';
import { ContactForm } from './features/contact/ContactForm';
import { SectionDivider } from './components/ui/SectionDivider';
import { ScrollToTop } from './components/ui/ScrollToTop';

const assetUrls: string[] = [];

function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 py-10 text-center">
      <p className="text-xs text-zinc-600">&copy; 2026 Veljko Bocić. Sva prava zadržana.</p>
      <p className="mt-1.5 text-xs text-zinc-600">
        Dizajnirano i razvijeno od srca za tvoj uspeh.
      </p>
    </footer>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <LiveBackground />
      <Preloader assetUrls={assetUrls} />
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <ProjectGrid />
        <SectionDivider />
        <SkillGrid />
        <SectionDivider />
        <ServicesSection />
        <SectionDivider />
        <ContactForm />
      </main>
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  );
}
