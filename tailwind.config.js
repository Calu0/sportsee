/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF0000',
        'secondary': '#020203',
        'text-color': '#000000',
        'background-light': '#FBFBFB',

      },
      fontSize: {
        '4xl': '48px',      // Titre principal (Bonjour {name})
        '2xl': '24px',      // Menu header
        'lg': '18px',       // Sous-titre
        'base': '15px',     // Texte normal
        'sm': '12px',       // Textes secondaires
        'xs': '8px',        // Texte pour infobulle/survol
      },
      zIndex: {
        'header': 50,
        'sidebar': 40,
      }
    },
  },
  plugins: [],
}

