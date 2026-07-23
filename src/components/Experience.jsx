import React from "react";
import { Building, Calendar } from "lucide-react";

export const Experience = () => {
  const corporateExperience = [
    {
      title: "Software Engineer 2",
      company: "American Express",
      period: "Dec 2025 - Present",
      type: "Corporate",
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
      type: "Corporate",
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
      type: "Corporate",
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
      type: "Corporate",
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
      type: "Corporate",
      achievements: [
        "Optimized complex SQL queries and implemented advanced database indexing strategies, improving data retrieval efficiency",
        "Managed technical support operations using ServiceNow ITSM, implementing automated incident management workflows and standardized troubleshooting documentation",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Professional Journey
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
        </div>

        {/* Corporate Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Building className="text-cyan-400 mr-3" size={28} />
            Corporate Experience
          </h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-400 hidden md:block"></div>

            {corporateExperience.map((job, index) => (
              <div key={index} className="relative mb-12 md:ml-16">
                {/* Timeline Dot */}
                <div className="absolute -left-16 top-6 w-3 h-3 bg-cyan-400 rounded-full border-4 border-slate-900 hidden md:block"></div>

                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {job.title}
                      </h4>
                      <p className="text-cyan-400 font-medium">{job.company}</p>
                    </div>
                    <div className="flex items-center text-gray-400 mt-2 md:mt-0">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm">{job.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {job.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="text-gray-300 flex items-start"
                      >
                        <span className="text-cyan-400 mr-2 mt-2">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
