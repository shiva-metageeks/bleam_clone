import React from 'react'
import { ExpandForm,TaskFormData } from "@/types/task/task";
import { icons } from "@/utils/imports/config";
const {IoIosArrowDown,IoIosArrowForward}=icons;

const TwitterFollow = (
    {newTask,setNewTask,expand,setExpand}:{
    newTask:TaskFormData
    setNewTask:React.Dispatch<React.SetStateAction<TaskFormData>>;
    expand:ExpandForm,
    setExpand:React.Dispatch<React.SetStateAction<ExpandForm>>
    }
) => {
  return (
    <div>twitterFollow</div>
  )
}

export default TwitterFollow;