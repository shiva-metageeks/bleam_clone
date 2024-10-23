import React from 'react'
import { ExpandForm } from "@/types/task/task";
import { icons } from "@/utils/imports/config";
const {IoIosArrowDown,IoIosArrowForward}=icons;

const NumberEnter = (
    {expand,setExpand}:{
    expand:ExpandForm,
    setExpand:React.Dispatch<React.SetStateAction<ExpandForm>>
    }
) => {
  return (
     <div className="flex flex-col gap-2 shadow-md rounded-md mb-4">
                    <div onClick={() =>
                        setExpand({ ...expand, numberEnter:!expand.numberEnter })
                      } className="flex justify-between items-center bg-orange-500 text-white rounded-t-md px-4 py-2 cursor-pointer">
                      <div className="text-md font-bold">Number enter</div>
                      <div className="flex justify-center items-center font-bold">
                        {expand.numberEnter ? (
                          <IoIosArrowDown />
                        ) : (
                          <IoIosArrowForward />
                        )}
                      </div>
                    </div>
                    <div
                      className={`flex flex-col gap-2 p-4 ${
                        expand.numberEnter ? "block" : "hidden"
                      }`}
                    >
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="numberEnterTitle"
                          className="text-sm font-bold"
                        >
                          Title
                        </label>
                        <input
                          type="text"
                          id="numberEnterTitle"
                          placeholder="Enter Title"
                          className="border border-gray-500 rounded-md p-2"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="numberEnter"
                          className="text-sm font-bold"
                        >
                          Enter Question
                        </label>
                        <input
                          type="number"
                          id="numberEnter"
                          placeholder="Enter Question"
                          className="border border-gray-500 rounded-md p-2"
                        />
                      </div>
                    </div>
                  </div>
  )
}

export default NumberEnter;