/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      colors: {
        pink1: "#d50032",
        green1: "#006241",
        gray1: "#d4e9e2",
      },
    },
  },
  plugins: [],
};
