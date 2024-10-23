"use client";
import { useState } from "react";
import { TaskCategory } from "@/hooks/task/taskCategory/type";
import { icons } from "@/utils/imports/config";
import { ExpandForm } from "@/types/task/task";
import VisitLink from "@/components/tasks/taskType/visitLink";
import TextEnter from "@/components/tasks/taskType/textEnter";
import UrlEnter from "./taskType/urlEnter";
import NumberEnter from "./taskType/numberEnter";
import TwitterLike from "./taskType/twitter/like";
import TwitterFollow from "./taskType/twitter/follow";
import TwitterTweet from "./taskType/twitter/tweet";
import TwitterRetweet from "./taskType/twitter/retweet";
const { IoIosArrowForward, IoIosArrowDown } = icons;

const TaskForm = ({
  selectedCategory,
}: {
  selectedCategory: TaskCategory[];
}) => {
  const [expand, setExpand] = useState<ExpandForm>({
    visitLink: false,
    textEnter: false,
    urlEnter: false,
    numberEnter: false,
    poll: false,
    quiz: false,
    discordChannelJoin: false,
    telegramGroupJoin: false,
    tweetLike: false,
    retweet: false,
    tweet: false,
    twitterFollow: false,
  });

  return (
    <div className="w-full h-full p-4">
      <div className="text-lg font-bold mb-2">Add Tasks</div>
      {selectedCategory.length > 0 ? (
        <form className="w-full h-full">
          {selectedCategory.map((category: TaskCategory) => {
            return (
              <>
                {category.name === "visitLink" && (
                    <VisitLink expand={expand} setExpand={setExpand} />
                )}
                {category.name === "textEnter" && (
                    <TextEnter expand={expand} setExpand={setExpand} />
                )}
                {category.name === "urlEnter" && (
                   <UrlEnter expand={expand} setExpand={setExpand} />
                )}
                {category.name === "numberEnter" && (
                 <NumberEnter expand={expand} setExpand={setExpand} />
                )}
                {category.name === "poll" && "Poll"}
                {category.name === "quiz" && "Quiz"}
                {category.name === "discordChannelJoin" && "Discord channel join"}
                {category.name === "telegramGroupJoin" && "Telegram group join"}
                {category.name === "tweetLike" && (
                  <TwitterLike expand={expand} setExpand={setExpand} />
                )}
                {category.name === "retweet" && (
                  <TwitterRetweet expand={expand} setExpand={setExpand} />
                )}
                {category.name === "twitterFollow" && (
                  <TwitterFollow expand={expand} setExpand={setExpand} />
                )}
                {category.name === "tweet" && (
                  <TwitterTweet expand={expand} setExpand={setExpand} />
                )}
              </>
            );
          })}
        </form>
      ) : (
        <div className="flex justify-start items-center text-md">
          Please select at least one category
        </div>
      )}
    </div>
  );
};

export default TaskForm;
