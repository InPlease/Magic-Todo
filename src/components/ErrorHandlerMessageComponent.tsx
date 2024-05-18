// Dependencies
import React, { useEffect, useRef } from 'react'
import anime from 'animejs'

// Gifs
import error from '../assets/gifs/error.gif'

interface ErrorHandlerMessageComponentInterface {
  message: string
}

const ErrorHandlerMessageComponent: React.FC<
  ErrorHandlerMessageComponentInterface
> = ({ message }) => {
  const messageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (messageRef.current) {
      anime({
        targets: messageRef.current,
        opacity: [0, 1],
        translateY: [-20, 0],
        easing: 'easeOutExpo',
        duration: 500,
      })
    }
  }, [])

  return (
    <div
      ref={messageRef}
      className="text-white font-extrabold text-center space-y-5 flex justify-center items-center flex-col"
    >
      <div>{message}</div>
      <div>
        <img
          alt="error image, comedy action saying 'You need to relax'"
          src={error}
        />
      </div>
    </div>
  )
}

export default ErrorHandlerMessageComponent
