import React, { useState, useEffect } from "react";
import { Menu, X, Download, Sun, Network, Moon } from "lucide-react";

const THEME_MODES = [
  { key: "light", label: "Light", Icon: Sun },
  { key: "mesh", label: "Mesh", Icon: Network },
  { key: "dark", label: "Dark", Icon: Moon },
];

export const Navbar = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "build", href: "#build" },
    { name: "write", href: "#write" },
    { name: "presence", href: "#presence" },
    { name: "contact", href: "#contact" },
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-schema-bg/95 backdrop-blur-sm border-b border-schema-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-sm font-medium text-schema-text">
              <span className="text-schema-accent">shikha</span>
              <span className="text-schema-faint">@dev:~$</span>
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-schema-dim hover:text-schema-accent px-3 py-2 text-sm transition-colors duration-200"
                >
                  <span className="text-schema-faint2">$ cd </span>
                  {item.name}
                </button>
              ))}
              <div
                role="group"
                aria-label="Theme"
                className="flex items-center gap-0.5 border border-schema-border rounded p-0.5 bg-schema-raised ml-2"
              >
                {THEME_MODES.map((mode) => (
                  <button
                    key={mode.key}
                    type="button"
                    onClick={() => setTheme(mode.key)}
                    aria-pressed={theme === mode.key}
                    aria-label={mode.label}
                    title={mode.label}
                    className={`p-1.5 rounded transition-colors duration-200 ${
                      theme === mode.key
                        ? "bg-schema-bg text-schema-accent"
                        : "text-schema-faint hover:text-schema-dim"
                    }`}
                  >
                    <mode.Icon size={14} />
                  </button>
                ))}
              </div>
              <a
                href="https://drive.google.com/file/d/1R5lPkgsGQnjwcdVgaGucGvW0M8NvoKMw/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-schema-accent text-schema-oncolor px-4 py-2 rounded text-sm font-semibold hover:opacity-90 transition-opacity duration-200 flex items-center space-x-2 ml-2"
              >
                <Download size={15} />
                <span>resume</span>
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <div
              role="group"
              aria-label="Theme"
              className="flex items-center gap-0.5 border border-schema-border rounded p-0.5 bg-schema-raised"
            >
              {THEME_MODES.map((mode) => (
                <button
                  key={mode.key}
                  type="button"
                  onClick={() => setTheme(mode.key)}
                  aria-pressed={theme === mode.key}
                  aria-label={mode.label}
                  title={mode.label}
                  className={`p-1.5 rounded transition-colors duration-200 ${
                    theme === mode.key
                      ? "bg-schema-bg text-schema-accent"
                      : "text-schema-faint hover:text-schema-dim"
                  }`}
                >
                  <mode.Icon size={14} />
                </button>
              ))}
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="text-schema-dim hover:text-schema-accent p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-schema-bg/95 backdrop-blur-sm border-t border-schema-border">
            <div className="px-2 pt-3 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-schema-dim hover:text-schema-accent block px-3 py-2 text-sm w-full text-left"
                >
                  <span className="text-schema-faint2">$ cd </span>
                  {item.name}
                </button>
              ))}
              <a
                href="https://drive.google.com/file/d/1R5lPkgsGQnjwcdVgaGucGvW0M8NvoKMw/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-schema-accent text-schema-oncolor px-4 py-2 rounded text-sm font-semibold flex items-center space-x-2 mt-4 w-fit"
              >
                <Download size={15} />
                <span>resume</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
