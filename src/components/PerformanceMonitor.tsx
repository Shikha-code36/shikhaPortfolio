import { useState, useEffect } from 'react';
import { Activity, Cpu, Database, Globe, Zap } from 'lucide-react';

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState({
    cpu: 0,
    memory: 0,
    network: 0,
    aiProcessing: 0,
    leetcodeStreak: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        cpu: Math.random() * 100,
        memory: 60 + Math.random() * 35,
        network: Math.random() * 100,
        aiProcessing: 80 + Math.random() * 20,
        leetcodeStreak: 95 + Math.random() * 5
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-cyan-600 hover:bg-cyan-500 text-white p-3 rounded-full shadow-lg transition-colors z-50"
      >
        <Activity size={20} />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/90 border-2 border-cyan-500 rounded-lg p-4 w-80 shadow-2xl z-50">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-cyan-300 font-mono text-sm font-bold">
          System Monitor
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-cyan-400 hover:text-cyan-300"
        >
          ✕
        </button>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <Cpu size={16} className="text-blue-400" />
          <div className="flex-1">
            <div className="flex justify-between text-xs">
              <span className="text-gray-300">CPU (AI Processing)</span>
              <span className="text-green-400">{metrics.aiProcessing.toFixed(1)}%</span>
            </div>
            <div className="bg-gray-800 rounded h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-blue-500 to-cyan-500 h-full transition-all duration-1000"
                style={{ width: `${metrics.aiProcessing}%` }}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Database size={16} className="text-purple-400" />
          <div className="flex-1">
            <div className="flex justify-between text-xs">
              <span className="text-gray-300">Memory (Vector DB)</span>
              <span className="text-green-400">{metrics.memory.toFixed(1)}%</span>
            </div>
            <div className="bg-gray-800 rounded h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-full transition-all duration-1000"
                style={{ width: `${metrics.memory}%` }}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Globe size={16} className="text-green-400" />
          <div className="flex-1">
            <div className="flex justify-between text-xs">
              <span className="text-gray-300">Network (API Calls)</span>
              <span className="text-green-400">{metrics.network.toFixed(1)}%</span>
            </div>
            <div className="bg-gray-800 rounded h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-green-500 to-emerald-500 h-full transition-all duration-1000"
                style={{ width: `${metrics.network}%` }}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Zap size={16} className="text-yellow-400" />
          <div className="flex-1">
            <div className="flex justify-between text-xs">
              <span className="text-gray-300">LeetCode Streak</span>
              <span className="text-green-400">{metrics.leetcodeStreak.toFixed(1)}%</span>
            </div>
            <div className="bg-gray-800 rounded h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-yellow-500 to-orange-500 h-full transition-all duration-1000"
                style={{ width: `${metrics.leetcodeStreak}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-700">
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div>
            <div className="text-cyan-400">Uptime</div>
            <div className="text-green-400 font-mono">99.9%</div>
          </div>
          <div>
            <div className="text-cyan-400">Documents/Day</div>
            <div className="text-green-400 font-mono">10K+</div>
          </div>
        </div>
      </div>
    </div>
  );
}