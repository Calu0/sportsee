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
        'nutrition-calories': 'rgba(255, 0, 0, 0.1)',
        'nutrition-proteins': 'rgba(74, 184, 255, 0.1)',
        'nutrition-carbs': 'rgba(253, 204, 12, 0.1)',
        'nutrition-lipids': 'rgba(253, 81, 129, 0.1)',
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

