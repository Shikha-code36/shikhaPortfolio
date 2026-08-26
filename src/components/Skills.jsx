import React from "react";
import { SectionHeader } from "./shared/SectionHeader";

export const Skills = () => {
  const technicalStats = [
    { label: "cache_hit_focus", value: "core", description: "primary domain" },
    { label: "db_systems", value: "6+", description: "SQL & NoSQL" },
    { label: "languages", value: "8+", description: "in production use" },
    { label: "ai_ml_projects", value: "10+", description: "shipped" },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          file="skills.sql"
          title="Technical Stack"
          subtitle="SELECT * FROM skills WHERE domain IN ('backend', 'databases', 'ai');"
        />

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 border border-schema-border rounded-lg overflow-hidden mb-12">
          {technicalStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-5 py-5 bg-schema-raised min-w-0 ${
                i !== technicalStats.length - 1
                  ? "border-r border-schema-border"
                  : ""
              }`}
            >
              <div className="text-schema-faint text-[10px] uppercase tracking-wider mb-2 break-words">
                {stat.label}
              </div>
              <div className="text-2xl font-bold text-schema-accent mb-1">
                {stat.value}
              </div>
              <div className="text-schema-faint text-xs">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        <p className="text-schema-dim text-sm">
          <span className="text-schema-faint">core_stack: </span>
          Redis · PostgreSQL · MongoDB · Kafka · Python · Go · C++
        </p>
      </div>
    </section>
  );
};
