// All business-wide constants. Edit phone/email/handles in one place.

export const BUSINESS = {
  name: 'Drive On Demand',
  fullName: 'Drive On Demand Travels & Tourism',
  tagline: 'We believe, with us',
  location: 'Jamshedpur (Tata), Jharkhand, India',
  shortLocation: 'Jamshedpur (Tata), Jharkhand',
  phone: '+91 00000 00000',
  phoneRaw: '+910000000000',
  whatsapp: '910000000000', // no + or spaces, just country code + number
  email: 'bookings@driveondemand.in',
  address: 'Jamshedpur (Tata), Jharkhand 831001, India',
  hours: 'Open 24 / 7  ·  365 days',
};

export const buildWhatsAppLink = (message = '') =>
  `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(
    message || `Hi Drive On Demand, I would like to enquire about a ride.`
  )}`;

export const buildCallLink = () => `tel:${BUSINESS.phoneRaw}`;
