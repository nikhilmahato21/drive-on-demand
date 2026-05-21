import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock, FaRoute, FaArrowRight } from 'react-icons/fa';
import SectionHeading from './SectionHeading.jsx';
import { fadeUp, stagger } from '../utils/motion.js';
import { POPULAR_ROUTES } from '../constants/data.js';
import { buildWhatsAppLink } from '../constants/business.js';

export default function PopularRoutes() {
  return (
    <section id="routes" className="section bg-brand-mist relative overflow-hidden">
      <div className="max-container container-px">
        <SectionHeading
          eyebrow="Popular Routes"
          title="Where We Drive, Most Often"
          subtitle="Our most-booked routes from Jamshedpur (Tata) — comfortable cars, fixed pricing, on time, every time."
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {POPULAR_ROUTES.map((r) => (
            <motion.article
              key={`${r.from}-${r.to}`}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-premium transition-all duration-500"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={r.image}
                  alt={`${r.from} to ${r.to} route`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/85 via-brand-ink/30 to-transparent" />
                <div className="absolute top-4 right-4 chip !bg-brand-gold !text-white !border-brand-gold text-xs">
                  {r.note}
                </div>

                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-white/80 font-semibold">
                    <FaMapMarkerAlt /> Route
                  </div>
                  <div className="mt-1 flex items-center gap-3 font-display font-bold text-2xl leading-tight">
                    <span>{r.from}</span>
                    <FaArrowRight className="text-brand-gold text-base" />
                    <span>{r.to}</span>
                  </div>
                </div>
              </div>

              <div className="p-5 flex items-center justify-between">
                <div className="flex gap-4 text-sm text-brand-ink/70">
                  <span className="flex items-center gap-2">
                    <FaRoute className="text-brand-secondary" /> {r.distance}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaClock className="text-brand-secondary" /> {r.duration}
                  </span>
                </div>
                <a
                  href={buildWhatsAppLink(`Hi! I want to book ${r.from} → ${r.to}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-brand-primary hover:text-brand-gold transition flex items-center gap-1"
                >
                  Book <FaArrowRight />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
