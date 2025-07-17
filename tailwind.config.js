/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      animation: {
        downgrade: "downgrade 1s ease-in-out",
        upgrade: "downgrade 1s ease-in-out reverse",
      },
      keyframes: {
        downgrade: {
          from: {
            opacity: 1,
            transform: "scale(1)",
          },
          to: {
            opacity: 0,
            transform: "scale(1.3)",
          }
        }
      },
    },
  },
  plugins: [],
}

