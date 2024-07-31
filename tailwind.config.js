/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      screens: {
        // 'sm': '640px',
        // => @media (min-width: 640px) { ... }
        'md': '769px',
        // => @media (min-width: 768px) { ... }
        // 'lg': '1024px',
        // // => @media (min-width: 1024px) { ... }
        // 'xl': '1280px',
        // // => @media (min-width: 1280px) { ... }
        // '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      lineHeight: {
        DEFAULT: '1.5'
      },
      fontSize: {
        xs: ['0.75rem', '1.5'],
        sm: ['0.875rem', '1.5'],
        base: ['1rem', '1.5'],
        lg: ['1.125rem', '1.5'],
        xl: ['1.25rem', '1.5'],
        '2xl': ['1.5rem', '1.5'],
        '3xl': ['1.875rem', '1.5'],
        '4xl': ['2.25rem', '1.5'],
        '5xl': ['3rem', '1.5'],
        '6xl': ['3.75rem', '1.5'],
        '7xl': ['4.5rem', '1.5'],
        '8xl': ['6rem', '1.5'],
        '9xl': ['8rem', '1.5'],
      },
      fontFamily: {
        notosanstc: ['Noto Sans TC', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'glass-pink': '#FBF2F2',
        'glass-red': '#AA0601',
        'glass-red-dark': '#650300'
      },
      boxShadow: {
        'glass-boxShadow': '0px 2px 6px #00000029'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '14px',
          sm: '36px',
        },
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'not'],
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('active', '&.active');
      addVariant('not-active', '&:not(.active)');
    },
  ],
}

