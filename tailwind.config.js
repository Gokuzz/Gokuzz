/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        primary: '#1d4ed8',
        'primary-dark': '#1e40af',
        'primary-light': '#3b82f6',
        'primary-accent': '#60A5FA',
        offwhite: '#F8FAFC'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      
    },
  },
  plugins: [
    // Hide scrollbar for skills carousel
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    },
  ],
};

