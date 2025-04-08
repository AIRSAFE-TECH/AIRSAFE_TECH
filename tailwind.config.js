/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-white": "#feffff",
        "custom-light-blue": "#d1e1ed",
        "custom-blue": "#a2bee1",
        "custom-dark-blue": "#52738c",
        "custom-darkest-blue": "#266bb4",
      },
    },
  },
  plugins: [],
}