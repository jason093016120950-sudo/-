import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#08090d] text-[#e2e8f0] selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* 1. Header (Sticky navigation conforming to 3-zone Top Bar Contract) */}
      <Header />

      <main>
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Me Section */}
        <AboutSection />

        {/* 4. Featured Projects Section */}
        <ProjectsSection />

        {/* 5. Skills & Architecture Section */}
        <SkillsSection />

        {/* 6. Contact Section */}
        <ContactSection />
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}
