/** @type {import('tailwindcss').Config} */
module.exports = {
  // This tells Tailwind to look for class names in all of these files.
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // We use 'extend' to add our own custom values.
    extend: {
      colors: {
        // Here we define our custom brand colors for "Golden Pizza".
        primary: '#f8c102', // The main Golden Pizza Yellow from your menu
        secondary: '#333333', // A dark color for text and backgrounds
      },
      fontFamily: {
        // We set a nice, modern font for the whole website.
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
