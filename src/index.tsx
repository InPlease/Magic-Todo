// Dpendencies
import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
// Style
import './styles/index.scss'
// Translation
import './i18n'
import { RouterProvider } from 'react-router-dom'
// Routes
import { router } from './router'
// Components
import Navbar from './components/Navbar'
import BackToTopButton from './components/BackToTheTop'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <>
    <header>
      <Navbar />
    </header>
    <main className="flex flex-grow items-stretch">
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </main>
    <footer>
      <BackToTopButton />
    </footer>
  </>
)
reportWebVitals()
