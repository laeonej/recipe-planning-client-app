/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      keyframes: {
        slideRightIntoPosition: {
          '0%': {
            transform: `translateX(-50%)`,
            opacity: 0,
          },
          '100%': {
            transform: `translateX(0%)`,
            opacity: 1,
          }
        },

        fadeIn: {
          'from': {
            opacity: 0,
          },
          'to': {
            opacity: 1,
          }
        }

      },

      animation: {

      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

