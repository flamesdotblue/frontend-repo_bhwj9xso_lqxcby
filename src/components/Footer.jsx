import { Mail, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div>
            <h3 className="text-white text-xl font-semibold">Let’s build something great</h3>
            <p className="mt-2 text-white/70">Available for freelance, full-time, and collaborations.</p>
          </div>
          <div className="md:col-span-2 flex flex-wrap items-center gap-3">
            <a
              href="mailto:you@example.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white px-5 py-3 font-medium backdrop-blur transition-colors"
            >
              <Mail className="h-4 w-4" /> you@example.com
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white px-5 py-3 font-medium backdrop-blur transition-colors"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white px-5 py-3 font-medium backdrop-blur transition-colors"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between text-xs text-white/50">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <p>Built with love and a dash of Spline.</p>
        </div>
      </div>
    </footer>
  );
}
