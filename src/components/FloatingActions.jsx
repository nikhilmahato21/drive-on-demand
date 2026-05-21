import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { buildCallLink, buildWhatsAppLink } from '../constants/business.js';

export default function FloatingActions() {
  return (
    <div className="fixed right-4 sm:right-6 bottom-6 z-40 flex flex-col gap-3">
      <motion.a
        href={buildWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp us"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 200, damping: 18 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-premium"
      >
        <FaWhatsapp size={28} />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      </motion.a>

      <motion.a
        href={buildCallLink()}
        aria-label="Call us"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.4, type: 'spring', stiffness: 200, damping: 18 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="relative w-14 h-14 rounded-full bg-gradient-brand text-white flex items-center justify-center shadow-premium"
      >
        <FaPhoneAlt size={22} />
        <span className="absolute inset-0 rounded-full bg-brand-secondary animate-ping opacity-25" />
      </motion.a>
    </div>
  );
}
