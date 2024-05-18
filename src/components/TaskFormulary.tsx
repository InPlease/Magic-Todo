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
    <section className="w-full flex justify-center items-center">
      <form onSubmit={handleSubmit} className="w-full max-w-maxpage">
        <div className="w-full mb-6">
          <div className="flex justify-center items-center">
            <input
              tabIndex={0}
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={t('placeholder_create_task')}
              className="w-full rounded-full"
              aria-describedby={t('aria_input_add_task')}
            />
            <button
              tabIndex={0}
              type="submit"
              className="h-full button-icon-left"
              aria-label={t('aria_add_task')}
            >
              <Plus />
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}
export default TaskForm
