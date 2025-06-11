import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const TaskList = ({data}) => {
  return (
    <div id = 'taskList' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'>
      <AcceptTask/>
      <CompleteTask/>
      <FailedTask/>
      <NewTask/>
      
    </div>
  )
}

export default TaskList