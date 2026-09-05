import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        cream: '#F3F2F1',
        ink: '#232338',
        grass: {
          DEFAULT: '#3FA96B',
          dark: '#2E8055',
          light: '#DCF3E6'
        },
        coral: {
          DEFAULT: '#E8232D',
          dark: '#C11A23',
          light: '#FBE0DF'
        },
        gold: {
          DEFAULT: '#FFC145',
          dark: '#E8A522',
          light: '#FFF2D6'
        },
        night: {
          DEFAULT: '#170808',
          light: '#2B1414'
        }
      },
      fontFamily: {
        display: ['"Lato"', ...defaultTheme.fontFamily.sans],
        body: ['"Nunito"', ...defaultTheme.fontFamily.sans]
      },
      borderRadius: {
        xl2: '1.75rem'
      },
      boxShadow: {
        bump: '0 6px 0 0 rgba(0,0,0,0.15)',
        'bump-sm': '0 4px 0 0 rgba(0,0,0,0.15)',
        pop: '0 10px 30px -10px rgba(35,41,70,0.35)'
      }
    }
  },
  plugins: []
}