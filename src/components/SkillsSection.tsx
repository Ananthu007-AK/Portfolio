import { useRef, useEffect, useState } from 'react';

// ── Tech data per row ──────────────────────────────────────────────────────────
const ROW_1 = [
  { name: 'React 19', icon: '⚛', color: '#61dafb' },
  { name: 'JavaScript', icon: 'JS', color: '#f7df1e' },
  { name: 'TypeScript', icon: 'TS', color: '#3178c6' },
  { name: 'HTML5', icon: '<>', color: '#e34f26' },
  { name: 'CSS3', icon: '✦', color: '#264de4' },
  { name: 'Vite', icon: '⚡', color: '#646cff' },
  { name: 'TailwindCSS', icon: '≋', color: '#38bdf8' },
  { name: 'Responsive UI', icon: '◻', color: '#a78bfa' },
  { name: 'Glassmorphism', icon: '◈', color: '#818cf8' },
  { name: 'Animations', icon: '✦', color: '#f472b6' },
];

const ROW_2 = [
  { name: 'Node.js', icon: '⬡', color: '#84cc16' },
  { name: 'Express.js', icon: '↔', color: '#888888' },
  { name: 'REST APIs', icon: '⇌', color: '#34d399' },
  { name: 'Socket.IO', icon: '⚡', color: '#ffffff' },
  { name: 'JWT Auth', icon: '🔑', color: '#fbbf24' },
  { name: 'BullMQ', icon: '⏱', color: '#f97316' },
  { name: 'Redis', icon: '◎', color: '#dc2626' },
  { name: 'WebSockets', icon: '⇄', color: '#34d399' },
  { name: 'Middleware', icon: '◇', color: '#94a3b8' },
  { name: 'WhatsApp API', icon: '💬', color: '#25d366' },
];

const ROW_3 = [
  { name: 'MongoDB', icon: '🍃', color: '#00ed64' },
  { name: 'Mongoose', icon: '△', color: '#880000' },
  { name: 'PostgreSQL', icon: '🐘', color: '#336791' },
  { name: 'Prisma ORM', icon: '◆', color: '#5a67d8' },
  { name: 'Docker', icon: '🐳', color: '#2496ed' },
  { name: 'Git & GitHub', icon: '⌥', color: '#f1502f' },
  { name: 'Postman', icon: '📬', color: '#ef5b25' },
  { name: 'Nginx', icon: '↗', color: '#009900' },
  { name: 'Bootstrap', icon: 'B', color: '#7952b3' },
  { name: 'Razorpay', icon: '₹', color: '#3395ff' },
];

// ── Stat card data ─────────────────────────────────────────────────────────────
const STATS = [
  { value: '2+', label: 'Internships', accent: '#34d399' },
  { value: '3+', label: 'Shipped Projects', accent: '#a78bfa' },
  { value: 'MERN', label: 'Core Stack', accent: '#fb923c' },
  { value: '30+', label: 'Tech Skills', accent: '#38bdf8' },
];

// ── Marquee row component ─────────────────────────────────────────────────────
interface Pill {
  name: string;
  icon: string;
  color: string;
}

function MarqueeRow({
  pills,
  direction,
  speed,
  delay = 0,
}: {
  pills: Pill[];
  direction: 'left' | 'right';
  speed: number;
  delay?: number;
}) {
  // Duplicate array 3x for seamless loop
  const repeated = [...pills, ...pills, ...pills];

  return (
    <div className="marquee-row-wrap">
      <div
        className={`marquee-row marquee-${direction}`}
        style={{
          animationDuration: `${speed}s`,
          animationDelay: `${delay}s`,
        }}
      >
        {repeated.map((pill, i) => (
          <div key={`${pill.name}-${i}`} className="marquee-pill">
            <span
              className="marquee-pill-icon font-fira"
              style={{ color: pill.color }}
            >
              {pill.icon}
            </span>
            <span className="marquee-pill-name font-sans">{pill.name}</span>
            {/* Subtle glow dot */}
            <span className="marquee-pill-dot" style={{ background: pill.color }} />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Stat card with count-up animation ─────────────────────────────────────────
function StatCard({
  stat,
  index,
}: {
  stat: (typeof STATS)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 100);
          obs.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className="skills-stat-card"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.96)',
        transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)`,
        borderColor: visible ? stat.accent + '44' : '#1a1a1a',
      }}
    >
      <div
        className="skills-stat-value font-fira"
        style={{ color: stat.accent }}
      >
        {stat.value}
      </div>
      <div className="skills-stat-label font-sans">{stat.label}</div>
      {/* Bottom glow bar */}
      <div
        className="skills-stat-glow"
        style={{
          background: `linear-gradient(90deg, transparent, ${stat.accent}55, transparent)`,
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.8s ease 0.4s',
        }}
      />
    </div>
  );
}

// ── Main section ───────────────────────────────────────────────────────────────
export const SkillsSection: React.FC = () => {
  const headRef = useRef<HTMLDivElement>(null);
  const [headVisible, setHeadVisible] = useState(false);

  useEffect(() => {
    const el = headRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeadVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="skills"
      style={{ position: 'relative', paddingTop: '5.5rem', paddingBottom: '7rem', overflow: 'hidden' }}
    >
      <div className="container">
        {/* Section header */}
        <div
          ref={headRef}
          style={{
            marginBottom: '3.5rem',
            opacity: headVisible ? 1 : 0,
            transform: headVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          <span className="section-code-tag">... /Skills ...</span>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginTop: '1rem',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <h2
              className="font-fira"
              style={{
                fontSize: 'clamp(1.8rem, 4.5vw, 3rem)',
                fontWeight: 700,
                color: '#fff',
                margin: 0,
                lineHeight: 1,
              }}
            >
              Tech <span style={{ color: '#34d399' }}>Stack</span>
            </h2>
            <p
              className="font-sans"
              style={{ fontSize: '0.9rem', color: '#555', margin: 0, maxWidth: '400px' }}
            >
              Technologies I work with daily — from pixel-perfect UIs to
              distributed backend systems.
            </p>
          </div>
        </div>
      </div>

      {/* ── Marquee rows (full-width, outside container) ── */}
      <div className="marquee-section">
        {/* Left & right gradient fade masks */}
        <div className="marquee-fade-left" />
        <div className="marquee-fade-right" />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <MarqueeRow pills={ROW_1} direction="left" speed={36} />
          <MarqueeRow pills={ROW_2} direction="right" speed={42} delay={0} />
          <MarqueeRow pills={ROW_3} direction="left" speed={30} delay={0} />
        </div>
      </div>

      {/* ── Stats row ── */}
      <div className="container" style={{ marginTop: '3.5rem' }}>
        <div className="skills-stats-grid">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
