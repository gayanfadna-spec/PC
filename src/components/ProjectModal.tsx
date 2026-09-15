import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Cpu, BarChart3, Layers } from 'lucide-react';
import { useStore } from '../store/useStore.js';

export const ProjectModal: React.FC = () => {
  const { selectedProject, setSelectedProject } = useStore();

  if (!selectedProject) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9990] flex items-center justify-center p-4 sm:p-6 select-none">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
          className="absolute inset-0 bg-dark-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel bg-dark-900/95 border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
          >
            <X size={20} />
          </button>

          {/* Header Banner */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/15 border border-cyan-400/30 text-cyan-400 font-mono">
              {selectedProject.category}
            </span>
            {selectedProject.featured && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/15 border border-indigo-400/30 text-indigo-300 font-mono">
                Featured Flagship
              </span>
            )}
          </div>

          <h2 className="text-2xl sm:text-4xl font-display font-black text-white mb-2">
            {selectedProject.title}
          </h2>
          <p className="text-sm sm:text-base text-cyan-400/90 font-medium mb-6">
            {selectedProject.subtitle}
          </p>

          {/* Hero Image Mockup */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 mb-8 aspect-video max-h-80 w-full group">
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-80" />
          </div>

          {/* Metrics Row */}
          {selectedProject.metrics && selectedProject.metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-3 mb-8">
              {selectedProject.metrics.map((m, idx) => (
                <div key={idx} className="glass-card rounded-2xl p-4 text-center border border-white/10">
                  <div className="font-display font-black text-xl sm:text-2xl text-gradient-cyan mb-1">
                    {m.value}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400">{m.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Deep Architectural Breakdown */}
          <div className="space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
            <div>
              <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <BarChart3 size={18} className="text-cyan-400" />
                <span>Executive Summary & Impact</span>
              </h4>
              <p className="text-slate-300 leading-relaxed font-normal">
                {selectedProject.longDescription || selectedProject.description}
              </p>
            </div>

            {/* Key Features */}
            {selectedProject.features && selectedProject.features.length > 0 && (
              <div>
                <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-emerald-400" />
                  <span>Key Functional Capabilities</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProject.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-xs sm:text-sm text-slate-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Architecture Stack */}
            {selectedProject.architecture && selectedProject.architecture.length > 0 && (
              <div>
                <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <Cpu size={18} className="text-indigo-400" />
                  <span>Architectural Patterns & Security</span>
                </h4>
                <div className="space-y-2">
                  {selectedProject.architecture.map((arch, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-xl bg-indigo-500/5 border border-indigo-500/20 text-xs sm:text-sm text-slate-200 font-mono"
                    >
                      <Layers size={14} className="text-indigo-400 shrink-0" />
                      <span>{arch}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Pills */}
            <div>
              <h4 className="text-sm font-mono text-slate-400 uppercase tracking-wider mb-3">
                Technologies Utilized
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-white/5 border border-white/10 text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-end gap-3 pt-6 border-t border-white/10">
            {selectedProject.githubUrl && (
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl glass-panel border border-white/15 text-slate-200 hover:text-white text-xs font-semibold flex items-center gap-2 hover:bg-white/10 transition-colors"
              >
                <Github size={16} />
                <span>Source Repository</span>
              </a>
            )}
            {selectedProject.liveUrl && (
              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-semibold flex items-center gap-2 shadow-glow-cyan hover:opacity-95 transition-opacity"
              >
                <span>Live System Demo</span>
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
