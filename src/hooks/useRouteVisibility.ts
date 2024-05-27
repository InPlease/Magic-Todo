import { useLocation } from 'react-router-dom'

export const useRouteVisibility = (pathsToHide: string[] = []) => {
  const location = useLocation()
  const currentPath: string = location.pathname

  const isVisible: boolean = pathsToHide.includes(currentPath)

  return isVisible
}

