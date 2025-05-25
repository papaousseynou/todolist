/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable dark mode based on class
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#60a5fa", // Blue 400
          dark: "#3b82f6", // Blue 500
        },
        background: {
          light: "#ffffff", // White
          dark: "#1a1a1a", // Very dark gray
        },
        text: {
          light: "#1f2937", // Gray 800
          dark: "#f3f4f6", // Gray 100
        },
      },
    },
  },
  plugins: [],
};
