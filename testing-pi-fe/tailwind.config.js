/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      primary: "#2665fd",
      secondary: "#475569",
      surface: "#0b1326",
      "on-surface": "#dae2fd",
      error: "#ffb4ab",
    },
    borderRadius: {
      DEFAULT: "8px",
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
};
