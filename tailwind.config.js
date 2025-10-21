/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        horizonGray: "#f5f5f6",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
