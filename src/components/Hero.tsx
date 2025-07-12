import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, FileText } from 'lucide-react';

export const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Senior Software Engineer & System Architect';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    { number: '5+', label: 'Years Experience', suffix: '' },
    { number: '500+', label: 'LeetCode Problems', suffix: '' },
    { number: '2', label: 'Startups Founded', suffix: '' },
    { number: '500', label: 'Fortune 500 Client', suffix: '' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Shikha-code36', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/36-shikha-pandey/', label: 'LinkedIn' },
    { icon: FileText, href: 'https://pandeyshikha075.medium.com/', label: 'Medium' },
    { icon: Mail, href: 'mailto:shikha.py36@gmail.com', label: 'Email' },
  ];

  const handleScrollToProjects = () => {
    const element = document.querySelector('#projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative">
      <div className="max-w-6xl mx-auto text-center">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                {typedText}
              </span>
              <span className="animate-pulse">|</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Building Scalable Solutions for Enterprise & Startups
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              5+ years crafting high-performance systems • AI/ML Integration Specialist<br />
              Microservices Architecture Expert • Entrepreneur & Technical Leader
            </p>
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group hover:scale-105 transition-transform duration-300"
                style={{
                  animationDelay: `${index * 200}ms`,
                  animation: 'slideUp 0.8s ease-out forwards',
                }}
              >
                <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl hover:border-cyan-400/40 hover:bg-slate-700/50 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon 
                  size={24} 
                  className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" 
                />
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={handleScrollToProjects}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl text-lg font-medium hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/25"
            >
              View My Work
            </button>
            <a
              href="https://drive.google.com/file/d/1FZedxZQdWLE4jJf7WqTh93PNn7xXC9YX/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-xl text-lg font-medium hover:bg-cyan-500 hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-cyan-400" />
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </section>
  );
};