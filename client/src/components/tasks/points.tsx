import React from "react";
import { TaskFormData } from "@/types/task/task";

const PointsInput = ({
  newTask,
  setNewTask,
}: {
  newTask: TaskFormData;
  setNewTask: React.Dispatch<React.SetStateAction<TaskFormData>>;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="points" className="text-sm font-bold">
        Points Reward (1-100)
      </label>
      <input
        type="number"
        min={1}
        max={100}
        id="points"
        value={newTask.points}
        onChange={(e)=>setNewTask({...newTask,points:Number(e.target.value)})}
        placeholder="0"
        className="border border-gray-500 rounded-md p-2"
      />
    </div>
  );
};

export default PointsInput;
