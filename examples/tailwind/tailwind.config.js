const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      heading: ['"Libre Caslon Text"', ...fontFamily.serif],
      sans: ["Wotfard", ...fontFamily.sans],
    },
  },
};
