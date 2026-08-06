import React from "react";
import {
  Package,
  Globe,
  Sparkles,
  PackageCheck,
  ExternalLink,
} from "lucide-react";
import { SectionHeader } from "./shared/SectionHeader";

export const EcosystemPresence = () => {
  const platforms = [
    {
      icon: PackageCheck,
      name: "PyPI",
      description:
        "Official Python package index — a published, pip-installable package",
      href: "https://pypi.org/project/competitivepython/",
      linkLabel: "competitivepython",
    },
    {
      icon: Package,
      name: "pkg.go.dev",
      description: "Official Go package index for public Go modules",
      href: "https://pkg.go.dev/github.com/Shikha-code36/golang-tutorial-practice",
      linkLabel: "golang-tutorial-practice",
    },
    {
      icon: Globe,
      name: "Ecosyste.ms",
      description: "Open-source repository metadata and ecosystem indexing",
      href: "https://repos.ecosyste.ms/hosts/GitHub/repositories/Shikha-code36%2Fearly-exit-cnn",
      linkLabel: "early-exit-cnn",
    },
    {
      icon: Sparkles,
      name: "Awesome Ecosyste.ms",
      description: "Repository included in curated ecosystem listings",
      href: "https://awesome.ecosyste.ms/projects/github.com%2Fshikha-code36%2Fassembly-arm-tutorial",
      linkLabel: "assembly-arm-tutorial",
    },
  ];

  const listings = [
    {
      title: "competitivepython",
      href: "https://pypi.org/project/competitivepython/",
      source: "PyPI",
    },
    {
      title: "assembly-arm-tutorial",
      href: "https://awesome.ecosyste.ms/projects/github.com%2Fshikha-code36%2Fassembly-arm-tutorial",
      source: "Awesome Ecosyste.ms",
    },
    {
      title: "object-oriented-programming-oops-python",
      href: "https://awesome.ecosyste.ms/projects/github.com%2Fshikha-code36%2Fobject-oriented-programming-oops-python",
      source: "Awesome Ecosyste.ms · classes-and-object",
    },
    {
      title: "golang-tutorial-practice",
      href: "https://pkg.go.dev/github.com/Shikha-code36/golang-tutorial-practice",
      source: "pkg.go.dev",
    },
    {
      title: "early-exit-cnn",
      href: "https://repos.ecosyste.ms/hosts/GitHub/repositories/Shikha-code36%2Fearly-exit-cnn",
      source: "Ecosyste.ms",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          file="ecosystem.json"
          title="Ecosystem Presence"
          subtitle="Open-source work discoverable across independent developer ecosystems — indexed and cataloged beyond GitHub itself."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-schema-raised border border-schema-border rounded-lg p-5 hover:border-schema-accentdim transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded border border-schema-border flex items-center justify-center flex-shrink-0">
                  <platform.icon size={17} className="text-schema-accent" />
                </div>
                <h3 className="text-schema-heading text-sm font-semibold">
                  {platform.name}
                </h3>
              </div>
              <p className="text-schema-faint text-xs leading-relaxed mb-3">
                {platform.description}
              </p>
              <div className="flex items-center gap-1 text-schema-accent text-xs font-medium">
                <span>{platform.linkLabel}</span>
                <ExternalLink size={12} />
              </div>
            </a>
          ))}
        </div>

        <div className="bg-schema-raised rounded-lg p-6 md:p-8 border border-schema-border">
          <h3 className="text-sm uppercase tracking-wider text-schema-faint mb-6">
            indexed_projects
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            {listings.map((listing) => (
              <a
                key={listing.title}
                href={listing.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-schema-raised2 border border-schema-soft rounded-lg px-4 py-3 hover:border-schema-accentdim transition-colors duration-300"
              >
                <div className="min-w-0 pr-2">
                  <div className="text-schema-text text-sm font-medium truncate">
                    {listing.title.replace(/-/g, " ")}
                  </div>
                  <div className="text-schema-faint2 text-xs">
                    {listing.source}
                  </div>
                </div>
                <ExternalLink
                  size={14}
                  className="text-schema-faint flex-shrink-0"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
