/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  purge: {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/flowbite/**/*.js",
    ],
    theme: {
      extend: {},
    },
    plugins: [require("flowbite/plugin")],
  },
};
