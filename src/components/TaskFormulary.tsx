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
    <div className="w-full flex justify-center items-center">
      <form onSubmit={handleSubmit} className="w-full max-w-maxpage">
        <div className="w-full mb-6">
          <div className="flex justify-center items-center">
            <label htmlFor="task-input" className="sr-only">
              {t('aria_input_add_task')}
            </label>
            <input
              id="task-input"
              tabIndex={0}
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={t('placeholder_create_task')}
              className="w-full rounded-full"
              aria-describedby="task-input-description"
            />
            <button
              disabled={!text}
              id="add-task-button"
              tabIndex={0}
              type="submit"
              className="h-full button-icon-left"
              aria-label={t('aria_add_task')}
            >
              <Plus />
            </button>
          </div>
        </div>
        <p id="task-input-description" className="sr-only">
          {t('aria_input_add_task')}
        </p>
      </form>
    </div>
  )
}
export default TaskForm
