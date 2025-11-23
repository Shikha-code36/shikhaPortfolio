export default function About() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 font-mono mb-8 border-b-2 border-cyan-500 pb-4">
        &gt; About Me_
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1 flex justify-center items-start">
          <div className="w-48 h-48 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg shadow-2xl shadow-cyan-500/50 flex items-center justify-center text-8xl">
            👩‍💻
          </div>
        </div>

        <div className="md:col-span-2 space-y-4 text-gray-300 leading-relaxed">
          <p className="text-lg">
            <span className="text-cyan-400 font-mono">&gt;</span> Hi, I'm <span className="text-cyan-300 font-bold">Shikha Pandey</span>,
            a Senior Technical Consultant & AI/ML Engineer with <span className="text-green-400 font-bold">5+ years</span> of enterprise experience.
          </p>

          <p>
            <span className="text-cyan-400 font-mono">&gt;</span> Currently working at <span className="text-green-400 font-bold">EY (American Express client)</span>,
            I specialize in enterprise-scale AI solutions, NLP pipelines, and intelligent automation using
            <span className="text-cyan-300"> GPT-4, LangChain, and FastAPI</span> microservices.
          </p>

          <p>
            <span className="text-cyan-400 font-mono">&gt;</span> I'm also the Co-Founder of 
            <span className="text-cyan-300"> HirelCube</span> - an AI-powered interview platform, and
            <span className="text-cyan-300"> Easel to Screen</span> - a digital convergence platform for creative communities.
          </p>

          <p>
            <span className="text-cyan-400 font-mono">&gt;</span> My expertise spans from enterprise Backend and GenAI solutions
            to high-performance systems, with proven success in processing <span className="text-green-400 font-bold">10,000+ documents daily</span>
            and achieving <span className="text-green-400 font-bold">99.9% system availability</span>.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <div className="bg-cyan-900/30 border border-cyan-500 px-4 py-2 rounded font-mono text-sm">
              <span className="text-green-400">Experience:</span> 5+ Years
            </div>
            <div className="bg-cyan-900/30 border border-cyan-500 px-4 py-2 rounded font-mono text-sm">
              <span className="text-green-400">Focus:</span> Enterprise AI/ML
            </div>
            <div className="bg-cyan-900/30 border border-cyan-500 px-4 py-2 rounded font-mono text-sm">
              <span className="text-green-400">Role:</span> Senior Consultant @ EY
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}