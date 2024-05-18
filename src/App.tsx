// Components
import Todo from './sections/TodoSection'
// State
import TaskProvider from './util/TaskContext'

function App() {
  return (
    <main className="w-full flex-col flex items-center justify-center p-10">
      <TaskProvider>
        <Todo />
      </TaskProvider>
    </main>
  )
}
export default App
