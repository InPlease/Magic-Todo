import React from "react";
import TaskComponent from "./TaskComponent";

interface TaskListProps {
  tasks: { id: number; text: string; completed: boolean }[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle, onDelete }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskComponent
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;
