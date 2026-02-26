/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EE1D23",
        secondary: "#671A1B",
      },
      fontFamily: {
        sans: ["var(--font-solaiman-lipi)", "ui-sans-serif", "system-ui"],
        bengali: ["var(--font-solaiman-lipi)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
