// Dependencies
import { useState, useMemo } from 'react'
const useSortedTasks = (tasks: any) => {
  const [sortOrder, setSortOrder] = useState<'latest' | 'oldest' | 'alpha'>(
    'latest'
  )
  const sortedTasks = useMemo(() => {
    let sorted = [...tasks]
    if (sortOrder === 'latest') {
      sorted.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
    } else if (sortOrder === 'oldest') {
      sorted.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      )
    } else if (sortOrder === 'alpha') {
      sorted.sort((a, b) => a.text.localeCompare(b.text))
    }
    return sorted
  }, [tasks, sortOrder])

  return { sortedTasks, sortOrder, setSortOrder }
}
export default useSortedTasks
