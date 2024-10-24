import React from "react";
import { ExpandForm, TaskFormData } from "@/types/task/task";
import { icons } from "@/utils/imports/config";
const { IoIosArrowDown, IoIosArrowForward, FaXTwitter } = icons;
import PointsInput from "@/components/tasks/points";

const TwitterLike = ({
  newTask,
  setNewTask,
  expand,
  setExpand,
}: {
  newTask:TaskFormData
  setNewTask:React.Dispatch<React.SetStateAction<TaskFormData>>;
  expand: ExpandForm;
  setExpand: React.Dispatch<React.SetStateAction<ExpandForm>>;
}) => {
  return (
    <div className="flex flex-col gap-2 shadow-md rounded-md mb-4">
      <div
        className="flex justify-between items-center bg-zinc-900 text-white rounded-t-md px-4 py-2 cursor-pointer"
        onClick={() => setExpand({ ...expand, tweetLike: !expand.tweetLike })}
      >
        <div className="flex justify-start items-center gap-2">
          <span>
            <FaXTwitter />
          </span>
          <span className="text-md font-bold">Tweet Like</span>
        </div>
        <div className="flex justify-center items-center font-bold">
          {expand.tweetLike ? <IoIosArrowDown /> : <IoIosArrowForward />}
        </div>
      </div>
      <div
        className={`flex flex-col gap-2 p-4 ${
          expand.tweetLike ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="tweetLikeTitle" className="text-sm font-bold">
            Title
          </label>
          <input
            type="text"
            id="tweetLikeTitle"
            value={newTask.title}
            onChange={(e)=>setNewTask({...newTask,title:e.target.value})}
            placeholder="Enter Title"
            className="border border-gray-500 rounded-md p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="tweetLink" className="text-sm font-bold">
            Tweet Link
          </label>
          <input
            type="text"
            id="tweetLink"
            value={newTask.twitter.tweetLink}
            onChange={(e) =>
              setNewTask({
                ...newTask,
                twitter: {
                  ...newTask.twitter,
                  tweetLink: e.target.value,
                },
              })
            }
            placeholder="https://x.com/Shivam7Sisodia/status/1849069784853565547"
            className="border border-gray-500 rounded-md p-2"
          />
        </div>
        <PointsInput newTask={newTask} setNewTask={setNewTask} />
      </div>
    </div>
  );
};

export default TwitterLike;
