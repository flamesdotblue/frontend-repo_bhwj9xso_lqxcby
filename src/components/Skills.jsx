import { Brain, Code, Database, Cloud, LineChart } from 'lucide-react';

const categories = [
  {
    icon: Brain,
    title: 'Machine Learning',
    items: ['Supervised/Unsupervised', 'Time Series', 'NLP (RAG, LLMs)', 'Computer Vision'],
    accent: 'from-cyan-400/30 to-blue-400/20',
  },
  {
    icon: Code,
    title: 'Engineering',
    items: ['Python, TypeScript', 'FastAPI, Node', 'CI/CD, Testing', 'Docker, Kubernetes'],
    accent: 'from-fuchsia-400/30 to-violet-400/20',
  },
  {
    icon: Database,
    title: 'Data',
    items: ['SQL, DBT', 'Airflow', 'Feature Stores', 'Vector DBs'],
    accent: 'from-emerald-400/30 to-teal-400/20',
  },
  {
    icon: Cloud,
    title: 'Cloud & MLOps',
    items: ['AWS/GCP/Azure', 'Terraform', 'Model Registry', 'Monitoring'],
    accent: 'from-amber-400/30 to-orange-400/20',
  },
  {
    icon: LineChart,
    title: 'Analytics',
    items: ['Experimentation', 'Dashboards', 'AB Testing', 'Causal Inference'],
    accent: 'from-pink-400/30 to-red-400/20',
  },
];

function SkillCard({ icon: Icon, title, items, accent }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden">
      <div className={`pointer-events-none absolute -inset-1 bg-gradient-to-br ${accent} opacity-0 group-hover:opacity-100 blur-2xl transition-opacity`} />
      <div className="relative">
        <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/10 border border-white/10">
          <Icon className="h-5 w-5 text-cyan-300" />
        </div>
        <h3 className="mt-3 text-white font-semibold">{title}</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {items.map((i) => (
            <span key={i} className="text-xs text-white/80 bg-white/10 border border-white/10 rounded-full px-3 py-1">{i}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Brain className="h-6 w-6 text-cyan-300" />
          <h2 className="text-2xl md:text-3xl font-bold text-white">Skills</h2>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c) => (
            <SkillCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
