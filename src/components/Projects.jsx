import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { SectionHeader, Tag, LinkButton } from "./shared/SectionHeader";

export const Projects = () => {
  const projects = [
    {
      category: "Distributed Systems",
      hot: true,
      status: "actively building",
      project: {
        title: "SlimyBug - Overload Experimentation for Distributed Systems",
        description:
          "Reproducible failure-injection lab that finds where a real service stops degrading gracefully, and why — connection pool saturation, retry amplification, circuit breakers, and admission control, measured end to end.",
        techStack: [
          "Python",
          "FastAPI",
          "PostgreSQL",
          "asyncpg",
          "Toxiproxy",
          "k6",
          "Docker Compose",
        ],
        features: [
          "Real request path: k6 load generator → Service A (retry client + circuit breaker) → Service B (bounded connection pool) → Toxiproxy-injected latency → PostgreSQL",
          "10 closed experiments quantifying the connection-pool collapse boundary and how it shifts with pool size, retries, jitter, and admission control",
          "Server-side admission control cut client-visible errors by roughly half versus a client-side circuit breaker at the same load",
          "Reference-grade replication runs (30-50 repeated runs per claim) to separate a real effect from a lucky single run",
        ],
        github: "https://github.com/Shikha-code36/slimybug",
        impact:
          "A minimal circuit breaker cut load reaching a saturated database dependency by up to ~44% and client-visible errors by up to ~61 points — every recovery probe succeeded, confirming the collapse is a queueing effect, not a hard failure",
      },
    },
    {
      category: "High-Performance Systems",
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
      category: "Caching & AI",
      hot: true,
      project: {
        title: "SmartEvict - Learned Cache Eviction for LLM Semantic Caches",
        description:
          "Cost-aware learned eviction policy for LLM semantic caches, replacing recency-based LRU/FIFO with a lightweight dueling DQN model",
        techStack: [
          "Python",
          "Reinforcement Learning",
          "FAISS",
          "GPTCache",
          "NumPy",
          "Sentence Transformers",
        ],
        features: [
          "Cold-RL adapted from CDN cache learning to semantic prompt-response caching",
          "Lightweight dueling DQN policy engine (~9.5K parameters) trained offline",
          "Cost-aware eviction using regeneration tokens, hit frequency, and staleness ratio",
          "Deterministic LRU fallback on inference errors for production safety",
          "Benchmarked on synthetic traffic and real LMSYS-Chat-1M traces against LRU and GDSF baselines",
        ],
        github:
          "https://github.com/Shikha-code36/SmartEvict-Semantic-Cache-Eviction",
        impact:
          "Learned policy retained up to +16.7% more regeneration tokens than LRU on real LMSYS-Chat-1M traces, demonstrating that cost-aware caching can meaningfully cut redundant LLM inference",
      },
    },
    {
      category: "AI & Machine Learning",
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
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          file="projects.sql"
          title="Innovation in Action"
          subtitle="Systems built end-to-end — from low-latency engines to learned caching policies."
        />

        <div className="space-y-6">
          {projects.map((item, index) => (
            <div
              key={index}
              className="bg-schema-raised border border-schema-border rounded-lg overflow-hidden hover:border-schema-accentdim transition-colors duration-300"
            >
              <div className="px-6 py-4 bg-schema-raised2 border-b border-schema-border">
                <div className="flex flex-wrap items-center gap-2">
                  <Tag hot={item.hot}>{item.category}</Tag>
                  {item.status && (
                    <span className="inline-flex items-center gap-1.5 text-xs text-schema-accent">
                      <span className="w-1.5 h-1.5 rounded-full bg-schema-accent animate-pulse" />
                      {item.status}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-schema-heading mt-3">
                  {item.project.title}
                </h3>
                <p className="text-schema-dim text-sm mt-2 leading-relaxed">
                  {item.project.description}
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 px-6 py-6">
                <div>
                  <h5 className="text-xs uppercase tracking-wider text-schema-faint mb-3">
                    tech_stack
                  </h5>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.project.techStack.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>

                  <h5 className="text-xs uppercase tracking-wider text-schema-faint mb-3">
                    key_features
                  </h5>
                  <ul className="space-y-2">
                    {item.project.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-schema-dim text-sm flex items-start"
                      >
                        <span className="text-schema-faint2 mr-2 mt-0.5">
                          ├──
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {item.project.github && (
                      <LinkButton href={item.project.github}>
                        <Github size={16} />
                        <span>GitHub</span>
                      </LinkButton>
                    )}
                    {item.project.website && (
                      <LinkButton href={item.project.website}>
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </LinkButton>
                    )}
                    {item.project.blog && (
                      <LinkButton href={item.project.blog}>
                        <span>Blog Post</span>
                      </LinkButton>
                    )}
                  </div>

                  <div className="p-4 bg-schema-raised2 rounded-lg border border-schema-border">
                    <h5 className="text-xs uppercase tracking-wider text-schema-accent mb-2">
                      -- impact
                    </h5>
                    <p className="text-schema-dim text-sm italic leading-relaxed">
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
