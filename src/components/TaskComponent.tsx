// Dependencies
import React, { useEffect, useRef } from 'react'
import anime from 'animejs/lib/anime.es.js'
import { Trash2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface TaskProps {
  task: { id: number; text: string; completed: boolean }
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

const TaskComponent: React.FC<TaskProps> = ({ task, onToggle, onDelete }) => {
  const taskRef = useRef<HTMLDivElement>(null)
  const { t } = useTranslation()

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

  const handleCheckboxClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  const handleCheckboxChange = () => {
    onToggle(task.id)
  }

  return (
    <div className="my-[17px] transition-all hover:translate-y-[-12px]  w-full grid grid-cols-[80%_20%] border-[2px] border-beige rounded-default">
      <div
        ref={taskRef}
        className="bg-gray cursor-pointer p-[15px_4px_15px_7px] flex items-center space-x-2"
        onClick={() => onToggle(task.id)}
      >
        <input
          type="checkbox"
          checked={task.completed}
          onClick={handleCheckboxClick}
          onChange={handleCheckboxChange}
          className="cursor-pointer appearance-none border-2 border-beige rounded-full checked:bg-beige focus:outline-none"
          readOnly
        />
        <span
          className="xs:text-[0.9em] sm:text-[1.2em] capitalize font-extrabold break-all text-beige"
          style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        >
          {task.text}
        </span>
      </div>
      <div>
        <button
          className="flex justify-center items-center text-white w-full h-full"
          onClick={handleDelete}
          aria-label={t('delete_task')}
        >
          <Trash2 />
        </button>
      </div>
    </div>
  )
}
export default TaskComponent
