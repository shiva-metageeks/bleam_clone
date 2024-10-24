import { ITask } from '@/types/task/task';
import React, { useState } from 'react'
import TweetLike from './selectedTaskType/tweetLike';
import TweetRetweet from './selectedTaskType/tweetRetweet';
import Tweet from './selectedTaskType/tweet';
import { icons } from '@/utils/imports/config';
const {RxCross1}= icons;

const SelectedTask = ({task}:{task:ITask}) => {
    const [popUpOpen,setPopOpen]=useState(false);
  return (
    <>
<button onClick={()=>setPopOpen((prev)=>!prev)} data-modal-target="popup-modal" data-modal-toggle="popup-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
    Complete Task
</button>

<div
  id="popup-modal"
  tabIndex={-1}
  className={`${
    popUpOpen ? "flex" : "hidden"
  } justify-center items-center overflow-y-auto overflow-x-hidden fixed inset-0 z-50 w-full h-screen bg-black bg-opacity-50`}
>
  <div className="relative p-4 w-full max-w-md">
    <div className="relative bg-white rounded-lg shadow ">
    <div className='flex justify-end items-center' >
      <button
        onClick={() => setPopOpen((prev) => !prev)}
        type="button"
        className="absolute top-3 right-2.5 text-black bg-slate-400 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
        data-modal-hide="popup-modal"
      >
        <RxCross1 className='text-black'/>
      </button>
      </div>
      <div className="p-4">
        {
            task.type==="tweetLike" && <TweetLike task={task} />
        }
        {
            task.type==="retweet" && <TweetRetweet task={task} />
        }
        {
            task.type==="tweet" && <Tweet task={task}/>
        }
      </div>
    </div>
  </div>
</div>

</>
  )
}

export default SelectedTask