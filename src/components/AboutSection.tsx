import React from 'react';
import { GraduationCap, Briefcase, Award, CheckCircle2, Terminal, Sparkles, MapPin, Mail, Phone } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 relative select-none">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Terminal size={12} />
            <span>01 // About The Developer</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Engineering Precision Meets <span className="text-gradient-cyan">Modern Aesthetics</span>
          </h2>
          <p className="max-w-2xl text-slate-400 text-sm sm:text-base leading-relaxed">
            Bridging technical computer science rigor with real-world enterprise business logic.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Visual Profile Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden border border-white/10 group">
              {/* Background gradient blob */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-cyan-500/20 to-indigo-600/20 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

              {/* Profile Portrait Graphic */}
              <div className="relative mb-6">
                <div className="w-40 h-52 sm:w-48 sm:h-60 mx-auto rounded-3xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-500 p-[2px] shadow-glow-cyan group/avatar overflow-hidden">
                  <div className="w-full h-full rounded-[22px] overflow-hidden relative bg-dark-950">
                    <img
                      src="/images/gayan-portrait.jpg"
                      alt="Gayan Tharaka - Sabaragamuwa University of Sri Lanka"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/avatar:scale-105"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-2.5 inset-x-0 text-center pointer-events-none">
                      <span className="text-[10px] font-mono font-semibold tracking-wider text-cyan-300 uppercase px-2.5 py-0.5 rounded-full bg-dark-950/85 backdrop-blur-md border border-cyan-400/30">
                        Sabaragamuwa CS Graduate
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 right-1/2 translate-x-16 sm:translate-x-20 translate-y-2 bg-emerald-500 text-dark-950 text-[10px] font-bold px-2.5 py-0.5 rounded-full border-2 border-dark-950 flex items-center gap-1 shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-dark-950 animate-ping" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Identity Details */}
              <div className="text-center mb-6">
                <h3 className="font-display text-2xl font-bold text-white mb-1">Gayan Tharaka</h3>
                <p className="text-sm font-medium text-cyan-400 mb-2">Web Developer &bull; MERN Stack Developer</p>
                <div className="flex items-center justify-center gap-1 text-xs text-slate-400">
                  <MapPin size={13} className="text-cyan-400" />
                  <span>Kegalle, Sri Lanka</span>
                </div>
              </div>

              {/* Quick Contacts inside Card */}
              <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=gayanfadna@gmail.com&su=Project%20Inquiry%20%7C%20Gayan%20Tharaka"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                  title="Send via Gmail"
                >
                  <Mail size={15} className="text-cyan-400" />
                  <span className="truncate">gayanfadna@gmail.com</span>
                </a>
                <a
                  href="tel:+94719995885"
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                >
                  <Phone size={15} className="text-emerald-400" />
                  <span>+94 71 999 5885</span>
                </a>
              </div>
            </div>

            {/* Sabaragamuwa University Badge */}
            <div className="glass-card rounded-2xl p-6 border border-cyan-500/20 bg-gradient-to-br from-cyan-950/20 to-transparent">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center shrink-0 text-cyan-400">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-cyan-400 tracking-wider uppercase font-semibold">
                    Academic Foundation (2021 – 2025)
                  </span>
                  <h4 className="text-base font-bold text-white mt-0.5">
                    B.Sc. (Hons) in Computer Science & Technology
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Sabaragamuwa University of Sri Lanka
                  </p>
                  <p className="text-xs text-slate-400/90 mt-2 leading-relaxed">
                    Graduated with comprehensive specialization in modern software design patterns, distributed databases, real-time messaging, and algorithmic problem-solving.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Professional Journey & Pillars */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Bio Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles size={18} className="text-cyan-400" />
                <span>The Story & Technical Vision</span>
              </h3>
              <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                <p>
                  I am a passionate and results-driven software engineer who blends deep Computer Science foundations with practical commercial implementation. Having engineered critical systems for enterprise operations, I thrive in turning high-friction workflows into seamless, automated digital platforms.
                </p>
                <p>
                  My core expertise centers on the <strong className="text-cyan-400 font-semibold">MERN Stack (MongoDB, Express.js, React, Node.js)</strong> alongside robust object-oriented programming in <strong className="text-indigo-300 font-semibold">C# and Unity</strong>. Whether developing multi-channel Order Management engines or interactive 3D mechanics, I focus relentlessly on code architecture, atomic data security, and responsive UI choreography.
                </p>
              </div>

              {/* Key Competency Pills */}
              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Enterprise Order & Fulfillment Systems',
                  'QR Dining & Sales Monitoring Ecosystems',
                  'Predictive Stock Forecasting & Analytics',
                  'Multi-Tier Network Marketing Platforms',
                  'Game Physics & Interactive Unity Puzzles',
                  'High-Performance REST & WebSocket APIs',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 size={15} className="text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Professional Journey Snapshot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card rounded-2xl p-5 border border-white/10 group hover:border-cyan-400/30 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Briefcase size={20} />
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 font-semibold px-2 py-0.5 rounded-md bg-cyan-500/10">
                    2026 – Present
                  </span>
                </div>
                <h4 className="font-bold text-white text-sm">Marketing Executive</h4>
                <p className="text-xs text-slate-400 font-medium">Fadna Tea</p>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Leading digital marketing systems, e-commerce sales funnels, and data analytics pipelines.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-5 border border-white/10 group hover:border-indigo-400/30 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Award size={20} />
                  </div>
                  <span className="text-[11px] font-mono text-indigo-400 font-semibold px-2 py-0.5 rounded-md bg-indigo-500/10">
                    2025 – 2026
                  </span>
                </div>
                <h4 className="font-bold text-white text-sm">System Developer</h4>
                <p className="text-xs text-slate-400 font-medium">Fadna Life Sciences</p>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Architected internal ERP components, automated sales metrics, and developed inventory tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
