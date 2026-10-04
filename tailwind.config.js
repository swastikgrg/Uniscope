/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1F4D3A',
          deep: '#173B2C',
          light: '#28624A',
          surface: '#245641',
        },
        surface: {
          DEFAULT: '#F6F7F2',
          light: '#FAFBF7',
          dark: '#ECEEE6',
          surface: '#F6F7F2',
        },
        dark: {
          DEFAULT: '#14281F',
          dark: '#0E1C15',
          deep: '#0B1611',
          surface: '#1A3328',
        },
        sage: {
          DEFAULT: '#6F9A84',
          light: '#84AC97',
          dark: '#58826D',
          glass: 'rgba(111, 154, 132, 0.85)',
          'glass-border': 'rgba(255, 255, 255, 0.25)',
          muted: '#6F9A84',
        },
        mint: {
          DEFAULT: '#BFE3CE',
          light: '#D7EFE1',
          dark: '#A3D4B6',
        },
        cta: {
          DEFAULT: '#2E9E6B',
          hover: '#258257',
          dark: '#1E6A47',
          light: '#3EB97E',
        },
        ink: {
          DEFAULT: '#12261C',
          muted: '#314B3F',
          light: '#4E6A5D',
        },
        gold: {
          DEFAULT: '#E0B84C',
        },
        white: '#FFFFFF',
        offwhite: '#F6F7F2',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', '"DM Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.22em',
        'widest': '0.18em',
      },
      fontSize: {
        'giant': ['clamp(3.5rem, 8.5vw, 8.5rem)', { lineHeight: '0.92', letterSpacing: '-0.04em' }],
        'marquee': ['clamp(3.2rem, 7.5vw, 7rem)', { lineHeight: '0.98', letterSpacing: '-0.035em' }],
        'statement': ['clamp(2rem, 4.2vw, 3.8rem)', { lineHeight: '1.2', letterSpacing: '-0.025em' }],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(15, 23, 42, 0.25)',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
