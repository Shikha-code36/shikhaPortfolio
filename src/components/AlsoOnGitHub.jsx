import React from "react";
import { Star, ExternalLink } from "lucide-react";

const repos = [
  {
    name: "assembly-ARM-tutorial",
    href: "https://github.com/Shikha-code36/assembly-ARM-tutorial",
    description: "A beginner's guide to ARM assembly language.",
    language: "Assembly",
    stars: 47,
  },
  {
    name: "golang-crud-rest-api-gin",
    href: "https://github.com/Shikha-code36/golang-crud-rest-api-gin",
    description: "Implementation of REST APIs in Go using Gin.",
    language: "Go",
    stars: 2,
  },
];

export const AlsoOnGitHub = () => (
  <div className="px-4 sm:px-6 lg:px-8 relative">
    <div className="max-w-6xl mx-auto">
      <h5 className="text-xs uppercase tracking-wider text-schema-faint mb-3">
        also on github
      </h5>
      <div className="grid sm:grid-cols-2 gap-3">
        {repos.map((repo) => (
          <a
            key={repo.name}
            href={repo.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-3 px-4 py-3 bg-schema-raised border border-schema-border rounded-lg hover:border-schema-accentdim transition-colors duration-200"
          >
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-schema-heading text-sm font-medium">
                {repo.name}
                <ExternalLink size={12} className="text-schema-faint flex-shrink-0" />
              </div>
              <p className="text-schema-dim text-xs mt-1 break-words">
                {repo.description}
              </p>
            </div>
            <div className="flex items-center gap-3 text-schema-faint text-xs flex-shrink-0">
              <span>{repo.language}</span>
              <span className="flex items-center gap-1">
                <Star size={12} />
                {repo.stars}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </div>
);
