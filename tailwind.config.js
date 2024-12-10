/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        'main': 'hsl(300, 43%, 22%)',
        'secondary': 'hsl(333, 80%, 67%)',
        'darkneutral': 'hsl(303, 10%, 53%)',
        'lightneutral': 'hsl(300, 24%, 96%)',
        'back': 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        'spartan': '"League Spartan", serif',
      },
      backgroundImage: {
        'mobilebottom': 'url("../src/images/bg-pattern-bottom-mobile.svg")',
        'mobiletop': 'url("../src/images/bg-pattern-top-mobile.svg")',
        'desktopbottom': 'url("../src/images/bg-pattern-bottom-desktop.svg")',
        'desktoptop': 'url("../src/images/bg-pattern-top-desktop.svg")'
      },
      content: {
        'star': 'url("../src/images/icon-star.svg")'
      },
    },
  },
  plugins: [],
}

