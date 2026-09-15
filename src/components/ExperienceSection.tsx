import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, Building, ChevronRight } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Marketing Executive',
      organization: 'Fadna Tea',
      period: '2026 – Present',
      location: 'Sri Lanka',
      badge: 'Current Role',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      description:
        'Bridging technical architectures with high-velocity commercial growth strategies. Orchestrating digital marketing funnels, e-commerce analytics, automated conversion tracking, and international market outreach pipelines.',
      skills: ['Marketing Analytics', 'E-commerce Architecture', 'Growth Strategy', 'CRM & Conversion Funnels'],
    },
    {
      type: 'work',
      title: 'System Developer',
      organization: 'Fadna Life Sciences',
      period: '2025 – 2026',
      location: 'Sri Lanka',
      badge: 'Software Engineering',
      badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      description:
        'Designed, deployed, and scaled critical enterprise web systems. Engineered automated sales reporting pipelines, fine-tuned high-concurrency database queries, and collaborated with cross-functional warehouse teams on inventory ERP sync.',
      skills: ['MERN Stack', 'Node.js & Express', 'MongoDB Optimization', 'Enterprise ERPs', 'REST APIs'],
    },
    {
      type: 'education',
      title: 'B.Sc. (Hons) in Computer Science & Technology',
      organization: 'Sabaragamuwa University of Sri Lanka',
      period: '2021 – 2025',
      location: 'Belihuloya, Sri Lanka',
      badge: 'Academic Honors',
      badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      description:
        'Intensive four-year honors program concentrating on Advanced Distributed Systems, Object-Oriented Software Engineering, Database Systems, Computer Networks, and Interactive Graphics Programming.',
      skills: ['Data Structures & Algorithms', 'C# & Unity', 'Database Normalization', 'Software Architecture'],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 relative select-none">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Briefcase size={12} />
            <span>04 // Career Trajectory</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Professional <span className="text-gradient-cyan">Experience & Education</span>
          </h2>
          <p className="max-w-2xl text-slate-400 text-sm sm:text-base">
            Demonstrated progression across enterprise development, academic rigor, and marketing operations.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 space-y-10">
          {experiences.map((item, idx) => (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              key={idx}
              className="relative pl-8 sm:pl-10 group"
            >
              {/* Timeline Marker Node */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-dark-950 border-2 border-cyan-400 flex items-center justify-center shadow-glow-cyan transition-transform group-hover:scale-110">
                {item.type === 'work' ? (
                  <Briefcase size={14} className="text-cyan-400" />
                ) : (
                  <GraduationCap size={14} className="text-indigo-400" />
                )}
              </div>

              {/* Content Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 group-hover:border-cyan-400/30 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className={`px-3 py-0.5 rounded-full text-[11px] font-mono font-semibold border ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <Calendar size={13} className="text-cyan-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 font-medium mt-1 mb-4">
                  <span className="flex items-center gap-1 text-cyan-300 font-semibold">
                    <Building size={14} />
                    {item.organization}
                  </span>
                  <span className="text-slate-600">&bull;</span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <MapPin size={13} />
                    {item.location}
                  </span>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                  {item.description}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 border border-white/5 text-slate-300 flex items-center gap-1"
                    >
                      <ChevronRight size={10} className="text-cyan-400" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
