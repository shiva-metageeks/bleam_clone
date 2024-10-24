"use client";
import React, { useState } from "react";
import TaskCategories from "@/components/tasks/tasksCategories";
import { TaskCategory } from "@/hooks/task/taskCategory/type";
import TaskForm from "@/components/tasks/tasksforms"

const AddTaskPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  return (
      <div className="w-full flex justify-between gap-4 p-4 min-h-[80vh]">
        <div className="w-1/2 h-[80vh] overflow-y-scroll">
          <TaskForm selectedCategory={selectedCategory} />
        </div>
        <div className="w-1/2 shadow-lg rounded-lg overflow-y-scroll">
          <TaskCategories
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
      </div>
  );
};

export default AddTaskPage;
