/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '2k': '1920px',
      '4k': '2560px',
    },
    fontFamily: {
      rob: ['Roboto', 'sans-serif']
    },
    extend: {
      fontSize: {
        '10': ['0.625rem', '0.75rem'],
        '32': ['2rem', '2.625rem'],
        '36': ['2.25rem', '2.875rem'],
        '40': ['2.5rem', '3.125rem'],
      },
      colors: {
        gray: '#424242',       // gray
        dark: '#323238',  // dark
        light_gray: '#9E9E9E',   // light-gray
        dark_sky: '#1DA1F2',  // dark-sky
      },
      boxShadow: {
        'shadowone': '4px 4px 40px rgba(0, 0, 0, 0.02), -4px -4px 40px rgba(0, 0, 0, 0.02);',
        'shadowdark': '4px 4px 40px rgba(0, 0, 0, 0.05), -4px -4px 40px rgba(0, 0, 0, 0.05)',
        '3xl': '0px 0px 5px rgba(0, 0, 0, 0.1)',
        'red': '0px 0px 1px 2px #FE4D5F',
        'black': '0px 0px 1px 2px rgba(36, 36, 39, 0.6)',
      }
    },
  },
  plugins: [],
}

