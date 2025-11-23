import { Experience } from '../../types';

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      title: 'Senior Technical Consultant - EY (American Express)',
      description: 'Engineered enterprise-scale NLP pipeline using GPT-4 and LangChain for financial services. Built intelligent automation solution with Airflow DAGs. Developed FastAPI microservices with GCP integration and vector-based data retrieval using pgvector.',
      period: 'July 2024 - Present',
    },
    {
      title: 'Software Engineer - NeoSoft Private Limited',
      description: 'Architected GenAI interview assessment platform using GPT-4 and custom fine-tuned models. Built Flask-based microservices on GCP handling 100,000+ concurrent connections. Implemented Apache Kafka real-time streaming with sub-100ms latency.',
      period: 'Oct 2023 - June 2024',
    },
    {
      title: 'Software Engineer - Althea.AI (Previously Wisteli Informatics)',
      description: 'Led intelligent document understanding using GPT-3.5/4 for medical documents with 99.2% accuracy. Processed 10,000+ healthcare documents daily with advanced prompt engineering. Built scalable healthcare infrastructure serving 50,000+ patients.🏆 SPOT Award recipient.',
      period: 'Sept 2021 - Sept 2023',
    },
    {
      title: 'Software Engineer - Scaleup',
      description: 'Built high-performance Django + PostgreSQL backend for 100,000+ daily active users. Developed automated testing infrastructure with 95% code coverage. Integrated payment gateways and logistics APIs improving conversion by 25%.',
      period: 'July 2021 - Sept 2021',
    },
    {
      title: 'Network Analyst - HCL Technologies',
      description: 'Optimized SQL queries achieving 30x performance improvement (3s to 100ms page loads). Managed ServiceNow ITSM resolving 500+ critical issues monthly with 99.2% SLA. Implemented automated incident management reducing resolution time by 60%.',
      period: 'June 2020 - July 2021',
    },
    {
      title: 'Co-Founder - HirelCube.com',
      description: 'AI-powered interview platform for comprehensive job preparation. Complete backend architecture with AI integration for assessment. Real-time communication systems and scalable microservices. 🚀 LeetCode Knight with 500+ problems solved.',
      period: '2023 - Present',
    },
    {
      title: 'Founder - Easel to Screen',
      description: 'Digital convergence platform for cinema, literature & music. Community for passionate discussions and collaborative exploration. Built scalable platform architecture serving creative communities worldwide.',
      period: '2023 - Present',
    },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 font-mono mb-8 border-b-2 border-cyan-500 pb-4">
        &gt; Experience_
      </h2>

      {/* Key Statistics Banner */}
      <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border-2 border-cyan-500 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-bold text-cyan-300 mb-4 font-mono">
          &gt; Key Performance Metrics_
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">5+</div>
            <div className="text-xs text-gray-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">500+</div>
            <div className="text-xs text-gray-300">LeetCode Problems</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">10K+</div>
            <div className="text-xs text-gray-300">DocumentsProcessed/Day</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">99.9%</div>
            <div className="text-xs text-gray-300">System Availability</div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-green-500 to-purple-500"></div>

        <div className="space-y-8 pl-8 md:pl-20">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-8 md:-left-20 top-2 w-4 h-4 rounded-full bg-cyan-500 border-4 border-black group-hover:scale-125 transition-transform"></div>

              <div className="bg-gray-900/50 border-2 border-cyan-700 rounded-lg p-6 hover:border-cyan-500 transition-all hover:shadow-lg hover:shadow-cyan-500/20">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 gap-2">
                  <h3 className="text-xl font-bold text-cyan-300 group-hover:text-cyan-200 transition-colors">
                    {exp.title}
                  </h3>
                  <span className="text-green-400 font-mono text-sm flex-shrink-0">
                    {exp.period}
                  </span>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="bg-gray-900/50 border-2 border-cyan-700 rounded-lg p-6 mt-8">
        <h3 className="text-xl font-bold text-cyan-300 mb-4 font-mono">
          &gt; Achievements & Recognition_
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-cyan-400 font-mono text-sm mb-2">Professional Awards:</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>🏆 SPOT Award - Althea</li>
              <li>🎯 Fortune 500 client success (American Express)</li>
              <li>⚡ 30x SQL performance improvement</li>
              <li>🔄 70% reduction in processing time</li>
            </ul>
          </div>
          <div>
            <h4 className="text-cyan-400 font-mono text-sm mb-2">Technical Achievements:</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>🏅 LeetCode Knight (500+ problems)</li>
              <li>📦 PyPI published package</li>
              <li>📚 Technical writing on Medium</li>
              <li>🚀 99.2% healthcare AI accuracy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}