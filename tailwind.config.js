/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'custom-sm': '600px',
        'custom-lg': '1200px',
      },
      backgroundImage: {
        'abstract': "url('./media/images/abstract.jpg')",
        'question': "url('./media/images/question.jpg')",
      },
      fontFamily: {
        'unna' : ['Unna', 'serif'],
      }
    },
  },
  plugins: [],
}

