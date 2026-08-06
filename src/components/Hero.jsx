import React, { useEffect, useState } from "react";
import { ChevronDown, Github, Linkedin, Mail, FileText } from "lucide-react";

export const Hero = () => {
  const [typedRole, setTypedRole] = useState("");
  const fullRole = "Backend Engineer — Databases, Caching & Distributed Systems";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullRole.length) {
        setTypedRole(fullRole.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 35);

    return () => clearInterval(timer);
  }, []);

  const socialLinks = [
    { icon: Github, href: "https://github.com/Shikha-code36", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/36-shikha-pandey/",
      label: "LinkedIn",
    },
    {
      icon: FileText,
      href: "https://pandeyshikha075.medium.com/",
      label: "Medium",
    },
    { icon: Mail, href: "mailto:shikha.py36@gmail.com", label: "Email" },
  ];

  const handleScrollToProjects = () => {
    const element = document.querySelector("#projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative">
      <div className="max-w-4xl mx-auto w-full animate-fade-in">
        <div className="text-schema-faint2 text-sm mb-3">-- portfolio.sql</div>
        <div className="text-schema-dim text-sm mb-1">
          <span className="text-schema-red">CREATE TABLE</span>{" "}
          <span className="text-schema-amber">engineers</span> (
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-schema-heading mt-6 mb-1">
          Shikha Pandey
        </h1>
        <p className="text-lg md:text-xl text-schema-accent mb-8 min-h-[1.75rem]">
          {typedRole}
          <span className="caret-blink text-schema-accent">|</span>
        </p>

        <div className="border border-schema-border rounded-lg overflow-hidden mb-8">
          <div className="grid grid-cols-3 text-xs uppercase tracking-wider text-schema-faint bg-schema-raised2 border-b border-schema-border">
            <div className="px-4 py-2 border-r border-schema-border">column</div>
            <div className="px-4 py-2 border-r border-schema-border">type</div>
            <div className="px-4 py-2">value</div>
          </div>
          {[
            ["experience_yrs", "int", "6"],
            ["primary_focus", "varchar", "caching, databases, distributed systems"],
            ["stack", "text[]", "Redis · PostgreSQL · MongoDB · Kafka"],
            ["domain", "varchar", "enterprise & AI systems"],
            [
              "currently_building",
              "varchar",
              "slimybug — failure injection for distributed systems",
              "https://github.com/Shikha-code36/slimybug",
            ],
            ["status", "enum", "open_to_work"],
          ].map(([col, type, val, href]) => (
            <div
              key={col}
              className="grid grid-cols-3 text-sm border-b border-schema-soft last:border-b-0"
            >
              <div className="px-4 py-2.5 border-r border-schema-soft text-schema-accent">
                {col}
              </div>
              <div className="px-4 py-2.5 border-r border-schema-soft text-schema-amber">
                {type}
              </div>
              <div className="px-4 py-2.5 text-schema-text">
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-schema-accent hover:underline"
                  >
                    {val} ↗
                  </a>
                ) : (
                  val
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="text-schema-dim text-sm mb-10">);</div>

        {/* Social Links */}
        <div className="flex flex-wrap gap-3 mb-10">
          <a
            href="https://drive.google.com/file/d/1ujPsybGbFD2Fi76lrvNHopD6jlYbZp0x/view"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-schema-accent text-[#052018] px-6 py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity duration-200"
          >
            ↓ Resume
          </a>
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 bg-schema-raised border border-schema-border rounded-lg text-schema-dim hover:border-schema-accentdim hover:text-schema-accent transition-colors duration-200 text-sm"
            >
              <social.icon size={16} />
              <span className="hidden sm:inline">{social.label}</span>
            </a>
          ))}
        </div>

        <button
          onClick={handleScrollToProjects}
          className="flex items-center gap-2 text-schema-faint hover:text-schema-accent transition-colors duration-200 text-sm"
        >
          <ChevronDown size={18} className="animate-bounce" />
          scroll for experience &amp; projects
        </button>
      </div>
    </section>
  );
};
