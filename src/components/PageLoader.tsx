import { useEffect, useState } from 'react';

const STATUS_LINES = [
  { text: '> Initializing MERN Stack...', delay: 600 },
  { text: '> Loading Projects & Experience...', delay: 1200 },
  { text: '> Portfolio Ready.', delay: 1800 },
];

const NAME = 'ananthu.dev';

interface PageLoaderProps {
  onComplete: () => void;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ onComplete }) => {
  const [typedName, setTypedName] = useState('');
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [doneLines, setDoneLines] = useState<number[]>([]);
  const [exiting, setExiting] = useState(false);

  // Typing animation for name
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTypedName(NAME.slice(0, i));
      if (i >= NAME.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  // Status lines staggered reveal
  useEffect(() => {
    STATUS_LINES.forEach((line, idx) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, idx]);
        // Mark line as done (checkmark) 400ms after it appears
        setTimeout(() => {
          setDoneLines((prev) => [...prev, idx]);
        }, 400);
      }, line.delay);
    });
  }, []);

  // Exit sequence
  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setExiting(true);
      setTimeout(() => {
        onComplete();
      }, 700);
    }, 2600);
    return () => clearTimeout(exitTimer);
  }, [onComplete]);

  return (
    <div className={`page-loader-overlay${exiting ? ' page-loader-exit' : ''}`}>
      {/* Scanline overlay for depth */}
      <div className="page-loader-scanlines" />

      {/* Grid background */}
      <div className="page-loader-grid" />

      {/* Central content */}
      <div className="page-loader-content">
        {/* Logo mark */}
        <div className="page-loader-logo">
          <span className="page-loader-bracket">{`{`}</span>
          <span className="page-loader-slash">ak</span>
          <span className="page-loader-bracket">{`}`}</span>
        </div>

        {/* Typed name */}
        <div className="page-loader-name font-fira">
          {typedName}
          <span className="page-loader-cursor">|</span>
        </div>

        {/* Status lines */}
        <div className="page-loader-status-container">
          {STATUS_LINES.map((line, idx) => (
            <div
              key={idx}
              className={`page-loader-status-line font-fira${visibleLines.includes(idx) ? ' visible' : ''}`}
            >
              <span className="page-loader-status-text">{line.text}</span>
              {doneLines.includes(idx) && (
                <span className="page-loader-check">✓</span>
              )}
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="page-loader-progress-track">
          <div className={`page-loader-progress-bar${visibleLines.length > 0 ? ' animate' : ''}`} />
        </div>
      </div>

      {/* Corner decorations */}
      <div className="page-loader-corner page-loader-corner-tl" />
      <div className="page-loader-corner page-loader-corner-tr" />
      <div className="page-loader-corner page-loader-corner-bl" />
      <div className="page-loader-corner page-loader-corner-br" />
    </div>
  );
};
