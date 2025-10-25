import { GraduationCap, School } from 'lucide-react';

const education = [
  {
    school: 'M.S. in Data Science',
    institution: 'Tech University',
    period: '2019 – 2021',
    details: [
      'Specialized in Machine Learning, Deep Learning, and Big Data systems',
      'Thesis: Sequence models for multivariate forecasting',
    ],
  },
  {
    school: 'B.S. in Computer Science',
    institution: 'State University',
    period: '2015 – 2019',
    details: [
      'Graduated with Honors',
      'Research assistant in NLP lab',
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <GraduationCap className="h-6 w-6 text-cyan-300" />
          <h2 className="text-2xl md:text-3xl font-bold text-white">Education</h2>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((e) => (
            <div key={e.school} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-white font-semibold text-lg">{e.school}</h3>
                  <p className="text-white/80">{e.institution}</p>
                </div>
                <div className="inline-flex items-center gap-2 text-sm text-white/70 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                  <School className="h-4 w-4" /> {e.period}
                </div>
              </div>
              <ul className="mt-4 list-disc list-inside space-y-1 text-white/80">
                {e.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
