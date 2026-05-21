import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import SectionHeading from './SectionHeading.jsx';
import { TESTIMONIALS } from '../constants/data.js';

export default function Testimonials() {
  return (
    <section className="section bg-white relative overflow-hidden">
      <div className="absolute top-1/3 -left-20 w-72 h-72 bg-brand-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-brand-secondary/10 rounded-full blur-3xl" />

      <div className="max-container container-px relative">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Riders Say"
          subtitle="Real stories from families, professionals and frequent travellers we have served."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            modules={[Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={28}
            slidesPerView={1}
            centeredSlides
            loop
            autoplay={{ delay: 5500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-16"
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.name} className="h-auto">
                <article className="relative h-full bg-brand-mist border border-brand-primary/10 rounded-3xl p-7 shadow-soft hover:shadow-premium transition-all duration-500 flex flex-col">
                  <FaQuoteLeft className="text-brand-gold/40 text-4xl mb-4" />
                  <p className="text-brand-ink/80 leading-relaxed text-[0.95rem] flex-1">
                    “{t.text}”
                  </p>

                  <div className="flex gap-1 mt-5 text-brand-gold">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mt-5 pt-5 border-t border-brand-primary/10">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      loading="lazy"
                      className="w-12 h-12 rounded-full object-cover border-2 border-brand-gold/40"
                    />
                    <div>
                      <p className="font-display font-bold text-brand-ink">{t.name}</p>
                      <p className="text-xs text-brand-ink/60">{t.role}</p>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
