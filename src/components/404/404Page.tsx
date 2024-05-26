import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import NotRouteFound from '../../assets/image/404-image.webp'
import WorldPullUpComponent from '../Effects/WorldPullUpComponent'

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div
      className="w-full flex flex-col items-center justify-center text-center bg-gray-100"
      aria-labelledby="not-found-title"
    >
      <motion.img
        src={NotRouteFound}
        alt={t('not_found_image_alt')}
        className="w-full max-w-md h-auto mb-8 xs:max-w-[250px] sm:max-w-[300px] rounded-[10px]"
        animate={{
          y: [0, -10, 0],
          rotate: [0, -5, 5, -5, 0],
          borderRadius: ['10px', '20px', '30px', '20px', '10px'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <WorldPullUpComponent
        className="text-4xl font-bold mb-4 text-white"
        words={t('not_found_title')}
      />
      <p id="not-found-title" className="text-xl mb-6 text-white">
        {t('not_found_message')}
      </p>
      <button
        onClick={() => (window.location.href = '/login')}
        className="primary-button xs:max-w-xs-button-lg sm:max-w-button-lg"
        aria-label={t('go_back_home_aria')}
      >
        {t('go_back_home')}
      </button>
    </div>
  )
}

export default NotFoundPage
