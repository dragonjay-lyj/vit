/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/*.{js,ts,jsx,tsx,md}",
    "./games/*.{js,ts,jsx,tsx,md}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

