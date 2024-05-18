// Dependenciesx
import React from 'react'
import { useTranslation } from 'react-i18next'
// State
import { useTaskContext } from '../util/TaskContext'
const TaskCounter: React.FC = () => {
  const { state } = useTaskContext()
  const { t } = useTranslation()
  return (
    <section className="max-w-maxpage flex w-full justify-between items-center sm:flex-nowrap xs:flex-wrap my-[20px] p-[20px_15px_20px_15px] rounded-default border-[2px] border-beige">
      <div className="w-full">
        <h2
          tabIndex={0}
          className="xs:text-center sm:text-left font-bold text-beige text-[2em]"
        >
          {t('task_done')}
        </h2>
        <p
          tabIndex={0}
          className="xs:text-center sm:text-left text-beige font-light"
        >
          {t('task_done_subtitle')}
        </p>
      </div>
      <div className="text-[3em] xs:w-full sm:w-auto xs:flex xs:justify-center md:justify-end">
        <small
          tabIndex={0}
          className="flex items-center text-[1em] text-beige font-extrabold"
        >
          {state &&
            state.tasks &&
            state.tasks.length &&
            state.tasks.filter((task) => task.completed).length}
        </small>
        <span className="text-beige font-extrabold">/</span>
        <small
          tabIndex={0}
          className="flex items-center text-[1em] text-beige font-extrabold"
        >
          {state && state.tasks && state.tasks.length}
        </small>
      </div>
    </section>
  )
}
export default TaskCounter
