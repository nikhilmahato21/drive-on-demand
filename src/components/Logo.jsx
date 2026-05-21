import { BUSINESS } from '../constants/business.js';

export default function Logo({ light = false, compact = false }) {
  return (
    <a href="#home" className="flex items-center gap-3 group" aria-label={BUSINESS.fullName}>
      <span className="relative inline-flex">
        <img
          src="/logo.svg"
          alt={`${BUSINESS.fullName} logo`}
          className={`${compact ? 'w-10 h-10' : 'w-12 h-12'} rounded-xl shadow-soft transition-transform duration-500 group-hover:rotate-[-6deg]`}
        />
        <span className="absolute -inset-1 rounded-2xl bg-brand-gold/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={`font-display font-bold text-[1.05rem] sm:text-[1.15rem] tracking-tight ${
            light ? 'text-white' : 'text-brand-ink'
          }`}
        >
          Drive On Demand
        </span>
        <span
          className={`text-[0.65rem] sm:text-[0.7rem] uppercase tracking-[0.18em] font-semibold ${
            light ? 'text-white/80' : 'text-brand-gold'
          }`}
        >
          Travels & Tourism
        </span>
      </span>
    </a>
  );
}
