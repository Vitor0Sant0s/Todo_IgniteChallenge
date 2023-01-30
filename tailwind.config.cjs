/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.tsx",
    "./src/components/**/*.tsx"
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          400: "#333333"
        },
        blue: {
          light: "#4ea8de",
          dark: "#1e6f9f"
        },
        purple: {
          light: '#8284fa',
          dark: '#5e60ce',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
