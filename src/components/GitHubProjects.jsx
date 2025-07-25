import React, { useState, useEffect } from "react";
import {
  Github,
  Star,
  GitFork,
  ExternalLink,
  Calendar,
  ArrowRight,
} from "lucide-react";

export const GitHubProjects = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchRepositories();
  }, []);

  const fetchRepositories = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/users/Shikha-code36/repos?sort=updated&per_page=10"
      );
      const data = await response.json();
      setRepositories(data);
    } catch (error) {
      console.error("Error fetching repositories:", error);
    } finally {
      setLoading(false);
    }
  };

  // Get top 5 most starred repositories
  const topStarredRepos = repositories
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 5);

  const languages = [
    "all",
    ...new Set(repositories.map((repo) => repo.language).filter(Boolean)),
  ];

  const filteredRepos = repositories.filter((repo) => {
    if (filter === "all") return true;
    return repo.language === filter;
  });

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
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto"></div>
          <p className="text-gray-400 mt-4">Loading GitHub projects...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Open Source & Development
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full mb-8"></div>

          <a
            href="https://github.com/Shikha-code36"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
          >
            <Github size={24} />
            <span className="text-lg font-medium">@Shikha-code36</span>
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Top Starred Repositories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Star className="text-yellow-400 mr-3" size={24} />
            Most Starred Projects
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {topStarredRepos.map((repo, index) => (
              <div
                key={repo.id}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-cyan-400">
                      #{index + 1}
                    </span>
                    <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                      {repo.name.replace(/-/g, " ")}
                    </h4>
                  </div>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex-shrink-0"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>

                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {repo.description || "No description available"}
                </p>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    {repo.language && (
                      <div className="flex items-center space-x-1">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{
                            backgroundColor: getLanguageColor(repo.language),
                          }}
                        ></div>
                        <span className="text-gray-400">{repo.language}</span>
                      </div>
                    )}

                    <div className="flex items-center space-x-1 text-yellow-400">
                      <Star size={14} />
                      <span className="font-medium">
                        {repo.stargazers_count}
                      </span>
                    </div>

                    <div className="flex items-center space-x-1 text-gray-400">
                      <GitFork size={14} />
                      <span>{repo.forks_count}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1 text-gray-400">
                    <Calendar size={12} />
                    <span className="text-xs">
                      {formatDate(repo.updated_at)}
                    </span>
                  </div>
                </div>

                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-3">
                    {repo.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-xs"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* View All Repositories CTA */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Explore All My Projects
              </h3>
              <p className="text-gray-300 mb-6">
                Discover all my repositories covering everything
                from AI/ML research to enterprise solutions, data engineering,
                and system architecture.
              </p>
              <a
                href="https://github.com/Shikha-code36?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 group"
              >
                <Github size={20} />
                <span>View All Repositories</span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Language Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setFilter(lang)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === lang
                  ? "bg-cyan-500 text-white"
                  : "bg-slate-800/50 text-gray-400 hover:bg-slate-700/50 hover:text-cyan-400"
              }`}
            >
              {lang === "all" ? "All" : lang}
            </button>
          ))}
        </div>

        {/* All Repositories */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Github className="text-gray-400 mr-3" size={24} />
            Featured Repositories
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {filteredRepos.slice(0, 12).map((repo) => (
              <div
                key={repo.id}
                className="group bg-gradient-to-r from-slate-800/30 to-slate-700/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-300 flex-1 pr-2">
                    {repo.name.replace(/-/g, " ")}
                  </h4>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>

                <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                  {repo.description || "No description available"}
                </p>

                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-3">
                    {repo.language && (
                      <div className="flex items-center space-x-1">
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{
                            backgroundColor: getLanguageColor(repo.language),
                          }}
                        ></div>
                        <span className="text-gray-400">{repo.language}</span>
                      </div>
                    )}

                    <div className="flex items-center space-x-1 text-gray-400">
                      <Star size={12} />
                      <span>{repo.stargazers_count}</span>
                    </div>

                    <div className="flex items-center space-x-1 text-gray-400">
                      <GitFork size={12} />
                      <span>{repo.forks_count}</span>
                    </div>
                  </div>

                  <span className="text-gray-500">
                    {formatDate(repo.updated_at)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredRepos.length > 12 && (
            <div className="text-center mt-8">
              <a
                href="https://github.com/Shikha-code36?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                <span>View {filteredRepos.length - 12} more repositories</span>
                <ArrowRight size={16} />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
