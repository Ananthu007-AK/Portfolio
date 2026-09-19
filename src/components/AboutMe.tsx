import { useRef, useEffect, useState } from 'react';
import { GraduationCap, Award, MapPin, CheckCircle2, Briefcase } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

function useReveal(delay = 0, direction: 'up' | 'scale' = 'up') {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTimeout(() => setVisible(true), delay); obs.unobserve(el); } },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  const getTransform = () => {
    if (visible) return 'none';
    if (direction === 'scale') return 'scale(0.92)';
    return 'translateY(40px)';
  };

  return { ref, style: { opacity: visible ? 1 : 0, transform: getTransform(), transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms` } };
}

export const AboutMe: React.FC = () => {
  const { personalInfo } = PORTFOLIO_DATA;
  const tag = useReveal(0);
  const header = useReveal(100);
  const bento1 = useReveal(150, 'scale');
  const bento2 = useReveal(200, 'scale');
  const bento3 = useReveal(250, 'scale');
  const bento4 = useReveal(300, 'scale');
  const bento5 = useReveal(350, 'scale');
  const bento6 = useReveal(400, 'scale');
  const bento7 = useReveal(450, 'scale');

  return (
    <section id="about" className="bento-about-section">
      <div className="container">

        {/* ── Header ── */}
        <div ref={tag.ref} style={tag.style} className="about-tag-row">
          <span className="section-code-tag">... /About me ...</span>
        </div>

        <div ref={header.ref} style={header.style} className="bento-header">
          <h2 className="bento-heading font-sans">
            Hello! I'm <span style={{ color: '#34d399' }}>{personalInfo.firstName}</span>.
          </h2>
          <p className="bento-subheading font-sans">
            Full-stack developer focused on building scalable MERN stack applications with exceptional user experiences.
          </p>
        </div>

        {/* ── Bento Grid ── */}
        <div className="bento-grid">
          
          {/* 1. Portrait (Tall) */}
          <div ref={bento1.ref} style={bento1.style} className="bento-box bento-portrait hover-glow">
            <img src={personalInfo.portraitImage} alt={personalInfo.name} className="bento-img" />
            <div className="bento-portrait-gradient" />
            <div className="bento-portrait-content">
              <span className="font-sans bento-name">{personalInfo.firstName} {personalInfo.lastName}</span>
              <span className="font-fira bento-role">{personalInfo.role}</span>
            </div>
          </div>

          {/* 2. Bio (Wide) */}
          <div ref={bento2.ref} style={bento2.style} className="bento-box bento-bio hover-glow">
            <h3 className="font-sans bento-title">Background</h3>
            <p className="font-sans bento-text">{personalInfo.bioStatement}</p>
          </div>

          {/* 3. Location (Small square) */}
          <div ref={bento3.ref} style={bento3.style} className="bento-box bento-loc hover-glow">
            <MapPin size={24} color="#34d399" />
            <div className="bento-loc-text">
              <span className="font-fira bento-label">Location</span>
              <span className="font-sans bento-val">Kozhikode, Kerala</span>
            </div>
          </div>

          {/* 4. Status (Small square) */}
          <div ref={bento4.ref} style={bento4.style} className="bento-box bento-status hover-glow">
            <div className="pulse-dot bento-pulse" />
            <div className="bento-loc-text">
              <span className="font-fira bento-label">Status</span>
              <span className="font-sans bento-val">Currently @ Your Zeros and Ones</span>
            </div>
          </div>

          {/* 5. Soft Skills & Languages (Wide) */}
          <div ref={bento5.ref} style={bento5.style} className="bento-box bento-skills hover-glow">
            <div className="bento-skills-col">
              <h3 className="font-sans bento-title">Soft Skills</h3>
              <div className="bento-tags">
                {personalInfo.personalSkills.map(sk => (
                  <span key={sk} className="font-sans bento-tag">{sk}</span>
                ))}
              </div>
            </div>
            <div className="bento-skills-divider" />
            <div className="bento-skills-col">
              <h3 className="font-sans bento-title">Languages</h3>
              <div className="bento-langs">
                {personalInfo.languages.map(l => (
                  <div key={l.name} className="bento-lang-row">
                    <span className="font-sans bento-lang-name">{l.name}</span>
                    <span className="font-fira bento-lang-level">{l.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 6. Education (Wide/Tall depending on screen) */}
          <div ref={bento6.ref} style={bento6.style} className="bento-box bento-edu hover-glow">
            <div className="bento-box-header">
              <div className="bento-icon-bg"><GraduationCap size={16} /></div>
              <h3 className="font-sans bento-title" style={{ margin: 0 }}>Education</h3>
            </div>
            <div className="bento-edu-list">
              {personalInfo.education.map((e, i) => (
                <div key={i} className={`bento-edu-item${i > 0 ? ' bento-edu-border' : ''}`}>
                  <span className="font-fira bento-edu-year">{e.year}</span>
                  <div>
                    <span className="font-sans bento-edu-degree">{e.degree}</span>
                    <span className="font-sans bento-edu-inst">{e.institution}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 7. Certifications & Hobbies */}
          <div ref={bento7.ref} style={bento7.style} className="bento-box bento-cert hover-glow">
            <div className="bento-box-header">
              <div className="bento-icon-bg"><Award size={16} /></div>
              <h3 className="font-sans bento-title" style={{ margin: 0 }}>Certifications</h3>
            </div>
            <div className="bento-cert-body">
              <CheckCircle2 size={16} color="#34d399" style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <p className="font-sans bento-cert-name">{personalInfo.certifications[0].title}</p>
                <p className="font-sans bento-cert-issuer">{personalInfo.certifications[0].issuer}</p>
              </div>
            </div>
            
            <div className="bento-box-header" style={{ marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid #222' }}>
              <div className="bento-icon-bg"><Briefcase size={16} /></div>
              <h3 className="font-sans bento-title" style={{ margin: 0 }}>Hobbies</h3>
            </div>
            <div className="bento-tags" style={{ marginTop: '0.75rem' }}>
              {personalInfo.hobbies.map(h => (
                <span key={h} className="font-sans bento-tag">{h}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
