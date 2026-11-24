import React, { useState, useEffect } from 'react';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ApproachSection } from './components/sections/ApproachSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'skills', 'experience', 'services', 'approach', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans selection:bg-indigo-600 selection:text-white">
        {/* Navigation */}
        <Navbar activeSection={activeSection} />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Hero />
          <ProjectsSection />
          <SkillsSection />
          <ExperienceSection />
          <ServicesSection />
          <ApproachSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default App;
