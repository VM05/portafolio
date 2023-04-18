/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      whatsapp: {
        900:'#25D366',
        700:'#23aa54',
      },
    },
  },
  plugins: [],
}
