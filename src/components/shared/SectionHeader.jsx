import React from "react";

export const SectionHeader = ({ file, title, subtitle }) => (
  <div className="mb-12">
    <div className="text-schema-faint2 text-xs mb-2">-- {file}</div>
    <h2 className="text-3xl md:text-4xl font-bold text-schema-heading">
      {title}
    </h2>
    {subtitle && (
      <p className="text-schema-dim text-sm md:text-base mt-3 max-w-2xl">
        {subtitle}
      </p>
    )}
    <div className="h-px bg-schema-border mt-6" />
  </div>
);

export const Tag = ({ children, hot = false }) => (
  <span
    className={`text-xs px-2.5 py-1 rounded border font-mono ${
      hot
        ? "text-schema-accent border-schema-accentdim bg-schema-accentdim/10"
        : "text-schema-dim border-schema-border bg-schema-raised"
    }`}
  >
    {children}
  </span>
);

export const LinkButton = ({ href, children, primary = false }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-2 text-sm px-4 py-2.5 rounded border transition-colors duration-200 ${
      primary
        ? "bg-schema-accent text-[#052018] border-schema-accent font-semibold hover:opacity-90"
        : "text-schema-text border-schema-border bg-schema-raised hover:border-schema-accentdim hover:text-schema-accent"
    }`}
  >
    {children}
  </a>
);

export const Card = ({ children, className = "" }) => (
  <div
    className={`bg-schema-raised border border-schema-border rounded-lg hover:border-schema-accentdim transition-colors duration-300 ${className}`}
  >
    {children}
  </div>
);
