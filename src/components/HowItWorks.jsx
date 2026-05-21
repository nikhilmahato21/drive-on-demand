import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading.jsx';
import { fadeUp, stagger } from '../utils/motion.js';
import { HOW_IT_WORKS } from '../constants/data.js';

export default function HowItWorks() {
  return (
    <section className="section bg-white relative overflow-hidden">
      <div className="max-container container-px relative">
        <SectionHeading
          eyebrow="How It Works"
          title="Booking in 4 Simple Steps"
          subtitle="From the first call to the final destination, everything is smooth, fast and stress-free."
        />

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Connector line */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-brand-primary/0 via-brand-gold/60 to-brand-primary/0" />

          {HOW_IT_WORKS.map((s, i) => (
            <motion.div
              key={s.step}
              variants={fadeUp}
              className="relative group"
            >
              <div className="relative bg-brand-mist border border-brand-primary/10 rounded-3xl p-7 h-full hover-lift">
                <div className="relative w-16 h-16 mb-5">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-brand text-white grid place-items-center font-display font-bold text-2xl shadow-soft">
                    {s.step}
                  </div>
                  <span className="absolute -inset-1 rounded-2xl bg-brand-gold/30 blur-md opacity-0 group-hover:opacity-100 transition" />
                </div>

                <h3 className="font-display font-bold text-xl text-brand-ink">{s.title}</h3>
                <p className="text-brand-ink/65 text-sm leading-relaxed mt-2">{s.desc}</p>

                {i < HOW_IT_WORKS.length - 1 && (
                  <div className="lg:hidden absolute -bottom-3 left-1/2 -translate-x-1/2 w-px h-6 bg-brand-gold/40" />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
