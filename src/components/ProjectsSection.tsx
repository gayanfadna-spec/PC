import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Sparkles, FolderGit2, ArrowUpRight } from 'lucide-react';
import { IProject } from '../types/index.js';
import { api } from '../services/api.js';
import { useStore } from '../store/useStore.js';

// High-fidelity fallback projects
const fallbackProjects: IProject[] = [
  {
    id: 'proj-1',
    title: 'Order Management System (OMS)',
    slug: 'order-management-system',
    subtitle: 'High-Throughput Enterprise Order Lifecycle & Fulfillment Engine',
    category: 'Enterprise MERN',
    description:
      'A robust, mission-critical enterprise order processing platform engineered to handle end-to-end multi-channel orders, real-time invoice generation, dynamic dispatch routing, and automated courier status sync.',
    longDescription:
      'Developed to streamline complex supply chain operations, this Order Management System unifies customer orders across retail, B2B, and digital storefronts into a single reactive dashboard. Featuring atomic inventory allocation, automated order validation, tiered permission-based approvals, and instant PDF invoice dispatching, it dramatically minimized fulfillment latency and eliminated order discrepancy rates.',
    features: [
      'Multi-channel order aggregation & automated pipeline routing',
      'Real-time inventory deduction with distributed locking safeguards',
      'Bulk invoice, picking list, and thermal shipping label generator',
      'Multi-tier role-based access control (Admins, Dispatchers, Billing, Auditing)',
    ],
    architecture: [
      'React & TypeScript frontend with virtualization for 10,000+ row tables',
      'Express.js & Node.js backend microservices with event-driven architecture',
      'MongoDB replica set with indexed multi-field query optimization',
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Redis', 'Zustand'],
    metrics: [
      { label: 'Processing Speed', value: '+350%' },
      { label: 'Discrepancy Rate', value: '<0.05%' },
    ],
    liveUrl: 'https://github.com/gayanfadna-spec',
    githubUrl: 'https://github.com/gayanfadna-spec',
    featured: true,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
    sortOrder: 1,
  },
  {
    id: 'proj-2',
    title: 'QR-Based Online Ordering & Sales Monitoring System',
    slug: 'qr-online-ordering-sales-monitoring',
    subtitle: 'Real-Time Contactless Hospitality Ordering with Live POS Analytics',
    category: 'Enterprise MERN',
    description:
      'An ultra-responsive contactless dining and takeaway ordering ecosystem with instant QR table recognition, kitchen display system (KDS), and live revenue metrics streaming.',
    longDescription:
      'Designed for contemporary restaurants and retail outlets, this platform allows patrons to scan localized QR codes to browse dynamic digital menus, customize orders, and pay instantly without app downloads. Orders stream instantly to kitchen screens via WebSockets with auditory chimes, while managers track live sales velocity in real time.',
    features: [
      'Dynamic QR code generator tied to unique tables and takeaway counters',
      'Socket.io real-time synchronized Kitchen Display System (KDS)',
      'Digital menu management with live modifier groups and 86-item toggles',
      'Integrated payment gateways and digital receipt delivery via SMS/Email',
    ],
    architecture: [
      'PWA mobile-first customer ordering portal (sub-second load time)',
      'Socket.io bidirectional state sync between patrons, POS, and kitchen',
    ],
    techStack: ['MERN Stack', 'React', 'Node.js', 'Socket.io', 'MongoDB', 'Tailwind CSS', 'Framer Motion'],
    metrics: [
      { label: 'Table Turnaround', value: '+40%' },
      { label: 'Wait Time Cut', value: '65%' },
    ],
    liveUrl: 'https://github.com/gayanfadna-spec',
    githubUrl: 'https://github.com/gayanfadna-spec',
    featured: true,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop',
    sortOrder: 2,
  },
  {
    id: 'proj-3',
    title: 'Inventory Management & Forecasting System',
    slug: 'inventory-management-forecasting',
    subtitle: 'Predictive Stock Intelligence, Reorder Automation & Multi-Warehouse Tracking',
    category: 'Full Stack System',
    description:
      'An intelligent inventory control platform featuring automated stock health scoring, predictive reorder algorithms, supplier performance analytics, and batch expiry surveillance.',
    longDescription:
      'Built to prevent costly stockouts and overstock scenarios across enterprise warehouses. The system utilizes historical velocity analysis and seasonal forecasting algorithms to advise exact replenishment dates and purchase quantities.',
    features: [
      'Predictive safety stock and reorder point recommendation engine',
      'Multi-warehouse inventory transfer and batch tracking with expiration alerts',
      'Barcode and QR code hardware scanner integration',
    ],
    architecture: [
      'Modular client architecture built with React & chart visualization engines',
      'Stateless Node.js backend executing time-series forecasting algorithms',
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Chart.js'],
    metrics: [
      { label: 'Dead Stock Cut', value: '45%' },
      { label: 'Stockout Incidents', value: '-80%' },
    ],
    liveUrl: 'https://github.com/gayanfadna-spec',
    githubUrl: 'https://github.com/gayanfadna-spec',
    featured: true,
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1200&auto=format&fit=crop',
    sortOrder: 3,
  },
  {
    id: 'proj-4',
    title: 'Network Marketing Management System (MERN)',
    slug: 'network-marketing-management-system',
    subtitle: 'Multi-Tier Genealogy Tree, Commission Automation & Member Portal',
    category: 'Enterprise MERN',
    description:
      'A scalable direct-selling and network marketing solution supporting complex binary/unilevel genealogies, real-time commission calculation, downline visualization, and e-wallet payouts.',
    longDescription:
      'Engineered for multi-tier network marketing businesses requiring absolute mathematical precision and high-concurrency member interactions. The platform renders interactive recursive genealogy trees and computes BV/PV points dynamically.',
    features: [
      'Interactive visual downline genealogy tree with instant node search',
      'Automated multi-tier commission & rank qualification calculation engine',
      'Digital distributor wallet with withdrawal requests and bank ledger history',
    ],
    architecture: [
      'Recursive tree rendering engine with Canvas/SVG zoom & pan capabilities',
      'High-performance MongoDB aggregation pipelines utilizing graphLookup',
    ],
    techStack: ['MERN Stack', 'React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    metrics: [
      { label: 'Tree Depth', value: '15+ Levels' },
      { label: 'Commission Run', value: '<2.5s' },
    ],
    liveUrl: 'https://github.com/gayanfadna-spec',
    githubUrl: 'https://github.com/gayanfadna-spec',
    featured: true,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    sortOrder: 4,
  },
  {
    id: 'proj-5',
    title: 'Paint Puzzle Game (Unity + C#)',
    slug: 'paint-puzzle-game-unity',
    subtitle: 'Color Physics Mechanics, Procedural Level Progression & Tactile Audio',
    category: 'Game Development',
    description:
      'An engaging, physics-infused 2D/3D mobile puzzle game built in Unity and C#, featuring fluid color-mixing mechanics, raycast collision puzzles, and particle shader reward effects.',
    longDescription:
      'Demonstrating strong algorithmic proficiency and object-oriented C# design, Paint Puzzle Game challenges players to manipulate color beams, reflective prisms, and mixing chambers to solve geometric mazes.',
    features: [
      'Custom C# color-mixing physics engine and raycast beam reflections',
      'Dynamic shader graph liquids with interactive surface ripple simulations',
      'Level editor pipeline enabling rapid modular stage generation',
    ],
    architecture: [
      'Unity 3D Engine with Universal Render Pipeline (URP)',
      'Clean C# architecture using SOLID principles and ScriptableObjects',
    ],
    techStack: ['Unity', 'C#', 'Game Physics', 'Shader Graph', 'HLSL', 'Audacity'],
    metrics: [
      { label: 'Performance', value: '60 FPS' },
      { label: 'Puzzles', value: '75+ Stages' },
    ],
    liveUrl: 'https://github.com/gayanfadna-spec',
    githubUrl: 'https://github.com/gayanfadna-spec',
    featured: true,
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
    sortOrder: 5,
  },
];

export const ProjectsSection: React.FC = () => {
  const [projects, setProjects] = useState<IProject[]>(fallbackProjects);
  const [filter, setFilter] = useState<'All' | 'Enterprise MERN' | 'Full Stack System' | 'Game Development'>('All');
  const { setSelectedProject } = useStore();

  useEffect(() => {
    const loadProjects = async () => {
      const data = await api.getProjects();
      if (data && data.length > 0) {
        setProjects(data);
      }
    };
    loadProjects();
  }, []);

  const categories = ['All', 'Enterprise MERN', 'Full Stack System', 'Game Development'] as const;

  const filteredProjects = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 relative select-none">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <FolderGit2 size={12} />
            <span>03 // Enterprise Portfolio</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Mission-Critical <span className="text-gradient-cyan">Platforms & Systems</span>
          </h2>
          <p className="max-w-2xl text-slate-400 text-sm sm:text-base">
            Detailed architectures built to withstand real concurrency, automated fulfillment, and complex business logic.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
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

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.article
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.id || project.slug}
                className="glass-card rounded-3xl overflow-hidden border border-white/10 flex flex-col group hover:border-cyan-400/40 hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Thumbnail Header */}
                <div className="relative aspect-[16/9] overflow-hidden bg-dark-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-dark-950/80 backdrop-blur-md border border-white/15 text-cyan-300">
                      {project.category}
                    </span>
                  </div>

                  {/* Metrics Badge */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="absolute bottom-4 right-4 flex items-center gap-2">
                      {project.metrics.slice(0, 2).map((m, idx) => (
                        <div
                          key={idx}
                          className="px-2.5 py-1 rounded-xl bg-dark-950/85 backdrop-blur-md border border-cyan-400/30 text-right"
                        >
                          <span className="font-display font-black text-xs text-cyan-400 block">
                            {m.value}
                          </span>
                          <span className="text-[9px] font-mono text-slate-400 uppercase block">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-cyan-400 transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-cyan-400/80 font-mono mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-slate-300 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-6 font-normal">
                      {project.description}
                    </p>

                    {/* Tech stack chips */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-white/5 border border-white/5 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA Links */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group/btn transition-colors cursor-pointer"
                    >
                      <Sparkles size={14} />
                      <span>Deep Dive Specs</span>
                      <ArrowUpRight
                        size={14}
                        className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                      />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          title="View Repository"
                          className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                        >
                          <Github size={15} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          title="Live Demo"
                          className="p-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 transition-colors"
                        >
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
