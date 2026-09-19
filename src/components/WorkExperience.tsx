import { useRef, useEffect, useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import type { WorkExperience as WorkExpType } from '../data/portfolioData';

function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTimeout(() => setVisible(true), delay); obs.unobserve(el); } },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return { ref, visible };
}

interface WorkRowProps {
  item: WorkExpType;
  index: number;
}

const WorkRow: React.FC<WorkRowProps> = ({ item, index }) => {
  const { ref, visible } = useReveal(index * 90);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={`work-entry${hovered ? ' work-entry-hovered' : ''}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(-32px)',
        transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 90}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 90}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Left: timeline dot + line */}
      <div className="work-timeline-col">
        <div className={`work-dot${item.isCurrent ? ' work-dot-current' : ''}`}>
          {item.isCurrent && <span className="work-dot-ring" />}
        </div>
        {index < 3 && <div className="work-line" />}
      </div>

      {/* Right: content */}
      <div className="work-content">
        <div className="work-meta-row">
          <span className="font-fira work-period">{item.period}</span>
          <span className="font-sans work-duration">{item.duration}</span>
          {item.isCurrent && (
            <span className="font-fira work-current-badge">
              <span className="pulse-dot" style={{ width: 6, height: 6 }} />
              Current
            </span>
          )}
        </div>
        <h3 className="font-fira work-company">{item.company}</h3>
        <p className="font-sans work-role">{item.role}</p>
        <p className="font-fira work-tech">{item.tech}</p>
      </div>
    </div>
  );
};

export const WorkExperienceSection: React.FC = () => {
  const { workExperience } = PORTFOLIO_DATA;
  const headRef = useRef<HTMLDivElement>(null);
  const [headVisible, setHeadVisible] = useState(false);

  useEffect(() => {
    const el = headRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setHeadVisible(true); obs.unobserve(el); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="work" className="work-section">
      <div className="container">

        {/* Header */}
        <div
          ref={headRef}
          className="work-header"
          style={{
            opacity: headVisible ? 1 : 0,
            transform: headVisible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <span className="section-code-tag">... /Experience ...</span>
          <div className="work-header-row">
            <h2 className="font-fira work-heading">
              Work <span style={{ color: '#34d399' }}>History</span>
            </h2>
            <p className="font-sans work-subheading">
              Professional experience building production-grade web applications.
            </p>
          </div>
        </div>

        {/* Timeline entries */}
        <div className="work-timeline">
          {workExperience.map((item, i) => (
            <WorkRow key={item.id} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
};
