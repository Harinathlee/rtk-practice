/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Adjust the paths to match your project structure
    './public/index.html',
  ],
  darkMode: 'class', // Enables dark mode based on the class applied to the HTML tag
  theme: {
    extend: {
      screens: {
        // Custom min-width and max-width ranges
        'mobile': { 'min': '320px', 'max': '639px' }, // Mobile range
        'tablet': { 'min': '640px', 'max': '900px' }, // Tablet range
        'desktop': { 'min': '901px' } // Desktop range
        //'large-desktop': { 'min': '1024px', 'max': '1279px' }, // Large Desktop range
        //'extra-large': { 'min': '1280px', 'max': '1535px' }, // Extra Large range
      },
    },
  },
  plugins: [],
}
