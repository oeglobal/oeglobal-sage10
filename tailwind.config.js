const {wordpressUtilities} = require('tailwindcss-wordpress');

module.exports = {
  theme: {
    extend: {
      colors: {
        'main': '#0D59F2',
        'main-dark': '#195BB3',
        'main-darker': '#1F467A',
        'main-light': '#3D7AF5',
        'main-lighter': '#6E9CF7',
        'main-lightest': '#9EBDFA',
        'int': {
          'turq': '#26D7B2',
          'yellow': '#FFE525',
          'red': '#FF5547',
          'fuchsia': '#DB43D8',
        },
        'latam': {
          'orange': '#FF922D',
          'orange-cream': '#FFC794',
        },
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  variants: {},
  plugins: [
    wordpressUtilities,
  ],
};
