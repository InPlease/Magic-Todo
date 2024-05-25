/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '200px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    maxWidth: {
      "auth-forms": '500px',
    },
    extend: {
      maxWidth: {
        "auth-forms": '500px',
      },
      fontSize: {
        'base-form-subtitle': [
          '1.1em',
          {
            lineHeight: '20px',
            letterSpacing: '1px',
            fontWeight: '200',
          },
        ],
        'sm-form-subtitle': [
          '1em',
          {
            lineHeight: '20px',
            letterSpacing: '1px',
            fontWeight: '200',
          },
        ],
        'xs-form-subtitle': [
          '.8em',
          {
            lineHeight: '18px',
            letterSpacing: '1px',
            fontWeight: '200',
          },
        ],
        'base-form-title': [
          '2em',
          {
            lineHeight: '20px',
            letterSpacing: '1px',
            fontWeight: '500',
          },
        ],
        'sm-form-title': [
          '2em',
          {
            lineHeight: '20px',
            letterSpacing: '1px',
            fontWeight: '500',
          },
        ],
        'xs-form-title': [
          '2em',
          {
            lineHeight: '18px',
            letterSpacing: '1px',
            fontWeight: '600',
          },
        ],
      },
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
