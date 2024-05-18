// Dependencies
import { Plus } from 'lucide-react'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

interface TaskFormProps {
  onAdd: (text: string) => void
}

const TaskForm: React.FC<TaskFormProps> = ({ onAdd }) => {
  const [text, setText] = useState('')
  const { t } = useTranslation()

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
            placeholder={t('placeholder_create_task')}
            className="w-full rounded-full"
          />
          <button type="submit" className="h-full button-icon-left">
            <Plus />
          </button>
        </div>
      </div>
    </form>
  )
}

export default TaskForm
