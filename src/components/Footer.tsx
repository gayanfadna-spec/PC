import React from 'react';
import { ArrowUp, Github, Mail, Phone, Code2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 bg-dark-950/80 select-none">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1px] shadow-glow-cyan">
                <div className="w-full h-full bg-dark-950 rounded-[11px] flex items-center justify-center font-display font-black text-xs text-cyan-400">
                  GT
                </div>
              </div>
              <span className="font-display font-black text-lg text-white">Gayan Tharaka</span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              MERN Stack Developer & Systems Architect based in Kegalle, Sri Lanka. Building high-throughput enterprise platforms.
            </p>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          {/* Social & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/gayan-tharaka"
              target="_blank"
              rel="noreferrer"
              title="GitHub Profile"
              className="p-2.5 rounded-xl glass-panel border border-white/10 text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <Github size={16} />
            </a>
            <a
              href="mailto:gayanfadna@gmail.com"
              title="Email Gayan"
              className="p-2.5 rounded-xl glass-panel border border-white/10 text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <Mail size={16} />
            </a>
            <a
              href="tel:+94719995885"
              title="Call Gayan"
              className="p-2.5 rounded-xl glass-panel border border-white/10 text-slate-300 hover:text-emerald-400 transition-colors"
            >
              <Phone size={16} />
            </a>

            <button
              onClick={scrollToTop}
              title="Scroll to top"
              className="p-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-400/30 text-cyan-400 transition-colors cursor-pointer ml-2"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-1">
            <span>&copy; {new Date().getFullYear()} Gayan Tharaka. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-1.5 text-slate-400">
            <Code2 size={14} className="text-cyan-400" />
            <span>Built with MERN Stack, Vite, TypeScript & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
