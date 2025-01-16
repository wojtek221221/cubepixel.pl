/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(0.9)' },
          '50%': { transform: 'translateY(-10px) scale(0.9)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
      },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    },
  },
  plugins: [],
}