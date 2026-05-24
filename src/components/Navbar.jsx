import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import Logo from './Logo.jsx';
import useScrolled from '../hooks/useScrolled.js';
import { NAV_LINKS } from '../constants/data.js';
import { BUSINESS, buildCallLink } from '../constants/business.js';

export default function Navbar() {
  const scrolled = useScrolled(20);
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-soft border-b border-black/5'
          : 'bg-white/80 backdrop-blur-xl border-b border-white/70 shadow-[0_10px_30px_rgba(15,23,42,0.08)]'
      }`}
    >
      <nav className="max-container container-px flex items-center justify-between h-20">
        <Logo />

        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative px-4 py-2 text-sm font-semibold tracking-wide text-brand-ink/80 transition-colors duration-300 hover:text-brand-primary group"
              >
                {l.label}
                <span className="absolute left-4 right-4 -bottom-0.5 h-[2px] origin-left scale-x-0 bg-brand-gold transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a href={buildCallLink()} className="btn-primary !py-2.5 !px-5 text-sm">
            <FiPhone /> {BUSINESS.phone}
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 rounded-xl text-brand-primary transition-colors hover:bg-brand-primary/5"
        >
          {open ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-white border-t border-black/5 overflow-hidden"
          >
            <ul className="container-px py-4 flex flex-col gap-1">
              {NAV_LINKS.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-xl text-brand-ink font-semibold hover:bg-brand-primary/5 hover:text-brand-primary transition"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-2">
                <a href={buildCallLink()} className="btn-primary w-full">
                  <FiPhone /> Call {BUSINESS.phone}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
