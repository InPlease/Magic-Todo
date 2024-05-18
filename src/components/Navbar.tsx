// Dependencies
import React from 'react'
import { Languages } from 'lucide-react'
import { useTranslation } from 'react-i18next'
const ErrorImage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'es' : 'en'
    i18n.changeLanguage(newLanguage)
  }
  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <h2 className="uppercase text-beige">
          Magic <span className="text-orange">Todo</span>
        </h2>
        <div className="block" id="navbar-default">
          <button
            onClick={toggleLanguage}
            aria-label={
              i18n.language === 'en'
                ? t('change_language_to_spanish')
                : t('change_language_to_english')
            }
            title={
              i18n.language === 'en'
                ? t('change_language_to_spanish')
                : t('change_language_to_english')
            }
            className="rounded-default hover:text-white"
          >
            <Languages />
          </button>
        </div>
      </div>
    </nav>
  )
}
export default ErrorImage
