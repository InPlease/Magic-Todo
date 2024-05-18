import React from 'react'
import { useTaskContext } from '../util/TaskContext'

const TaskCounter: React.FC = () => {
  const { state } = useTaskContext()
  console.log(state)
  return (
    <section className="flex w-full justify-between items-center sm:flex-nowrap xs:flex-wrap my-[20px] p-[20px_15px_20px_15px] rounded-[var(--fields-border-radious)] border-[2px] border-[var(--color-beige)]">
      <div className=" w-full">
        <h2 className="xs:text-center sm:text-left font-bold text-[var(--color-beige)] text-[2em]">
          Todo Done
        </h2>
        <p className="xs:text-center sm:text-left text-[var(--color-beige)] font-extralight">
          Keep it up
        </p>
      </div>
      <div className="text-[3em] xs:w-full sm:w-auto xs:flex  justify-center">
        <small className="flex items-center text-[1em] text-[var(--color-beige)] font-extrabold">
          {state &&
            state.tasks &&
            state.tasks.length &&
            state.tasks.filter((task) => task.completed).length}
        </small>
        <span className="text-[var(--color-beige)] font-extrabold">/</span>
        <small className="flex items-center text-[1em] text-[var(--color-beige)] font-extrabold">
          {state && state.tasks && state.tasks.length}
        </small>
      </div>
    </section>
  )
}

export default TaskCounter
