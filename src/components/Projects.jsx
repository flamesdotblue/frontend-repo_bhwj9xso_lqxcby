import { ExternalLink, Star, Palette } from 'lucide-react';

const projects = [
  {
    title: 'Immersive 3D Landing',
    description: 'A Spline-powered hero with interactive objects and smooth parallax.',
    tags: ['React', 'Spline', 'Tailwind'],
    accent: 'from-cyan-400 via-fuchsia-400 to-amber-300',
    link: '#',
  },
  {
    title: 'Realtime Dashboard',
    description: 'A responsive analytics dashboard with live charts and dark mode.',
    tags: ['React', 'WebSockets', 'D3'],
    accent: 'from-emerald-400 via-cyan-300 to-sky-400',
    link: '#',
  },
  {
    title: 'Creative Portfolio',
    description: 'Playful micro-interactions and modern typography for personal branding.',
    tags: ['Next.js', 'Framer Motion', 'Design'],
    accent: 'from-violet-400 via-indigo-400 to-cyan-300',
    link: '#',
  },
];

function ProjectCard({ title, description, tags, accent, link }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-30 group-hover:opacity-40 transition-opacity`} />
      <div className="relative p-6 flex flex-col h-full">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-semibold text-lg">{title}</h3>
          <Star className="h-4 w-4 text-yellow-300/90" />
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
        <div className="mt-6 flex items-center gap-2">
          <a
            href={link}
            className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-colors"
          >
            <ExternalLink className="h-4 w-4" /> Preview
          </a>
          <span className="inline-flex items-center gap-2 text-white/60 text-sm">
            <Palette className="h-4 w-4" /> Concept
          </span>
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
            <h2 className="text-2xl md:text-3xl font-bold text-white">Selected Work</h2>
            <p className="mt-2 text-white/70">A mix of technical builds and playful experiments.</p>
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
