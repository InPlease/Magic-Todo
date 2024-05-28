// Dependencies
import React from 'react'
import { Languages } from 'lucide-react'
import { useTranslation } from 'react-i18next'
// Components
import LogoComponent from './LogoComponent'
import CommandSearchBar from './SearchBar/SearchBarComponent'
// Hooks
import { useRouteVisibility } from '../hooks/useRouteVisibility'

const ErrorImage: React.FC = () => {
  const { t, i18n } = useTranslation()
  const isComponentVisible = useRouteVisibility([
    '/todo',
    '/magic-link',
    '/change-password',
  ])

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'es' : 'en'
    i18n.changeLanguage(newLanguage)
  }

  return (
    <nav>
      <div className="xs:flex-col md:flex-row max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <LogoComponent />
        {isComponentVisible && (
          <>
            <div className="show-md-hide-xs flex-grow-[.9]">
              <CommandSearchBar />
            </div>
          </>
        )}
        <div className="show-xs-hide-md-flex w-full space-x-5 justify-center items-center">
          {isComponentVisible && <CommandSearchBar />}
          <div id="navbar-default">
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
              <button className="primary-button">
                <Languages />
              </button>
            </button>
          </div>
        </div>
        <button
          onClick={() => toggleLanguage()}
          className="show-md-hide-xs primary-button max-w-fit"
        >
          <Languages />
        </button>
      </div>
    </nav>
  )
}

export default ErrorImage
