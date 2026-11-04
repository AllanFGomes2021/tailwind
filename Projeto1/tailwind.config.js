/** @type {import('tailwindcss').config } */
export { x } from "@tailwindcss/typography";

module.exports = {
  content: [".src/**/*.{html, js}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
