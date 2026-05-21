import { motion } from 'framer-motion';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import SectionHeading from './SectionHeading.jsx';
import { fadeUp, stagger } from '../utils/motion.js';
import { SERVICES } from '../constants/data.js';
import { buildWhatsAppLink } from '../constants/business.js';

export default function Services() {
  return (
    <section id="services" className="section relative overflow-hidden bg-brand-mist">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-secondary/10 rounded-full blur-3xl -z-0" />

      <div className="max-container container-px relative">
        <SectionHeading
          eyebrow="What We Offer"
          title="Premium Services, End to End"
          subtitle="Five core services, one trusted partner. Pick what you need — we handle the rest."
        />

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            // Make the last (5th) card span two cols on lg for visual balance
            const span = i === SERVICES.length - 1 ? 'lg:col-span-1 md:col-span-2 lg:row-span-1' : '';
            return (
              <motion.article
                key={s.id}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className={`group relative bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-premium transition-all duration-500 flex flex-col ${span}`}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/70 via-brand-ink/10 to-transparent" />
                  <div className="absolute top-4 left-4 chip !bg-white/90 !text-brand-primary !border-white">
                    <Icon /> {s.highlight}
                  </div>
                  <div className="absolute -bottom-6 right-5 w-14 h-14 rounded-2xl bg-gradient-gold text-white grid place-items-center shadow-gold transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                    <Icon size={22} />
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-brand-ink leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-sm text-brand-gold font-semibold mt-1">{s.short}</p>
                  <p className="text-brand-ink/65 text-sm leading-relaxed mt-4">{s.description}</p>

                  <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2 flex-1">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-xs sm:text-sm text-brand-ink/75">
                        <FaCheckCircle className="text-brand-secondary mt-0.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={buildWhatsAppLink(`Hi! I would like to book: ${s.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-primary group/cta"
                  >
                    Book this service
                    <FaArrowRight className="transition-transform duration-300 group-hover/cta:translate-x-1" />
                  </a>
                </div>

                {/* Hover ring */}
                <span className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-transparent group-hover:ring-brand-gold/40 transition" />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
