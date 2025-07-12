import React from "react";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      category: "High-Performance Systems",
      emoji: "🚀",
      project: {
        title: "ArbiSim - Cryptocurrency Arbitrage Detection",
        description:
          "Real-time arbitrage detection system with microsecond precision",
        techStack: [
          "C++",
          "WebSocket",
          "Financial APIs",
          "Real-time Processing",
          "High-frequency Trading",
        ],
        features: [
          "Low-latency C++ engine for maximum performance",
          "Multi-exchange integration (5+ exchanges)",
          "Live trading dashboard with real-time visualization",
          "Algorithmic trading with microsecond precision",
        ],
        github:
          "https://github.com/Shikha-code36/ArbiSim-A-Real-Time-Arbitrage-Detection-System",
        blog: "https://pandeyshikha075.medium.com/building-a-real-time-cryptocurrency-arbitrage-detection-system-lessons-from-high-frequency-trading-be1e8151268b",
        impact:
          "Detecting arbitrage opportunities across multiple exchanges with microsecond precision",
      },
    },
    {
      category: "Entrepreneurial Ventures",
      emoji: "💼",
      project: {
        title: "MoksahMetrics - CRM Platform",
        description:
          "No-fluff, easy-to-use CRM tool designed specifically for solopreneurs",
        techStack: [
          "React",
          "Node.js",
          "PostgreSQL",
          "API Integration",
          "SaaS",
        ],
        features: [
          "Client timeline management system",
          "Calendar synchronization & integrations",
          "Workflow automations & triggers",
          "Invoice tracking & financial management",
          "Simplified UX for individual entrepreneurs",
        ],
        website: "https://mokshametrics.com/",
        impact:
          "Empowering solopreneurs with streamlined business management tools",
      },
    },
    {
      category: "AI & Machine Learning",
      emoji: "🤖",
      project: {
        title: "Early Exit CNN Research",
        description:
          "Research project on optimizing CNN efficiency using Reinforcement Learning",
        techStack: [
          "PyTorch",
          "Deep Learning",
          "Reinforcement Learning",
          "CNN Optimization",
        ],
        features: [
          "Early exit strategies in neural networks",
          "Reinforcement Learning optimization",
          "Computational efficiency improvements",
          "Academic contribution to AI/ML community",
        ],
        github: "https://github.com/Shikha-code36/early-exit-cnn",
        blog: "https://pandeyshikha075.medium.com/optimizing-deep-learning-with-early-exit-strategies-a-reinforcement-learning-approach-59938ceb01ba",
        impact:
          "Contributing novel optimization strategies to AI/ML research community",
      },
    },
    {
      category: "Enterprise Solutions",
      emoji: "🏢",
      project: {
        title: "HirelCube - AI Interview Platform",
        description:
          "Complete AI-powered mock interview platform for job preparation",
        techStack: [
          "FastAPI",
          "Microservices",
          "AI Integration",
          "Real-time Systems",
        ],
        features: [
          "Complete backend architecture design",
          "AI integration for interview assessment",
          "Real-time communication systems",
          "Scalable microservices deployment",
          "User management & analytics systems",
        ],
        website: "https://hirelcube.com/",
        impact:
          "Enabling AI-powered interview preparation for thousands of job seekers",
      },
    },
    {
      category: "Data Engineering",
      emoji: "📊",
      project: {
        title: "Real-time Data Streaming Pipeline",
        description:
          "Enterprise-scale data processing system with high-throughput capabilities",
        techStack: [
          "Apache Kafka",
          "Apache Airflow",
          "Python",
          "ETL",
          "Real-time Processing",
        ],
        features: [
          "High-throughput data streaming (millions of events/second)",
          "Fault-tolerant system design",
          "Scalable pipeline architecture",
          "Real-time analytics & monitoring",
          "Enterprise-grade reliability (99.9% uptime)",
        ],
        impact:
          "Processing millions of events per second with enterprise-grade reliability",
      },
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Innovation in Action
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12">
          {projects.map((item, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-800/30 to-slate-700/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 hover:bg-slate-700/50 transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{item.emoji}</span>
                  <h3 className="text-xl font-semibold text-cyan-400">
                    {item.category}
                  </h3>
                </div>

                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {item.project.title}
                </h4>

                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {item.project.description}
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-lg font-semibold text-white mb-3">
                    Tech Stack
                  </h5>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h5 className="text-lg font-semibold text-white mb-3">
                    Key Features
                  </h5>
                  <ul className="space-y-2">
                    {item.project.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-gray-300 flex items-start"
                      >
                        <span className="text-cyan-400 mr-2 mt-1">├──</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="space-y-4">
                    {item.project.github && (
                      <a
                        href={item.project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                      >
                        <Github size={20} />
                        <span>View on GitHub</span>
                        <ExternalLink size={16} />
                      </a>
                    )}

                    {item.project.website && (
                      <a
                        href={item.project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                        <span>Live Demo</span>
                      </a>
                    )}

                    {item.project.blog && (
                      <a
                        href={item.project.blog}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                      >
                        <span>📖</span>
                        <span>Read Blog Post</span>
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20">
                    <h5 className="text-sm font-semibold text-cyan-400 mb-2">
                      Impact
                    </h5>
                    <p className="text-gray-300 text-sm italic">
                      "{item.project.impact}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
