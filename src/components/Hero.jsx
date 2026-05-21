import { motion } from 'framer-motion';
import {
  FaWhatsapp, FaPhoneAlt, FaPlaneDeparture, FaUserTie,
  FaRoad, FaTruckMoving, FaCheckCircle, FaMapMarkerAlt,
  FaStar, FaShieldAlt, FaClock, FaArrowDown,
} from 'react-icons/fa';
import { fadeUp, stagger } from '../utils/motion.js';
import { BUSINESS, buildCallLink, buildWhatsAppLink } from '../constants/business.js';

const features = [
  { icon: FaPlaneDeparture, label: 'Airport Transfers', desc: 'Kolkata, Ranchi & beyond' },
  { icon: FaUserTie,        label: 'Driver on Demand',  desc: 'Trained & courteous' },
  { icon: FaRoad,           label: 'Outstation Trips',  desc: 'Pan-India coverage' },
  { icon: FaTruckMoving,    label: 'Vehicle Transport', desc: 'Door-to-door delivery' },
];

const stats = [
  { value: '500+',  label: 'Happy Customers' },
  { value: '4.9',   label: 'Star Rating', icon: FaStar },
  { value: '10+',   label: 'Cities Covered' },
  { value: '24 / 7', label: 'Always Available' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full overflow-hidden flex flex-col text-white"
    >
      {/* Background image + layered overlays */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2400&q=85"
          alt="Premium highway journey"
          className="w-full h-full object-cover scale-105"
        />
        {/* Deep rich overlay — richer contrast than before */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/95 via-brand-primary/80 to-black/60" />
        {/* Gold warmth top-right */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.18),transparent_60%)]" />
        {/* Light highlight bottom-right */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(37,99,235,0.25),transparent_55%)]" />
        <div className="absolute inset-0 grain" />
      </div>

      {/* ── Main two-column layout ───────────────────── */}
      <div className="flex-1 flex items-center">
        <div className="max-container container-px w-full pt-32 pb-10 lg:pt-28 lg:pb-16">
          <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px] gap-10 xl:gap-16 items-center">

            {/* ── LEFT: Content ── */}
            <div>
              {/* Location pill */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 glass-dark text-white/90 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-7"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold" />
                </span>
                <FaMapMarkerAlt className="text-brand-gold" />
                {BUSINESS.shortLocation}
                <span className="text-white/40 hidden sm:inline">·</span>
                <span className="hidden sm:inline text-white/70">Serving across India</span>
              </motion.div>

              <motion.div variants={stagger(0.1)} initial="hidden" animate="show">
                <motion.span variants={fadeUp} className="eyebrow !text-brand-gold">
                  — {BUSINESS.tagline} —
                </motion.span>

                <motion.h1
                  variants={fadeUp}
                  className="h-display text-4xl sm:text-5xl md:text-6xl lg:text-[3.6rem] xl:text-7xl mt-4 text-balance leading-[1.06]"
                >
                  Travel Smarter{' '}
                  <span className="block mt-1">
                    With{' '}
                    <span className="relative inline-block">
                      <span className="bg-gradient-to-r from-brand-gold via-amber-300 to-brand-gold bg-clip-text text-transparent">
                        Drive On Demand
                      </span>
                      <svg
                        viewBox="0 0 300 10"
                        className="absolute -bottom-1.5 left-0 w-full h-2.5 text-brand-gold/70"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path d="M2 7 Q 75 2 150 6 T 298 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                      </svg>
                    </span>
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="mt-6 text-base sm:text-lg text-white/80 max-w-xl leading-relaxed"
                >
                  Trusted travel, driver and vehicle transport services across India —
                  from{' '}
                  <span className="text-brand-gold font-semibold">Jamshedpur (Tata)</span>{' '}
                  to anywhere you need to be.
                </motion.p>

                {/* CTAs */}
                <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
                  <a href="#contact" className="btn-gold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5">
                    Book Your Ride
                    <span aria-hidden="true">→</span>
                  </a>
                  <a href={buildCallLink()} className="btn-primary text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5">
                    <FaPhoneAlt /> Call Now
                  </a>
                  <a
                    href={buildWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5"
                  >
                    <FaWhatsapp /> WhatsApp
                  </a>
                </motion.div>

                {/* Trust chips */}
                <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-2">
                  {[
                    { icon: FaShieldAlt, text: 'Verified Drivers' },
                    { icon: FaStar,      text: '4.9-Star Rated' },
                    { icon: FaClock,     text: '24 / 7 Support' },
                  ].map((t) => (
                    <span
                      key={t.text}
                      className="inline-flex items-center gap-1.5 glass-dark px-3 py-1.5 rounded-full text-xs font-semibold text-white/90"
                    >
                      <t.icon className="text-brand-gold text-[0.7rem]" />
                      {t.text}
                    </span>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {/* ── RIGHT: Feature panel (lg+) ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex flex-col gap-4"
            >
              {/* Panel header */}
              <div className="glass-dark rounded-2xl px-5 py-4 border border-white/10">
                <p className="text-[0.68rem] uppercase tracking-[0.2em] text-brand-gold font-semibold mb-3">
                  Why Travelers Choose Us
                </p>
                <ul className="flex flex-col gap-3">
                  {features.map((f, i) => (
                    <motion.li
                      key={f.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                      className="flex items-center gap-3.5"
                    >
                      <span className="w-10 h-10 rounded-xl bg-brand-gold/15 border border-brand-gold/25 text-brand-gold flex items-center justify-center shrink-0">
                        <f.icon className="text-sm" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-white leading-tight">{f.label}</p>
                        <p className="text-xs text-white/55 font-medium mt-0.5">{f.desc}</p>
                      </div>
                      <FaCheckCircle className="ml-auto text-brand-gold/70 shrink-0 text-sm" />
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Booking nudge card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.6 }}
                className="relative overflow-hidden rounded-2xl bg-gradient-gold p-5 shadow-gold"
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.18),transparent_60%)]" />
                <p className="relative text-xs uppercase tracking-widest font-semibold text-white/80 mb-1">
                  Ready to travel?
                </p>
                <p className="relative text-xl font-display font-bold text-white leading-tight mb-4">
                  Book in 60 seconds.<br />No hidden charges.
                </p>
                <a
                  href="#contact"
                  className="relative inline-flex items-center gap-2 bg-white text-brand-goldDark font-bold text-sm px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
                >
                  Get a Free Quote →
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="relative z-10 glass-dark border-t border-white/10"
      >
        <div className="max-container container-px py-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col sm:flex-row items-center sm:items-center justify-center gap-1 sm:gap-2.5 py-3 px-4 text-center sm:text-left ${
                  i < stats.length - 1 ? 'sm:border-r border-white/10' : ''
                }`}
              >
                <span className="text-2xl font-display font-bold text-brand-gold leading-none flex items-center gap-1">
                  {s.value}
                  {s.icon && <s.icon className="text-base" />}
                </span>
                <span className="text-[0.72rem] text-white/60 font-medium uppercase tracking-wide leading-tight">
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
        transition={{ delay: 1.4 }}
        className="absolute bottom-[6.5rem] left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors"
        aria-label="Scroll to services"
      >
        <span className="text-[0.6rem] uppercase tracking-widest font-semibold">Explore</span>
        <FaArrowDown className="text-xs animate-bounce" />
      </motion.a>
    </section>
  );
}
