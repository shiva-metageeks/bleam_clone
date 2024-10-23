"use client";
import React, { useState } from 'react'
import TaskForm from '@/components/tasks/tasksforms'
import TaskCategories from '@/components/tasks/tasksCategories'
import { TaskCategory } from '@/hooks/task/taskCategory/type'

const AddTaskPage = () => {
    const [selectedCategory, setSelectedCategory] = useState<TaskCategory[]>([]);

  return (
    <div className='w-full min-h-screen p-4'>
      <div className='w-full flex justify-between gap-4 p-4'>
        <div className='w-1/2 border-r-2 border-gray-500 min-h-screen overflow-y-scroll'>
          <TaskForm selectedCategory={selectedCategory}/>
        </div>
        <div className='w-1/2 min-h-screen overflow-y-scroll'>
          <TaskCategories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        </div>
      </div>
    </div>
  )
}

export default AddTaskPage