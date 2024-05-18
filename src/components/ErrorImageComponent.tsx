// Dependencies
import React from 'react'
import { useTranslation } from 'react-i18next'
// Gif
import errorImage from '../assets/image/error_image.webp'
const ErrorImageComponent: React.FC = () => {
  const { t } = useTranslation()
  return (
    <img
      alt={t('alt_not_elements')}
      src={errorImage}
      width="500"
      height="280"
    />
  )
}
export default ErrorImageComponent
