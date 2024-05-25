/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        'm-gray': {
          50: '#F5F7F7',
          100: '#EDF1F2',
          200: '#D1DADE',
          300: '#B3C0C7',
          400: '#83939E',
          500: '#586876',
          600: '#475869',
          700: '#314257',
          800: '#203147',
          900: '#122036',
          950: '#071021',
        },
        'm-blue': {
          50: '#EDF4FA',
          100: '#DAE7F2',
          200: '#ABC4E0',
          300: '#7C9CCC',
          400: '#3555A6',
          500: '#041780',
          600: '#031473',
          700: '#020E5E',
          800: '#020A4D',
          900: '#010738',
          950: '#000424',
        },
        'm-purple': {
          50: '#F9F5FA',
          100: '#F6EDF7',
          200: '#E7D1EB',
          300: '#D8B8DE',
          400: '#BA89C4',
          500: '#9B61AB',
          600: '#864E99',
          700: '#683780',
          800: '#4D2366',
          900: '#34144D',
          950: '#1C0830',
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", ...defaultTheme.fontFamily.serif],
        serif: ["'Libre Baskerville'", ...defaultTheme.fontFamily.serif],
      },
      animation: {
        'blob-1': 'blob 5s infinite',
        'blob-2': 'blob 6s infinite',
        'blob-3': 'blob 7s infinite',
        'blob-4': 'blob 8s infinite',
        'glow-1': 'glow 5s infinite',
        'glow-2': 'glow 6s infinite',
        'glow-3': 'glow 7s infinite',
        'glow-4': 'glow 8s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'scale(1) ',
            opacity: '0.3',
          },
          '33%': {
            transform: 'scale(1.05) ',
            opacity: '0.2',
          },
          '66%': {
            transform: 'scale(0.95) ',
            opacity: '0.4',
          },
          '100%': {
            transform: 'scale(1) ',
            opacity: '0.3',
          },
        },
        glow: {
          '0%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.25',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
