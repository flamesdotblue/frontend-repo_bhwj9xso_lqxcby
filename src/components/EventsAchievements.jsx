import { Trophy, CalendarCheck } from 'lucide-react';

const events = [
  {
    title: 'Speaker — MLOps Summit',
    org: 'Global AI Conference',
    date: '2024',
    desc: 'Talk on productionizing RAG systems with observability and evals.',
  },
  {
    title: 'Workshop — Forecasting at Scale',
    org: 'Data Engineering Guild',
    date: '2023',
    desc: 'Hands-on session covering feature stores and model governance.',
  },
];

const achievements = [
  {
    title: 'Winner — AI for Good Hackathon',
    date: '2023',
    desc: 'Built a crisis response NLP system with active learning loop.',
  },
  {
    title: 'Top Writer — Machine Learning',
    date: '2022',
    desc: 'Recognized for articles on practical ML systems and MLOps.',
  },
];

export default function EventsAchievements() {
  return (
    <section id="events" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <CalendarCheck className="h-6 w-6 text-cyan-300" />
          <h2 className="text-2xl md:text-3xl font-bold text-white">Events & Achievements</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-white/90 font-semibold">Events</h3>
            <div className="mt-4 space-y-4">
              {events.map((e) => (
                <div key={e.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center justify-between text-sm text-white/70">
                    <span>{e.org}</span>
                    <span className="bg-white/5 border border-white/10 rounded-full px-2 py-0.5">{e.date}</span>
                  </div>
                  <h4 className="mt-2 text-white font-semibold">{e.title}</h4>
                  <p className="mt-1 text-white/80 text-sm">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white/90 font-semibold inline-flex items-center gap-2"><Trophy className="h-4 w-4 text-amber-300" /> Achievements</h3>
            <div className="mt-4 space-y-4">
              {achievements.map((a) => (
                <div key={a.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center justify-between text-sm text-white/70">
                    <span>{a.title}</span>
                    <span className="bg-white/5 border border-white/10 rounded-full px-2 py-0.5">{a.date}</span>
                  </div>
                  <p className="mt-2 text-white/80 text-sm">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
