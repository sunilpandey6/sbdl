/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#007BFF',
          DEFAULT: '#007BFF',
          dark: '#90CAF9',
        },
        secondary: {
          light: '#90CAF9',
          DEFAULT: '#90CAF9',
          dark: '#1565C0',
        },
        accent: '#F44336',
        background: {
          light: '#FFFFFF',
          dark: '#212121',
        },
        text: {
          light: '#000000',
          dark: '#FFFFFF',
        }
      },
    },
  },
  plugins: [],
};
