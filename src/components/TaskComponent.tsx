// Dependencies
import React, { useEffect, useRef } from 'react'
import anime from 'animejs/lib/anime.es.js'
import { Trash2 } from 'lucide-react'

interface TaskProps {
  task: { id: number; text: string; completed: boolean }
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

const Task: React.FC<TaskProps> = ({ task, onToggle, onDelete }) => {
  const taskRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (taskRef.current) {
      anime({
        targets: taskRef.current,
        translateY: [20, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 500,
      })
    }
  }, [])

  const handleDelete = () => {
    if (taskRef.current) {
      anime({
        targets: taskRef.current,
        translateY: [0, -20],
        opacity: [1, 0],
        easing: 'easeInExpo',
        duration: 200,
        complete: () => {
          onDelete(task.id)
        },
      })
    }
  }

  return (
    <div
      onClick={() => onToggle(task.id)}
      className="max-w-[500px] w-full grid grid-cols-[80%_20%] border-[2px] border-[var(--color-beige)] rounded-[var(--fields-border-radious)]"
    >
      <div
        ref={taskRef}
        className="cursor-pointer p-[15px_4px_15px_7px] flex items-center space-x-2"
      >
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="cursor-pointer appearance-none min-h-5 min-w-5 border-2 border-[var(--color-beige)] rounded-full checked:bg-[var(--color-beige)] focus:outline-none"
        />
        <span
          className="break-all text-[var(--color-beige)]"
          style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        >
          {task.text}
        </span>
      </div>
      <div>
        <button
          className="flex justify-center items-center text-white w-full h-full"
          onClick={handleDelete}
        >
          <Trash2 />
        </button>
      </div>
    </div>
  )
}

export default Task
