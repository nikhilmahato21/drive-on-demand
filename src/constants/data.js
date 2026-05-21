import {
  FaCar,
  FaPlaneDeparture,
  FaRoad,
  FaUserTie,
  FaTruckMoving,
  FaShieldAlt,
  FaClock,
  FaMapMarkedAlt,
  FaHeadset,
  FaRupeeSign,
  FaStar,
} from 'react-icons/fa';

// Real travel imagery — Unsplash CDN (license-free for commercial use).
// All URLs are deterministic so the build is reproducible.

export const SERVICES = [
  {
    id: 'tata-ranchi',
    icon: FaCar,
    title: 'Tata ↔ Ranchi Travel',
    short: 'One-way & round trip rides',
    description:
      'Comfortable sedans and SUVs running between Jamshedpur (Tata) and Ranchi, with flexible one-way and round-trip options.',
    highlight: 'Fast & Safe Travel',
    image:
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1400&q=80',
    bullets: ['One-way trip', 'Round trip', 'Sedan / SUV options', 'Door-to-door pickup'],
  },
  {
    id: 'airport',
    icon: FaPlaneDeparture,
    title: 'Airport Transfers',
    short: 'Tata → Ranchi & Kolkata airports',
    description:
      'Stress-free, on-time pickup and drop to Birsa Munda (Ranchi) and Netaji Subhas Chandra Bose (Kolkata) airports.',
    highlight: 'On-time pickup & drop',
    image:
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=80',
    bullets: ['Tata → Ranchi Airport', 'Tata → Kolkata Airport', 'Flight tracking', '24/7 service'],
  },
  {
    id: 'outstation',
    icon: FaRoad,
    title: 'Outstation Travel',
    short: 'Pan-India outstation trips',
    description:
      'Plan your journey across Jharkhand, Bihar, UP, West Bengal and beyond. Custom itineraries supported.',
    highlight: 'Travel any city in India',
    image:
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=80',
    bullets: ['Bokaro', 'Dhanbad', 'Giridih', 'Patna', 'Varanasi', 'Custom destinations'],
  },
  {
    id: 'driver',
    icon: FaUserTie,
    title: 'Driver On Demand',
    short: 'Hourly & full-day basis',
    description:
      'Professional, verified drivers for your personal vehicle. Book by the hour or for full days — wedding, events or daily errands.',
    highlight: 'Verified professional drivers',
    image:
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1400&q=80',
    bullets: ['Hourly basis', 'Full-day basis', 'Trained & uniformed', 'Background verified'],
  },
  {
    id: 'transport',
    icon: FaTruckMoving,
    title: 'Vehicle Transportation Service',
    short: 'Pan-India car transport',
    description:
      'Trusted, experienced drivers safely transport your car door-to-door from any city in India to any other.',
    highlight: 'Pan-India coverage',
    image:
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=80',
    bullets: ['City-to-city transport', 'Experienced relocation drivers', 'Insured journeys', 'Live updates'],
  },
];

export const WHY_CHOOSE_US = [
  { icon: FaShieldAlt, title: 'Trusted Drivers', desc: 'Background-verified, uniformed professionals.' },
  { icon: FaRupeeSign, title: 'Affordable Travel', desc: 'Transparent pricing, no hidden charges.' },
  { icon: FaCar,       title: 'Safe Journey',    desc: 'Well-maintained, sanitized vehicles.' },
  { icon: FaUserTie,   title: 'Professional Service', desc: 'Courteous, punctual, customer-first.' },
  { icon: FaMapMarkedAlt, title: 'Pan India Support', desc: 'Travel and vehicle transport anywhere in India.' },
  { icon: FaClock,     title: 'Flexible Booking',  desc: 'Last-minute rides, custom itineraries, 24/7.' },
];

export const FEATURE_BADGES = [
  'Trusted Service',
  'Professional Drivers',
  'Outstation Travel',
  'Airport Transfers',
  'Safe Vehicle Transportation',
  'Affordable Pricing',
];

