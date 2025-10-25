import { ExternalLink, Cpu, BarChart3 } from 'lucide-react';

const projects = [
  {
    title: 'MLOps Pipeline for Real-time Inference',
    description: 'Streaming features, model registry, and autoscaled inference with CI/CD.',
    tags: ['Python', 'FastAPI', 'Kafka', 'Docker', 'Kubernetes'],
    accent: 'from-cyan-400 via-fuchsia-400 to-amber-300',
    link: '#',
    icon: Cpu,
  },
  {
    title: 'Time Series Forecasting Platform',
    description: 'Multi-model forecasting with feature stores and backtesting at scale.',
    tags: ['PyTorch', 'Prophet', 'Airflow', 'Postgres'],
    accent: 'from-emerald-400 via-cyan-300 to-sky-400',
    link: '#',
    icon: BarChart3,
  },
  {
    title: 'NLP Retrieval-Augmented QA',
    description: 'Hybrid search with semantic embeddings and prompt orchestration.',
    tags: ['Transformers', 'Vector DB', 'RAG', 'OpenAI'],
    accent: 'from-violet-400 via-indigo-400 to-cyan-300',
    link: '#',
    icon: Cpu,
  },
];

function ProjectCard({ title, description, tags, accent, link, icon: Icon }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-30 group-hover:opacity-40 transition-opacity`} />
      <div className="relative p-6 flex flex-col h-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {Icon ? <Icon className="h-4 w-4 text-cyan-300" /> : null}
            <h3 className="text-white font-semibold text-lg">{title}</h3>
          </div>
          <a
            href={link}
            className="inline-flex items-center gap-1 text-cyan-300 hover:text-cyan-200 transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            <span className="text-sm">Details</span>
          </a>
        </div>
        <p className="mt-2 text-white/80 text-sm">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="text-xs text-white/80 bg-white/10 border border-white/10 rounded-full px-3 py-1"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Case Studies</h2>
            <p className="mt-2 text-white/70">End‑to‑end work across modeling, data engineering, and deployment.</p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
