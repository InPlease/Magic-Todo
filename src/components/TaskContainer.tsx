import React from 'react'
import TaskComponent from './TaskComponent'
import ErrorHandlerMessageComponent from './ErrorHandlerMessageComponent'
import { useTranslation } from 'react-i18next'

interface TaskListProps {
  tasks: { id: number; text: string; completed: boolean }[]
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle, onDelete }) => {
  const { t } = useTranslation()

  return (
    <div className="task-list">
      {(tasks.length &&
        tasks.map((task) => (
          <TaskComponent
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))) || <ErrorHandlerMessageComponent message={t('empty_task')} />}
    </div>
  )
}

export default TaskList
