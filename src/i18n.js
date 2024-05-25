import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        welcome: 'Welcome!',
        subtitle: 'Simplify, organize, and conquer your day with AI',
        alt_subtitle: 'Daily tasks made easy, right in your hands',
        email: 'Email',
        email_required: 'Oops! Looks like you forgot to enter your email.',
        password: 'Password',
        password_required: 'Whoops! Don’t forget to enter your password',
        forgot_password: 'Forgot password?',
        sign_in: 'Sign In',
        or: 'Or',
        sign_in_with_linkedin: 'Sign in with LinkedIn',
        no_account: "if you don't have an account yet.",
        sign_up: 'Sign up',
        form_aria_label: 'Login form',
        login_with_google: 'Login with google',
      },
    },
    es: {
      translation: {
        welcome: '¡Bienvenido!',
        subtitle: 'Simplifica, organiza y conquista tu día con IA',
        alt_subtitle: 'Tareas diarias hechas fáciles, justo en tus manos',
        email: 'Correo electrónico',
        email_required:
          '¡Vaya! Parece que olvidaste ingresar tu correo electrónico',
        password: 'Contraseña',
        password_required: '¡Uy! No olvides ingresar tu contraseña.',
        forgot_password: '¿Olvidaste tu contraseña?',
        sign_in: 'Iniciar sesión',
        or: 'O',
        sign_in_with_linkedin: 'Inicia sesión con LinkedIn',
        no_account: '¿No tienes una cuenta?',
        sign_up: 'Regístrate',
        form_aria_label: 'Formulario de inicio de sesión',
        login_with_google: 'Inicia sesion con google',
      },
    },
  },
})

export default i18n
