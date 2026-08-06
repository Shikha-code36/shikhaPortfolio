import React from "react";
import { Award, TrendingUp, Target } from "lucide-react";
import { SectionHeader, Card } from "./shared/SectionHeader";

export const Achievements = () => {
  const achievements = [
    {
      category: "Professional Recognition",
      icon: Award,
      items: [
        "SPOT Award for outstanding performance and delivery",
        "Technical Leadership in system architecture decisions",
        "Mentoring junior developers and team collaboration",
      ],
    },
    {
      category: "Technical Achievements",
      icon: TrendingUp,
      items: [
        "LeetCode Knight — top-tier contest rank, 500+ problems solved",
        "Research Publication in AI/ML optimization strategies",
        "Open Source Contributions to developer community",
        "High-Performance Systems deployed in production environments",
      ],
    },
    {
      category: "Business Impact",
      icon: Target,
      items: [
        "Real-time systems processing high-frequency data",
        "AI/ML models deployed in production environments",
        "Enterprise automation solutions for financial services",
      ],
    },
  ];

  const metrics = [
    {
      number: "6+",
      label: "years_experience",
      description: "Professional software development",
    },
    {
      number: "Knight",
      label: "leetcode_rank",
      description: "500+ problems solved",
    },
  ];

  const roles = [
    { title: "System Architect", desc: "Enterprise-scale design" },
    { title: "AI/ML Leader", desc: "Production AI systems" },
    { title: "Technical CTO", desc: "Idea to production" },
    { title: "Team Leader", desc: "Mentoring & guidance" },
    { title: "Growth Driver", desc: "Business impact focus" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader file="milestones.log" title="Milestones & Impact" />

        <div className="grid grid-cols-2 gap-4 mb-16 max-w-xl">
          {metrics.map((metric) => (
            <Card key={metric.label} className="p-6">
              <div className="text-3xl font-bold text-schema-accent mb-2">
                {metric.number}
              </div>
              <div className="text-schema-heading text-sm font-medium mb-1">
                {metric.label}
              </div>
              <div className="text-schema-faint text-xs">
                {metric.description}
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-4">
          {achievements.map((category) => (
            <Card key={category.category} className="p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded border border-schema-border flex items-center justify-center flex-shrink-0">
                  <category.icon size={18} className="text-schema-accent" />
                </div>
                <h3 className="text-schema-heading font-semibold text-sm">
                  {category.category}
                </h3>
              </div>

              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-schema-dim text-sm flex items-start"
                  >
                    <span className="text-schema-faint2 mr-2.5 mt-0.5 flex-shrink-0">
                      ├──
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-10 bg-schema-raised rounded-lg p-8 border border-schema-border">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-schema-heading mb-3">
              Ready for Senior Technical Leadership Roles
            </h3>
            <p className="text-schema-dim text-sm max-w-3xl mx-auto leading-relaxed">
              With a proven track record of delivering enterprise-scale
              solutions, leading technical decisions, and building successful
              products from the ground up, I'm positioned to take on senior
              architect, CTO, or technical leadership roles where I can drive
              innovation and business impact.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-10">
            {roles.map((role) => (
              <div key={role.title} className="text-center">
                <h4 className="text-schema-heading font-semibold text-sm mb-1">
                  {role.title}
                </h4>
                <p className="text-schema-faint text-xs">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
