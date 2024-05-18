// Dependencies
import { Plus } from 'lucide-react'
import React, { useState } from 'react'

interface TaskFormProps {
  onAdd: (text: string) => void
}

const TaskForm: React.FC<TaskFormProps> = ({ onAdd }) => {
  const [text, setText] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      onAdd(text)
      setText('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex">
      <div className="w-full mb-6">
        <div className="w-full flex justify-center items-center">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="write you next task"
            className="rounded-full"
          />
          <button type="submit" className="button-icon-left">
            <Plus />
          </button>
        </div>
        {/* <p className="mt-2 text-sm text-green-600 dark:text-green-500">
          <span className="font-medium">Well done!</span> Some success message.
        </p> */}
      </div>
    </form>
  )
}

export default TaskForm
