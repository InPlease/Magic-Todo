// Dependencies
import React, { useState, useEffect } from 'react'
import { MoveUpLeft } from 'lucide-react'
const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    setIsVisible(false)
  }
  return (
    <button
      id="back_top_btn"
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-2 rounded-full bg-orange-500 text-white shadow-lg transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <MoveUpLeft size={24} />
    </button>
  )
}
export default BackToTopButton
