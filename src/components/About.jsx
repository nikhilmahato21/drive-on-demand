import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { fadeUp, stagger } from '../utils/motion.js';
import SectionHeading from './SectionHeading.jsx';
import { FEATURE_BADGES } from '../constants/data.js';

export default function About() {
  return (
    <section id="about" className="section bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />

      <div className="max-container container-px relative">
        <SectionHeading
          eyebrow="About Us"
          title="Your Trusted Travel Partner"
          subtitle="Drive On Demand Travels & Tourism provides trusted travel, airport transfer, driver-on-demand, and vehicle transportation services. Whether you need an outstation trip, airport ride, driver assistance, or safe transportation of your car across India — we ensure reliability, comfort, and professional service."
        />

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Image collage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[5/6] rounded-3xl overflow-hidden shadow-premium">
              <img
                src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80"
                alt="Premium car ready for travel"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="absolute -bottom-8 -right-4 sm:-right-8 w-44 sm:w-56 aspect-square rounded-2xl overflow-hidden shadow-premium border-4 border-white"
            >
              <img
                src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=600&q=80"
                alt="Professional driver"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -top-4 -left-2 sm:-left-6 glass rounded-2xl px-5 py-4 shadow-premium"
            >
              <p className="font-display font-bold text-3xl text-brand-primary leading-none">10K+</p>
              <p className="text-xs font-semibold text-brand-ink/60 mt-1 uppercase tracking-wider">Happy Travellers</p>
            </motion.div>
          </motion.div>

          {/* Features list */}
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-6"
          >
            <motion.h3
              variants={fadeUp}
              className="h-display text-2xl sm:text-3xl text-brand-ink mb-4"
            >
              Comfort, safety and trust — in every kilometre.
            </motion.h3>
            <motion.p variants={fadeUp} className="text-brand-ink/65 leading-relaxed mb-8">
              From your doorstep in Jamshedpur to airports, outstation cities, or anywhere in India —
              we plan, drive and deliver. Our drivers are background-verified, our fleet is well-maintained,
              and our pricing is always transparent.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-3">
              {FEATURE_BADGES.map((b) => (
                <motion.div
                  key={b}
                  variants={fadeUp}
                  className="flex items-center gap-3 p-4 rounded-2xl border border-brand-primary/10 bg-brand-mist hover-lift"
                >
                  <span className="w-9 h-9 rounded-xl bg-gradient-brand text-white grid place-items-center shrink-0">
                    <FaCheckCircle />
                  </span>
                  <span className="font-semibold text-brand-ink text-sm">{b}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
