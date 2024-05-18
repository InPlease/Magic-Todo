import Todo from './sections/TodoSection'
import { TaskProvider } from './util/TaskContext'

function App() {
  return (
    <main className="w-full flex items-center justify-center p-10">
      <TaskProvider>
        <Todo />
      </TaskProvider>
    </main>
  )
}

export default App
