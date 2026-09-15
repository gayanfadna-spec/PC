import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code,
  FileCode2,
  Atom,
  Palette,
  Sparkles,
  Layout,
  Layers,
  Server,
  Cpu,
  Database,
  Network,
  Table,
  ShieldCheck,
  Binary,
  Gamepad2,
  Terminal,
  Boxes,
  GitBranch,
  Send,
  Zap,
  Kanban,
} from 'lucide-react';

interface SkillItem {
  name: string;
  category: 'Frontend' | 'Backend & DB' | 'Game Dev & Languages' | 'Tools & DevOps';
  proficiency: number;
  icon: React.ReactNode;
  level: string;
}

const allSkills: SkillItem[] = [
  // Frontend
  { name: 'React', category: 'Frontend', proficiency: 96, icon: <Atom className="text-cyan-400" />, level: 'Mastery' },
  { name: 'TypeScript', category: 'Frontend', proficiency: 92, icon: <FileCode2 className="text-blue-400" />, level: 'Advanced' },
  { name: 'JavaScript (ES6+)', category: 'Frontend', proficiency: 98, icon: <Code className="text-yellow-400" />, level: 'Mastery' },
  { name: 'Tailwind CSS', category: 'Frontend', proficiency: 95, icon: <Palette className="text-teal-400" />, level: 'Mastery' },
  { name: 'Framer Motion & GSAP', category: 'Frontend', proficiency: 88, icon: <Sparkles className="text-purple-400" />, level: 'Proficient' },
  { name: 'HTML5 & Modern CSS', category: 'Frontend', proficiency: 98, icon: <Layout className="text-orange-400" />, level: 'Mastery' },
  { name: 'Zustand & Redux', category: 'Frontend', proficiency: 90, icon: <Layers className="text-indigo-400" />, level: 'Advanced' },

  // Backend & DB
  { name: 'Node.js', category: 'Backend & DB', proficiency: 94, icon: <Server className="text-emerald-400" />, level: 'Mastery' },
  { name: 'Express.js', category: 'Backend & DB', proficiency: 95, icon: <Cpu className="text-slate-200" />, level: 'Mastery' },
  { name: 'MongoDB (Mongoose)', category: 'Backend & DB', proficiency: 92, icon: <Database className="text-green-500" />, level: 'Advanced' },
  { name: 'RESTful API Architecture', category: 'Backend & DB', proficiency: 95, icon: <Network className="text-cyan-400" />, level: 'Mastery' },
  { name: 'MySQL / Relational DBs', category: 'Backend & DB', proficiency: 86, icon: <Table className="text-blue-400" />, level: 'Proficient' },
  { name: 'JWT & RBAC Security', category: 'Backend & DB', proficiency: 92, icon: <ShieldCheck className="text-amber-400" />, level: 'Advanced' },

  // Game Dev & Languages
  { name: 'C#', category: 'Game Dev & Languages', proficiency: 88, icon: <Binary className="text-purple-400" />, level: 'Proficient' },
  { name: 'Unity 3D / 2D', category: 'Game Dev & Languages', proficiency: 86, icon: <Gamepad2 className="text-rose-400" />, level: 'Proficient' },
  { name: 'Python', category: 'Game Dev & Languages', proficiency: 82, icon: <Terminal className="text-yellow-500" />, level: 'Proficient' },
  { name: 'OOP & Architecture', category: 'Game Dev & Languages', proficiency: 94, icon: <Boxes className="text-cyan-300" />, level: 'Mastery' },

  // Tools & DevOps
  { name: 'Git & GitHub', category: 'Tools & DevOps', proficiency: 94, icon: <GitBranch className="text-orange-500" />, level: 'Mastery' },
  { name: 'Postman API Testing', category: 'Tools & DevOps', proficiency: 90, icon: <Send className="text-amber-500" />, level: 'Advanced' },
  { name: 'Vite & Build Tools', category: 'Tools & DevOps', proficiency: 90, icon: <Zap className="text-yellow-400" />, level: 'Advanced' },
  { name: 'Agile & Scrum Sprints', category: 'Tools & DevOps', proficiency: 88, icon: <Kanban className="text-blue-500" />, level: 'Proficient' },
];

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Frontend' | 'Backend & DB' | 'Game Dev & Languages' | 'Tools & DevOps'>('All');

  const filteredSkills = activeTab === 'All' ? allSkills : allSkills.filter((s) => s.category === activeTab);

  const categories = ['All', 'Frontend', 'Backend & DB', 'Game Dev & Languages', 'Tools & DevOps'] as const;

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 relative select-none">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Cpu size={12} />
            <span>02 // Core Competencies</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Technical Stack & <span className="text-gradient-cyan">Tooling Architecture</span>
          </h2>
          <p className="max-w-2xl text-slate-400 text-sm sm:text-base">
            Engineered for speed, durability, and seamless scalability across client and server layers.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'text-cyan-400 bg-cyan-500/15 border border-cyan-400/40 shadow-glow-cyan'
                    : 'text-slate-400 hover:text-white glass-panel border-transparent hover:border-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Interactive Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={skill.name}
                className="glass-card rounded-2xl p-5 border border-white/10 group hover:border-cyan-400/40 transition-all relative overflow-hidden"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm group-hover:text-cyan-400 transition-colors">
                        {skill.name}
                      </h4>
                      <span className="text-[11px] font-mono text-slate-400">{skill.category}</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-cyan-400">
                    {skill.level}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-[11px] font-mono">
                    <span className="text-slate-400">Proficiency</span>
                    <span className="text-slate-200 font-bold">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
