import React from 'react'
import { ExpandForm } from "@/types/task/task";
import { icons } from "@/utils/imports/config";
const {IoIosArrowDown,IoIosArrowForward}=icons;

const TwitterFollow = (
    {expand,setExpand}:{
    expand:ExpandForm,
    setExpand:React.Dispatch<React.SetStateAction<ExpandForm>>
    }
) => {
  return (
    <div>twitterFollow</div>
  )
}

export default TwitterFollow;