const { wordpressUtilities } = require('tailwindcss-wordpress');

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#525ddc',
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
