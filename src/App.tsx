// Components
import TodoSection from './sections/TodoSection'
import Navbar from './components/Navbar'
import BackToTopButton from './components/BackToTheTop'
import Chat from './components/ChatComponent'
// State
import TaskProvider from './utils/context/TaskContext'

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
        <Chat />
      </main>
      <footer>
        <BackToTopButton />
      </footer>
    </>
  )
}
export default App
