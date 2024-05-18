// Dependencies
import React from 'react'
import { useTranslation } from 'react-i18next'

const ErrorImage: React.FC = () => {
  const { t } = useTranslation()
  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <h2 className="uppercase text-beige">
          Magic <span className="text-orange">Todo</span>
        </h2>
        <div
          className="hidden w-full md:block md:w-auto"
          id="navbar-default"
        ></div>
      </div>
    </nav>
  )
}

export default ErrorImage
