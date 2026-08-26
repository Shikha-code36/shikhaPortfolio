import React from "react";
import { SectionHeader } from "./shared/SectionHeader";

const principles = [
  "I write down what broke, not just what shipped — SlimyBug exists because failure is data, not an incident to bury.",
  "I test the failure path before I trust the happy path — connection pools, retries, and cache evictions get load-tested before they ship.",
  "If a cache can go stale silently, it will — invalidation and eviction get designed up front, not patched in after the incident.",
  "Upstream fixes go back to the project, not just my fork — five of the merged PRs above weren't mine to keep.",
  "status: open_to_work means I say so plainly, not bury it in a footer.",
];

export const Principles = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
    <div className="max-w-6xl mx-auto">
      <SectionHeader file="principles.md" title="How I Work" />
      <ol className="space-y-4 max-w-3xl">
        {principles.map((line, i) => (
          <li
            key={i}
            className="flex items-start gap-4 text-schema-text text-sm leading-relaxed"
          >
            <span className="text-schema-accent font-mono text-xs mt-0.5 flex-shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span>{line}</span>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
