import React from "react";
import { ExternalLink, FileText } from "lucide-react";

export const Publications = () => {
  const publications = [
    {
      title:
        "SmartEvict: An Empirical Study of Learned and Heuristic Eviction Policies for Semantic LLM Caches",
      venue: "Zenodo Preprint",
      date: "July 2026",
      description:
        "Compares a lightweight learned (dueling DQN) eviction policy against cost-aware heuristics (LRU, FIFO, GDSF, CostWeightedRecency) for semantic LLM caches, evaluated on synthetic traffic and real LMSYS-Chat-1M traces.",
      finding:
        "Cost-aware policies—learned and heuristic alike—consistently outperform recency-only baselines, but strong heuristics like GDSF remain highly competitive with, and often exceed, the learned policy. Eviction policy choice should depend on measurable workload characteristics such as reuse density and cache pressure.",
      links: [
        { label: "Read on Zenodo", href: "https://zenodo.org/records/21553138" },
        {
          label: "Read the Blog Post",
          href: "https://pandeyshikha075.medium.com/i-built-a-learned-cache-eviction-policy-a-one-line-formula-from-1998-beat-it-11ea127a809b?sharedUserId=pandeyshikha075",
        },
        {
          label: "View Code",
          href: "https://github.com/Shikha-code36/SmartEvict-Semantic-Cache-Eviction",
        },
      ],
    },
  ];

  return (
    <section
      id="publications"
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Research & Publications
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-800/30 to-slate-700/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 hover:bg-slate-700/50 transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <FileText size={22} className="text-cyan-400" />
                </div>
                <div>
                  <span className="text-sm text-cyan-400 font-medium">
                    {pub.venue} · {pub.date}
                  </span>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                {pub.title}
              </h3>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {pub.description}
              </p>

              <div className="mb-6 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20">
                <h4 className="text-sm font-semibold text-cyan-400 mb-2">
                  Key Finding
                </h4>
                <p className="text-gray-300 text-sm italic leading-relaxed">
                  "{pub.finding}"
                </p>
              </div>

              <div className="flex flex-wrap gap-6">
                {pub.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <span>{link.label}</span>
                    <ExternalLink size={16} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
