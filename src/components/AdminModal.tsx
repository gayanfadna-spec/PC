import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, Mail, Trash2, Check, RefreshCw, LogOut, Plus, Shield, FolderKanban } from 'lucide-react';
import { toast } from 'sonner';
import { useStore } from '../store/useStore.js';
import { api } from '../services/api.js';
import { IMessage, IProject } from '../types/index.js';

export const AdminModal: React.FC = () => {
  const { isAdminOpen, setIsAdminOpen, adminToken, adminUser, setAdminAuth, logoutAdmin } = useStore();

  const [activeTab, setActiveTab] = useState<'inbox' | 'projects' | 'new-project'>('inbox');
  const [username, setUsername] = useState('gayanadmin');
  const [password, setPassword] = useState('AdminPassword2026!');
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<IMessage[]>([]);
  const [projects, setProjects] = useState<IProject[]>([]);
  const [loadingData, setLoadingData] = useState(false);

  // New Project Form State
  const [newTitle, setNewTitle] = useState('');
  const [newSubtitle, setNewSubtitle] = useState('');
  const [newCategory, setNewCategory] = useState<'Enterprise MERN' | 'Full Stack System' | 'Game Development' | 'Web Application'>('Enterprise MERN');
  const [newDesc, setNewDesc] = useState('');
  const [newTech, setNewTech] = useState('React, Node.js, Express, MongoDB');
  const [newImg, setNewImg] = useState('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop');

  const loadAdminData = async () => {
    if (!adminToken) return;
    setLoadingData(true);
    try {
      const [msgs, projs] = await Promise.all([
        api.getAdminMessages(adminToken),
        api.getProjects(),
      ]);
      setMessages(msgs);
      setProjects(projs);
    } catch (err: any) {
      toast.error('Failed to load admin records: ' + err.message);
    } finally {
      setLoadingData(false);
    }
  };

  useEffect(() => {
    if (isAdminOpen && adminToken) {
      loadAdminData();
    }
  }, [isAdminOpen, adminToken]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.login(username, password);
      setAdminAuth(res.token, res.user);
      toast.success('Welcome, Gayan! Admin authorized.');
      loadAdminData();
    } catch (err: any) {
      toast.error(err.message || 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  const handleMarkRead = async (id: string) => {
    if (!adminToken) return;
    try {
      await api.markMessageRead(id, adminToken);
      setMessages((prev) =>
        prev.map((m) => (m.id === id || m._id === id ? { ...m, isRead: true } : m))
      );
      toast.success('Message marked as read');
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const handleDeleteMessage = async (id: string) => {
    if (!adminToken) return;
    try {
      await api.deleteMessage(id, adminToken);
      setMessages((prev) => prev.filter((m) => m.id !== id && m._id !== id));
      toast.success('Message deleted');
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const handleDeleteProject = async (id: string) => {
    if (!adminToken) return;
    try {
      await api.deleteProject(id, adminToken);
      setProjects((prev) => prev.filter((p) => p.id !== id && p._id !== id));
      toast.success('Project deleted from portfolio');
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const handleCreateProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminToken) return;
    try {
      const techArray = newTech.split(',').map((t) => t.trim()).filter(Boolean);
      await api.createProject(
        {
          title: newTitle,
          subtitle: newSubtitle,
          category: newCategory,
          description: newDesc,
          longDescription: newDesc,
          techStack: techArray,
          image: newImg,
          featured: true,
        },
        adminToken
      );
      toast.success('New project published successfully!');
      setActiveTab('projects');
      loadAdminData();
      setNewTitle('');
      setNewSubtitle('');
      setNewDesc('');
    } catch (err: any) {
      toast.error('Failed to create project: ' + err.message);
    }
  };

  if (!isAdminOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6" data-lenis-prevent>
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsAdminOpen(false)}
          className="absolute inset-0 bg-dark-950/85 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          data-lenis-prevent
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto overscroll-contain custom-scrollbar glass-panel bg-dark-900 border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={() => setIsAdminOpen(false)}
            className="absolute top-6 right-6 z-30 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
          >
            <X size={20} />
          </button>

          {!adminToken ? (
            /* Login Screen */
            <div className="max-w-md mx-auto py-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[2px] mx-auto mb-4 shadow-glow-cyan">
                  <div className="w-full h-full bg-dark-950 rounded-[14px] flex items-center justify-center text-cyan-400">
                    <Shield size={28} />
                  </div>
                </div>
                <h3 className="text-2xl font-display font-black text-white">
                  Developer Portal
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Authenticate with your JWT administrator credentials.
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    Username or Email
                  </label>
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-[11px] text-cyan-300 font-mono">
                  Default credentials: <strong>gayanadmin</strong> / <strong>AdminPassword2026!</strong>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-dark-950 font-bold text-sm tracking-wide shadow-glow-cyan hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Lock size={16} />
                  <span>{loading ? 'Authenticating...' : 'Access Dashboard'}</span>
                </button>
              </form>
            </div>
          ) : (
            /* Logged-In Admin Panel */
            <div>
              {/* Sticky Header & Tabs */}
              <div className="sticky -top-6 sm:-top-8 -mx-6 sm:-mx-8 px-6 sm:px-8 pt-6 sm:pt-8 pb-4 bg-dark-900/95 backdrop-blur-md z-20 border-b border-white/10 mb-6">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <Shield size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <span>Admin Control Center</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                          {adminUser?.role || 'Superadmin'}
                        </span>
                      </h3>
                      <p className="text-xs text-slate-400">Logged in as {adminUser?.username}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pr-12">
                    <button
                      onClick={loadAdminData}
                      className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                      title="Refresh Data"
                    >
                      <RefreshCw size={16} className={loadingData ? 'animate-spin' : ''} />
                    </button>
                    <button
                      onClick={logoutAdmin}
                      className="px-3.5 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <LogOut size={14} />
                      <span>Logout</span>
                    </button>
                  </div>
                </div>

                {/* Navigation Tabs */}
                <div className="flex items-center gap-2 pt-4">
                  <button
                    onClick={() => setActiveTab('inbox')}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                      activeTab === 'inbox'
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/40'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Mail size={15} />
                    <span>Inquiries Inbox ({messages.length})</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('projects')}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                      activeTab === 'projects'
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/40'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <FolderKanban size={15} />
                    <span>Manage Projects ({projects.length})</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('new-project')}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                      activeTab === 'new-project'
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/40'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Plus size={15} />
                    <span>Publish New Project</span>
                  </button>
                </div>
              </div>

              {/* Tab 1: Inbox */}
              {activeTab === 'inbox' && (
                <div className="space-y-3">
                  {messages.length === 0 ? (
                    <div className="text-center py-12 text-slate-400 text-sm">
                      No inquiries received yet.
                    </div>
                  ) : (
                    messages.map((msg) => {
                      const msgId = (msg.id || msg._id) as string;
                      return (
                        <div
                          key={msgId}
                          className={`p-4 rounded-2xl border transition-all ${
                            msg.isRead
                              ? 'bg-white/5 border-white/5'
                              : 'bg-cyan-500/5 border-cyan-400/30'
                          }`}
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-white text-sm">{msg.name}</span>
                              <span className="text-xs text-slate-400">&lt;{msg.email}&gt;</span>
                              {msg.phone && (
                                <span className="text-xs font-mono text-cyan-400">({msg.phone})</span>
                              )}
                            </div>
                            <div className="flex items-center gap-1.5">
                              {!msg.isRead && (
                                <button
                                  onClick={() => handleMarkRead(msgId)}
                                  className="px-2.5 py-1 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 text-xs font-medium flex items-center gap-1 transition-colors"
                                >
                                  <Check size={12} />
                                  <span>Mark Read</span>
                                </button>
                              )}
                              <a
                                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(msg.email)}&su=Re:%20${encodeURIComponent(msg.subject)}`}
                                target="_blank"
                                rel="noreferrer"
                                className="px-2.5 py-1 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 text-xs font-medium transition-colors"
                                title="Reply via Gmail"
                              >
                                Reply
                              </a>
                              <button
                                onClick={() => handleDeleteMessage(msgId)}
                                className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 transition-colors"
                              >
                                <Trash2 size={15} />
                              </button>
                            </div>
                          </div>
                          <div className="text-xs font-semibold text-cyan-300 mb-1">
                            Subject: {msg.subject}
                          </div>
                          <p className="text-xs text-slate-300 whitespace-pre-wrap leading-relaxed">
                            {msg.message}
                          </p>
                          <div className="text-[10px] font-mono text-slate-500 mt-2">
                            Received: {new Date(msg.createdAt || Date.now()).toLocaleString()}
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              )}

              {/* Tab 2: Projects List */}
              {activeTab === 'projects' && (
                <div className="space-y-3">
                  {projects.map((proj) => {
                    const pId = (proj.id || proj._id) as string;
                    return (
                      <div
                        key={pId}
                        className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-4"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={proj.image}
                            alt={proj.title}
                            className="w-14 h-14 rounded-xl object-cover"
                          />
                          <div>
                            <h4 className="font-bold text-white text-sm">{proj.title}</h4>
                            <p className="text-xs text-cyan-400 font-mono">{proj.category}</p>
                            <span className="text-[11px] text-slate-400 line-clamp-1">{proj.subtitle}</span>
                          </div>
                        </div>

                        <button
                          onClick={() => handleDeleteProject(pId)}
                          className="p-2 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                          title="Delete Project"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Tab 3: Publish Project */}
              {activeTab === 'new-project' && (
                <form onSubmit={handleCreateProject} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">Title</label>
                      <input
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        placeholder="e.g. AI Financial Analyzer"
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">Subtitle</label>
                      <input
                        value={newSubtitle}
                        onChange={(e) => setNewSubtitle(e.target.value)}
                        placeholder="e.g. Real-Time Algorithmic Analytics"
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">Category</label>
                      <select
                        value={newCategory}
                        onChange={(e: any) => setNewCategory(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                      >
                        <option value="Enterprise MERN">Enterprise MERN</option>
                        <option value="Full Stack System">Full Stack System</option>
                        <option value="Game Development">Game Development</option>
                        <option value="Web Application">Web Application</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">Image URL</label>
                      <input
                        value={newImg}
                        onChange={(e) => setNewImg(e.target.value)}
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Tech Stack (comma-separated)</label>
                    <input
                      value={newTech}
                      onChange={(e) => setNewTech(e.target.value)}
                      placeholder="React, TypeScript, Node.js, Express, MongoDB"
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Description</label>
                    <textarea
                      rows={3}
                      value={newDesc}
                      onChange={(e) => setNewDesc(e.target.value)}
                      placeholder="Architecture details, metrics, and capabilities..."
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-dark-950 font-bold text-sm tracking-wide shadow-glow-cyan hover:scale-[1.01] transition-all cursor-pointer"
                  >
                    Publish Project to Live Portfolio
                  </button>
                </form>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
