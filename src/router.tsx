// Dependencies
import { createBrowserRouter } from 'react-router-dom'
// Context
import TaskProvider from './utils/context/TaskContext'

// Dashboards
import TodoSection from './sections/TodoSection'

// Auth
import Login from './components/Auth/Login'
import RecoverChangePassword from './components/Auth/RecoverChangePassword'
import RecoverMagicLink from './components/Auth/RecoverMagicLink'

// Erro Page
import ErrorPage from './components/404/404Page'

export const router = createBrowserRouter([
  {
    path: '*',
    element: <ErrorPage />,
  },
  {
    path: '/todo',
    element: (
      <TaskProvider>
        <TodoSection />
      </TaskProvider>
    ),
  },
  /* Auth */
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/recover/magic-link',
    element: <RecoverMagicLink />,
  },
  {
    path: '/recover/change-password',
    element: <RecoverChangePassword />,
  },
])

export default router
