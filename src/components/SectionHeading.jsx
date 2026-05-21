import { motion } from 'framer-motion';
import { fadeUp } from '../utils/motion.js';

export default function SectionHeading({ eyebrow, title, subtitle, center = true, light = false }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className={`${center ? 'text-center mx-auto' : 'text-left'} max-w-3xl mb-14`}
    >
      {eyebrow && (
        <span className="eyebrow">— {eyebrow} —</span>
      )}
      <h2
        className={`h-display text-3xl sm:text-4xl lg:text-5xl mt-3 text-balance ${
          light ? 'text-white' : 'text-brand-ink'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base sm:text-lg leading-relaxed ${
            light ? 'text-white/80' : 'text-brand-ink/65'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
