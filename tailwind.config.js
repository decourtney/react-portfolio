/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      fontFamily:{
        swiss: ["Swiss Grit", "normal"],
        swissSymbol: ["Swiss Grit Dingbats"],
        vt323: ["VT323"]
      }
    },
  },
  plugins: [],
};

