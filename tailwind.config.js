/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        champagne: {
          light: '#FFE4B5',
          dark: '#FFF0B0',
        },
      },
      backgroundImage: {
        'champagne-gradient': 'linear-gradient(to bottom right, #FFE4B5, #FFF0B0)',
      },
    },
  },
  variants: {},
  plugins: [],
};
