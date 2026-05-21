import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaCheckCircle,
} from 'react-icons/fa';
import SectionHeading from './SectionHeading.jsx';
import { fadeUp, stagger } from '../utils/motion.js';
import {
  BUSINESS,
  buildCallLink,
  buildWhatsAppLink,
} from '../constants/business.js';
import { SERVICE_TYPE_OPTIONS } from '../constants/data.js';

const EMPTY = {
  name: '',
  phone: '',
  pickup: '',
  destination: '',
  serviceType: SERVICE_TYPE_OPTIONS[0],
  date: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const msg = `*New Booking Enquiry — Drive On Demand*%0A
*Name:* ${form.name}%0A
*Phone:* ${form.phone}%0A
*Service:* ${form.serviceType}%0A
*Pickup:* ${form.pickup}%0A
*Destination:* ${form.destination}%0A
*Travel Date:* ${form.date}%0A
*Message:* ${form.message || '—'}`;
    const url = `https://wa.me/${BUSINESS.whatsapp}?text=${msg}`;
    window.open(url, '_blank', 'noopener');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-mist to-white" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-brand-gold/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-secondary/15 rounded-full blur-3xl" />

      <div className="max-container container-px relative">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Book Your Ride Today"
          subtitle="Tell us where, when, and what you need — we'll confirm in minutes. Or just call/WhatsApp us directly."
        />

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Contact info panel */}
          <motion.aside
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <motion.div
              variants={fadeUp}
              className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-primary to-[#0F2461] text-white p-8 sm:p-10 shadow-premium"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.18),transparent_55%)]" />
              <div className="relative">
                <span className="eyebrow !text-brand-gold">Contact Details</span>
                <h3 className="h-display text-2xl sm:text-3xl mt-3 mb-6">
                  We're available 24×7, 365 days.
                </h3>

                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <span className="w-11 h-11 rounded-xl bg-white/10 grid place-items-center shrink-0">
                      <FaPhoneAlt className="text-brand-gold" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/60 font-semibold">Call us</p>
                      <a href={buildCallLink()} className="block text-lg font-semibold hover:text-brand-gold transition">
                        {BUSINESS.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-11 h-11 rounded-xl bg-white/10 grid place-items-center shrink-0">
                      <FaWhatsapp className="text-brand-gold" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/60 font-semibold">WhatsApp</p>
                      <a
                        href={buildWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-lg font-semibold hover:text-brand-gold transition"
                      >
                        Chat with us now
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-11 h-11 rounded-xl bg-white/10 grid place-items-center shrink-0">
                      <FaEnvelope className="text-brand-gold" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/60 font-semibold">Email</p>
                      <a href={`mailto:${BUSINESS.email}`} className="block text-lg font-semibold hover:text-brand-gold transition break-all">
                        {BUSINESS.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-11 h-11 rounded-xl bg-white/10 grid place-items-center shrink-0">
                      <FaMapMarkerAlt className="text-brand-gold" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/60 font-semibold">Based in</p>
                      <p className="text-lg font-semibold">{BUSINESS.location}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-11 h-11 rounded-xl bg-white/10 grid place-items-center shrink-0">
                      <FaClock className="text-brand-gold" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/60 font-semibold">Hours</p>
                      <p className="text-lg font-semibold">{BUSINESS.hours}</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={buildCallLink()} className="btn-gold !py-3 !px-5 text-sm">
                    <FaPhoneAlt /> Call Now
                  </a>
                  <a
                    href={buildWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost !py-3 !px-5 text-sm"
                  >
                    <FaWhatsapp /> WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.aside>

          {/* Booking form */}
          <motion.form
            onSubmit={onSubmit}
            variants={stagger(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="lg:col-span-7 bg-white rounded-3xl shadow-premium p-7 sm:p-10 border border-brand-primary/10"
          >
            <motion.div variants={fadeUp} className="mb-6">
              <h3 className="h-display text-2xl sm:text-3xl text-brand-ink">
                Quick Booking Form
              </h3>
              <p className="text-brand-ink/60 text-sm mt-2">
                Fill the form — we'll respond on WhatsApp within minutes.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full Name *" name="name" value={form.name} onChange={onChange} required />
              <Field label="Phone Number *" name="phone" type="tel" value={form.phone} onChange={onChange} required />
              <Field label="Pickup Location *" name="pickup" value={form.pickup} onChange={onChange} required placeholder="e.g. Bistupur, Jamshedpur" />
              <Field label="Destination *" name="destination" value={form.destination} onChange={onChange} required placeholder="e.g. Ranchi Airport" />

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-brand-ink/70 uppercase tracking-wider">
                  Service Type *
                </label>
                <select
                  name="serviceType"
                  value={form.serviceType}
                  onChange={onChange}
                  required
                  className="px-4 py-3 rounded-xl border border-brand-primary/15 bg-brand-mist focus:outline-none focus:border-brand-secondary focus:bg-white focus:ring-4 focus:ring-brand-secondary/10 transition text-brand-ink font-medium"
                >
                  {SERVICE_TYPE_OPTIONS.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>

              <Field label="Travel Date *" name="date" type="date" value={form.date} onChange={onChange} required />
            </div>

            <div className="mt-5">
              <label className="text-xs font-semibold text-brand-ink/70 uppercase tracking-wider">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={onChange}
                placeholder="Any specific requirements? (e.g. SUV, multiple stops, luggage)"
                className="mt-1.5 w-full px-4 py-3 rounded-xl border border-brand-primary/15 bg-brand-mist focus:outline-none focus:border-brand-secondary focus:bg-white focus:ring-4 focus:ring-brand-secondary/10 transition text-brand-ink resize-none"
              />
            </div>

            <motion.div variants={fadeUp} className="mt-7 flex flex-col sm:flex-row sm:items-center gap-4">
              <button type="submit" className="btn-gold !text-base flex-1 sm:flex-initial">
                Send via WhatsApp <FaArrowRight />
              </button>
              <p className="text-xs text-brand-ink/55 leading-snug">
                By submitting, you agree to be contacted via WhatsApp or phone for your booking confirmation.
              </p>
            </motion.div>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 flex items-center gap-3 p-4 rounded-2xl bg-green-50 border border-green-200 text-green-800"
              >
                <FaCheckCircle className="text-green-600 text-xl shrink-0" />
                <span className="text-sm font-semibold">
                  Opening WhatsApp… your enquiry is ready to send. We'll respond within minutes.
                </span>
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, value, onChange, type = 'text', required, placeholder }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-xs font-semibold text-brand-ink/70 uppercase tracking-wider">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="px-4 py-3 rounded-xl border border-brand-primary/15 bg-brand-mist focus:outline-none focus:border-brand-secondary focus:bg-white focus:ring-4 focus:ring-brand-secondary/10 transition text-brand-ink font-medium placeholder:text-brand-ink/30"
      />
    </div>
  );
}
