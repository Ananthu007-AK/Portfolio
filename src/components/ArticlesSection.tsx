import { useRef, useEffect, useState } from 'react';
import { ArrowUpRight, X, Clock, Calendar, Tag } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import type { ArticleItem } from '../data/portfolioData';

function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTimeout(() => setVisible(true), delay); obs.unobserve(el); } },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return { ref, visible };
}

interface ArticleRowProps {
  art: ArticleItem;
  index: number;
  onOpen: (a: ArticleItem) => void;
}

const ArticleRow: React.FC<ArticleRowProps> = ({ art, index, onOpen }) => {
  const { ref, visible } = useReveal(index * 80);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={`art-list-row${hovered ? ' art-list-row-hovered' : ''}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.5s cubic-bezier(0.16,1,0.3,1) ${index * 80}ms, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${index * 80}ms, background 0.3s ease, padding 0.3s ease`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpen(art)}
    >
      <div className="art-list-left">
        <h3 className="font-sans art-list-title">{art.title}</h3>
        <p className="font-sans art-list-desc">{art.description}</p>
      </div>

      <div className="art-list-right">
        <div className="art-list-meta">
          <span className="font-fira art-list-date">{art.date}</span>
          <span className="art-list-meta-divider">•</span>
          <span className="font-fira art-list-read">{art.readTime}</span>
        </div>
        
        <div className="art-list-tags">
          {art.tags.slice(0, 3).map(t => (
            <span key={t} className="font-fira art-list-tag">{t}</span>
          ))}
        </div>
        
        <div className="art-list-cta">
          <ArrowUpRight size={20} className="art-list-icon" />
        </div>
      </div>
    </div>
  );
};

export const ArticlesSection: React.FC = () => {
  const { articles } = PORTFOLIO_DATA;
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
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
    <section id="articles" className="articles-list-section">
      <div className="container">

        {/* Header */}
        <div
          ref={headRef}
          className="articles-header"
          style={{
            opacity: headVisible ? 1 : 0,
            transform: headVisible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
            marginBottom: '4rem'
          }}
        >
          <span className="section-code-tag">... /Articles ...</span>
          <div className="articles-header-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
            <h2 className="font-fira articles-heading" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1 }}>
              Writing &amp; <span style={{ color: '#34d399' }}>Notes</span>
            </h2>
            <p className="font-sans articles-subheading" style={{ fontSize: '0.9rem', color: '#555', margin: 0, maxWidth: '360px' }}>
              Technical deep-dives on architecture, APIs, and full-stack patterns.
            </p>
          </div>
        </div>

        {/* Minimalist List */}
        <div className="articles-list-container">
          {/* Header row for list */}
          <div className="art-list-header-row font-fira">
            <span>Title</span>
            <span>Details</span>
          </div>
          
          {articles.map((art, i) => (
            <ArticleRow key={art.id} art={art} index={i} onOpen={setSelectedArticle} />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedArticle && (
        <div className="modal-overlay" onClick={() => setSelectedArticle(null)}>
          <div className="project-modal-inner" onClick={e => e.stopPropagation()}>
            <div className="project-modal-header">
              <div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', color: '#666', fontSize: '0.82rem', marginBottom: '0.75rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Clock size={13} />{selectedArticle.readTime}</span>
                  <span>•</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Calendar size={13} />{selectedArticle.date}</span>
                </div>
                <h3 className="font-fira" style={{ fontSize: '1.7rem', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.25 }}>
                  {selectedArticle.title}
                </h3>
              </div>
              <button onClick={() => setSelectedArticle(null)} className="project-modal-close" title="Close">
                <X size={18} />
              </button>
            </div>

            {selectedArticle.image && (
              <div style={{ borderRadius: '16px', overflow: 'hidden', marginBottom: '1.5rem', maxHeight: '240px' }}>
                <img src={selectedArticle.image} alt={selectedArticle.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            )}

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
              {selectedArticle.tags.map(t => (
                <span key={t} className="font-fira" style={{ background: '#1e1e1e', color: '#a6a6a6', padding: '0.2rem 0.65rem', borderRadius: '9999px', fontSize: '0.75rem', border: '1px solid #2e2e2e' }}>{t}</span>
              ))}
            </div>

            <p className="font-sans" style={{ fontSize: '0.95rem', lineHeight: 1.75, color: '#c8c8c8', margin: 0 }}>
              {selectedArticle.description}
            </p>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
              <button onClick={() => setSelectedArticle(null)} className="btn-pill-white" style={{ fontSize: '0.82rem', padding: '0.45rem 1.2rem' }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
