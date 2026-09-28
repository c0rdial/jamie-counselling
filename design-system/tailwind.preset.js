// Tailwind preset — add to tailwind.config.js: presets: [require('./tailwind.preset.js')]
module.exports = {
  theme: {
    extend: {
      colors: {
        cream: { 25: '#FCFAF3', 50: '#F8F5EA', 100: '#F1ECDC' },
        sand: { 200: '#E6DFCC', 300: '#D3CAB4', 400: '#C4BDAC' },
        forest: { 500: '#5E7068', 700: '#3E534B', 800: '#243B32', 900: '#1B3129' },
        lime: { 300: '#E3F09A', 400: '#D4E86A' },
        ink: { 500: '#66655C', 700: '#45443B', 900: '#2B2A22' },
      },
      fontFamily: { display: ['Lora', 'Georgia', 'serif'], sans: ['Inter', 'system-ui', 'sans-serif'] },
      fontSize: {
        display: ['88px', { lineHeight: '0.98', letterSpacing: '-0.01em' }],
        h1: ['64px', { lineHeight: '1.02', letterSpacing: '-0.01em' }],
        h2: ['52px', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
        h3: ['36px', { lineHeight: '1.1' }], h4: ['26px', { lineHeight: '1.2' }], h5: ['19px', { lineHeight: '1.3' }],
        'body-lg': ['18px', { lineHeight: '1.6' }], body: ['16px', { lineHeight: '1.6' }],
        sm: ['14px', { lineHeight: '1.5' }], xs: ['12px', { lineHeight: '1.4' }],
        stat: ['132px', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
      },
      borderRadius: { xs: '8px', sm: '12px', md: '20px', lg: '28px', xl: '40px', pill: '999px' },
      maxWidth: { container: '1240px', narrow: '760px' },
      spacing: { section: '120px', 'section-sm': '80px' },
      boxShadow: { soft: '0 4px 24px rgba(30,35,28,.06)' },
      transitionTimingFunction: { calm: 'cubic-bezier(0.22, 1, 0.36, 1)' },
      transitionDuration: { 150: '150ms', 280: '280ms', 600: '600ms', 900: '900ms' },
    },
  },
};
