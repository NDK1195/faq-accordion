/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-pink': 'hsl(275, 100%, 97%)',
        'grayish-purple': 'hsl(292, 16%, 49%)',
        'dark-purple': 'hsl(292, 42%, 14%)',
      },
      backgroundImage: {
        desktop: "url('/src/assets/background-pattern-desktop.svg')",
        mobile: "url('/src/assets/background-pattern-mobile.svg')",
      },
      boxShadow: {
        'custom-shadow': '0px 32px 56px 0px rgba(80, 0, 118, 0.10)',
      },
    },
  },
  plugins: [],
};
