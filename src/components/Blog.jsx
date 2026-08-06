import React from "react";
import { ExternalLink, Clock } from "lucide-react";
import { SectionHeader, Tag, LinkButton } from "./shared/SectionHeader";

export const Blog = () => {
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

  const writingTopics = [
    {
      title: "Caching & Databases",
      topics: ["Eviction Policies", "Indexing", "pgvector", "Redis"],
    },
    {
      title: "System Architecture",
      topics: ["Microservices", "Distributed Systems", "Scalability"],
    },
    {
      title: "AI & Machine Learning",
      topics: ["Deep Learning", "LLM Integration", "RAG Systems"],
    },
    {
      title: "High-Performance Computing",
      topics: ["Real-time Systems", "Low Latency", "Concurrency"],
    },
  ];

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          file="blog.md"
          title="Sharing Knowledge with the Community"
        />

        <a
          href="https://pandeyshikha075.medium.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-schema-accent hover:opacity-80 transition-opacity duration-300 mb-14 text-sm"
        >
          <span>@pandeyshikha075</span>
          <ExternalLink size={14} />
        </a>

        <div className="mb-16">
          <h3 className="text-lg font-semibold text-schema-heading mb-6">
            Featured Articles
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredArticles.map((article, index) => (
              <article
                key={index}
                className="bg-schema-raised border border-schema-border rounded-lg p-5 hover:border-schema-accentdim transition-colors duration-300 flex flex-col"
              >
                <Tag>{article.category}</Tag>

                <h4 className="text-schema-heading text-base font-semibold my-3 leading-snug">
                  {article.title}
                </h4>

                <p className="text-schema-faint text-xs mb-4 leading-relaxed flex-1">
                  {article.description}
                </p>

                <div className="flex items-center gap-1.5 text-schema-faint2 text-xs mb-4">
                  <Clock size={13} />
                  <span>{article.readTime}</span>
                </div>

                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-schema-accent hover:opacity-80 transition-opacity duration-300 text-sm font-medium"
                >
                  <span>Read on Medium</span>
                  <ExternalLink size={14} />
                </a>
              </article>
            ))}
          </div>
        </div>

        <div className="bg-schema-raised border border-schema-border rounded-lg p-6 md:p-8">
          <h3 className="text-sm uppercase tracking-wider text-schema-faint mb-6 text-center">
            writing_topics
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {writingTopics.map((topic) => (
              <div key={topic.title}>
                <h4 className="text-schema-heading text-sm font-semibold mb-3">
                  {topic.title}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {topic.topics.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <div className="bg-schema-raised rounded-lg p-8 border border-schema-border">
            <h3 className="text-lg font-semibold text-schema-heading mb-3">
              Want to Read More?
            </h3>
            <p className="text-schema-dim text-sm mb-6 max-w-2xl mx-auto">
              Follow my Medium blog for in-depth technical articles,
              tutorials, and insights from building real-world systems.
            </p>
            <LinkButton href="https://pandeyshikha075.medium.com/" primary>
              <span>Follow on Medium</span>
              <ExternalLink size={16} />
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
};
