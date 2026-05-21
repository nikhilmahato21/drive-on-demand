import { motion } from 'framer-motion';
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';
import Logo from './Logo.jsx';
import {
  BUSINESS,
  buildCallLink,
  buildWhatsAppLink,
} from '../constants/business.js';
import { NAV_LINKS, SERVICES, POPULAR_ROUTES } from '../constants/data.js';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-[#0a1230] text-white/80 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.18),transparent_60%)]" />
      <div className="absolute inset-0 grain" />

      <div className="relative max-container container-px pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl p-3 inline-block">
              <Logo />
            </div>
            <p className="mt-6 text-white/65 leading-relaxed max-w-sm">
              Trusted travel, airport transfers, driver-on-demand and pan-India vehicle transportation
              services. Headquartered in {BUSINESS.shortLocation}.
            </p>

            <p className="mt-6 font-display italic text-brand-gold text-lg">
              “{BUSINESS.tagline}”
            </p>

            <div className="flex gap-3 mt-6">
              {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-xl bg-white/8 hover:bg-brand-gold hover:text-white grid place-items-center transition text-white/80"
                  aria-label="Social link"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-white mb-5 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/65 hover:text-brand-gold transition text-sm">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-white mb-5 text-lg">Services</h4>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="text-white/65 hover:text-brand-gold transition text-sm">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-white mb-5 text-lg">Reach Us</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href={buildCallLink()} className="flex items-start gap-3 text-white/65 hover:text-brand-gold transition">
                  <FaPhoneAlt className="text-brand-gold mt-0.5 shrink-0" /> {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/65 hover:text-brand-gold transition"
                >
                  <FaWhatsapp className="text-brand-gold mt-0.5 shrink-0" /> WhatsApp Chat
                </a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS.email}`} className="flex items-start gap-3 text-white/65 hover:text-brand-gold transition break-all">
                  <FaEnvelope className="text-brand-gold mt-0.5 shrink-0" /> {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/65">
                <FaMapMarkerAlt className="text-brand-gold mt-0.5 shrink-0" />
                <span>{BUSINESS.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Popular routes strip */}
        <div className="mt-14 pt-8 border-t border-white/10">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold mb-4">
            Popular Routes
          </p>
          <div className="flex flex-wrap gap-2">
            {POPULAR_ROUTES.map((r) => (
              <a
                key={`${r.from}-${r.to}`}
                href="#routes"
                className="px-4 py-1.5 rounded-full bg-white/5 hover:bg-brand-gold hover:text-white text-white/70 text-xs font-medium transition"
              >
                {r.from} → {r.to}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/50">
          <p>© {year} {BUSINESS.fullName}. All rights reserved.</p>
          <p>
            Built with care in {BUSINESS.shortLocation}.
          </p>
        </div>
      </div>
    </footer>
  );
}
