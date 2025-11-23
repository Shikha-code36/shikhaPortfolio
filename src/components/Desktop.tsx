import { Volume2, VolumeX } from 'lucide-react';
import DesktopIcon from './DesktopIcon';
import { Section } from '../types';
import { soundManager } from '../utils/soundManager';
import { useState, useEffect } from 'react';
import MatrixRain from './MatrixRain';
import GlitchText from './GlitchText';

interface DesktopProps {
  onIconClick: (section: Section) => void;
}

export default function Desktop({ onIconClick }: DesktopProps) {
  const [muted, setMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  const icons = [
    { id: 'about' as Section, label: 'About Me', icon: '👤' },
    { id: 'skills' as Section, label: 'Skills', icon: '⚡' },
    { id: 'projects' as Section, label: 'Projects', icon: '💼' },
    { id: 'blog' as Section, label: 'Blog', icon: '📝' },
    { id: 'experience' as Section, label: 'Experience', icon: '🎯' },
    { id: 'contact' as Section, label: 'Contact', icon: '📧' },
  ];

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Convert to IST (UTC+5:30)
      const istTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
      const hours = istTime.getHours().toString().padStart(2, '0');
      const minutes = istTime.getMinutes().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const handleIconClick = (section: Section) => {
    soundManager.playBeep(800);
    setTimeout(() => onIconClick(section), 100);
  };

  const toggleMute = () => {
    const newMuted = soundManager.toggleMute();
    setMuted(newMuted);
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <MatrixRain />
      
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #00ff00 2px, #00ff00 4px)',
      }}></div>

      <div className="relative z-10 h-full flex flex-col">
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-2 flex justify-between items-center border-b-2 border-cyan-400">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <GlitchText text="Shikha Pandey" className="font-mono text-sm" />
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleMute}
              className="hover:bg-cyan-700 p-2 rounded transition-colors"
              aria-label="Toggle sound"
            >
              {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
            <span className="font-mono text-xs">{currentTime}</span>
          </div>
        </div>

        <div className="flex-1 p-8 md:p-16">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
            {icons.map((icon) => (
              <DesktopIcon
                key={icon.id}
                label={icon.label}
                icon={icon.icon}
                onClick={() => handleIconClick(icon.id)}
              />
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-2 border-t-2 border-cyan-400">
          <div className="flex justify-between items-center font-mono text-xs">
            <div>Shikha Pandey - Software Engineer</div>
            <div>shikhapandey.me</div>
          </div>
        </div>
      </div>
    </div>
  );
}