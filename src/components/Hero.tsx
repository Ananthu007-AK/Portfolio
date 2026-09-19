import React from 'react';
import { ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsAppIcon, PhoneIcon, MailIcon } from './BrandIcons';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onOpenArticleModal?: (article: any) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: 'calc(100vh - 5rem)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '2rem',
        paddingBottom: '4rem',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ width: '100%' }}>
        {/* Giant Main Title & Projects Pill */}
        <div
          className="reveal-on-scroll"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25rem',
            marginBottom: '2.5rem',
          }}
        >
          {/* Top Line: Full-stack + Projects Button */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.5rem',
            }}
          >
            <h1
              className="font-sans"
              style={{
                fontSize: 'clamp(2.75rem, 8vw, 6.5rem)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.0,
                letterSpacing: '-0.03em',
                margin: 0,
              }}
            >
              Full-stack
            </h1>

            {/* Projects Pill Button */}
            <button
              onClick={() => onNavigate('projects')}
              className="btn-pill-white reveal-on-scroll reveal-delay-1"
              style={{
                fontSize: '1.05rem',
                padding: '0.75rem 1.8rem',
              }}
            >
              <span>Projects</span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '1.75rem',
                  height: '1.75rem',
                  borderRadius: '50%',
                  background: '#121212',
                  color: '#ffffff',
                }}
              >
                <ArrowRight size={14} />
              </span>
            </button>
          </div>

          {/* Bottom Line: Developer in Fira Code */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: '-0.2rem',
            }}
            className="hero-dev-line"
          >
            <h2
              className="font-fira"
              style={{
                fontSize: 'clamp(2.5rem, 7.5vw, 6.2rem)',
                fontWeight: 600,
                color: '#ffffff',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                margin: 0,
              }}
            >
              Developer
            </h2>
          </div>
        </div>

        {/* Bio statement & Socials */}
        <div
          className="reveal-on-scroll reveal-delay-2"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.75rem',
            maxWidth: '680px',
          }}
        >
          <p
            className="font-sans"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              lineHeight: 1.6,
              color: '#d1d1d1',
            }}
          >
            Passionate <span style={{ fontStyle: 'italic', fontWeight: 600, color: '#ffffff' }}>MERN stack developer</span> with hands-on experience in creating{' '}
            <span style={{ fontStyle: 'italic', fontWeight: 600, color: '#ffffff' }}>fast, responsive</span>, and user-focused web applications with MongoDB, Express.js, React, and Node.js.
          </p>

          {/* Social Pills Row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
            }}
          >
            <a
              href="https://github.com/Ananthu007-AK"
              target="_blank"
              rel="noreferrer"
              className="btn-pill-dark"
            >
              <GithubIcon size={16} />
              <span>Github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ananthu-krishna-01aa47271"
              target="_blank"
              rel="noreferrer"
              className="btn-pill-dark"
            >
              <LinkedinIcon size={16} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://wa.me/919745756546"
              target="_blank"
              rel="noreferrer"
              className="btn-pill-dark"
            >
              <WhatsAppIcon size={16} />
              <span>WhatsApp</span>
            </a>
            <a
              href="tel:+919745756546"
              className="btn-pill-dark"
            >
              <PhoneIcon size={16} />
              <span>+91 9745756546</span>
            </a>
            <a
              href="mailto:ananthukrishnapilachery@gmail.com"
              className="btn-pill-dark"
            >
              <MailIcon size={16} />
              <span>E-mail</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-dev-line {
            justify-content: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
};

