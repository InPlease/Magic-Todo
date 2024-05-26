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
      'auth-forms': '500px',
    },
    extend: {
      transitionDuration: {
        'buttons-duration': '400ms',
      },
      fontSize: {
        'base-form-subtitle': [
          '1.1em',
          {
            lineHeight: '20px',
            letterSpacing: '1px',
            fontWeight: '100',
          },
        ],
        'sm-form-subtitle': [
          '1em',
          {
            lineHeight: '20px',
            letterSpacing: '1px',
            fontWeight: '100',
          },
        ],
        'xs-form-subtitle': [
          '.9em',
          {
            lineHeight: '18px',
            letterSpacing: '1px',
            fontWeight: '100',
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
        'xs-bottomTextForm': [
          '.8em',
          {
            lineHeight: '18px',
            letterSpacing: '2px',
            fontWeight: '400',
          },
        ],
        'sm-bottomTextForm': [
          '.9em',
          {
            lineHeight: '18px',
            letterSpacing: '2px',
            fontWeight: '300',
          },
        ],
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        green: '#5abf4b',
        beige: '#d9c6b0',
        orange: '#f25835',
        red: '#cb2c1d',
        'error-red': '#f31f45',
        black: '#121212',
        gray: '#1e1e1e',
        gray2: '#3e3e3e',
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

      // Effects
      animation: {
        gradient: 'gradient 8s linear infinite',
        pulse: 'pulse 2s infinite',
      },
      keyframes: {
        gradient: {
          to: {
            backgroundPosition: 'var(--bg-size) 0',
          },
        },
        pulse: {
          '0%, 100%': { r: '1', fill: '#d9c6b0' }, // Change this to your specific color
          '50%': { r: '2', fill: '#f25835' }, // Change this to your specific color
        },
      },
    },
    borderRadius: {
      full: '100px',
      default: '5px',
    },
  },
  plugins: [],
}
