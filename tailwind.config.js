/** @type {import('tailwindcss').Config} */

export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {

    extend: {

      boxShadow: {
        soft: "0 2px 10px rgba(15, 23, 42, 0.04)",
        card: "0 4px 20px rgba(15, 23, 42, 0.06)",
      },

      borderRadius: {
        "3xl": "1.5rem",
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },

    },

  },

  plugins: [],

};