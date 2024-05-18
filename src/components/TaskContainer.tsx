import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
// Components
import TaskComponent from './TaskComponent'
import ErrorHandlerMessageComponent from './ErrorHandlerMessageComponent'
interface TaskListProps {
  tasks: { id: number; text: string; completed: boolean }[]
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}
const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle, onDelete }) => {
  const { t } = useTranslation()
  const renderedTasks = useMemo(() => {
    return tasks.length ? (
      tasks.map((task) => (
        <TaskComponent
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))
    ) : (
      <ErrorHandlerMessageComponent message={t('empty_task')} />
    )
  }, [tasks, onToggle, onDelete, t])
  return (
    <section className="scroll-hide w-full max-w-maxpage max-h-maxpage p-[4px] scroll-smooth overflow-auto">
      {renderedTasks}
    </section>
  )
}

export default TaskList
