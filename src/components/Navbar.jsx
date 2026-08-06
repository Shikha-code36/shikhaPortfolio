import React, { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

export const Navbar = () => {
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
    { name: "about", href: "#about" },
    { name: "experience", href: "#experience" },
    { name: "projects", href: "#projects" },
    { name: "publications", href: "#publications" },
    { name: "skills", href: "#skills" },
    { name: "blog", href: "#blog" },
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
              <a
                href="https://drive.google.com/file/d/1ujPsybGbFD2Fi76lrvNHopD6jlYbZp0x/view"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-schema-accent text-[#052018] px-4 py-2 rounded text-sm font-semibold hover:opacity-90 transition-opacity duration-200 flex items-center space-x-2 ml-2"
              >
                <Download size={15} />
                <span>resume</span>
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-schema-dim hover:text-schema-accent p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-schema-bg/95 backdrop-blur-sm border-t border-schema-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
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
                href="https://drive.google.com/file/d/1ujPsybGbFD2Fi76lrvNHopD6jlYbZp0x/view"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-schema-accent text-[#052018] px-4 py-2 rounded text-sm font-semibold flex items-center space-x-2 mt-4 w-fit"
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
