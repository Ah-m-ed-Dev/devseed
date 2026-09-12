/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './sections/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './lib/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0057D9',
          dark: '#0A1F44',
          blue: '#0057D9',
          accent: '#00A3FF',
          light: '#7BB3E0',
          surface: '#F8FAFC',
        },
        // Aliases for easier usage
        primary: {
          DEFAULT: '#0057D9',
          dark: '#0A1F44',
          light: '#7BB3E0',
        },
        accent: {
          DEFAULT: '#00A3FF',
          glow: 'rgba(0, 163, 255, 0.3)',
        },
      },
      fontFamily: {
        sans: ['var(--font-cairo)', 'Cairo', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 35px -5px rgba(0, 163, 255, 0.35)',
        'glow-sm': '0 0 20px -5px rgba(0, 163, 255, 0.25)',
        device: '0 25px 50px -12px rgba(10, 31, 68, 0.25)',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #0057D9 0%, #00A3FF 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0A1F44 0%, #0A1F44 100%)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        shimmer: 'shimmer 2s infinite',
        float: 'float 3s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};