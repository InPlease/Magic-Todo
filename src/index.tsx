// Dpendencies
import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
// Style
import './styles/index.css'
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
    <main className="w-full flex-col flex items-center justify-center p-10">
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </main>
    <footer>
      <BackToTopButton />
    </footer></>

)
reportWebVitals()
