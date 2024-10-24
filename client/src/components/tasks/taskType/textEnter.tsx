import { ExpandForm,TaskFormData } from "@/types/task/task";
import { icons } from "@/utils/imports/config";
const { IoIosArrowDown, IoIosArrowForward } = icons;

const TextEnter = ({
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
        className="flex justify-between items-center bg-orange-500 text-white rounded-t-md px-4 py-2 cursor-pointer"
        onClick={() => setExpand({ ...expand, textEnter: !expand.textEnter })}
      >
        <div className="text-md font-bold">Text enter</div>
        <div className="flex justify-center items-center font-bold">
          {expand.textEnter ? <IoIosArrowDown /> : <IoIosArrowForward />}
        </div>
      </div>
      <div
        className={`flex flex-col gap-2 p-4 ${
          expand.textEnter ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="textEnterTitle" className="text-sm font-bold">
            Title
          </label>
          <input
            type="text"
            id="textEnterTitle"
            placeholder="Enter Title"
            className="border border-gray-500 rounded-md p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="textEnter" className="text-sm font-bold">
            Question
          </label>
          <input
            type="text"
            id="textEnter"
            placeholder="Enter Question"
            className="border border-gray-500 rounded-md p-2"
          />
        </div>
      </div>
    </div>
  );
};

export default TextEnter;
