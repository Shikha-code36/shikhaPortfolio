import React from "react";
import { Code, Database, Cloud, Brain, Settings, Layers } from "lucide-react";
import { SectionHeader } from "./shared/SectionHeader";

export const Skills = () => {
  const skillCategories = [
    {
      icon: Database,
      title: "Databases & Caching",
      skills: [
        "PostgreSQL, MongoDB, MySQL — schema design & indexing",
        "Redis, Memcached — multi-layer caching strategies",
        "Cache eviction policies: LRU/LFU, cost-aware, learned (DQN)",
        "pgvector, FAISS — vector-based retrieval",
        "Apache AGE — graph data layer on PostgreSQL",
      ],
    },
    {
      icon: Layers,
      title: "Distributed Systems",
      skills: [
        "Failure injection & chaos engineering: Toxiproxy, k6",
        "Connection pool saturation, retry amplification, backoff & jitter",
        "Circuit breakers & admission control",
        "Microservices & event-driven architecture",
        "Reproducible load experiments with replicated runs",
      ],
    },
    {
      icon: Code,
      title: "Programming & Frameworks",
      skills: [
        "Python: FastAPI, Flask, Django",
        "Go: High-performance backends",
        "C++: System programming, HFT",
        "JavaScript/TypeScript: Full-stack",
      ],
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      skills: [
        "LLM Integration: LangChain, OpenAI API, LLaMA",
        "Agent Tooling: MCP, OpenBB, agent orchestration",
        "LLM Observability: Langfuse, mem0",
        "Deep Learning: PyTorch, CNN optimization",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: [
        "AWS: EC2, S3, Lambda, SQS",
        "GCP: Cloud platform services",
        "Containerization: Docker, Kubernetes",
        "CI/CD: Jenkins, XL Release (XLR)",
      ],
    },
    {
      icon: Settings,
      title: "Data Engineering & Leadership",
      skills: [
        "Streaming: Apache Kafka, real-time processing",
        "Orchestration: Apache Airflow",
        "Architecture Decision Making",
        "Team Mentoring & Code Review",
      ],
    },
  ];

  const technicalStats = [
    { label: "cache_hit_focus", value: "core", description: "primary domain" },
    { label: "db_systems", value: "6+", description: "SQL & NoSQL" },
    { label: "languages", value: "8+", description: "in production use" },
    { label: "ai_ml_projects", value: "10+", description: "shipped" },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          file="skills.sql"
          title="Technical Stack"
          subtitle="SELECT * FROM skills WHERE domain IN ('backend', 'databases', 'ai');"
        />

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 border border-schema-border rounded-lg overflow-hidden mb-12">
          {technicalStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-5 py-5 bg-schema-raised min-w-0 ${
                i !== technicalStats.length - 1
                  ? "border-r border-schema-border"
                  : ""
              }`}
            >
              <div className="text-schema-faint text-[10px] uppercase tracking-wider mb-2 break-words">
                {stat.label}
              </div>
              <div className="text-2xl font-bold text-schema-accent mb-1">
                {stat.value}
              </div>
              <div className="text-schema-faint text-xs">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Skills as schema table */}
        <div className="border border-schema-border rounded-lg overflow-hidden">
          <div className="hidden md:grid grid-cols-[220px_1fr] text-xs uppercase tracking-wider text-schema-faint bg-schema-raised2 border-b border-schema-border">
            <div className="px-5 py-3 border-r border-schema-border">
              category
            </div>
            <div className="px-5 py-3">skills</div>
          </div>
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="grid grid-cols-1 md:grid-cols-[220px_1fr] border-b border-schema-soft last:border-b-0 bg-schema-raised"
            >
              <div className="px-5 py-4 md:border-r border-schema-soft flex items-start gap-2.5 min-w-0">
                <category.icon
                  size={16}
                  className="text-schema-accent mt-0.5 flex-shrink-0"
                />
                <span className="text-schema-heading text-sm font-medium break-words">
                  {category.title}
                </span>
              </div>
              <div className="px-5 py-4 flex flex-wrap gap-2 min-w-0">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1.5 rounded border border-schema-border text-schema-dim break-words"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
