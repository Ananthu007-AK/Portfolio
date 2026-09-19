import { useRef, useEffect, useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, WhatsAppIcon, PhoneIcon, MailIcon } from './BrandIcons';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTimeout(() => setVisible(true), delay); obs.unobserve(el); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return { ref, visible };
}

const renderSocialIcon = (icon: string) => {
  switch (icon) {
    case 'github': return <GithubIcon size={18} />;
    case 'linkedin': return <LinkedinIcon size={18} />;
    case 'whatsapp': return <WhatsAppIcon size={18} />;
    case 'phone': return <PhoneIcon size={18} />;
    case 'mail': return <MailIcon size={18} />;
    default: return <GithubIcon size={18} />;
  }
};

const NAV_LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'articles', label: 'Articles' },
];

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { personalInfo } = PORTFOLIO_DATA;
  const heading = useReveal(0);
  const cta = useReveal(100);
  const contacts = useReveal(0);
  const social = useReveal(100);
  const nav = useReveal(150);
  const outro = useReveal(0);

  return (
    <footer id="contacts" className="footer-section">

      {/* ── Big CTA area ── */}
      <div className="container">
        <div className="footer-cta-area">

          <div
            ref={heading.ref}
            style={{
              opacity: heading.visible ? 1 : 0,
              transform: heading.visible ? 'translateY(0)' : 'translateY(32px)',
              transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            <span className="section-code-tag">... /Contacts ...</span>
            <h2 className="font-fira footer-cta-heading">
              Let's build<br />
              <span className="footer-cta-accent">something great.</span>
            </h2>
            <p className="font-sans footer-cta-sub">
              Open to full-stack roles, internships &amp; freelance projects.
              Drop me a message and I'll respond quickly.
            </p>
          </div>

          {/* Primary CTA button */}
          <div
            ref={cta.ref}
            style={{
              opacity: cta.visible ? 1 : 0,
              transform: cta.visible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1) 100ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) 100ms',
            }}
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="footer-cta-btn font-sans"
            >
              <span>Send me an email</span>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        {/* ── Contact cards ── */}
        <div
          ref={contacts.ref}
          className="footer-contact-grid"
          style={{
            opacity: contacts.visible ? 1 : 0,
            transform: contacts.visible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1) 60ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) 60ms',
          }}
        >
          <a href={`tel:${personalInfo.phone}`} className="footer-orb-card">
            <div className="footer-orb-icon"><Phone size={24} strokeWidth={1.5} /></div>
            <div className="footer-orb-text">
              <p className="font-fira footer-orb-label">Phone</p>
              <p className="font-sans footer-orb-value">{personalInfo.phone}</p>
            </div>
          </a>
          <a href={`mailto:${personalInfo.email}`} className="footer-orb-card">
            <div className="footer-orb-icon"><Mail size={24} strokeWidth={1.5} /></div>
            <div className="footer-orb-text">
              <p className="font-fira footer-orb-label">Email</p>
              <p className="font-sans footer-orb-value">{personalInfo.email}</p>
            </div>
          </a>
          <div className="footer-orb-card">
            <div className="footer-orb-icon"><MapPin size={24} strokeWidth={1.5} /></div>
            <div className="footer-orb-text">
              <p className="font-fira footer-orb-label">Location</p>
              <p className="font-sans footer-orb-value">{personalInfo.location}</p>
            </div>
          </div>
        </div>

        {/* ── Social + Nav row ── */}
        <div className="footer-mid-row">
          <div
            ref={social.ref}
            className="footer-social-row"
            style={{
              opacity: social.visible ? 1 : 0,
              transform: social.visible ? 'translateX(0)' : 'translateX(-24px)',
              transition: 'opacity 0.65s cubic-bezier(0.16,1,0.3,1) 100ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) 100ms',
            }}
          >
            {personalInfo.socials.map(s => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="footer-social-btn"
                title={s.name}
              >
                {renderSocialIcon(s.icon)}
              </a>
            ))}
          </div>

          <nav
            ref={nav.ref}
            className="footer-nav-row"
            style={{
              opacity: nav.visible ? 1 : 0,
              transform: nav.visible ? 'translateX(0)' : 'translateX(24px)',
              transition: 'opacity 0.65s cubic-bezier(0.16,1,0.3,1) 150ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) 150ms',
            }}
          >
            {NAV_LINKS.map(link => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className="font-sans footer-nav-link"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        {/* ── Giant name + divider ── */}
        <div className="footer-name-area">
          <div className="footer-divider" />
          <div className="footer-name font-sans">
            <span className="footer-name-first">{personalInfo.firstName}</span>
            <span className="footer-name-last font-fira">{personalInfo.lastName}</span>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          ref={outro.ref}
          className="footer-bottom"
          style={{
            opacity: outro.visible ? 1 : 0,
            transition: 'opacity 0.6s ease 200ms',
          }}
        >
          <span className="font-sans footer-credit">{personalInfo.credits.outroDeveloper}</span>
          <span className="font-fira footer-credit">{personalInfo.credits.outroYear}</span>
          <span className="font-sans footer-credit">{personalInfo.credits.techCredit}</span>
        </div>
      </div>
    </footer>
  );
};
