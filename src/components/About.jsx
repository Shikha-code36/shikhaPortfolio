import React from "react";
import {
  TrendingUp,
  Users,
  Palette,
  Award,
  Layers,
  Bot,
  Zap,
  GitBranch,
} from "lucide-react";
import { SectionHeader, Card } from "./shared/SectionHeader";

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
        "Building AI agent tooling and financial automation systems at American Express",
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

  const expertise = [
    {
      icon: Layers,
      title: "System Design",
      description: "Distributed & microservices architecture",
    },
    {
      icon: Bot,
      title: "AI Agent Tooling",
      description: "MCP, LangChain, agent orchestration",
    },
    {
      icon: Zap,
      title: "Caching & DB Internals",
      description: "Low-latency reads, cache eviction, indexing",
    },
    {
      icon: GitBranch,
      title: "Open Source",
      description: "Published packages & indexed repos",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          file="about.md"
          title="The Story Behind the Code"
          subtitle="6+ years building the systems that sit between a request and the data it needs."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-5 text-schema-dim leading-relaxed">
            <p>
              I'm a backend engineer with 6+ years of experience building
              scalable systems and architecting enterprise solutions. My
              expertise spans from high-frequency trading systems to
              AI-powered platforms — but the thread that runs through all of
              it is a deep interest in{" "}
              <strong className="text-schema-accent">
                databases, caching, and distributed systems
              </strong>
              : how data is stored, indexed, evicted, and served fast — and
              what actually happens to a system under real load. It's why I
              spend my free time running failure-injection experiments in{" "}
              <a
                href="https://github.com/Shikha-code36/slimybug"
                target="_blank"
                rel="noopener noreferrer"
                className="text-schema-accent hover:underline"
              >
                SlimyBug
              </a>
              , a lab for finding exactly where a service stops degrading
              gracefully — connection pool saturation, retry amplification,
              circuit breakers, admission control — and why.
            </p>
            <p>
              Currently working as a Software Engineer 2 at American Express,
              I build a custom MCP (Model Context Protocol) server for AI
              agent orchestration, an OpenBB-powered financial insights agent,
              and a graph-based data layer using Apache AGE. Previously, as a
              Senior Technical Consultant at EY, I specialized in designing
              microservices architectures, implementing AI/ML solutions, and
              building real-time data processing systems for enterprise
              clients.
            </p>
            <p>
              Beyond technical work, I have a creative side — I'm passionate
              about{" "}
              <strong className="text-schema-accent">Easel to Screen</strong>,
              a digital space where cinema, literature, and music converge,
              and in my free time, I've been learning hip-hop.
            </p>
            <p>
              This combination of technical depth and creative curiosity
              allows me to build systems that are not only fast and reliable,
              but meaningful for the people who use them.
            </p>
          </div>

          {/* Core Expertise */}
          <div className="grid grid-cols-2 gap-3">
            {expertise.map((item) => (
              <Card key={item.title} className="p-5">
                <item.icon size={20} className="text-schema-accent mb-3" />
                <div className="text-schema-heading font-medium text-sm mb-1">
                  {item.title}
                </div>
                <div className="text-schema-faint text-xs leading-relaxed">
                  {item.description}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((highlight) => (
            <Card key={highlight.title} className="p-6">
              <div className="w-10 h-10 rounded border border-schema-border flex items-center justify-center mb-4">
                <highlight.icon size={18} className="text-schema-accent" />
              </div>
              <h3 className="text-schema-heading font-semibold mb-2">
                {highlight.title}
              </h3>
              <p className="text-schema-faint text-sm leading-relaxed">
                {highlight.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
