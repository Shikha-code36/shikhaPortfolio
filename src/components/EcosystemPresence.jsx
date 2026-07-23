import React from "react";
import { Package, Globe, Sparkles, PackageCheck, ExternalLink } from "lucide-react";

export const EcosystemPresence = () => {
  const platforms = [
    {
      icon: PackageCheck,
      name: "PyPI",
      description: "Official Python package index — a published, pip-installable package",
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Ecosystem Presence
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            My open-source work is discoverable across independent developer
            ecosystems — indexed, cataloged, and surfaced beyond GitHub
            itself.
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <platform.icon size={22} className="text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {platform.name}
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {platform.description}
              </p>
              <div className="flex items-center space-x-1 text-cyan-400 text-sm font-medium">
                <span>{platform.linkLabel}</span>
                <ExternalLink size={14} />
              </div>
            </a>
          ))}
        </div>

        {/* Indexed Listings */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
          <h3 className="text-xl font-semibold text-white mb-6 text-center">
            Indexed Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {listings.map((listing) => (
              <a
                key={listing.title}
                href={listing.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between bg-slate-800/40 border border-gray-700/50 rounded-lg px-4 py-3 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="min-w-0 pr-2">
                  <div className="text-white text-sm font-medium group-hover:text-cyan-400 transition-colors duration-300 truncate">
                    {listing.title.replace(/-/g, " ")}
                  </div>
                  <div className="text-gray-500 text-xs">{listing.source}</div>
                </div>
                <ExternalLink
                  size={16}
                  className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300 flex-shrink-0"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
