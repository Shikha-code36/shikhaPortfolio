import React from "react";
import { FileText } from "lucide-react";
import { SectionHeader, LinkButton } from "./shared/SectionHeader";

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
        { label: "Read on Zenodo", href: "https://zenodo.org/records/21643364" },
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
    <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          file="publications.bib"
          title="Research & Publications"
        />

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-schema-raised border border-schema-border rounded-lg overflow-hidden hover:border-schema-accentdim transition-colors duration-300 p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded border border-schema-border flex items-center justify-center flex-shrink-0">
                  <FileText size={18} className="text-schema-accent" />
                </div>
                <span className="text-sm text-schema-accent font-medium">
                  {pub.venue} · {pub.date}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-schema-heading mb-4">
                {pub.title}
              </h3>

              <p className="text-schema-dim mb-4 leading-relaxed text-sm">
                {pub.description}
              </p>

              <div className="mb-6 p-4 bg-schema-raised2 rounded-lg border border-schema-border">
                <h4 className="text-xs uppercase tracking-wider text-schema-accent mb-2">
                  -- key_finding
                </h4>
                <p className="text-schema-dim text-sm italic leading-relaxed">
                  "{pub.finding}"
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {pub.links.map((link) => (
                  <LinkButton key={link.label} href={link.href}>
                    {link.label}
                  </LinkButton>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
