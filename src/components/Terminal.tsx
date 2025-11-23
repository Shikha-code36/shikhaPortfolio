import { useState, useEffect, useRef } from 'react';
import { soundManager } from '../utils/soundManager';

interface TerminalProps {
  onComplete: () => void;
}

export default function Terminal({ onComplete }: TerminalProps) {
  const [lines, setLines] = useState<string[]>([]);
  const [showCursor, setShowCursor] = useState(true);
  const [showHiddenTerminal, setShowHiddenTerminal] = useState(false);
  const [terminalInput, setTerminalInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const bootSequence = [
    'Pandey, Shikha Inc.',
    'HPBIOS (c)2025 Shikha Pandey Inc.',
    '',
    'HSP 511 2000-2025 Special UC1315',
    '',
    'HSP Showcase(tm) XX 313',
    'Checking RAM : 14000 OK',
    '',
    'LOADING RESOURCES (18/19)',
    '  loaded mouseUp        ... 53%',
    '  loaded keyboardKeydown2    ... 58%',
    '  loaded keyboardKeydown1    ... 61%',
    '  loaded keyboardKeydown6    ... 68%',
    '  loaded keyboardKeydown5    ... 74%',
    '  loaded cctype        ... 79%',
    '  loaded isctype       ... 84%',
    '  loaded keyboardKeydown4    ... 89%',
    '',
    'Press DEL to enter SETUP , ESC to skip memory test',
    '11/22/2025',
    '',
    '',
    'Shikha Pandey Portfolio Showcase 2025',
    'Senior Technical Consultant & AI/ML Engineer',
    'Type "help" for hidden commands or click START to continue',
  ];

  const hiddenCommands = {
    help: [
      'Available commands:',
      '  stats     - Show impressive statistics',
      '  skills    - Display technical skills matrix',
      '  easter    - Find the Easter egg',
      '  matrix    - Enter the Matrix',
      '  quote     - Random tech quote',
      '  projects  - Show project portfolio',
      '  hack      - Initiate hacking sequence',
      '  tea    - Make virtual tea',
      '  deploy    - Deploy to production',
      '  resume    - Download resume',
      '  clear     - Clear terminal',
      '  exit      - Exit terminal mode'
    ],
    stats: [
      '=== SHIKHA PANDEY STATS ===',
      'Years of Experience: 5+',
      'LeetCode Problems Solved: 500+ (Knight Status)',
      'Lines of Code Written: 100,000+',
      'Tea Cups Consumed: âˆž',
      'AI Models Fine-tuned: 15+',
      'Documents Processed Daily: 10,000+',
      'System Availability: 99.9%',
      'SPOT Awards: 1 (EY Recognition)',
      'PyPI Packages Published: 1',
      'GitHub Repositories: 20+',
      'Fortune 500 Clients: 1 (American Express)'
    ],
    skills: [
      'TECHNICAL SKILLS MATRIX:',
      'Python         â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆ 100%',
      'FastAPI        â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆ  95%',
      'GenAI         â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆ   90%',
      'LangChain     â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆ   90%',
      'AWS           â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆ     80%',
      'Docker        â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆ      75%',
      'PostgreSQL    â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆ     80%',
      'React.js      â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆ       70%',
      'Leadership    â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆ     80%',
      'Tea Making â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆ 100%'
    ],
    projects: [
      'PROJECT PORTFOLIO:',
      '',
      'ðŸš€ ArbiSim - Real-Time Crypto Arbitrage',
      '   Languages: C++, CUDA, WebSocket',
      '   Performance: 10,000+ updates/sec',
      '',
      'ðŸ§  Early-Exit CNN with Deep Q-Learning',
      '   40% inference time reduction',
      '   95%+ accuracy maintained',
      '',
      'ðŸ“¦ Competitive Python (PyPI Package)',
      '   Used by competitive programming community',
      '',
      '',
      'ðŸ’¼ MokshMetrics.com - Solopreneur CRM',
      '   Complete business management platform',
      '   AI-powered analytics and insights',
      '',
      'ðŸ’¬ ChatServer with Socket Programming',
      '   Python socket implementation',
      '   Multi-client chat architecture'
    ],
    easter: [
      'ðŸ¥š EASTER EGG FOUND! ðŸ¥š',
      '',
      'Fun Facts About Shikha:',
      'â€¢ Can debug code faster than making Tea',
      'â€¢ Once optimized SQL query by 30x during lunch break',
      'â€¢ Has a secret collection of rubber ducks for debugging',
      'â€¢ Dreams in Python syntax',
      'â€¢ Can explain AI to grandparents and CEOs equally well',
      'â€¢ Turns Tea into code at 99.9% efficiency',
      '',
      'Achievement Unlocked: Portfolio Explorer!'
    ],
    matrix: [
      'Entering the Matrix...',
      '',
      '01001000 01100101 01101100 01101100 01101111',
      '01010111 01101111 01110010 01101100 01100100',
      '',
      'You are the One, Neo... I mean, Recruiter!',
      '',
      'Matrix Mode: Shikha can see the code behind reality.',
      'Skills: AI Architect, Code Wizard, Bug Terminator',
      'Current Status: Senior Technical Consultant @ EY',
      '',
      'Red pill or blue pill? Hire Shikha for both!'
    ],
    quote: [
      'Random Tech Wisdom:',
      '"First, solve the problem. Then, write the code." - John Johnson',
      '',
      'Or as Shikha says:',
      '"First, understand the business. Then, architect the AI."',
      '',
      'Another favorite:',
      '"The best code is the code that solves real problems."'
    ],
    hack: [
      'Initializing hack sequence...',
      '',
      '[████████████████████████] 100%',
      '',
      'ACCESS GRANTED',
      '> Bypassing firewall... OK',
      '> Cracking encryption... OK',
      '> Downloading database... OK',
      '',
      'Just kidding! 😄',
      '',
      'Shikha builds secure systems, not breaks them!',
      '🔒 Security-first architecture',
      '🛡️ OAuth2 & JWT implementation',
      '🔐 Data encryption at rest and in transit',
      '',
      'Hire me to PROTECT your systems, not hack them! 💪'
    ],
    tea: [
      'Brewing tea...',
      '',
      '     (  (  )',
      '      )  )',
      '    ........',
      '    |      |]',
      '    \\      /',
      '     `----\'',
      '',
      '☕ Tea ready!',
      '',
      'Fun Fact: Shikha runs on:',
      '  - 60% Tea ☕',
      '  - 30% Code 💻',
      '  - 10% Models 🤖',
      '',
      'Productivity level: MAXIMUM! 🚀'
    ],
    deploy: [
      'Initiating deployment sequence...',
      '',
      '[DEPLOY] Building Docker containers... ✓',
      '[DEPLOY] Running tests... ✓',
      '[DEPLOY] All 247 tests passed!',
      '[DEPLOY] Pushing to AWS ECR... ✓',
      '[DEPLOY] Updating ECS services... ✓',
      '[DEPLOY] Running database migrations... ✓',
      '[DEPLOY] Invalidating CloudFront cache... ✓',
      '[DEPLOY] Health checks passing... ✓',
      '',
      '🚀 DEPLOYMENT SUCCESSFUL!',
      '',
      'Production Status:',
      '  ✓ API Response Time: 45ms',
      '  ✓ Uptime: 99.9%',
      '  ✓ Active Users: 10,547',
      '  ✓ Requests/min: 15,234',
      '',
      'Deployed with ❤️ by Shikha Pandey'
    ],
    resume: [
      'Preparing resume download...',
      '',
      '📄 SHIKHA PANDEY - RESUME',
      '━━━━━━━━━━━━━━━━━━━━━━━━━━',
      '',
      '🎯 Senior Technical Consultant @ EY',
      '⚡ 5+ Years Enterprise AI/ML Experience',
      '🏆 LeetCode Knight (500+ problems)',
      '🚀 Published PyPI Package Author',
      '',
      '💼 Key Achievements:',
      '  • 70% reduction in document processing time',
      '  • 10,000+ documents processed daily',
      '  • 99.2% AI accuracy in healthcare',
      '  • 30x SQL query optimization',
      '',
      '🔗 Connect with me:',
      '  LinkedIn: linkedin.com/in/36-shikha-pandey',
      '  GitHub: github.com/Shikha-code36',
      '  Email: Available on contact page',
      '',
      '💡 Ready to download? Visit the contact section!'
    ],
    clear: [''],
    exit: ['Exiting terminal mode...']
  };

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < bootSequence.length) {
        setLines(prev => [...prev, bootSequence[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  // Keep focus on input when in hidden terminal mode
  useEffect(() => {
    if (showHiddenTerminal && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showHiddenTerminal, commandHistory]);

  // Handle clicks to keep focus on input
  const handleContainerClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (showHiddenTerminal && inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Play typing sound
    soundManager.playTypingSound();
    
    if (e.key === 'Enter') {
      const command = terminalInput.toLowerCase().trim();
      const output = hiddenCommands[command as keyof typeof hiddenCommands] || [`Command not found: ${command}`];
      
      // Play appropriate sound based on command
      if (command === 'hack' || command === 'deploy' || command === 'resume') {
        soundManager.playSuccessSound();
      } else if (!hiddenCommands[command as keyof typeof hiddenCommands]) {
        soundManager.playErrorSound();
      }
      
      setCommandHistory(prev => [
        ...prev,
        `> ${terminalInput}`,
        ...output,
        ''
      ]);
      setTerminalInput('');

      if (command === 'exit') {
        setTimeout(() => {
          setShowHiddenTerminal(false);
          onComplete();
        }, 1000);
      } else if (command === 'clear') {
        setCommandHistory([]);
      }
    }
  };

  const activateHiddenTerminal = () => {
    setShowHiddenTerminal(true);
    setCommandHistory([
      'Welcome to Shikha Pandey Interactive Terminal',
      'Type "help" to see available commands',
      ''
    ]);
  };

  if (showHiddenTerminal) {
    return (
      <div 
        ref={containerRef}
        className="fixed inset-0 bg-black text-green-400 font-mono p-8 overflow-auto cursor-text"
        onClick={handleContainerClick}
      >
        <div className="text-sm leading-relaxed">
          <div className="mb-4 text-cyan-400">
            === SHIKHA PANDEY INTERACTIVE TERMINAL ===
            <br />
            Senior Technical Consultant & AI/ML Engineer @ EY
            <br />
            Type 'help' for commands, 'exit' to continue
            <br />
            Click anywhere to focus input
          </div>
          
          {commandHistory.map((line, index) => (
            <div key={index} className="whitespace-pre">
              {line}
            </div>
          ))}
          
          <div className="flex items-center relative">
            <span className="text-cyan-400">shikha@portfolio:~$ </span>
            <div className="relative flex-1 flex items-center">
              <span className="text-green-400">{terminalInput}</span>
              {showCursor && (
                <span 
                  className="text-green-400"
                  style={{ marginLeft: `${terminalInput.length > 0 ? '0.1em' : '0'}` }}
                >
                  █
                </span>
              )}
              <input
                ref={inputRef}
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="absolute inset-0 bg-transparent border-none outline-none text-transparent caret-transparent"
                autoFocus
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black text-green-400 font-mono p-8 overflow-hidden">
      <div className="text-sm leading-relaxed">
        {lines.map((line, index) => (
          <div key={index} className="whitespace-pre">
            {line}
          </div>
        ))}
        {lines.length === bootSequence.length && (
          <div className="mt-8 flex flex-col items-center">
            <div className="flex gap-4 mb-4">
              <button
                onClick={onComplete}
                className="border-4 border-green-400 px-12 py-4 text-2xl hover:bg-green-400 hover:text-black transition-colors"
              >
                START
              </button>
              <button
                onClick={activateHiddenTerminal}
                className="border-4 border-cyan-400 px-8 py-4 text-lg hover:bg-cyan-400 hover:text-black transition-colors"
              >
                TERMINAL
              </button>
            </div>
            <div className="mt-4 text-center">
              {showCursor && <span className="text-2xl">_</span>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}