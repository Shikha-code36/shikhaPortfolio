import { ExternalLink, Github, Terminal, Package } from 'lucide-react';
import { useState } from 'react';
import { Project } from '../../types';

export default function Projects() {
  const [showTerminal, setShowTerminal] = useState(false);

  const projects: Project[] = [
    {
      title: 'ArbiSim - Real-Time Arbitrage Detection',
      description: 'High-performance cryptocurrency arbitrage detection system processing 10,000+ price updates per second across multiple exchanges with sub-millisecond latency and live trading dashboard.',
      technologies: ['C++', 'WebSocket', 'CUDA', 'React.js', 'Real-time Processing'],
      github: 'https://github.com/Shikha-code36/ArbiSim-A-Real-Time-Arbitrage-Detection-System',
      link: 'https://github.com/Shikha-code36/ArbiSim-A-Real-Time-Arbitrage-Detection-System',
    },
    {
      title: 'Early-Exit CNN with Deep Q-Learning',
      description: 'Novel framework implementing Early Exit strategies in CNNs using Deep Q-Learning. Achieved 40% reduction in inference time while maintaining 95%+ accuracy on CIFAR-10 image classification.',
      technologies: ['Python', 'TensorFlow', 'Deep Q-Learning', 'CNN', 'Optimization'],
      github: 'https://github.com/Shikha-code36/early-exit-cnn',
      link: 'https://github.com/Shikha-code36/early-exit-cnn',
    },
    {
      title: 'Competitive Python - PyPI Package',
      description: 'Published Python algorithms package for competitive programming. Open source library with optimized data structures and algorithms implementations used by the competitive programming community.',
      technologies: ['Python', 'PyPI', 'Algorithms', 'Open Source', 'Package Management'],
      github: 'https://github.com/Shikha-code36/Competitive-Python',
      link: 'https://pypi.org/project/competitivepython/',
    },
    {
      title: 'MokshMetrics.com - Solopreneur CRM',
      description: 'Complete business management platform designed for solopreneurs and small businesses. Features AI-powered analytics, customer management, financial tracking, and automated insights to help grow businesses efficiently.',
      technologies: ['Full-Stack', 'AI Analytics', 'CRM', 'Business Intelligence', 'SaaS'],
      link: 'https://mokshmetrics.com',
    },
    {
      title: 'ChatServer with Socket Programming',
      description: 'Robust multi-client chat server implementation using Python socket programming. Features real-time message broadcasting, client management, and scalable architecture for concurrent connections.',
      technologies: ['Python', 'Socket Programming', 'Multi-threading', 'Real-time', 'Network Programming'],
      github: 'https://github.com/Shikha-code36/ChatServer_with_Socket_Python',
      link: 'https://github.com/Shikha-code36/ChatServer_with_Socket_Python',
    }
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 font-mono mb-8 border-b-2 border-cyan-500 pb-4">
        &gt; Projects_
      </h2>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-2 border-green-500 rounded-lg p-4 text-center">
          <Github size={24} className="mx-auto mb-2 text-green-400" />
          <div className="text-lg font-bold text-green-400">20+</div>
          <div className="text-xs text-gray-300">GitHub Repositories</div>
        </div>
        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-2 border-purple-500 rounded-lg p-4 text-center">
          <Package size={24} className="mx-auto mb-2 text-purple-400" />
          <div className="text-lg font-bold text-purple-400">1</div>
          <div className="text-xs text-gray-300">Published PyPI Package</div>
        </div>
        <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border-2 border-cyan-500 rounded-lg p-4 text-center">
          <Terminal size={24} className="mx-auto mb-2 text-cyan-400" />
          <div className="text-lg font-bold text-cyan-400">500+</div>
          <div className="text-xs text-gray-300">LeetCode Knight Status</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-gray-900/50 border-2 border-cyan-700 rounded-lg p-6 hover:border-cyan-500 transition-all hover:shadow-lg hover:shadow-cyan-500/20 group"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold text-cyan-300 group-hover:text-cyan-200 transition-colors">
                {project.title}
              </h3>
              <div className="flex gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                )}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIdx) => (
                <span
                  key={techIdx}
                  className="bg-cyan-900/30 border border-cyan-700 px-3 py-1 rounded text-xs font-mono text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {idx === 0 && (
              <button
                onClick={() => setShowTerminal(true)}
                className="w-full bg-green-600 hover:bg-green-500 text-white py-2 rounded font-mono text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <Terminal size={16} />
                Launch Terminal View
              </button>
            )}

            {idx === 2 && (
              <div className="mt-4 p-3 bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500 rounded">
                <div className="text-purple-400 font-mono text-xs mb-1">📦 PyPI Package</div>
                <div className="text-gray-300 text-xs">
                  pip install competitivepython
                </div>
              </div>
            )}

            {idx === 3 && (
              <div className="mt-4 p-3 bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border border-blue-500 rounded">
                <div className="text-blue-400 font-mono text-xs mb-1">💼 SaaS Platform</div>
                <div className="text-gray-300 text-xs">
                  Complete solopreneur business solution
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {showTerminal && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="bg-black border-4 border-cyan-500 rounded-lg w-full max-w-4xl max-h-[80vh] overflow-hidden shadow-2xl shadow-cyan-500/50">
            <div className="bg-cyan-600 px-4 py-2 flex justify-between items-center">
              <span className="font-mono text-white text-sm">ArbiSim Terminal Monitor</span>
              <button
                onClick={() => setShowTerminal(false)}
                className="text-white hover:bg-cyan-700 px-3 py-1 rounded"
              >
                X
              </button>
            </div>
            <div className="p-6 font-mono text-sm text-green-400 overflow-auto max-h-[70vh]">
              <div className="space-y-2">
                <div>&gt; Initializing ArbiSim Real-Time Arbitrage Detection System...</div>
                <div>&gt; Loading market data feeds... OK</div>
                <div>&gt; Initializing CUDA kernel... OK</div>
                <div>&gt; GPU Memory allocated: 8192 MB</div>
                <div>&gt; Thread blocks: 256, Threads per block: 512</div>
                <div className="text-cyan-400 mt-4">&gt; SYSTEM STATUS: ACTIVE</div>
                <div className="mt-4 space-y-1">
                  <div>[2024-11-22 02:12:34.567] Processing latency: 4.2 μs</div>
                  <div>[2024-11-22 02:12:34.589] Arbitrage opportunity detected: BTC/USD</div>
                  <div className="text-yellow-400">[2024-11-22 02:12:34.591] Spread: 0.034% | Profit: $2,340</div>
                  <div>[2024-11-22 02:12:34.612] Order book depth: 10,000 levels</div>
                  <div>[2024-11-22 02:12:34.634] Processing latency: 3.8 μs</div>
                  <div>[2024-11-22 02:12:34.656] Market updates/sec: 1,245,678</div>
                  <div className="text-green-400">[2024-11-22 02:12:34.678] GPU utilization: 94%</div>
                  <div>[2024-11-22 02:12:34.701] Processing latency: 4.1 μs</div>
                  <div>[2024-11-22 02:12:34.723] Arbitrage opportunity detected: ETH/USDT</div>
                  <div className="text-yellow-400">[2024-11-22 02:12:34.725] Spread: 0.028% | Profit: $1,850</div>
                  <div>[2024-11-22 02:12:34.747] Cache hit rate: 98.7%</div>
                  <div>[2024-11-22 02:12:34.769] Processing latency: 3.9 μs</div>
                  <div className="mt-4 text-purple-400">&gt; Competitive Python Package Stats:</div>
                  <div>[2024-11-22] Downloads this month: 1,247</div>
                  <div>[2024-11-22] Active users: 523</div>
                  <div>[2024-11-22] GitHub stars: ⭐ 89</div>
                  <div className="mt-4 text-blue-400">&gt; MokshMetrics.com Analytics:</div>
                  <div>[2024-11-22] Active solopreneurs: 342</div>
                  <div>[2024-11-22] Business insights generated: 1,847</div>
                  <div>[2024-11-22] Revenue tracked: $2.4M+</div>
                </div>
                <div className="mt-4 text-cyan-400 animate-pulse">&gt; Monitoring active... Press ESC to exit_</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}