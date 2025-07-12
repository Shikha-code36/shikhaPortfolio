import React from 'react';
import { Award, TrendingUp, Users, Target } from 'lucide-react';

export const Achievements: React.FC = () => {
  const achievements = [
    {
      category: 'Professional Recognition',
      icon: Award,
      items: [
        'SPOT Award for outstanding performance and delivery',
        'Enterprise Client Success with Fortune 500 companies',
        'Technical Leadership in system architecture decisions',
        'Mentoring junior developers and team collaboration',
      ],
    },
    {
      category: 'Technical Achievements',
      icon: TrendingUp,
      items: [
        '500+ LeetCode Problems solved demonstrating algorithmic expertise',
        'Research Publication in AI/ML optimization strategies',
        'Open Source Contributions to developer community',
        'High-Performance Systems deployed in production environments',
      ],
    },
    {
      category: 'Business Impact',
      icon: Target,
      items: [
        'Enterprise-scale solutions serving millions of users',
        'Real-time systems processing high-frequency data',
        'AI/ML models deployed in production environments',
        'Startup ventures from concept to market launch',
      ],
    },
  ];

  const metrics = [
    { number: '5+', label: 'Years Experience', description: 'Professional software development' },
    { number: '2', label: 'Startups Founded', description: 'From concept to market' },
    { number: '500+', label: 'Problems Solved', description: 'LeetCode algorithmic challenges' },
    { number: '99.9%', label: 'System Uptime', description: 'Enterprise-grade reliability' },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Milestones & Impact
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="text-center bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 hover:scale-105 transition-all duration-300"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {metric.number}
              </div>
              <div className="text-white font-medium mb-1">{metric.label}</div>
              <div className="text-gray-400 text-sm">{metric.description}</div>
            </div>
          ))}
        </div>

        {/* Achievements Categories */}
        <div className="grid lg:grid-cols-3 gap-8">
          {achievements.map((category, index) => (
            <div
              key={category.category}
              className="group bg-gradient-to-br from-slate-800/30 to-slate-700/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 hover:bg-slate-700/50 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <category.icon size={24} className="text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {category.category}
                </h3>
              </div>
              
              <ul className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-gray-300 flex items-start group-hover:text-gray-200 transition-colors duration-300"
                  >
                    <span className="text-cyan-400 mr-3 mt-1 flex-shrink-0">🏆</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Recognition Section */}
        <div className="mt-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready for Senior Technical Leadership Roles
            </h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              With a proven track record of delivering enterprise-scale solutions, leading technical decisions, 
              and building successful products from the ground up, I'm positioned to take on senior architect, 
              CTO, or technical leadership roles where I can drive innovation and business impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8 mt-12">
            {[
              { icon: '🏗️', title: 'System Architect', desc: 'Enterprise-scale design' },
              { icon: '🤖', title: 'AI/ML Leader', desc: 'Production AI systems' },
              { icon: '🚀', title: 'Technical CTO', desc: 'Startup to enterprise' },
              { icon: '👥', title: 'Team Leader', desc: 'Mentoring & guidance' },
              { icon: '📈', title: 'Growth Driver', desc: 'Business impact focus' },
            ].map((role, index) => (
              <div key={role.title} className="text-center group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {role.icon}
                </div>
                <h4 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {role.title}
                </h4>
                <p className="text-gray-400 text-sm">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};