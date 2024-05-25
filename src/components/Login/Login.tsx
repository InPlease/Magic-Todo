// Dependencies
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

// Logos
import googleLogo from '../../assets/icons/google-logo.svg'

const LoginForm = () => {
  const { t } = useTranslation()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
    // Handle form submission logic here
  }

  return (
    <div className="justify-center items-center flex w-full bg-gray text-white rounded-lg shadow-lg overflow-hidden">
      <div className="max-w-auth-forms flex-col flex justify-center w-full p-8 lg:w-1/2">
        <div className="form-container">
          <h2 className="form-title">{t('welcome')}</h2>
          <p className="form-subtitle show-md-hide-xs">{t('subtitle')}</p>
          <p className="form-subtitle show-xs-hide-md">{t('alt_subtitle')}</p>
        </div>
        <div className="text-center">
          <div className="flex justify-center space-x-[10px]">
            <button
              className="secondary-button-quick-login flex justify-center space-x-5 socials-quick-login-button"
              aria-label={t('sign_in_with_linkedin')}
            >
              <p>{t('login_with_google')}</p>
              <img src={googleLogo} alt="google logo" />
            </button>
          </div>
        </div>
        <div className="w-full flex items-center">
          <div className="separator-left"></div>
          <p className="text-sm uppercase text-gray2">{t('or')}</p>
          <div className="separator-right"></div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          aria-label={t('form_aria_label')}
        >
          <div className="form-field-container">
            <label htmlFor="email" className="block text-sm">
              {t('email')}
            </label>
            <input
              type="email"
              id="email"
              {...register('email', { required: t('email_required') })}
              className="form-input-primary"
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby="email-error"
            />
            {errors.email && (
              <span id="email-error" className="error-message">
                {errors.email.message?.toString()}
              </span>
            )}
          </div>
          <div className="form-field-container">
            <label htmlFor="password" className="block text-sm">
              {t('password')}
            </label>
            <input
              type="password"
              id="password"
              {...register('password', { required: t('password_required') })}
              className="form-input-primary"
              aria-invalid={errors.password ? 'true' : 'false'}
              aria-describedby="password-error"
            />
            {errors.password && (
              <span id="password-error" className="error-message">
                {errors.password.message?.toString()}
              </span>
            )}
          </div>
          <div className="flex justify-between items-center">
            <a href="#" className="text-sm text-gray-600 underline">
              {t('forgot_password')}
            </a>
          </div>
          <button type="submit" className="primary-button">
            {t('sign_in')}
          </button>
        </form>
        <p className="mt-[10px] text-sm text-center text-gray-600">
          <a href="#" className="mr-[5px] ml-[5px] text-orange underline">
            {t('sign_up')}
          </a>
          {t('no_account')}
        </p>
      </div>
    </div>
  )
}

export default LoginForm
