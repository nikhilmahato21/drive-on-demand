import { BUSINESS } from '../constants/business.js';

const LOGO_URL =
  'https://res.cloudinary.com/dynbpb9u0/image/upload/v1779440798/WhatsApp_Image_2026-05-22_at_14.35.24-removebg-preview_iizo0t.png';

export default function Logo({ light = false, compact = false }) {
  const markSize = compact ? 'h-20 w-20' : 'h-32 w-32';

  return (
    <a href="#home" className="group flex items-center gap-3" aria-label={BUSINESS.fullName}>
      <span className={`relative inline-flex ${markSize} shrink-0`}>
        <img
          src={LOGO_URL}
          alt={`${BUSINESS.fullName} logo`}
          className="relative z-10 h-full w-full object-contain drop-shadow-lg transition-transform duration-500 group-hover:rotate-[-6deg]"
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
