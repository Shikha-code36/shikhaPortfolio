export default function Skills() {
  const skillCategories = [
    {
      title: 'Generative AI & LLMs',
      skills: ['GPT-3.5/4', 'Claude API', 'LangChain', 'Prompt Engineering', 'Fine-tuning'],
      color: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Enterprise AI/ML',
      skills: ['NLP Pipelines', 'Vector Embeddings', 'RAG Systems', 'TensorFlow', 'PyTorch'],
      color: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'Backend & APIs',
      skills: ['FastAPI', 'Flask', 'Django', 'Microservices', 'OAuth2'],
      color: 'from-purple-500 to-pink-600',
    },
    {
      title: 'Cloud & Infrastructure',
      skills: ['AWS (EC2, Lambda, SQS)', 'Google Cloud', 'Docker', 'Apache Kafka', 'Apache Airflow'],
      color: 'from-orange-500 to-red-600',
    },
    {
      title: 'Databases & Vector Search',
      skills: ['PostgreSQL', 'MongoDB', 'pgvector', 'FAISS', 'ChromaDB'],
      color: 'from-yellow-500 to-amber-600',
    },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 font-mono mb-8 border-b-2 border-cyan-500 pb-4">
        &gt; Technical Skills_
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="bg-gray-900/50 border-2 border-cyan-700 rounded-lg p-6 hover:border-cyan-500 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <h3 className="text-xl font-bold text-cyan-300 mb-4 font-mono flex items-center gap-2">
              <span className="text-green-400">&gt;</span>
              {category.title}
            </h3>

            <div className="space-y-3">
              {category.skills.map((skill, skillIdx) => (
                <div key={skillIdx} className="flex items-center gap-3">
                  <div className="flex-1 bg-gray-800 rounded-full h-8 overflow-hidden border border-cyan-900">
                    <div
                      className={`h-full bg-gradient-to-r ${category.color} flex items-center px-3 text-xs font-mono text-white font-bold transition-all duration-1000`}
                      style={{
                        width: `${85 + Math.random() * 15}%`,
                        animation: `slideIn 1s ease-out ${skillIdx * 0.1}s both`,
                      }}
                    >
                      {skill}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            width: 0%;
          }
        }
      `}</style>
    </div>
  );
}