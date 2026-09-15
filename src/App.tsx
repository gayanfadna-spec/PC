import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Helmet } from 'react-helmet-async';
import { Toaster } from 'sonner';

import { useStore } from './store/useStore.js';
import { LoadingScreen } from './components/LoadingScreen.js';
import { CustomCursor } from './components/CustomCursor.js';
import { ParticleCanvas } from './components/ParticleCanvas.js';
import { Navbar } from './components/Navbar.js';
import { HeroSection } from './components/HeroSection.js';
import { AboutSection } from './components/AboutSection.js';
import { SkillsSection } from './components/SkillsSection.js';
import { ProjectsSection } from './components/ProjectsSection.js';
import { ExperienceSection } from './components/ExperienceSection.js';
import { ContactSection } from './components/ContactSection.js';
import { Footer } from './components/Footer.js';
import { ProjectModal } from './components/ProjectModal.js';
import { AdminModal } from './components/AdminModal.js';

gsap.registerPlugin(ScrollTrigger);

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme } = useStore();

  useEffect(() => {
    // Synchronize HTML class with store theme
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [theme]);

  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.on('scroll', () => {
      ScrollTrigger.update();
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    });

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  return (
    <div className={`relative min-h-screen overflow-x-hidden ${theme === 'dark' ? 'dark bg-dark-950' : 'light bg-slate-50'}`}>
      <Helmet>
        <title>Gayan Tharaka — Web Developer & MERN Stack Architect</title>
        <meta
          name="description"
          content="Portfolio of Gayan Tharaka - B.Sc. (Hons) in Computer Science & Technology from Sabaragamuwa University of Sri Lanka. Expert MERN Stack Developer building enterprise platforms."
        />
        <meta property="og:title" content="Gayan Tharaka — MERN Stack Developer" />
        <meta
          property="og:description"
          content="Enterprise Order Management, QR Sales Monitoring, Inventory Forecasting, and Network Marketing platforms built by Gayan Tharaka."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Global Toast Notifications */}
      <Toaster
        position="bottom-right"
        theme={theme === 'dark' ? 'dark' : 'light'}
        richColors
        closeButton
      />

      {/* Loading sequence */}
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      {/* Custom magnetic follower cursor */}
      <CustomCursor />

      {/* Top scroll progress line */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] z-[9999] bg-transparent pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-cyan-300 shadow-[0_0_8px_rgba(0,242,254,0.8)] transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Interactive Constellation Particle Canvas */}
      <ParticleCanvas />

      {/* Main Layout */}
      <div className="relative z-10 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <Footer />
      </div>

      {/* Modals */}
      <ProjectModal />
      <AdminModal />
    </div>
  );
};

export default App;
