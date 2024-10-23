"use client";
import { useGetTaskCategories } from "@/hooks/task/taskCategory/taskCategory";
import Image from "next/image";
import { TaskCategory } from "@/hooks/task/taskCategory/type";

const TaskCategories = ({
  selectedCategory,
  setSelectedCategory,
}: {
  selectedCategory: TaskCategory[];
  setSelectedCategory: React.Dispatch<React.SetStateAction<TaskCategory[]>>;
}) => {
  const { taskCategories } = useGetTaskCategories();

  const handleCategoryClick = (category: TaskCategory) => {
    if (selectedCategory.includes(category)) {
      setSelectedCategory(
        selectedCategory.filter((cat: TaskCategory) => cat.name !== category.name)
      );
    } else {
      setSelectedCategory([...selectedCategory, category]);
    }
  };
  return (
    <div className="w-full h-full p-4">
      <div className="text-lg font-bold mb-2">Task Category</div>
      <p className="text-sm text-zinc-500 mb-4">
        choose any category to add task
      </p>
      <div className="grid grid-cols-3 gap-4 p-4">
        {taskCategories?.map((category: TaskCategory) => (
          <div
            onClick={() => handleCategoryClick(category)}
            className={`flex items-center gap-2 border-2 ${
              selectedCategory.includes(category)
                ? "bg-orange-500 text-white"
                : "text-black bg-slate-100"
            } shadow-md  rounded-full p-2 cursor-pointer`}
          >
            <div className="w-10 h-10 rounded-full">
              <Image
                src="/images/Avatar.png"
                alt={category.name}
                width={100}
                height={100}
              />
            </div>
            <div className="text-md font-bold">
              {category.name === "visitLink" && "Visit link"}
              {category.name === "textEnter" && "Text enter"}
              {category.name === "urlEnter" && "Url enter"}
              {category.name === "numberEnter" && "Number enter"}
              {category.name === "poll" && "Poll"}
              {category.name==="quiz" && "Quiz"}
              {category.name==="discordChannelJoin" && "Discord channel join"}
              {category.name==="telegramGroupJoin" && "Telegram group join"}
              {category.name==="tweetLike" && "Tweet Like"}
              {category.name==="retweet" && "Tweet Retweet"}
              {category.name==="tweetReply" && "Tweet Reply"}
              {category.name==="twitterFollow" && "Twitter Follow"}
              {category.name==="tweet" && "Tweet Share"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskCategories;
