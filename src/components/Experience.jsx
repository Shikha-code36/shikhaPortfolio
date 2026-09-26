import React from "react";
import { Building, Calendar } from "lucide-react";
import { SectionHeader } from "./shared/SectionHeader";

export const Experience = () => {
  const corporateExperience = [
    {
      title: "Software Engineer II",
      company: "American Express",
      period: "Dec 2025 - Present",
      achievements: [
        "Cut integration time for internal LLM workflows by ~60% (from ~5-7 days to ~1 day across 15-18 teams) by building a custom MCP server that became the standard way workflows access contextual financial data",
        "Reduced LLM calls needed per query by ~70% by engineering a graph-based data layer using Apache AGE on PostgreSQL to model financial relationships previously infeasible to express relationally",
        "Root-caused a production connection-pool exhaustion bug under concurrent load (connections closed but never returned) and fixed it via dependency-injected connection lifecycle management",
        "Cut RAG response time from ~5-6 min to under 30 sec under heavy concurrent load with a two-layer cache (pgvector semantic cache + Redis embedding cache)",
        "Cut multi-step agent debugging time by ~60% by integrating Langfuse for LLM observability and mem0 for agent memory",
      ],
    },
    {
      title: "Senior Technical Consultant",
      company: "EY India",
      period: "Jul 2024 - Dec 2025",
      achievements: [
        "Cut time-to-insight for business analysts by ~65% by building an enterprise-scale NLP pipeline (OpenAI API + LangChain) letting them query financial data in plain English instead of hand-writing SQL/BigQuery, via Airflow-orchestrated workflows",
        "Reduced schema/metadata lookup time by ~50-60% by developing an enterprise-grade FastAPI microservice with pgvector-based retrieval",
        "Designed an AI metadata-intelligence platform aggregating dataset metadata from Collibra, BigQuery, and design docs, using LLM summarization to generate standardized YAML schemas",
        "Architected a safety layer for the platform's LLM-facing components handling hallucination mitigation and prompt-injection defense",
        "Owned the pipeline end-to-end from design through production rollout, becoming the primary point of contact for reliability and onboarding 8-12 new business teams",
      ],
    },
    {
      title: "Software Engineer",
      company: "NeoSoft Private Limited",
      period: "Oct 2023 - Jun 2024",
      achievements: [
        "Architected a production GenAI interview assessment platform using the OpenAI API and fine-tuned models, replacing manual first-round screening with automated real-time evaluation",
        "Deployed a Flask-based microservices platform on GCP handling high-concurrency interview sessions via Apache Kafka streaming, keeping evaluation latency low enough for real-time use",
        "Designed a hybrid MongoDB/DynamoDB data layer and an AWS SQS FIFO event pipeline so evaluations were processed in strict order with no lost events, secured via JWT",
      ],
    },
    {
      title: "Software Engineer",
      company: "Althea.AI",
      period: "Sept 2021 - Sept 2023",
      achievements: [
        "Led development of an intelligent document understanding system (OpenAI API + custom NLP) automating medical document classification, extraction, and duplicate detection that previously required manual review",
        "Engineered an asynchronous PDF processing pipeline using RabbitMQ, moving processing from a sequential bottleneck to parallel workflows across concurrent documents",
        "Built serverless components on AWS Lambda, S3, and SNS, and orchestrated containerized deployment with Docker and ECR on EC2, enabling zero-downtime releases",
      ],
    },
    {
      title: "Network Analyst",
      company: "Collabera (HCLTech)",
      period: "Jun 2020 - Aug 2021",
      achievements: [
        "Provided technical support for FedEx (US client), resolving incident tickets via the ServiceNow ITSM platform",
        "Developed strategies for navigating and retrieving from the internal knowledge base, improving resolution speed on recurring issues",
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
