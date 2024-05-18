// Dependencies
import React from 'react'
import { useTranslation } from 'react-i18next'

// Gif
import error from '../assets/gifs/error.gif'

const ErrorImage: React.FC = () => {
  const { t } = useTranslation()
  return (
    <img
      alt={t('alt_not_elements')}
      src={error}
      width="500"
      height="280"
      loading="lazy"
      decoding="async"
    />
  )
}

export default ErrorImage
