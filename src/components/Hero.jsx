import Spline from '@splinetool/react-spline';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* subtle gradient edges that do not block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24 flex flex-col items-start">
        <p className="text-cyan-300/90 text-sm md:text-base font-medium tracking-widest uppercase">AI & Data Science Engineer</p>
        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white max-w-3xl">
          Designing intelligent systems that turn data into products.
        </h1>
        <p className="mt-4 text-white/80 max-w-2xl">
          I build end‑to‑end machine learning solutions—from data pipelines to deployed models—
          with a focus on reliability, performance, and delightful UX.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-cyan-500/90 hover:bg-cyan-400 text-black px-5 py-3 font-semibold transition-colors"
          >
            Explore Case Studies
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="mailto:you@example.com"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white px-5 py-3 font-semibold backdrop-blur transition-colors"
          >
            <Mail className="h-4 w-4" /> Contact
          </a>
          <div className="flex items-center gap-2 ml-2">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white h-10 w-10 backdrop-blur transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white h-10 w-10 backdrop-blur transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
