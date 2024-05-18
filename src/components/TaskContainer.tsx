import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import {
  ArrowDownNarrowWide,
  ArrowDownWideNarrow,
  ArrowDownAZ,
  X,
} from 'lucide-react'
import useSortedTasks from '../hooks/useSortedTasks'
// Components
import TaskComponent from './TaskComponent'
import ErrorHandlerMessageComponent from './ErrorHandlerMessageComponent'
interface TaskListProps {
  tasks: { id: number; text: string; completed: boolean; createdAt: string }[]
  onToggle: (id: number) => void
  onDelete: (id: number) => void
  onDeleteAll: () => void
}
const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggle,
  onDelete,
  onDeleteAll,
}) => {
  const { t } = useTranslation()
  const { sortedTasks, setSortOrder } = useSortedTasks(tasks)

  const renderedTasks = useMemo(() => {
    return sortedTasks.length ? (
      sortedTasks.map((task: any) => (
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
  }, [sortedTasks, onToggle, onDelete, t])
  return (
    <section className="scroll-hide w-full max-w-maxpage p-[4px] scroll-smooth">
      <div className="space-x-3 mb-[20px] flex justify-between ">
        <div className="space-x-3">
          <button
            aria-label={t('sort_by_latest')}
            className="rounded-default hover:text-white"
            onClick={() => setSortOrder('latest')}
          >
            <ArrowDownNarrowWide />
          </button>
          <button
            aria-label={t('sort_by_oldest')}
            className="rounded-default hover:text-white"
            onClick={() => setSortOrder('oldest')}
          >
            <ArrowDownWideNarrow />
          </button>
          <button
            aria-label={t('sort_by_alpha')}
            className="rounded-default hover:text-white"
            onClick={() => setSortOrder('alpha')}
          >
            <ArrowDownAZ />
          </button>
        </div>

        <div>
          <button
            aria-label={t('delete_all')}
            className="rounded-default hover:text-white"
            onClick={() => onDeleteAll()}
          >
            <X />
          </button>
        </div>
      </div>
      {renderedTasks}
    </section>
  )
}
export default TaskList
