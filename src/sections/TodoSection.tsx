// Dependencies
import React from 'react'
// import useSound from 'use-sound'
// Components

// State
// import { useTaskContext } from '../utils/context/TaskContext'
// Constants
// import { ADD_TASK } from '../utils/constants/contants'
// Sounds
// import clickEffect from '../assets/sound/click_effect_01.wav'
import ChatComponent from '../components/Chat/ChatComponent'

const TodoSection: React.FC = () => {
  // const { dispatch } = useTaskContext()
  // const [play] = useSound(clickEffect)

  // const addTask = (text: string) => {
  //   dispatch({ type: ADD_TASK, payload: text })
  //   play()
  // }
  // const toggleTask = (id: number) => {
  //   dispatch({ type: TOGGLE_TASK, payload: id })
  // }
  // const deleteTask = (id: number) => {
  //   dispatch({ type: DELETE_TASK, payload: id })
  // }
  // const onDeleteAll = () => {
  //   dispatch({ type: DELETE_ALL, payload: '' })
  // }
  return (
    <section className="w-full flex justify-center items-center flex-col">
      <ChatComponent />
    </section>
  )
}
export default TodoSection
