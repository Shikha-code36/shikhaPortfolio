import { useEffect, useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export default function GlitchText({ text, className = '' }: GlitchTextProps) {
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative inline-block ${className}`}>
      <span className={glitching ? 'glitch-text' : ''}>
        {text}
      </span>
      
      <style>{`
        .glitch-text {
          position: relative;
          animation: glitch-anim 0.3s infinite;
        }

        .glitch-text::before,
        .glitch-text::after {
          content: '${text}';
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
        }

        .glitch-text::before {
          animation: glitch-anim-1 0.3s infinite;
          clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
          transform: translate(-2px, -2px);
          opacity: 0.8;
        }

        .glitch-text::after {
          animation: glitch-anim-2 0.3s infinite;
          clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
          transform: translate(2px, 2px);
          opacity: 0.8;
        }

        @keyframes glitch-anim {
          0%, 100% {
            transform: translate(0);
          }
          33% {
            transform: translate(-2px, 2px);
          }
          66% {
            transform: translate(2px, -2px);
          }
        }

        @keyframes glitch-anim-1 {
          0%, 100% {
            transform: translate(0);
            color: #00ffff;
          }
          33% {
            transform: translate(-4px, -4px);
            color: #ff00ff;
          }
          66% {
            transform: translate(4px, 4px);
            color: #00ff00;
          }
        }

        @keyframes glitch-anim-2 {
          0%, 100% {
            transform: translate(0);
            color: #ff00ff;
          }
          33% {
            transform: translate(4px, 4px);
            color: #00ffff;
          }
          66% {
            transform: translate(-4px, -4px);
            color: #00ff00;
          }
        }
      `}</style>
    </div>
  );
}