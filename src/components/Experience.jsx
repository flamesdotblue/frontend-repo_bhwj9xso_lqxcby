import { Briefcase, CalendarDays, Building2 } from 'lucide-react';

const experience = [
  {
    role: 'AI/ML Engineer',
    company: 'Nova Analytics',
    period: '2023 – Present',
    points: [
      'Designed and deployed real-time feature pipelines and model serving with FastAPI + Kafka',
      'Cut inference latency by 45% with quantization and batching strategies',
    ],
  },
  {
    role: 'Data Scientist',
    company: 'Insight Labs',
    period: '2021 – 2023',
    points: [
      'Built forecasting models that improved demand planning MAPE by 18%',
      'Led evaluation framework with cross-validation and drift monitoring',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Briefcase className="h-6 w-6 text-cyan-300" />
          <h2 className="text-2xl md:text-3xl font-bold text-white">Experience</h2>
        </div>

        <div className="mt-8 relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />
          <div className="space-y-6">
            {experience.map((job, idx) => (
              <div key={job.role} className="relative pl-12">
                <div className="absolute left-0 top-1 h-2 w-2 rounded-full bg-cyan-300" />
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 text-sm text-white/80 bg-white/5 border border-white/10 rounded-full px-3 py-1"><Building2 className="h-4 w-4" /> {job.company}</span>
                    <span className="inline-flex items-center gap-2 text-sm text-white/70 bg-white/5 border border-white/10 rounded-full px-3 py-1"><CalendarDays className="h-4 w-4" /> {job.period}</span>
                  </div>
                  <h3 className="mt-3 text-white font-semibold text-lg">{job.role}</h3>
                  <ul className="mt-3 list-disc list-inside space-y-1 text-white/80">
                    {job.points.map((p) => (
                      <li key={p}>{p}</li>
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
}
