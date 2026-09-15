import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code2, Database, Gamepad2, MapPin, Sparkles, Send, FileText, Download } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden select-none"
    >
      {/* Background Gradients & Glow Circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center relative z-10">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel border border-cyan-400/20 shadow-glow-cyan mb-8"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-xs font-semibold text-slate-200 tracking-wide">
            Available for Elite Roles & Enterprise Projects
          </span>
          <span className="text-slate-600">&bull;</span>
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <MapPin size={12} className="text-cyan-400" /> Kegalle, Sri Lanka
          </span>
        </motion.div>

        {/* Hero Name Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tight leading-[1.08] mb-6"
        >
          <span className="text-white">GAYAN</span>{' '}
          <span className="text-gradient-cyan">THARAKA</span>
        </motion.h1>

        {/* Title & Roles */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 font-mono text-sm sm:text-base text-slate-300"
        >
          <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-cyan-300 flex items-center gap-1.5 font-medium">
            <Code2 size={16} className="text-cyan-400" /> Web Developer
          </span>
          <span className="text-slate-500 hidden sm:inline">&bull;</span>
          <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-indigo-300 flex items-center gap-1.5 font-medium">
            <Database size={16} className="text-indigo-400" /> MERN Stack Architect
          </span>
          <span className="text-slate-500 hidden sm:inline">&bull;</span>
          <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-emerald-300 flex items-center gap-1.5 font-medium">
            <Gamepad2 size={16} className="text-emerald-400" /> Unity & C# Specialist
          </span>
        </motion.div>

        {/* Concise Powerful Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="max-w-2xl text-base sm:text-lg text-slate-400 font-normal leading-relaxed mb-10 text-balance"
        >
          B.Sc. (Hons) in Computer Science & Technology from{' '}
          <span className="text-slate-200 font-semibold">Sabaragamuwa University of Sri Lanka</span>.
          Crafting fault-tolerant order management, QR retail, inventory forecasting, and interactive
          MERN ecosystems that drive business revenue.
        </motion.p>

        {/* Magnetic Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => scrollTo('projects')}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-indigo-600 text-dark-950 font-bold text-sm tracking-wide shadow-glow-cyan hover:shadow-[0_0_50px_rgba(0,242,254,0.5)] hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <Sparkles size={18} className="text-dark-950 transition-transform group-hover:rotate-12" />
            <span>Explore Featured Systems</span>
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl glass-panel border border-white/15 text-slate-200 hover:text-white font-semibold text-sm hover:bg-white/10 hover:border-cyan-400/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Send size={16} className="text-cyan-400" />
            <span>Get In Touch</span>
          </button>

          <a
            href="mailto:gayanfadna@gmail.com"
            className="w-full sm:w-auto px-6 py-4 rounded-2xl glass-panel border border-white/10 text-slate-400 hover:text-slate-200 font-medium text-xs flex items-center justify-center gap-2 transition-all hover:bg-white/5"
          >
            <FileText size={16} />
            <span>Direct Email</span>
          </a>

          <a
            href="/Gayan_Tharaka_CV.pdf"
            download="Gayan_Tharaka_CV.pdf"
            className="w-full sm:w-auto px-6 py-4 rounded-2xl glass-panel border border-white/10 text-slate-400 hover:text-cyan-400 font-medium text-xs flex items-center justify-center gap-2 transition-all hover:bg-white/5"
          >
            <Download size={16} />
            <span>Download CV</span>
          </a>
        </motion.div>

        {/* Live Metrics Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl"
        >
          {[
            { value: '5+', label: 'Enterprise Systems' },
            { value: '2025', label: 'B.Sc. (Hons) Degree' },
            { value: '100%', label: 'Delivery Integrity' },
            { value: '450+', label: 'Git Commits' },
          ].map((stat, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-4 text-center group hover:-translate-y-1 transition-transform"
            >
              <div className="font-display font-bold text-2xl sm:text-3xl text-gradient-cyan mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 font-medium tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="mt-14 flex flex-col items-center gap-2 cursor-pointer text-slate-500 hover:text-cyan-400 transition-colors"
          onClick={() => scrollTo('about')}
        >
          <span className="text-[11px] font-mono tracking-widest uppercase">Scroll Down</span>
          <ArrowDown size={14} />
        </motion.div>
      </div>
    </section>
  );
};
