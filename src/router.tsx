// router.tsx
import { Route, Routes } from 'react-router-dom'
import TaskProvider from './utils/context/TaskContext'
import TodoSection from './sections/TodoSection'
import Login from './components/Auth/Login'
import RecoverChangePassword from './components/Auth/RecoverChangePassword'
import RecoverMagicLink from './components/Auth/RecoverMagicLink'
import ErrorPage from './components/404/404Page'
import RegistrationComponent from './components/Auth/RegistrationComponent'

export const RoutesComponent = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/registration" element={<RegistrationComponent />} />
    <Route
      path="/todo"
      element={
        <TaskProvider>
          <TodoSection />
        </TaskProvider>
      }
    />
    <Route path="/recover/magic-link" element={<RecoverMagicLink />} />
    <Route
      path="/recover/change-password"
      element={<RecoverChangePassword />}
    />
    <Route path="*" element={<ErrorPage />} />
  </Routes>
)

export default RoutesComponent
