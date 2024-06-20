/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {

    'fontFamily': {
      'sans': 'Inter, sans-serif'
    },

    extend: {
      colors: {
        'yellow-primary': '#F3CA52',
        'yellow-secondary': '#F6E9B2',
        'gray-light': '#F3F4F6',
        'gray-dark': '#444444',
        'green-light': '#7ABA78',
        'red-light': '#F5BDBD',
      },
    },
  },
  plugins: [],
}

