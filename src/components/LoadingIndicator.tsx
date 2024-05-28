// Dependencies
import React, { useEffect, useRef } from 'react'
import anime from 'animejs/lib/anime.es.js'

interface LoadingIndicatorProps {
  loading: boolean
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ loading }) => {
  const squareRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // TODO - Change this thing to framer motion
    if (loading) {
      anime({
        targets: squareRef.current,
        rotate: '1turn',
        duration: 1000,
        easing: 'linear',
        loop: true,
      })
    } else {
      anime.remove(squareRef.current)
    }
  }, [loading])

  return (
    <div className="flex justify-center items-center">
      {loading && (
        <div ref={squareRef} className="inline-block h-3 w-3 bg-black"></div>
      )}
    </div>
  )
}

export default LoadingIndicator
