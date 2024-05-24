// Dependencies
import React from 'react'
import useSound from 'use-sound'
// Components
import TaskList from '../components/TaskContainer'
import TaskForm from '../components/TaskFormulary'
import TaskCounted from '../components/TaskCounter'
// State
import { useTaskContext } from '../utils/context/TaskContext'
// Constants
import {
  ADD_TASK,
  DELETE_ALL,
  TOGGLE_TASK,
  DELETE_TASK,
} from '../utils/constants/contants'
// Sounds
import clickEffect from '../assets/sound/click_effect_01.wav'
import ChatComponent from '../components/Chat/ChatComponent'

const TodoSection: React.FC = () => {
  const { state, dispatch } = useTaskContext()
  const [play] = useSound(clickEffect)

  const addTask = (text: string) => {
    dispatch({ type: ADD_TASK, payload: text })
    play()
  }
  const toggleTask = (id: number) => {
    dispatch({ type: TOGGLE_TASK, payload: id })
  }
  const deleteTask = (id: number) => {
    dispatch({ type: DELETE_TASK, payload: id })
  }
  const onDeleteAll = () => {
    dispatch({ type: DELETE_ALL, payload: '' })
  }
  return (
    <>
      <TaskCounted />
      <TaskForm onAdd={addTask} />
      <TaskList
        tasks={state.tasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onDeleteAll={onDeleteAll}
      />
      <ChatComponent />
    </>
  )
}
export default TodoSection
