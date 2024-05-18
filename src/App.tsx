// Components
import TodoSection from './sections/TodoSection'
import Navbar from './components/Navbar'
import BackToTopButton from './components/BackToTheTop'
// State
import TaskProvider from './util/TaskContext'

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="w-full flex-col flex items-center justify-center p-10">
        <TaskProvider>
          <TodoSection />
        </TaskProvider>
      </main>
      <footer>
        <BackToTopButton />
      </footer>
    </>
  )
}
export default App
