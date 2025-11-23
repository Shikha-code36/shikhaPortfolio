import { useState, useEffect } from 'react';
import Terminal from './components/Terminal';
import Desktop from './components/Desktop';
import WindowView from './components/WindowView';
import PerformanceMonitor from './components/PerformanceMonitor';
import { Section } from './types';
import { soundManager } from './utils/soundManager';

function App() {
  const [showTerminal, setShowTerminal] = useState(true);
  const [activeSection, setActiveSection] = useState<Section>(null);

  useEffect(() => {
    document.title = 'Shikha Pandey - Senior Engineer';
  }, []);

  const handleTerminalComplete = () => {
    soundManager.playBootSound();
    setTimeout(() => setShowTerminal(false), 500);
  };

  const handleIconClick = (section: Section) => {
    setActiveSection(section);
  };

  const handleCloseWindow = () => {
    soundManager.playBeep(800);
    setActiveSection(null);
  };

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {showTerminal ? (
        <Terminal onComplete={handleTerminalComplete} />
      ) : (
        <>
          <Desktop onIconClick={handleIconClick} />
          <WindowView section={activeSection} onClose={handleCloseWindow} />
          
          {/* Performance Monitor - only show when not in terminal */}
          <PerformanceMonitor />
        </>
      )}
    </div>
  );
}

export default App;