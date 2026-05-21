import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading.jsx';
import { fadeUp, stagger } from '../utils/motion.js';
import { GALLERY } from '../constants/data.js';

export default function Gallery() {
  return (
    <section id="gallery" className="section bg-brand-mist relative overflow-hidden">
      <div className="max-container container-px">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments On the Road"
          subtitle="A glimpse of our journeys — highways, airports, families, and the cars that carry them safely."
        />

        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {GALLERY.map((g, i) => (
            <motion.figure
              key={g.src}
              variants={fadeUp}
              className={`group relative overflow-hidden rounded-2xl shadow-soft ${
                i === 0 || i === 5 ? 'md:row-span-2 md:aspect-[4/5]' : 'aspect-square'
              }`}
            >
              <img
                src={g.src}
                alt={g.label}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/85 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <span className="inline-block px-3 py-1 rounded-full bg-brand-gold/90 text-[0.7rem] font-bold uppercase tracking-wider translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {g.label}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
