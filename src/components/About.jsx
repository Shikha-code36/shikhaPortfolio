import React from "react";
import { TrendingUp, Users, Palette, Award } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: TrendingUp,
      title: "High-Performance Systems",
      description:
        "Architecting scalable solutions that handle millions of events per second",
    },
    {
      icon: Users,
      title: "Enterprise Expertise",
      description:
        "Working with Fortune 500 clients including American Express",
    },
    {
      icon: Palette,
      title: "Creative Interests",
      description:
        "Exploring cinema, literature & music through Easel to Screen, and learning hip-hop in my free time",
    },
    {
      icon: Award,
      title: "Technical Leadership",
      description:
        "Leading architectural decisions and mentoring development teams",
    },
  ];

  const stats = [
    { number: "6+", label: "Years Experience" },
    { number: "500+", label: "LeetCode Problems" },
    { number: "10+", label: "Technologies Mastered" },
    { number: "50+", label: "Enterprise Clients Served" },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              The Story Behind the Code
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate software engineer with 6+ years of experience
              building scalable systems and architecting enterprise solutions.
              My expertise spans from high-frequency trading systems to
              AI-powered platforms, always focusing on performance, scalability,
              and business impact.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Currently working as a Software Engineer 2 at American Express,
              I focus on AI agent orchestration using MCP (Model Context
              Protocol), NLP pipelines, and intelligent automation for
              financial services. Previously, as a Senior Technical Consultant
              at EY, I specialized in designing microservices architectures,
              implementing AI/ML solutions, and building real-time data
              processing systems for Fortune 500 clients.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Beyond technical work, I have a creative side — I'm passionate
              about <strong className="text-cyan-400">Easel to Screen</strong>,
              a digital space where cinema, literature, and music converge,
              and in my free time, I've been learning hip-hop.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              This combination of technical expertise and creative curiosity
              allows me to build solutions that are not only scalable and
              efficient, but also meaningful and engaging for users.
            </p>
          </div>

          {/* Animated Statistics Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-400/40 hover:scale-105 transition-all duration-300"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={highlight.title}
              className="group bg-gradient-to-br from-slate-800/30 to-slate-700/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 hover:bg-slate-700/50 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <highlight.icon size={24} className="text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {highlight.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
