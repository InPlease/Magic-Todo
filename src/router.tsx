// Dependencies
import { createBrowserRouter } from 'react-router-dom'
// Components
import TaskProvider from './utils/context/TaskContext'
import TodoSection from './sections/TodoSection'
import Login from './components/Login/Login'

export const router = createBrowserRouter([
  {
    path: '/todo',
    element: (
      <TaskProvider>
        <TodoSection />
      </TaskProvider>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
])

export default router
