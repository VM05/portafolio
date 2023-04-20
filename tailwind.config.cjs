/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        whatsapp: {
          900: '#25D366',
          700: '#23aa54',
        },
        wave: {
          900: '#35495e',
          700: '#183153',
        },
      },
    },
  },
  plugins: [],
};
