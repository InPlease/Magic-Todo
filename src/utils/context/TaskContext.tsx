// Dependencies
import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useEffect,
} from 'react'

// Constants
import { ADD_TASK, TOGGLE_TASK, DELETE_TASK } from '../constants/contants'

interface Task {
  id: number
  text: string
  completed: boolean
  createdAt: string
}

interface TaskState {
  tasks: Task[]
}

interface TaskAction {
  type: 'ADD_TASK' | 'TOGGLE_TASK' | 'DELETE_TASK'
  payload: any
}

const initialState: TaskState = {
  tasks: [],
}

const TaskContext = createContext<{
  state: TaskState
  dispatch: React.Dispatch<TaskAction>
}>({
  state: initialState,
  dispatch: () => null,
})

const taskReducer = (state: TaskState, action: TaskAction): TaskState => {
  switch (action.type) {
    case ADD_TASK:
      const newTask: Task = {
        id: Date.now(),
        text: action.payload,
        completed: false,
        createdAt: new Date().toISOString(),
      }
      return { tasks: [...state.tasks, newTask] }
    case TOGGLE_TASK:
      return {
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      }
    case DELETE_TASK:
      return { tasks: state.tasks.filter((task) => task.id !== action.payload) }
    default:
      return state
  }
}

const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState, (initial) => {
    const storedTasks = localStorage.getItem('tasks')
    return storedTasks ? { tasks: JSON.parse(storedTasks) } : initial
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(state.tasks))
  }, [state.tasks])

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  )
}

export const useTaskContext = () => useContext(TaskContext)
export default TaskProvider
