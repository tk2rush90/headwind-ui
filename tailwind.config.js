/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      mono: ['Red Hat Mono', 'monospace'],
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
