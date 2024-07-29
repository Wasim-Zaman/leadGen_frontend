/** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./src/**/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
module.exports = {
  purge: ['./index.html', 
    './src/**/*.{js,jsx,ts,tsx}',
     './src/**/../*.{js,jsx,ts,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};


