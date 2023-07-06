/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FD6E2C',
        secondary: '#0C0C0C',
      },
      fontFamily: {
        primary: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
        secondary: ['Helvetica', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
