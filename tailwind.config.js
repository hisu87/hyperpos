/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hyper: {
          bg: "#090A0D", // Void Black
          surface: "#16181D", // Dark Gray Surface
          primary: "#00D084", // Hyper Emerald
          secondary: "#1F2229", // Lighter Surface
          text: "#F8F9FA", // Crisp White
          muted: "#6C757D",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

module.exports = config;
