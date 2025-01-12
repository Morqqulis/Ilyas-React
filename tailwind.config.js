/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '15px',
        screens: {
          '2xl': '1230px',
        },
      },

      screens: {
        '2xl': { max: '1230px' },
        xl: { max: '992px' },
        lg: { max: '768px' },
        md: { max: '576px' },
        sm: { max: '490px' },
      },

      colors: {
        default: '#333333',
        blue: '#2352DE',
        'dark-gray': '#343740',
      },
    },
  },
  plugins: [],
}
