import React from 'react'
import { ExpandForm,TaskFormData } from "@/types/task/task";
import { icons } from "@/utils/imports/config";
const {IoIosArrowDown,IoIosArrowForward,FaXTwitter}=icons;
import PointsInput from "@/components/tasks/points"
const TwitterTweet = (
    {newTask,setNewTask,expand,setExpand}:{
    newTask:TaskFormData
    setNewTask:React.Dispatch<React.SetStateAction<TaskFormData>>;
    expand:ExpandForm,
    setExpand:React.Dispatch<React.SetStateAction<ExpandForm>>
    }
) => {
  return (
    <div className="flex flex-col gap-2 shadow-md rounded-md mb-4">
      <div
        className="flex justify-between items-center bg-zinc-950 text-white rounded-t-md px-4 py-2 cursor-pointer"
        onClick={() => setExpand({ ...expand, tweet: !expand.tweet })}
      >
        <div className="flex justify-start items-center gap-2">
          <span>
            <FaXTwitter />
          </span>
          <span className="text-md font-bold">Tweet </span>
        </div>
        <div className="flex justify-center items-center font-bold">
          {expand.tweet ? <IoIosArrowDown /> : <IoIosArrowForward />}
        </div>
      </div>
      <div
        className={`flex flex-col gap-2 p-4 ${
          expand.tweet ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="tweetTitle" className="text-sm font-bold">
            Title
          </label>
          <input
            type="text"
            id="tweetTitle"
            value={newTask.title}
            onChange={(e)=>setNewTask({...newTask,title:e.target.value})}
            placeholder="Enter Title"
            className="border border-gray-500 rounded-md p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="tweet" className="text-sm font-bold">
            Tweet
          </label>
          <textarea
            id="tweet"
            value={newTask.twitter.tweetText}
            onChange={(e) =>
              setNewTask({
                ...newTask,
                twitter: {
                  ...newTask.twitter,
                  tweetText: e.target.value,
                },
              })
            }
            placeholder="I am having fun on hypd website"
            className="border border-gray-500 rounded-md p-2"
          />
        </div>
        <PointsInput newTask={newTask} setNewTask={setNewTask} />
      </div>
    </div>
  )
}

export default TwitterTweet;