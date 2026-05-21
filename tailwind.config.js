/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#1E3A8A',   // Luxury blue
          secondary: '#2563EB', // Bright blue
          gold: '#F59E0B',      // Accent gold
          goldDark: '#B45309',
          ink: '#111827',       // Dark text
          mist: '#F8FAFC',      // Soft background
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(30, 58, 138, 0.18)',
        gold: '0 10px 30px -10px rgba(245, 158, 11, 0.45)',
        premium: '0 30px 60px -20px rgba(17, 24, 39, 0.25)',
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)',
        'gradient-gold': 'linear-gradient(135deg, #F59E0B 0%, #B45309 100%)',
        'gradient-mesh': 'radial-gradient(at 20% 30%, rgba(37, 99, 235, 0.15) 0px, transparent 50%), radial-gradient(at 80% 20%, rgba(245, 158, 11, 0.12) 0px, transparent 50%), radial-gradient(at 60% 80%, rgba(30, 58, 138, 0.15) 0px, transparent 50%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
};
