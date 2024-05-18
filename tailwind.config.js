/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ajusta según la estructura de tu proyecto
  ],
  theme: {
    screens: {
      xs: '200px', // @media (min-width: 200px) { ... }
      sm: '640px', // @media (min-width: 640px) { ... }
      md: '768px', // @media (min-width: 768px) { ... }
      lg: '1024px', // @media (min-width: 1024px) { ... }
      xl: '1280px', // @media (min-width: 1280px) { ... }
      '2xl': '1536px', // @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ['Ubuntu', 'sans-serif'],
      },
      colors: {
        green: '#5abf4b',
        beige: '#d9c6b0',
        orange: '#f25835',
        red: '#cb2c1d',
        black: '#0d0d0d',
        gray: '#1e1e1e',
      },
      width: {
        full: '100%',
      },
      maxWidth: {
        maxpage: '500px',
      },
    },
    borderRadius: {
      full: '100px',
      default: '5px',
    },
  },
  plugins: [],
}
