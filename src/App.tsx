import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { WorkExperienceSection } from './components/WorkExperience';
import { Projects } from './components/Projects';
import { ArticlesSection } from './components/ArticlesSection';
import { Footer } from './components/Footer';
import { PageLoader } from './components/PageLoader';
import { SkillsSection } from './components/SkillsSection';

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState<string>('hero');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'work', 'projects', 'articles', 'contacts'];
      const scrollPosition = window.scrollY + 250;

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

    window.addEventListener('scroll', handleScroll);

    // Scroll Reveal IntersectionObserver
    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '50px 0px -20px 0px',
      threshold: 0.05,
    });

    const elements = document.querySelectorAll('.reveal-on-scroll, .reveal-from-left, .reveal-from-right, .reveal-scale');
    elements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {isLoading && <PageLoader onComplete={() => setIsLoading(false)} />}
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#121212',
        color: '#f5f5f5',
        position: 'relative',
      }}
    >
      {/* Background Decorative Circular Geometry */}
      <div className="bg-arcs-container">
        {/* Top-Right Large Geometric Arc */}
        <svg
          style={{
            position: 'absolute',
            top: '-150px',
            right: '-180px',
            width: '900px',
            height: '900px',
            opacity: 0.12,
          }}
          viewBox="0 0 900 900"
          fill="none"
        >
          <circle cx="450" cy="450" r="430" stroke="#ffffff" strokeWidth="1.2" />
        </svg>

        {/* Mid-Page Geometric Arc around Projects */}
        <svg
          style={{
            position: 'absolute',
            top: '2200px',
            left: '-250px',
            width: '800px',
            height: '800px',
            opacity: 0.1,
          }}
          viewBox="0 0 800 800"
          fill="none"
        >
          <circle cx="400" cy="400" r="380" stroke="#ffffff" strokeWidth="1" />
        </svg>
      </div>

      {/* Header */}
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Main Sections */}
      <main style={{ flex: 1, position: 'relative', zIndex: 1 }}>
        <Hero onNavigate={scrollToSection} />
        <AboutMe />
        <SkillsSection />
        <WorkExperienceSection />
        <Projects />
        <ArticlesSection />
      </main>

      {/* Footer & Outro */}
      <Footer onNavigate={scrollToSection} />
    </div>
    </>
  );
}

export default App;
