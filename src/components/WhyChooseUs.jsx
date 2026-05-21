import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading.jsx';
import { fadeUp, stagger } from '../utils/motion.js';
import { WHY_CHOOSE_US } from '../constants/data.js';

export default function WhyChooseUs() {
  return (
    <section className="section relative overflow-hidden bg-gradient-to-br from-brand-primary via-brand-primary to-[#0F2461] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(245,158,11,0.18),transparent_50%)]" />
      <div className="absolute inset-0 grain" />
      <div className="max-container container-px relative">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A Travel Partner You Can Truly Trust"
          subtitle="Hundreds of riders. Thousands of kilometres. One promise — comfort, safety and care, every single trip."
          light
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {WHY_CHOOSE_US.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group relative p-7 rounded-2xl glass-dark hover:bg-white/[0.08] transition-all duration-300 overflow-hidden"
              >
                <span className="absolute -right-6 -top-6 w-28 h-28 rounded-full bg-brand-gold/15 blur-2xl transition-all duration-500 group-hover:scale-150" />

                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-gold grid place-items-center text-white shadow-gold mb-5 transition-transform duration-500 group-hover:rotate-[-6deg] group-hover:scale-110">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white">{f.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed mt-2">{f.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
