// All business-wide constants. Edit phone/email/handles in one place.

export const BUSINESS = {
  name: 'Drive On Demand',
  fullName: 'Drive On Demand Travels & Tourism',
  tagline: 'We believe, with us',
  location: 'Jamshedpur (Tata), Jharkhand, India',
  shortLocation: 'Jamshedpur (Tata), Jharkhand',
  phone: '+91 75199 33393',
  phoneRaw: '+917519933393',
  whatsapp: '917519933393', // no + or spaces, just country code + number
  email: 'driveondemand001@gmail.com',
  address: 'Jamshedpur (Tata), Jharkhand 831001, India',
  hours: 'Open 24 / 7  ·  365 days',
};

export const buildWhatsAppLink = (message = '') =>
  `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(
    message || `Hi Drive On Demand, I would like to enquire about a ride.`
  )}`;

export const buildCallLink = () => `tel:${BUSINESS.phoneRaw}`;
