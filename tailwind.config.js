module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        tenada: ['Tenada']
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp'), require('daisyui')]
}
