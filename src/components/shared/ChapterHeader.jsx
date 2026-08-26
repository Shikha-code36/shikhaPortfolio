import React from "react";

export const ChapterHeader = ({ id, index, title, subtitle }) => (
  <div id={id} className="pt-24 pb-4 px-4 sm:px-6 lg:px-8 relative">
    <div className="max-w-6xl mx-auto">
      <div className="flex items-baseline gap-4 border-b border-schema-border pb-6">
        <span className="text-schema-accent text-sm font-mono">{index}</span>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-schema-heading">
            {title}
          </h2>
          {subtitle && (
            <p className="text-schema-dim text-sm mt-1.5 max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  </div>
);
