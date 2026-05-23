import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import FloatingActions from './components/FloatingActions.jsx';
import Home from './pages/Home.jsx';

function OpeningLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden text-white"
      style={{ background: 'linear-gradient(150deg,#050d1f 0%,#111827 55%,#1c0d00 100%)' }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.03 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      aria-label="Loading Drive On Demand"
    >
      {/* Grain */}
      <div className="absolute inset-0 grain pointer-events-none" />

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-primary/25 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-gold/15 blur-[120px] pointer-events-none" />

      {/* Road line decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-8 opacity-20">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="w-10 h-0.5 bg-white rounded-full" />
        ))}
      </div>

      <motion.div
        className="relative flex flex-col items-center text-center px-6"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Logo with animated rings */}
        <div className="relative mb-8">
          <motion.div
            className="absolute -inset-8 rounded-full border border-brand-gold/15"
            animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -inset-4 rounded-full border border-brand-gold/30"
            animate={{ scale: [1, 1.06, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          />
          <motion.div
            className="relative w-56 h-56 rounded-full bg-white  p-5 overflow-hidden ring-2 ring-brand-gold/50"
            style={{ boxShadow: '0 0 48px rgba(245,158,11,0.35), 0 0 96px rgba(245,158,11,0.12)' }}
            animate={{ boxShadow: [
              '0 0 48px rgba(245,158,11,0.35), 0 0 96px rgba(245,158,11,0.12)',
              '0 0 64px rgba(245,158,11,0.55), 0 0 128px rgba(245,158,11,0.18)',
              '0 0 48px rgba(245,158,11,0.35), 0 0 96px rgba(245,158,11,0.12)',
            ]}}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img src="/logo.jpeg" alt="Drive On Demand logo" className="w-full h-full object-cover " />
          </motion.div>
        </div>

        {/* Brand text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.4em] text-brand-gold mb-1.5">
            Premium Travel & Tourism
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
            Drive On Demand
          </h1>
          <p className="mt-1 text-sm text-white/45 tracking-[0.2em] uppercase font-medium">
            Tours & Travels
          </p>
        </motion.div>

        {/* Progress bar */}
        <div className="mt-10 w-56 h-[3px] rounded-full bg-white/10 overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: 'linear-gradient(90deg,#1E3A8A,#2563EB,#F59E0B,#fbbf24)' }}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
          />
        </div>

        {/* Animated dots */}
        <div className="mt-4 flex items-center gap-2">
          {[0, 0.18, 0.36].map((delay, i) => (
            <motion.span
              key={i}
              className="block w-1.5 h-1.5 rounded-full bg-brand-gold"
              animate={{ opacity: [0.25, 1, 0.25], scale: [0.7, 1.3, 0.7] }}
              transition={{ duration: 1.1, repeat: Infinity, delay, ease: 'easeInOut' }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1700);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white min-h-screen text-brand-ink antialiased">
      <AnimatePresence>{isLoading && <OpeningLoader />}</AnimatePresence>
      <Navbar />
      <Home />
      <Footer />
      <FloatingActions />
    </div>
  );
}
