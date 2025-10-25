import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur bg-black/40 border-b border-white/10' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="text-white font-semibold tracking-tight text-lg">
          <span className="text-cyan-400">{`<`}</span> AI · Data Science <span className="text-cyan-400">{`/>`}</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#projects" className="text-white/80 hover:text-white transition-colors">Case Studies</a>
          <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
        </div>
      </nav>
    </header>
  );
}
