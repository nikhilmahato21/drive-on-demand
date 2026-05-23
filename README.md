# Drive On Demand Travels & Tourism — Website

A premium, production-ready travel & transport website for **Drive On Demand Travels & Tourism**, based in **Jamshedpur (Tata), Jharkhand**.

> _"We believe, with us"_

Built with **React + Vite + Tailwind CSS + Framer Motion + Swiper.js**.

---

## ✨ Features

- Fully responsive, mobile-first design
- Luxury Blue + White + Gold brand theme (`#1E3A8A` / `#2563EB` / `#F59E0B`)
- Premium animations (Framer Motion + CSS keyframes)
- Sticky animated navbar with glassmorphism
- Floating WhatsApp + Call buttons (always reachable)
- Conversion-focused booking form that posts straight to WhatsApp
- Premium service, route, testimonial, and gallery cards
- Real travel imagery (highways, airports, cars, drivers)
- SEO-optimised meta + structured data (LocalBusiness / TravelAgency)
- Fast, accessible, production-ready code

---

## 🚀 Quick start

```bash
# 1. install
npm install

# 2. run dev server
npm run dev

# 3. production build
npm run build
npm run preview
```

Then open the URL printed in the console (usually `http://localhost:5173`).

---

## 📁 Folder structure

```
drive-on-demand/
├── index.html               ← SEO meta + fonts + structured data
├── public/
│   └── logo.svg             ← Site logo (replace with your real logo)
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css            ← Tailwind + global styles
│   ├── assets/              ← (drop static images here if needed)
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Logo.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── PopularRoutes.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Gallery.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── FloatingActions.jsx
│   │   └── SectionHeading.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── hooks/
│   │   └── useScrolled.js
│   ├── constants/
│   │   ├── business.js      ← Phone / WhatsApp / email (edit me!)
│   │   └── data.js          ← Services / routes / testimonials / gallery
│   └── utils/
│       └── motion.js        ← Reusable framer-motion variants
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## 🔧 Customise in 3 places

### 1. Replace the logo

Drop your real logo at `public/logo.svg` (or `public/logo.png` and update the `<img src>` in `src/components/Logo.jsx`).

### 2. Update business info

Open **`src/constants/business.js`** and change:

```js
phone:      '+91 00000 00000',
phoneRaw:   '+910000000000',     // for tel: links
whatsapp:   '910000000000',      // country code + number, NO + sign
email:      'driveondemand001@gmail.com',
address:    'Jamshedpur (Tata), Jharkhand 831001, India',
```

These power the navbar, hero CTAs, floating buttons, contact section, footer, and the booking form — change once, applies everywhere.

### 3. Edit services / routes / testimonials / gallery

All content lives in **`src/constants/data.js`**.
Add a route → just push another object to `POPULAR_ROUTES`. Same for `SERVICES`, `TESTIMONIALS`, `GALLERY`.

---

## 📞 How the booking form works

The booking form (`src/components/Contact.jsx`) **does not** require any backend.
On submit, it constructs a pre-filled WhatsApp message containing all the form fields and opens it in a new tab pointing to your business WhatsApp number.

This means: zero hosting cost, zero server setup, and every enquiry lands in your own WhatsApp inbox.

If you later want to wire it to email/CRM, replace the `onSubmit` handler with a `fetch()` call to your endpoint.

---

## 🔍 SEO

Optimised for the following primary keywords (set in `index.html`):

- Best Travels in Jamshedpur
- Tata to Ranchi Cab Service
- Kolkata Airport Transfer from Tata
- Driver Service in Jamshedpur
- Vehicle Transport Service India

Includes JSON-LD `TravelAgency` structured data for rich Google results.

---

## 📝 Notes

- Imagery is loaded from Unsplash CDN (free for commercial use). Swap to local assets in `src/assets/` for full offline control.
- All animations use Framer Motion + CSS — no heavy GSAP or third-party motion libraries.
- The whole site is one route (`/`) by design — pure landing page for maximum conversion. Add React Router if multi-page is needed later.
