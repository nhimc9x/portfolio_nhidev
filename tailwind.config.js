// const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'ct-text-color': '#a3a1be',
        'ct-active-color': '#80f0ff',
        'ct-sub-active-color': '#f472b2',
        'ct-primary-color': {
          '50': '#f3f6fb',
          '100': '#e3eaf6',
          '200': '#cddbf0',
          '300': '#aac3e6',
          '400': '#82a5d8',
          '500': '#6487cd',
          '600': '#516ebf',
          '700': '#465daf',
          '800': '#3e4d8f',
          '900': '#364372',
          '950': '#1d2238'
        },
        'ct-secondary-color': {
          '50': '#f3f6fb',
          '100': '#e3ebf6',
          '200': '#cedcef',
          '300': '#acc5e4',
          '400': '#84a8d6',
          '500': '#678bca',
          '600': '#5372bd',
          '700': '#4961ac',
          '800': '#40518d',
          '900': '#374571',
          '950': '#262d47'
        }
      },
      animation: {
        'scale-up-center': 'scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both',
        'fade-shadow': 'fade-shadow 1.2s ease-in-out infinite alternate',
        'wave': 'wave 2.1s linear infinite'
      },
      keyframes: {
        'scale-up-center': {
          '0%': {
            transform: 'scale(.5)'
          },
          to: {
            transform: 'scale(1)'
          }
        },
        'fade-shadow': {
          from: {
            filter: 'drop-shadow(0 0 1.4vh #09779585) drop-shadow(0 0 2vh #09779543)'
          },
          to: {
            filter: 'drop-shadow(0 0 2vh #09779585) drop-shadow(0 0 6vh #09779543)'
          }
        },
        'wave': {
          '0%, 60%, 100%': {
            transform: 'rotate(0deg)'
          },
          '10%, 30%': {
            transform: 'rotate(18deg)'
          },
          '20%': {
            transform: 'rotate(-10deg)'
          },
          '40%': {
            transform: 'rotate(-6deg)'
          },
          '50%': {
            transform: 'rotate(12deg)'
          }
        }
      }
    }
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwindcss-animation-delay')
  ]
}

