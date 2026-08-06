import React, { useState, useEffect } from "react";
import {
  Github,
  Star,
  GitFork,
  ExternalLink,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { SectionHeader, LinkButton } from "./shared/SectionHeader";

const PINNED_REPO_NAMES = [
  "early-exit-cnn",
  "SmartEvict-Semantic-Cache-Eviction",
  "assembly-ARM-tutorial",
  "ArbiSim-A-Real-Time-Arbitrage-Detection-System",
  "brinkline",
  "golang-crud-rest-api-gin",
];

export const GitHubProjects = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRepositories();
  }, []);

  const fetchRepositories = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/users/Shikha-code36/repos?sort=updated&per_page=100"
      );
      const data = await response.json();
      setRepositories(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching repositories:", error);
    } finally {
      setLoading(false);
    }
  };

  const topStarredRepos = [...repositories]
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 5);

  const pinnedRepos = PINNED_REPO_NAMES.map((name) =>
    repositories.find((repo) => repo.name === name)
  ).filter(Boolean);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getLanguageColor = (language) => {
    const colors = {
      Python: "#3776ab",
      JavaScript: "#f1e05a",
      TypeScript: "#2b7489",
      "C++": "#f34b7d",
      Java: "#b07219",
      Go: "#00ADD8",
      HTML: "#e34c26",
      CSS: "#1572B6",
      Jupyter: "#DA5B0B",
    };
    return colors[language] || "#6b7280";
  };

  if (loading) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-schema-accent mx-auto"></div>
          <p className="text-schema-faint mt-4 text-sm">
            $ git clone --loading...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader file="github.log" title="Open Source & Development" />

        <a
          href="https://github.com/Shikha-code36"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-schema-accent hover:opacity-80 transition-opacity duration-300 mb-14 text-sm"
        >
          <Github size={18} />
          <span>@Shikha-code36</span>
          <ExternalLink size={14} />
        </a>

        {/* Top Starred Repositories */}
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-schema-heading mb-6 flex items-center">
            <Star className="text-schema-amber mr-2" size={18} />
            Most Starred
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {topStarredRepos.map((repo, index) => (
              <div
                key={repo.id}
                className="bg-schema-raised border border-schema-border rounded-lg p-5 hover:border-schema-accentdim transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-sm font-bold text-schema-accent flex-shrink-0">
                      #{index + 1}
                    </span>
                    <h4 className="text-schema-heading text-sm font-medium truncate">
                      {repo.name.replace(/-/g, " ")}
                    </h4>
                  </div>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-schema-faint hover:text-schema-accent transition-colors duration-300 flex-shrink-0"
                  >
                    <ExternalLink size={15} />
                  </a>
                </div>

                <p className="text-schema-faint text-xs mb-4 line-clamp-3 leading-relaxed">
                  {repo.description || "No description available"}
                </p>

                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    {repo.language && (
                      <div className="flex items-center gap-1.5">
                        <div
                          className="w-2.5 h-2.5 rounded-full"
                          style={{
                            backgroundColor: getLanguageColor(repo.language),
                          }}
                        ></div>
                        <span className="text-schema-faint">
                          {repo.language}
                        </span>
                      </div>
                    )}
                    <div className="flex items-center gap-1 text-schema-amber">
                      <Star size={12} />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-1 text-schema-faint">
                      <GitFork size={12} />
                      <span>{repo.forks_count}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-schema-faint2">
                    <Calendar size={11} />
                    <span>{formatDate(repo.updated_at)}</span>
                  </div>
                </div>

                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {repo.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-0.5 border border-schema-border text-schema-dim rounded text-[10px]"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-schema-raised rounded-lg p-8 border border-schema-border text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-schema-heading mb-3">
                Explore All Repositories
              </h3>
              <p className="text-schema-dim text-sm mb-6">
                Everything from AI/ML research to enterprise solutions, data
                engineering, and system architecture.
              </p>
              <LinkButton
                href="https://github.com/Shikha-code36?tab=repositories"
                primary
              >
                <Github size={18} />
                <span>View All Repositories</span>
                <ArrowRight size={15} />
              </LinkButton>
            </div>
          </div>
        </div>

        {/* Pinned Repositories */}
        <div>
          <h3 className="text-lg font-semibold text-schema-heading mb-3 flex items-center">
            <Github className="text-schema-faint mr-2" size={18} />
            Pinned Repositories
          </h3>

          <p className="text-schema-faint text-sm mb-6">
            Repos I've pinned on GitHub — many more cover AI/ML research,
            tutorials, and experiments.
          </p>

          <div className="grid md:grid-cols-2 gap-3">
            {pinnedRepos.map((repo) => (
              <div
                key={repo.id}
                className="bg-schema-raised border border-schema-soft rounded-lg p-4 hover:border-schema-accentdim transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-schema-heading text-sm font-medium flex-1 pr-2">
                    {repo.name.replace(/-/g, " ")}
                  </h4>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-schema-faint hover:text-schema-accent transition-colors duration-300"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>

                <p className="text-schema-faint text-xs mb-3 line-clamp-2">
                  {repo.description || "No description available"}
                </p>

                <div className="flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-3">
                    {repo.language && (
                      <div className="flex items-center gap-1">
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{
                            backgroundColor: getLanguageColor(repo.language),
                          }}
                        ></div>
                        <span className="text-schema-faint">
                          {repo.language}
                        </span>
                      </div>
                    )}
                    <div className="flex items-center gap-1 text-schema-faint">
                      <Star size={11} />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-1 text-schema-faint">
                      <GitFork size={11} />
                      <span>{repo.forks_count}</span>
                    </div>
                  </div>
                  <span className="text-schema-faint2">
                    {formatDate(repo.updated_at)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://github.com/Shikha-code36?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-schema-accent hover:opacity-80 transition-opacity duration-300 text-sm"
            >
              <span>View all repositories on GitHub</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
