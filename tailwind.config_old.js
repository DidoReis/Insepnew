/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#1C1B1F', // Cor primária para o tema dark
          secondary: '#2d3748', // Cor secundária para o tema dark
          // Adicione outras cores personalizadas para o tema dark, se necessário
        },
        light: {
          primary: '#F5EEE4', // Cor primária para o tema light
          secondary: '#f7fafc', // Cor secundária para o tema light
          // Adicione outras cores personalizadas para o tema light, se necessário
        },

       /*  primary: "#1C1B1F",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)", */
      },
      fontFamily: {
        poppins: ["Roboto", "sans-serif"],
        lexend: ["Lexend", "sans-serif"]
      },
    },
    plugins:[
      function ({ addUtilities }) {
        const newUtilities = {
          '.no-ligatures': {
            fontFeatureSettings: "'clig' off, 'liga' off",
          },
        }
        addUtilities(newUtilities)
      }
    ],
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};