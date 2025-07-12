import React, { useState, useEffect } from "react";
import { ExternalLink, Calendar, Clock } from "lucide-react";

export const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Featured articles with full details
  const featuredArticles = [
    {
      title: "Building a Real-Time Cryptocurrency Arbitrage Detection System",
      link: "https://pandeyshikha075.medium.com/building-a-real-time-cryptocurrency-arbitrage-detection-system-lessons-from-high-frequency-trading-be1e8151268b",
      description:
        "Lessons from high-frequency trading and real-time system architecture for cryptocurrency arbitrage detection.",
      readTime: "8 min read",
      category: "System Architecture",
    },
    {
      title: "Optimizing Deep Learning with Early Exit Strategies",
      link: "https://pandeyshikha075.medium.com/optimizing-deep-learning-with-early-exit-strategies-a-reinforcement-learning-approach-59938ceb01ba",
      description:
        "A reinforcement learning approach to improve CNN computational efficiency without compromising accuracy.",
      readTime: "12 min read",
      category: "AI/ML Research",
    },
    {
      title: "A Step-by-Step Guide to Building a Monitoring System",
      link: "https://pandeyshikha075.medium.com/a-step-by-step-guide-to-building-a-monitoring-system-with-flask-and-sqlalchemy-85e909bf75d9",
      description:
        "Complete guide to building a production-ready monitoring system using Flask and SQLAlchemy.",
      readTime: "10 min read",
      category: "Backend Development",
    },
  ];

  useEffect(() => {
    // Since we can't directly fetch from Medium RSS due to CORS,
    // we'll show the featured articles and a link to Medium profile
    setLoading(false);
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      "System Architecture": "bg-blue-500/20 text-blue-300 border-blue-500/30",
      "AI/ML Research": "bg-purple-500/20 text-purple-300 border-purple-500/30",
      "Backend Development":
        "bg-green-500/20 text-green-300 border-green-500/30",
      "Data Engineering":
        "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    };
    return (
      colors[category] || "bg-gray-500/20 text-gray-300 border-gray-500/30"
    );
  };

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Sharing Knowledge with the Community
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full mb-8"></div>

          <a
            href="https://pandeyshikha075.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
          >
            <span className="text-2xl">📖</span>
            <span className="text-lg font-medium">@pandeyshikha075</span>
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Featured Articles */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <span className="text-2xl mr-3">⭐</span>
            Featured Articles
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <article
                key={index}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl overflow-hidden hover:border-cyan-400/40 hover:scale-105 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(
                        article.category
                      )}`}
                    >
                      {article.category}
                    </span>
                  </div>

                  <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h4>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {article.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                  >
                    <span>Read on Medium</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Writing Topics */}
        <div className="bg-gradient-to-br from-slate-800/30 to-slate-700/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Writing Topics & Expertise
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🏗️",
                title: "System Architecture",
                topics: [
                  "Microservices",
                  "Distributed Systems",
                  "Scalability",
                  "Performance",
                ],
              },
              {
                icon: "🤖",
                title: "AI & Machine Learning",
                topics: [
                  "Deep Learning",
                  "LLM Integration",
                  "RAG Systems",
                  "Model Optimization",
                ],
              },
              {
                icon: "⚡",
                title: "High-Performance Computing",
                topics: [
                  "Real-time Systems",
                  "Low Latency",
                  "Optimization",
                  "Concurrency",
                ],
              },
              {
                icon: "📊",
                title: "Data Engineering",
                topics: [
                  "Streaming",
                  "ETL Pipelines",
                  "Data Architecture",
                  "Analytics",
                ],
              },
            ].map((topic, index) => (
              <div
                key={topic.title}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="text-3xl mb-3">{topic.icon}</div>
                <h4 className="text-white font-semibold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {topic.title}
                </h4>
                <div className="space-y-1">
                  {topic.topics.map((t, tIndex) => (
                    <span
                      key={tIndex}
                      className="inline-block px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-xs mr-1 mb-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to Read More?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Follow my Medium blog for in-depth technical articles, tutorials,
              and insights from building real-world systems. I share practical
              knowledge from enterprise projects and research.
            </p>
            <a
              href="https://pandeyshikha075.medium.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            >
              <span>Follow on Medium</span>
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
