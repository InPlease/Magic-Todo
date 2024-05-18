// Dependencies
import React, { useEffect, useRef, Suspense, lazy } from 'react'
import anime from 'animejs'

const ErrorImage = lazy(() => import('./ErrorImageComponent'))

interface ErrorHandlerMessageComponentInterface {
  message: string
}

const ErrorHandlerMessageComponent: React.FC<
  ErrorHandlerMessageComponentInterface
> = ({ message }) => {
  const messageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (messageRef.current) {
      const animation = anime({
        targets: messageRef.current,
        opacity: [0, 1],
        translateY: [-20, 0],
        easing: 'easeOutExpo',
        duration: 500,
      })

      return () => {
        animation.pause()
      }
    }
  }, [])

  return (
    <section
      ref={messageRef}
      className="max-w-maxpage text-white font-extrabold text-center space-y-5 flex justify-center items-center flex-col"
    >
      <div role="alert" aria-live="assertive">
        {message}
      </div>
      <div>
        <Suspense fallback={<div></div>}>
          <ErrorImage />
        </Suspense>
      </div>
    </section>
  )
}

export default ErrorHandlerMessageComponent
