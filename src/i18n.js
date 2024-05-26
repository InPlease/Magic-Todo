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
        // Titles and subtitles
        welcome: 'Welcome!',
        welcome_recover_magic_link: 'Get Back In',
        welcome_recover_change_password: 'Reset Password',
        subtitle_recover_change_password:
          'Keep your account secure with a new password.',
        subtitle_recover_magic_link:
          'Recover your account and rejoin the journey',
        subtitle: 'Simplify, organize, and conquer your day with AI',
        alt_subtitle: 'Daily tasks made easy, right in your hands',

        // 404 Page
        not_found_title: '404 - Page Not Found',
        not_found_message: 'Oops! The page you are looking for does not exist.',
        not_found_image_alt: '404 Not Found',
        go_back_home: 'Go Back Home',
        go_back_home_aria: 'Go back to home page',

        // Form labels
        email: 'Email',
        password: 'Password',
        new_password: 'New Password',
        confirm_password: 'Confirm Password',

        // Validation messages
        email_required: 'Oops! Looks like you forgot to enter your email.',
        invalid_email: 'Invalid email format',
        password_required: 'Whoops! Don’t forget to enter your password',
        new_password_required: 'Please enter a new password',
        confirm_password_required: 'Please confirm your new password',
        password_min_length: 'Password must be at least 6 characters long',

        // Buttons and links
        forgot_password: 'Forgot password?',
        sign_in: 'Sign In',
        reset_password: 'Reset Password',
        or: 'Or',
        no_account: "if you don't have an account yet.",
        sign_up: 'Sign up',
        send_magic_link: 'Send magic link',
        back_to_login: 'Back to login',
        already_have_account: 'Already have an account?',

        // Aria labels
        form_aria_label: 'Login form',
        email_aria_label: 'Enter your email',
        password_aria_label: 'Enter your password',
        new_password_aria_label: 'Enter a new password',
        confirm_password_aria_label: 'Confirm your new password',

        // Social login
        sign_in_with_google: 'Sign in with Google',
        sign_in_with_linkedin: 'Sign in with LinkedIn',
        login_with_google: 'Login with Google',
      },
    },
    es: {
      translation: {
        // Titles and subtitles
        welcome: '¡Bienvenido!',
        welcome_recover_magic_link: 'Recupera el acceso',
        welcome_recover_change_password: 'Restablecer contraseña',
        subtitle_recover_change_password:
          'Mantén segura tu cuenta con una nueva contraseña.',
        subtitle_recover_magic_link:
          'Recupera tu cuenta y vuelve a unirte al viaje',
        subtitle: 'Simplifica, organiza y conquista tu día con IA',
        alt_subtitle: 'Tareas diarias hechas fáciles, justo en tus manos',

        // 404 Page
        not_found_title: '404 - Página no encontrada',
        not_found_message: '¡Vaya! La página que buscas no existe.',
        not_found_image_alt: '404 No encontrado',
        go_back_home: 'Regresar a la página principal',
        go_back_home_aria: 'Regresar a la página principal',

        // Form labels
        email: 'Correo electrónico',
        password: 'Contraseña',
        new_password: 'Nueva Contraseña',
        confirm_password: 'Confirmar Contraseña',

        // Validation messages
        email_required:
          '¡Vaya! Parece que olvidaste ingresar tu correo electrónico',
        invalid_email: 'Formato de correo electrónico no válido',
        password_required: '¡Uy! No olvides ingresar tu contraseña.',
        new_password_required: 'Por favor, ingresa una nueva contraseña',
        confirm_password_required: 'Por favor, confirma tu nueva contraseña',
        password_min_length: 'La contraseña debe tener al menos 6 caracteres',

        // Buttons and links
        forgot_password: '¿Olvidaste tu contraseña?',
        sign_in: 'Iniciar sesión',
        reset_password: 'Restablecer contraseña',
        or: 'O',
        no_account: '¿No tienes una cuenta?',
        sign_up: 'Regístrate',
        send_magic_link: 'Enviar link magico',
        back_to_login: 'Regresar al login',
        already_have_account: 'si ya tienes una cuenta',

        // Aria labels
        form_aria_label: 'Formulario de inicio de sesión',
        email_aria_label: 'Introduce tu correo electrónico',
        password_aria_label: 'Introduce tu contraseña',
        new_password_aria_label: 'Introduce una nueva contraseña',
        confirm_password_aria_label: 'Confirma tu nueva contraseña',

        // Social login
        sign_in_with_google: 'Inicia sesión con Google',
        sign_in_with_linkedin: 'Inicia sesión con LinkedIn',
        login_with_google: 'Inicia sesión con Google',
      },
    },
  },
})

export default i18n
