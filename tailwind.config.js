/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'display':    ['clamp(38px,6.5vw,90px)', { fontWeight: '800', letterSpacing: '-0.04em' }],
        'display-sm': ['clamp(30px,5vw,68px)',   { fontWeight: '800', letterSpacing: '-0.03em' }],
        'heading':    ['clamp(22px,3vw,48px)',    { fontWeight: '700', letterSpacing: '-0.025em' }],
      },
      animation: {
        'slide-up':    'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in':     'fadeIn 0.7s ease-out both',
        'float':       'floatY 5s ease-in-out infinite',
        'marquee':     'marquee 40s linear infinite',
        'swipe-left':  'swipeLeft 0.38s cubic-bezier(0.4, 0, 1, 1) both',
        'swipe-right': 'swipeRight 0.38s cubic-bezier(0.4, 0, 1, 1) both',
      },
      keyframes: {
        slideUp: {
          from: { opacity: '0', transform: 'translateY(32px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':       { transform: 'translateY(-8px)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        swipeLeft: {
          to: { transform: 'translateX(-150%) rotate(-18deg)', opacity: '0' },
        },
        swipeRight: {
          to: { transform: 'translateX(150%) rotate(18deg)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
