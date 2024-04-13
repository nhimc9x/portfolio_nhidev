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
        'scale-up-center': 'scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both'
      },
      keyframes: {
        'scale-up-center': {
          '0%': {
            transform: 'scale(.5)'
          },
          to: {
            transform: 'scale(1)'
          }
        }
      }
    }
  },
  plugins: []
}

