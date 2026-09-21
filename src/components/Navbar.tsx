import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Lock, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { useStore } from '../store/useStore.js';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme, setIsAdminOpen, activeSection, setActiveSection } = useStore();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section spy
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav className="glass-panel rounded-2xl px-4 sm:px-6 py-2.5 flex items-center justify-between border border-white/10 shadow-2xl backdrop-blur-xl">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => scrollToSection(e, '#hero')}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1.5px] shadow-glow-cyan transition-transform duration-300 group-hover:scale-105 overflow-hidden">
                <img
                  src="/images/gayan-avatar.jpg"
                  alt="Gayan Tharaka"
                  className="w-full h-full object-cover object-top rounded-[10px]"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm tracking-tight text-slate-100 group-hover:text-cyan-400 transition-colors">
                  Gayan Tharaka
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest hidden sm:inline">
                  MERN Developer
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 bg-white/5 border border-white/5 rounded-full px-3 py-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-cyan-400 font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 rounded-full bg-cyan-400/15 border border-cyan-400/30"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </a>
                );
              })}
            </div>

            {/* Right Action Icons */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className="p-2 rounded-xl text-slate-400 hover:text-cyan-400 hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Admin Portal Trigger */}
              <button
                onClick={() => setIsAdminOpen(true)}
                title="Admin Dashboard Portal"
                aria-label="Admin Portal"
                className="p-2 rounded-xl text-slate-400 hover:text-indigo-400 hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
              >
                <Lock size={16} />
              </button>

              {/* Hire Me CTA (Desktop) */}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-glow-cyan hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Sparkles size={14} className="text-cyan-200" />
                <span>Let's Talk</span>
                <ArrowUpRight size={14} />
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-xl text-slate-300 hover:bg-white/5"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden glass-panel rounded-3xl p-6 border border-white/10 shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/20'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="w-full py-3 rounded-xl text-center text-xs font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-glow-cyan"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
