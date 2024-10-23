import React from 'react'
import { ExpandForm } from "@/types/task/task";
import { icons } from "@/utils/imports/config";
const {IoIosArrowDown,IoIosArrowForward}=icons;

const UrlEnter = ({expand,setExpand}:{
    expand:ExpandForm,
    setExpand:React.Dispatch<React.SetStateAction<ExpandForm>>}) => {
  return (
     <div className="flex flex-col gap-2 shadow-md rounded-md mb-4">
                    <div
                      className="flex justify-between items-center bg-orange-500 text-white rounded-t-md px-4 py-2 cursor-pointer"
                      onClick={() =>
                        setExpand({ ...expand, urlEnter: !expand.urlEnter })
                      }
                    >
                      <div className="text-md font-bold">Url enter</div>
                      <div className="flex justify-center items-center font-bold">
                        {expand.urlEnter ? (
                          <IoIosArrowDown />
                        ) : (
                          <IoIosArrowForward />
                        )}
                      </div>
                    </div>
                    <div
                      className={`flex flex-col gap-2 p-4 ${
                        expand.urlEnter ? "block" : "hidden"
                      }`}
                    >
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="urlEnterTitle"
                          className="text-sm font-bold"
                        >
                          Title
                        </label>
                        <input
                          type="text"
                          id="urlEnterTitle"
                          placeholder="Enter Title"
                          className="border border-gray-500 rounded-md p-2"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="urlEnterQuestion"
                          className="text-sm font-bold"
                        >
                          Question
                        </label>
                        <input
                          type="text"
                          id="urlEnterQuestion"
                          placeholder="Enter Question"
                          className="border border-gray-500 rounded-md p-2"
                        />
                      </div>
                    </div>
                  </div>
  )
}

export default UrlEnter