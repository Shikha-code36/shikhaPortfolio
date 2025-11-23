import { X } from 'lucide-react';
import { Section } from '../types';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Blog from './sections/Blog';
import ExperienceSection from './sections/Experience';
import Contact from './sections/Contact';
import GlitchText from './GlitchText';

interface WindowViewProps {
  section: Section;
  onClose: () => void;
}

export default function WindowView({ section, onClose }: WindowViewProps) {
  if (!section) return null;

  const titles: Record<NonNullable<Section>, string> = {
    about: 'About Me.exe',
    skills: 'Skills.exe',
    projects: 'Projects.exe',
    blog: 'Blog.exe',
    experience: 'Experience.exe',
    contact: 'Contact.exe',
  };

  const renderContent = () => {
    switch (section) {
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'blog':
        return <Blog />;
      case 'experience':
        return <ExperienceSection />;
      case 'contact':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-40 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-gray-900 border-4 border-cyan-500 rounded-lg w-full max-w-6xl max-h-[90vh] flex flex-col shadow-2xl shadow-cyan-500/50 animate-slideUp">
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-3 flex justify-between items-center border-b-2 border-cyan-400">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <GlitchText text={titles[section]} className="font-mono text-white font-bold" />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="hover:bg-red-600 p-2 rounded transition-colors"
              aria-label="Close"
            >
              <X size={16} className="text-white" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-8 bg-black/90">
          {renderContent()}
        </div>

        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 border-t-2 border-cyan-400">
          <div className="font-mono text-white text-xs">
            Ready | {section.charAt(0).toUpperCase() + section.slice(1)} loaded successfully
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}