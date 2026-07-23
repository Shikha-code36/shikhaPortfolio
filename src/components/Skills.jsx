import React from "react";
import { Code, Database, Cloud, Brain, Settings, Layers } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      icon: Layers,
      title: "System Design & Architecture",
      skills: [
        "Microservices Architecture",
        "Distributed Systems Design",
        "Event-Driven Architecture",
        "High-Performance Computing",
        "API Design & Development",
        "Scalability Patterns",
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
        "Database: PostgreSQL, MongoDB, MySQL, Redis",
      ],
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      skills: [
        "LLM Integration: LangChain, OpenAI API, LLaMA",
        "Agent Tooling: MCP (Model Context Protocol), OpenBB, agent orchestration",
        "LLM Observability: Langfuse, mem0",
        "RAG Applications: Vector databases, FAISS, pgvector",
        "Deep Learning: PyTorch, CNN optimization",
        "Research: Reinforcement Learning, Neural Networks",
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
        "Infrastructure: Infrastructure as Code",
      ],
    },
    {
      icon: Database,
      title: "Data Engineering",
      skills: [
        "Streaming: Apache Kafka, real-time processing",
        "Orchestration: Apache Airflow, workflow management",
        "Graph Data: Apache AGE on PostgreSQL",
        "Communication: WebSocket, real-time systems",
        "ETL: Data pipelines, transformation",
      ],
    },
    {
      icon: Settings,
      title: "Technical Leadership",
      skills: [
        "Architecture Decision Making",
        "Code Review & Quality Assurance",
        "Team Mentoring & Guidance",
        "Project Planning & Execution",
        "Performance Optimization",
      ],
    },
  ];

  const technicalStats = [
    {
      label: "Programming Languages",
      value: "8+",
      description: "Languages used",
    },
    { label: "Cloud Platforms", value: "3", description: "AWS, GCP, Azure" },
    {
      label: "Database Systems",
      value: "6+",
      description: "SQL & NoSQL databases",
    },
    {
      label: "AI/ML Projects",
      value: "10+",
      description: "Production deployments",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Technical Arsenal
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
        </div>

        {/* Technical Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {technicalStats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 hover:scale-105 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-white font-medium mb-1">{stat.label}</div>
              <div className="text-gray-400 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group bg-gradient-to-br from-slate-800/30 to-slate-700/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 hover:bg-slate-700/50 transition-all duration-300 transform hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <category.icon size={24} className="text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-gray-300 flex items-start group-hover:text-gray-200 transition-colors duration-300"
                  >
                    <span className="text-cyan-400 mr-3 mt-1 flex-shrink-0">
                      •
                    </span>
                    <span className="leading-relaxed">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
