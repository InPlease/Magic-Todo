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
        black: '#121212',
        gray: '#1e1e1e',
      },
      width: {
        full: '100%',
      },
      maxWidth: {
        maxpage: '500px',
      },
      maxHeight: {
        maxpage: '500px',
      },
    },
    borderRadius: {
      full: '100px',
      default: '5px',
    },
    keyframes: {
      openbox: {
        '0%': { height: '0px', width: '0px' },
        '100%': { height: '80vh', width: '100%' },
      },
      closebox: {
        '0%': { height: '80vh', width: '100%' },
        '100%': { height: '0px', width: '0px' },
      },
    },
    animation: {
      openbox: 'openbox 0.5s ease-in-out forwards',
      closebox: 'closebox 0.5s ease-in-out forwards',
    },
  },
  plugins: [],
}
