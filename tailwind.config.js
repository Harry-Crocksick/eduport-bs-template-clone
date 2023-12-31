/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,html}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      mdx: "992px",
      lg: "1200px",
      xl: "1300px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        heebo: ["Heebo", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
