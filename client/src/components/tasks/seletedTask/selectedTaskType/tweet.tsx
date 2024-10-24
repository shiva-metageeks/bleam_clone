import { ITask } from '@/types/task/task';
import React from 'react'
import { icons } from '@/utils/imports/config';
const {FaTwitter}=icons;

const Tweet = ({task}:{task:ITask}) => {
  return (
     <div className='p-4 flex flex-col' >
        <div className="mb-2" >tweet the following tweet</div>
        <textarea name="tweet" className='mb-4 border border-gray-800 p-2' readOnly id="tweet" value={task.twitter.tweetText}/>
        <button className='px-4 py-2 rounded-full bg-zinc-950 text-white flex justify-center items-center gap-4' >
        <span><FaTwitter/></span><span>Tweet</span></button>
    </div>
  )
}

export default Tweet;