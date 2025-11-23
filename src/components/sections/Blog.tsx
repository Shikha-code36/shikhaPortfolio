import { ExternalLink } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      title: 'Building a Real-Time Cryptocurrency Arbitrage Detection System',
      date: 'October 2024',
      excerpt: 'Lessons from high-frequency trading: Advanced systems programming and financial technology for processing 10,000+ price updates per second...',
      link: 'https://pandeyshikha075.medium.com/building-a-real-time-cryptocurrency-arbitrage-detection-system-lessons-from-high-frequency-trading-be1e8151268b',
    },
    {
      title: 'Optimizing Deep Learning with Early Exit Strategies',
      date: 'September 2024',
      excerpt: 'A reinforcement learning approach to neural network optimization. Novel framework implementing Early Exit strategies in CNNs using Deep Q-Learning...',
      link: 'https://pandeyshikha075.medium.com/optimizing-deep-learning-with-early-exit-strategies-a-reinforcement-learning-approach-59938ceb01ba',
    },
    {
      title: 'Building GraphQL APIs with FastAPI and Strawberry',
      date: 'July 2023',
      excerpt: 'An implementation guide to creating GraphQL APIs using FastAPI and Strawberry, focusing on performance, scalability, and developer experience...',
      link: 'https://pandeyshikha075.medium.com/building-a-graphql-api-with-fastapi-and-strawberry-71fb9e2ae2e9',
    },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 font-mono mb-8 border-b-2 border-cyan-500 pb-4">
        &gt; Blog Posts_
      </h2>

      <div className="mb-6">
        <a
          href="https://pandeyshikha075.medium.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-mono text-sm"
        >
          <span>&gt;</span> View all posts on Medium
          <ExternalLink size={16} />
        </a>
      </div>

      <div className="space-y-6">
        {posts.map((post, idx) => (
          <a
            key={idx}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-900/50 border-2 border-cyan-700 rounded-lg p-6 hover:border-cyan-500 transition-all hover:shadow-lg hover:shadow-cyan-500/20 group"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold text-cyan-300 group-hover:text-cyan-200 transition-colors">
                {post.title}
              </h3>
              <ExternalLink size={20} className="text-gray-400 group-hover:text-cyan-400 transition-colors flex-shrink-0 ml-4" />
            </div>

            <div className="text-green-400 font-mono text-xs mb-3">
              {post.date}
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              {post.excerpt}
            </p>

            <div className="mt-4 text-cyan-400 font-mono text-sm group-hover:text-cyan-300 transition-colors">
              Read more ...
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}