import { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, X, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import type { ShowcaseProject } from '../data/portfolioData';

const PROJECT_CONFIG = [
  {
    id: 'sudoreply',
    number: '01',
    accentColor: '#34d399',
    label: 'INTERNSHIP @ YOUR ZEROS AND ONES',
  },
  {
    id: 'luxewheels',
    number: '02',
    accentColor: '#a78bfa',
    label: 'TEAM PROJECT — 4 WEEKS',
  },
  {
    id: 'botx-automations',
    number: '03',
    accentColor: '#fb923c',
    label: 'INTERNSHIP @ BOTX AUTOMATIONS',
  },
];

function useScrollReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          obs.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return { ref, visible };
}

interface ProjectCardProps {
  project: ShowcaseProject;
  config: (typeof PROJECT_CONFIG)[number];
  delay: number;
  onOpen: (p: ShowcaseProject) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, config, delay, onOpen }) => {
  const { ref, visible } = useScrollReveal(delay);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      className="proj-card"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.97)',
        transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpen(project)}
    >
      {/* Image area */}
      <div className="proj-card-img-wrap">
        <img
          src={project.image}
          alt={project.title}
          className="proj-card-img"
          style={{ transform: hovered ? 'scale(1.07)' : 'scale(1)' }}
        />
        {/* Dark gradient overlay */}
        <div className="proj-card-gradient" />

        {/* Top badge */}
        <div className="proj-card-badge" style={{ color: config.accentColor, borderColor: config.accentColor + '44' }}>
          <span className="font-fira">{config.number}</span>
        </div>

        {/* Hover CTA */}
        <div className="proj-card-cta" style={{ opacity: hovered ? 1 : 0, transform: hovered ? 'translateY(0)' : 'translateY(10px)' }}>
          <div className="proj-card-cta-btn font-sans" style={{ background: config.accentColor, color: '#0a0a0a' }}>
            <ArrowUpRight size={15} />
            View Project
          </div>
        </div>
      </div>

      {/* Info area */}
      <div className="proj-card-info">
        <div className="proj-card-meta">
          <span className="font-fira proj-card-label" style={{ color: config.accentColor }}>
            {config.label}
          </span>
        </div>
        <h3 className="font-fira proj-card-title">{project.title}</h3>
        <p className="font-sans proj-card-sub">{project.subtitle}</p>

        {/* Tags */}
        <div className="proj-card-tags">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="font-fira proj-tag">
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="font-fira proj-tag proj-tag-more">+{project.tags.length - 4}</span>
          )}
        </div>
      </div>

      {/* Bottom accent bar */}
      <div
        className="proj-card-accent"
        style={{
          background: config.accentColor,
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
        }}
      />
    </div>
  );
};

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [selectedProject, setSelectedProject] = useState<ShowcaseProject | null>(null);
  const { ref: headRef, visible: headVisible } = useScrollReveal(0);

  return (
    <section
      id="projects"
      style={{ position: 'relative', paddingTop: '5rem', paddingBottom: '7rem' }}
    >
      <div className="container">

        {/* Section header */}
        <div
          ref={headRef}
          style={{
            marginBottom: '3rem',
            opacity: headVisible ? 1 : 0,
            transform: headVisible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <span className="section-code-tag">... /Projects ...</span>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
            <h2
              className="font-fira"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1 }}
            >
              Selected <span style={{ color: '#34d399' }}>Work</span>
            </h2>
            <p className="font-sans" style={{ fontSize: '0.9rem', color: '#555', margin: 0, maxWidth: '360px' }}>
              Real-world projects shipped in production — from enterprise SaaS to marketplace platforms.
            </p>
          </div>
        </div>

        {/* Project cards grid */}
        <div className="proj-grid">
          {projects.map((project, idx) => {
            const config = PROJECT_CONFIG.find((c) => c.id === project.id) ?? PROJECT_CONFIG[idx % PROJECT_CONFIG.length];
            return (
              <ProjectCard
                key={project.id}
                project={project}
                config={config}
                delay={idx * 100}
                onOpen={setSelectedProject}
              />
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="project-modal-inner" onClick={(e) => e.stopPropagation()}>
            <div className="project-modal-header">
              <div>
                <h3 className="font-fira" style={{ fontSize: '1.75rem', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.2 }}>
                  {selectedProject.title}
                </h3>
                {selectedProject.subtitle && (
                  <p className="font-sans" style={{ fontSize: '0.9rem', color: '#34d399', marginTop: '0.35rem', fontWeight: 600 }}>
                    {selectedProject.subtitle}
                  </p>
                )}
              </div>
              <button onClick={() => setSelectedProject(null)} className="project-modal-close" title="Close">
                <X size={18} />
              </button>
            </div>

            {selectedProject.images && selectedProject.images.length > 0 ? (
              <div style={{ display: 'grid', gridTemplateColumns: selectedProject.images.length > 1 ? 'repeat(auto-fit, minmax(180px, 1fr))' : '1fr', gap: '0.65rem', marginBottom: '1.5rem' }}>
                {selectedProject.images.map((src, i) => (
                  <div key={i} style={{ borderRadius: '14px', overflow: 'hidden', border: '1px solid #2e2e2e', backgroundColor: '#121212', maxHeight: '200px' }}>
                    <img src={src} alt={`${selectedProject.title} ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                ))}
              </div>
            ) : selectedProject.image && (
              <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #2e2e2e', marginBottom: '1.5rem', maxHeight: '240px' }}>
                <img src={selectedProject.image} alt={selectedProject.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            )}

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.25rem' }}>
              {selectedProject.tags.map((t) => (
                <span key={t} className="font-fira" style={{ background: '#1e1e1e', color: '#a6a6a6', padding: '0.25rem 0.7rem', borderRadius: '9999px', fontSize: '0.75rem', border: '1px solid #2e2e2e' }}>{t}</span>
              ))}
            </div>

            <p className="font-sans" style={{ fontSize: '0.95rem', lineHeight: 1.75, color: '#c8c8c8', marginBottom: '1.5rem' }}>
              {selectedProject.description}
            </p>

            {selectedProject.highlights && (
              <div style={{ marginBottom: '1.75rem', background: '#141414', padding: '1.1rem', borderRadius: '18px', border: '1px solid #242424' }}>
                <h4 className="font-sans" style={{ fontSize: '0.78rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.9rem', fontWeight: 700 }}>
                  Key Highlights
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {selectedProject.highlights.map((h, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                      <CheckCircle2 size={15} color="#34d399" style={{ marginTop: '3px', flexShrink: 0 }} />
                      <span className="font-sans" style={{ fontSize: '0.855rem', color: '#d1d1d1', lineHeight: 1.55 }}>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
              {selectedProject.githubUrl && (
                <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer" className="btn-pill-dark">
                  <GithubIcon size={15} />
                  <span>GitHub</span>
                </a>
              )}
              <button onClick={() => setSelectedProject(null)} className="btn-pill-white" style={{ fontSize: '0.82rem', padding: '0.45rem 1.2rem' }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