export const HOW_IT_WORKS = [
  { step: '01', title: 'Select Service',        desc: 'Choose ride type, route or transport need.' },
  { step: '02', title: 'Contact Us',            desc: 'Call, WhatsApp or fill the booking form.' },
  { step: '03', title: 'Confirm Booking',       desc: 'Get instant confirmation & driver details.' },
  { step: '04', title: 'Hassle-Free Travel',    desc: 'Sit back. We handle the rest, end to end.' },
];

export const POPULAR_ROUTES = [
  {
    from: 'Tata',
    to: 'Ranchi',
    distance: '130 km',
    duration: '≈ 3 h',
    image:
      'https://images.unsplash.com/photo-1494522358652-f30e61a60313?auto=format&fit=crop&w=1200&q=80',
    note: 'Most popular route',
  },
  {
    from: 'Tata',
    to: 'Kolkata Airport',
    distance: '290 km',
    duration: '≈ 6 h',
    image:
      'https://images.unsplash.com/photo-1521727857535-28d2047314ac?auto=format&fit=crop&w=1200&q=80',
    note: 'Flight-tracked transfer',
  },
  {
    from: 'Tata',
    to: 'Bokaro',
    distance: '120 km',
    duration: '≈ 2.5 h',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    note: 'Daily departures',
  },
  {
    from: 'Tata',
    to: 'Dhanbad',
    distance: '170 km',
    duration: '≈ 3.5 h',
    image:
      'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&q=80',
    note: 'Business traveller favourite',
  },
  {
    from: 'Tata',
    to: 'Patna',
    distance: '380 km',
    duration: '≈ 8 h',
    image:
      'https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1200&q=80',
    note: 'Comfortable highway drive',
  },
  {
    from: 'Tata',
    to: 'Varanasi',
    distance: '510 km',
    duration: '≈ 10 h',
    image:
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80',
    note: 'Pilgrimage & leisure',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Anjali Sharma',
    role: 'Software Engineer, Bengaluru',
    text:
      'Booked a Tata to Ranchi airport drop at midnight. The driver arrived 15 minutes early, car was spotless, ride was smooth. Best travel service I have used from Jamshedpur.',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Rohan Mehta',
    role: 'Business Owner, Jamshedpur',
    text:
      'I needed my car transported from Jamshedpur to Pune. Drive On Demand handled everything — pickup, paperwork, daily updates. Car arrived in perfect condition. Highly recommended.',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Priya Iyer',
    role: 'Family Trip — Varanasi',
    text:
      'Took an outstation trip with my parents to Varanasi. The driver was polite, knew the routes well, and made sure we were comfortable the whole way. Will book again.',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Vikram Singh',
    role: 'Frequent Traveller',
    text:
      'I use their hourly driver service when I visit Jamshedpur on business. Professional, on time, well-dressed. Feels like a true premium service at a fair price.',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Neha Kapoor',
    role: 'Marketing Lead, Kolkata',
    text:
      'The Kolkata airport transfer was seamless. Flight was delayed; they tracked it and adjusted pickup automatically. Saved me a lot of stress at 1 AM.',
    rating: 5,
    avatar:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80',
  },
];

export const GALLERY = [
  {
    src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80',
    label: 'Highway journeys',
  },
  {
    src: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80',
    label: 'Premium fleet',
  },
  {
    src: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
    label: 'Airport transfers',
  },
  {
    src: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=80',
    label: 'Professional drivers',
  },
  {
    src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    label: 'Outstation trips',
  },
  {
    src: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&q=80',
    label: 'Family travel',
  },
  {
    src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80',
    label: 'Vehicle transport',
  },
  {
    src: 'https://images.unsplash.com/photo-1542384557-0824d90731ee?auto=format&fit=crop&w=1200&q=80',
    label: 'Business travel',
  },
];

export const SERVICE_TYPE_OPTIONS = [
  'Tata ↔ Ranchi (One Way)',
  'Tata ↔ Ranchi (Round Trip)',
  'Tata → Ranchi Airport',
  'Tata → Kolkata Airport',
  'Outstation Trip',
  'Driver on Demand (Hourly)',
  'Driver on Demand (Full Day)',
  'Vehicle Transportation',
  'Other',
];

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Routes', href: '#routes' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];
