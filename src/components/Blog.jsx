import React from "react";
import { ExternalLink, Clock } from "lucide-react";
import { SectionHeader, Tag, LinkButton } from "./shared/SectionHeader";

export const Blog = () => {
  const featuredArticles = [
    {
      title: "A Two-Second-Stale Signal Is Almost as Bad as No Signal at All",
      link: "https://pandeyshikha075.medium.com/a-two-second-stale-signal-is-almost-as-bad-as-no-signal-at-all-0c53da7e4ca8",
      description:
        "Isolating whether server-side admission control works because of where the decision is made, or because of how fresh the information behind it is — turns out freshness is doing most of the work.",
      readTime: "6 min read",
      category: "Distributed Systems",
    },
    {
      title:
        "A Bigger Connection Pool Doesn't Soften Overload — It Just Moves the Cliff",
      link: "https://pandeyshikha075.medium.com/a-bigger-connection-pool-doesnt-soften-overload-it-just-moves-the-cliff-cce9303bfd27",
      description:
        "The collapse boundary scales exactly linearly with pool size — a bigger pool moves the collapse point but doesn't soften it, and success still falls to near 0% once you cross it.",
      readTime: "8 min read",
      category: "Distributed Systems",
    },
    {
      title:
        "I Built a Learned Cache Eviction Policy. A One-Line Formula From 1998 Beat It.",
      link: "https://pandeyshikha075.medium.com/i-built-a-learned-cache-eviction-policy-a-one-line-formula-from-1998-beat-it-11ea127a809b",
      description:
        "Training a dueling DQN to evict LLM semantic-cache entries, then benchmarking it against decades-old heuristics like GDSF — and being honest about where the learned policy actually wins.",
      readTime: "16 min read",
      category: "Caching",
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
                <Tag
                  hot={
                    article.category === "Distributed Systems" ||
                    article.category === "Caching"
                  }
                >
                  {article.category}
                </Tag>

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
