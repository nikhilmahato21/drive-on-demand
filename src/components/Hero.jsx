import { motion } from 'framer-motion';
import {
  FaWhatsapp, FaPhoneAlt, FaPlaneDeparture,
  FaRoad, FaTruckMoving, FaMapMarkerAlt,
  FaStar, FaShieldAlt, FaClock, FaArrowDown, FaCheckCircle,
} from 'react-icons/fa';
import { BUSINESS, buildCallLink, buildWhatsAppLink } from '../constants/business.js';

const HERO_BG = '/hero-bg.jpg';

const services = [
  { icon: FaPlaneDeparture, label: 'Airport Transfers' },
  { icon: FaRoad,           label: 'Outstation Trips' },
  { icon: FaTruckMoving,    label: 'Vehicle Transport' },
  { icon: FaShieldAlt,      label: 'Safe & Verified' },
];

const stats = [
  { value: '500+',   label: 'Happy Customers' },
  { value: '4.9★',  label: 'Star Rating' },
  { value: '10+',    label: 'Cities Covered' },
  { value: '24/7',   label: 'Always Available' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-0 min-h-[100svh] w-full overflow-hidden flex flex-col bg-brand-ink text-white"
    >
      {/* ── Background Image + Overlays ── */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BG}
          alt="India travel destination"
          className="h-full w-full object-cover object-center scale-105"
          style={{ animation: 'heroZoom 18s ease-in-out infinite alternate' }}
          loading="eager"
          fetchPriority="high"
          referrerPolicy="no-referrer"
        />
        {/* Dark base overlay */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Top fade for navbar */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
        {/* Golden glow accent bottom-left */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_10%_90%,rgba(245,158,11,0.18),transparent)]" />
        {/* Blue glow accent top-right */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_90%_10%,rgba(37,99,235,0.22),transparent)]" />
      </div>

      <style>{`
        @keyframes heroZoom {
          from { transform: scale(1.05); }
          to   { transform: scale(1.12); }
        }
      `}</style>

      {/* ── Hero Body ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-28 pb-12">

        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white/90 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold" />
          </span>
          <FaMapMarkerAlt className="text-brand-gold" />
          <span>{BUSINESS.shortLocation}</span>
          <span className="text-white/30">·</span>
          <span className="text-white/65">Serving across India</span>
        </motion.div>

        {/* ── Main Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm sm:text-base uppercase tracking-[0.35em] text-brand-gold font-semibold mb-4">
            Premium Travel &amp; Tourism
          </p>

          <h1 className="font-display font-bold leading-[1.08] tracking-tight">
            <span className="block text-2xl sm:text-3xl md:text-4xl text-white/80 font-semibold mb-1">
              Welcome to
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white drop-shadow-lg">
              Drive On Demand
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-2 bg-gradient-to-r from-amber-300 via-brand-gold to-amber-400 bg-clip-text text-transparent">
              Travel's &amp; Tourism
            </span>
          </h1>
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-7 flex items-center gap-3"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-brand-gold/70" />
          <FaStar className="text-brand-gold text-xs" />
          <FaStar className="text-brand-gold text-sm" />
          <FaStar className="text-brand-gold text-xs" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-brand-gold/70" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-6 text-base sm:text-lg text-white/75 max-w-2xl leading-relaxed"
        >
          Professional airport transfers, outstation trips &amp; vehicle transport from{' '}
          <span className="text-brand-gold font-semibold">Jamshedpur (Tata)</span>{' '}
          to every destination that matters — comfort, safety &amp; on-time, every time.
        </motion.p>

        {/* Service chips */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {services.map((s) => (
            <span
              key={s.label}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-white/90 hover:bg-white/20 transition-colors"
            >
              <s.icon className="text-brand-gold" />
              {s.label}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-gold to-amber-500 hover:from-amber-400 hover:to-brand-gold text-white font-bold text-sm sm:text-base px-7 sm:px-9 py-3.5 sm:py-4 rounded-full shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-8px_rgba(245,158,11,0.55)]"
          >
            Book Your Ride →
          </a>
          <a
            href={buildCallLink()}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/25 text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5"
          >
            <FaPhoneAlt className="text-brand-gold text-xs" /> Call Now
          </a>
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366]/20 hover:bg-[#25D366]/35 border border-[#25D366]/40 text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5"
          >
            <FaWhatsapp className="text-[#25D366] text-base" /> WhatsApp
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.05 }}
          className="mt-8 flex flex-wrap justify-center gap-2"
        >
          {[
            { icon: FaShieldAlt, text: 'Verified Drivers' },
            { icon: FaCheckCircle, text: 'No Hidden Charges' },
            { icon: FaClock,     text: '24/7 Support' },
          ].map((t) => (
            <span
              key={t.text}
              className="inline-flex items-center gap-1.5 bg-black/30 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-full text-[0.72rem] font-semibold text-white/80"
            >
              <t.icon className="text-brand-gold text-[0.65rem]" />
              {t.text}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── Stats Bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="relative z-10 bg-black/40 backdrop-blur-xl border-t border-white/10"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col items-center justify-center py-2 px-4 text-center ${
                  i < stats.length - 1 ? 'sm:border-r border-white/10' : ''
                }`}
              >
                <span className="text-2xl sm:text-3xl font-display font-bold text-brand-gold leading-none">
                  {s.value}
                </span>
                <span className="text-[0.7rem] text-white/55 font-medium uppercase tracking-widest mt-1">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1.5 text-white/35 hover:text-white/60 transition-colors"
        aria-label="Scroll to services"
      >
        <span className="text-[0.58rem] uppercase tracking-[0.25em] font-semibold">Scroll</span>
        <FaArrowDown className="text-xs animate-bounce" />
      </motion.a>
    </section>
  );
}
