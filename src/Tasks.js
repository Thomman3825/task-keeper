import React from 'react'
import Task from './Task'

const Tasks = ({tasks,onClick,onReminder}) => {
  return (
    <div>
       { tasks.map((task)=>(
            <Task key={task.id} tselect={task} onClick={onClick} onReminder={onReminder} ></Task>
        ))}
    </div>
  )
}

export default Tasks