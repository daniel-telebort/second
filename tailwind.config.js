/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      gridTemplateRows: {
        7: "repeat(7, minmax(0, 1fr))",
        11: "repeat(11, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
