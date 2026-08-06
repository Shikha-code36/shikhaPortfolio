import React from "react";
import { Building, Calendar } from "lucide-react";
import { SectionHeader } from "./shared/SectionHeader";

export const Experience = () => {
  const corporateExperience = [
    {
      title: "Software Engineer 2",
      company: "American Express",
      period: "Dec 2025 - Present",
      achievements: [
        "Built and deployed a custom MCP (Model Context Protocol) server to orchestrate LLM workflows and manage contextual data interactions, enabling financial insights generation across enterprise systems",
        "Designed and developed an AI-powered agent using OpenBB for intelligent financial data analysis, using OpenAI API, LLaMA, and LangChain",
        "Engineered a graph-based data layer using Apache AGE on PostgreSQL to model and query complex relationships efficiently",
        "Integrated Langfuse for LLM observability and tracing, and mem0 for agent memory management",
        "Implemented end-to-end CI/CD pipelines using Jenkins and XL Release (XLR) for reliable, automated deployments",
      ],
    },
    {
      title: "Senior Technical Consultant",
      company: "EY India",
      period: "Jul 2024 - Dec 2025",
      achievements: [
        "Engineered enterprise-scale NLP pipeline using OpenAI API and LangChain for financial services",
        "Architected end-to-end intelligent automation solution with Airflow DAGs and LUMI Data Transformation",
        "Implemented advanced vector-based data retrieval system using pgvector",
        "Built robust security architecture with OAuth2 and role-based access control",
      ],
    },
    {
      title: "Software Engineer",
      company: "NeoSoft Private Limited",
      period: "Oct 2023 - Jun 2024",
      achievements: [
        "Engineered robust Flask-based microservices architecture on Google Cloud Platform",
        "Implemented WebSocket communication for real-time AI interview interactions",
        "Designed multi-model database architecture using MongoDB and DynamoDB",
        "Architected event-driven communication using AWS SQS FIFO queues",
      ],
    },
    {
      title: "Software Engineer",
      company: "Althea.AI",
      period: "Sept 2021 - Sept 2023",
      achievements: [
        "Architected high-performance Document Processing Microservice using FastAPI",
        "Implemented comprehensive error handling and logging system using Loguru",
        "Developed scalable web applications following Object-Oriented Design principles",
        "Worked on RAG applications employing advanced techniques and VectorDBs FAISS",
      ],
    },
    {
      title: "Network Analyst",
      company: "Collabera (HCL)",
      period: "Jun 2020 - Aug 2021",
      achievements: [
        "Optimized complex SQL queries and implemented advanced database indexing strategies, improving data retrieval efficiency",
        "Managed technical support operations using ServiceNow ITSM, implementing automated incident management workflows and standardized troubleshooting documentation",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          file="experience.log"
          title="Professional Journey"
          subtitle="A chronological log of roles, ordered most recent first."
        />

        <div className="space-y-6">
          {corporateExperience.map((job, index) => (
            <div
              key={index}
              className="bg-schema-raised border border-schema-border rounded-lg overflow-hidden hover:border-schema-accentdim transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between px-6 py-4 bg-schema-raised2 border-b border-schema-border gap-2">
                <div className="flex items-center gap-3">
                  <Building size={16} className="text-schema-accent flex-shrink-0" />
                  <div>
                    <span className="text-schema-heading font-semibold">
                      {job.title}
                    </span>
                    <span className="text-schema-faint2 mx-2">@</span>
                    <span className="text-schema-accent">{job.company}</span>
                  </div>
                </div>
                <div className="flex items-center text-schema-faint text-xs">
                  <Calendar size={13} className="mr-2" />
                  {job.period}
                </div>
              </div>

              <ul className="px-6 py-5 space-y-2.5">
                {job.achievements.map((achievement, achIndex) => (
                  <li
                    key={achIndex}
                    className="text-schema-dim text-sm flex items-start leading-relaxed"
                  >
                    <span className="text-schema-faint2 mr-3 mt-0.5 flex-shrink-0">
                      ├──
                    </span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
