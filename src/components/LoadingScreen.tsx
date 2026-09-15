import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 600);
          }, 200);
          return 100;
        }
        const increment = Math.floor(Math.random() * 14) + 6;
        return Math.min(100, prev + increment);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-dark-950 flex flex-col items-center justify-center select-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
        >
          {/* Ambient Glow */}
          <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Monogram */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative mb-8"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-indigo-500/10 to-transparent border border-cyan-400/30 flex items-center justify-center backdrop-blur-md shadow-glow-cyan">
              <span className="text-3xl font-black tracking-widest text-gradient-cyan font-display">
                GT
              </span>
            </div>
          </motion.div>

          {/* Name & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-xl font-bold tracking-wider text-slate-100 uppercase">
              Gayan Tharaka
            </h1>
            <p className="text-xs tracking-widest text-slate-400 uppercase mt-1">
              MERN Stack Developer &bull; Systems Architect
            </p>
          </motion.div>

          {/* Minimalist Progress Track */}
          <div className="w-56 h-1 bg-white/10 rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>

          {/* Percentage */}
          <div className="mt-4 font-mono text-xs text-cyan-400/80 tracking-widest">
            {progress}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
