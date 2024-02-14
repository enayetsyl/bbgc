/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B20A0B',
        secondary: '#F2F2F2',
      },
      ringColor: {
        DEFAULT: 'transparent',
      },
    },
  },
  plugins: [],
};
