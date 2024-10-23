import React from 'react'
import { ExpandForm } from "@/types/task/task";
import { icons } from "@/utils/imports/config";
const {IoIosArrowDown,IoIosArrowForward}=icons;

const TwitterRetweet = (
    {expand,setExpand}:{
    expand:ExpandForm,
    setExpand:React.Dispatch<React.SetStateAction<ExpandForm>>
    }
) => {
  return (
   <div className="flex flex-col gap-2 shadow-md rounded-md mb-4">
      <div
        className="flex justify-between items-center bg-orange-500 text-white rounded-t-md px-4 py-2 cursor-pointer"
        onClick={() => setExpand({ ...expand, retweet: !expand.retweet })}
      >
        <div className="text-md font-bold">Tweet Retweet</div>
        <div className="flex justify-center items-center font-bold">
          {expand.retweet ? <IoIosArrowDown /> : <IoIosArrowForward />}
        </div>
      </div>
      <div
        className={`flex flex-col gap-2 p-4 ${
          expand.retweet ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="tweetRetweetTitle" className="text-sm font-bold">
            Title
          </label>
          <input
            type="text"
            id="tweetRetweetTitle"
            placeholder="Enter Title"
            className="border border-gray-500 rounded-md p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="tweetRetweet" className="text-sm font-bold">
            Tweet Retweet
          </label>
          <input
            type="text"
            id="tweetRetweet"
            placeholder="https://x.com/Shivam7Sisodia/status/1849069784853565547"
            className="border border-gray-500 rounded-md p-2"
          />
        </div>
      </div>
    </div>
  )
}

export default TwitterRetweet;