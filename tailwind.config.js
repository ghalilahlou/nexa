/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      colors: {
        nexa: {
          night: "#0a1f33",
          ivory: "#fefcf8",
          gold: "#c7a770",
          steel: "#888888",
        },
      },
    },
  },
  plugins: [],
} 