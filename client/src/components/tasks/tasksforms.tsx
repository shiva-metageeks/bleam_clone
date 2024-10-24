"use client";
import { useState } from "react";
import { TaskCategory } from "@/hooks/task/taskCategory/type";
import { ExpandForm } from "@/types/task/task";
import VisitLink from "@/components/tasks/taskType/visitLink";
import TextEnter from "@/components/tasks/taskType/textEnter";
import UrlEnter from "@/components/tasks/taskType/urlEnter";
import NumberEnter from "@/components/tasks/taskType/numberEnter";
import TwitterLike from "@/components/tasks/taskType/twitter/like";
import TwitterFollow from "@/components/tasks/taskType/twitter/follow";
import TwitterTweet from "@/components/tasks/taskType/twitter/tweet";
import TwitterRetweet from "@/components/tasks/taskType/twitter/retweet";
import { TaskFormData } from "@/types/task/task";
import {toast} from "react-hot-toast"
import { useCreateTask } from "@/hooks/task/task";
import { useParams } from "next/navigation";

const TaskForm = ({
  selectedCategory,
}: {
  selectedCategory: string;
}) => {
  const {mutate:CreateTask} =useCreateTask();
  const {id} =useParams(); 
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
  const [newTask, setNewTask] = useState<TaskFormData>({
    type: "",
    title: "",
    description: "",
    visitLink: "",
    twitter: {
      tweetLink: "",
      tweetText: "",
      userFollow: "",
    },
    discord: {
      channelLink: "",
    },
    telegram: { channelLink: "" },
    quiz: { question: "", options: [], correctAnswer: "" },
    poll: { question: "", options: [{
      value:"",
      votes:0
    }] },
    points: 10,
  });

  const handleCreateTask=()=>{
    console.log("selectedCategory",selectedCategory);

    if(selectedCategory===""){
      toast.error("please select any  task category");
      return;
    }

    if(!newTask.title){
      toast.error("Add Task title");
      return;
    }

    if(!newTask.points){
      toast.error("Add Points");
      return;
    }

    if((selectedCategory==="tweetLike" || selectedCategory==="retweet")  && !newTask.twitter.tweetLink){
        toast.error("Please Add Tweet Link");
        return;
    }
    if(selectedCategory==="tweet" && !newTask.twitter.tweetText){
      toast.error("Please Add Tweet Text");
      return;
    }

    if(selectedCategory==="twitterFollow" && !newTask.twitter.userFollow){
      toast.error("Please Add Twitter UserName");
      return;
    }

    CreateTask(
       { title:newTask.title,
        type:selectedCategory,
        twitter:{
          tweetLink:newTask.twitter.tweetLink || "",
          tweetText:newTask.twitter.tweetText || ""
        },
        competition:id as string,
        points:newTask.points
       }
        ,{
          onSuccess:(data)=>{
            setNewTask({
              ...newTask,
              title:"",
              type:"",
              twitter:{
                tweetLink:"",
                tweetText:"",
                userFollow:""
              }
            })
          },
          onError:(error)=>{
            console.log("error",error);
          }
      }
    )

  }

  return (
    <div className="w-full h-full p-4">
      <div className="text-lg font-bold mb-2">Add Tasks</div>
      {selectedCategory!="" ? (
        <div className="mb-2">
                {selectedCategory === "visitLink" && (
                    <VisitLink newTask={newTask} setNewTask={setNewTask} expand={expand} setExpand={setExpand} />
                )}
                {selectedCategory === "textEnter" && (
                    <TextEnter newTask={newTask} setNewTask={setNewTask} expand={expand} setExpand={setExpand} />
                )}
                {selectedCategory === "urlEnter" && (
                   <UrlEnter newTask={newTask} setNewTask={setNewTask} expand={expand} setExpand={setExpand} />
                )}
                {selectedCategory === "numberEnter" && (
                 <NumberEnter newTask={newTask} setNewTask={setNewTask} expand={expand} setExpand={setExpand} />
                )}
                {selectedCategory === "tweetLike" && (
                  <TwitterLike newTask={newTask} setNewTask={setNewTask} expand={expand} setExpand={setExpand} />
                )}
                {selectedCategory === "retweet" && (
                  <TwitterRetweet newTask={newTask} setNewTask={setNewTask} expand={expand} setExpand={setExpand} />
                )}
                {selectedCategory === "twitterFollow" && (
                  <TwitterFollow newTask={newTask} setNewTask={setNewTask} expand={expand} setExpand={setExpand} />
                )}
                {selectedCategory === "tweet" && (
                  <TwitterTweet newTask={newTask} setNewTask={setNewTask} expand={expand} setExpand={setExpand} />
                )}
                {selectedCategory === "poll" && "Poll"}
                {selectedCategory === "quiz" && "Quiz"}
                {selectedCategory === "discordChannelJoin" && "Discord channel join"}
                {selectedCategory === "telegramGroupJoin" && "Telegram group join"}
                </div>
      ) : (
        <div className="flex justify-start items-center text-md">
          Please select at least one category
        </div>
      )}
      {
        !(selectedCategory==="") && <div className="flex justify-end items-center" >
        <button className="px-4 py-2 bg-orange-600 text-white rounded-lg" onClick={handleCreateTask} >Add task to Competition</button>
      </div>
      }
      
    </div>
  );
};

export default TaskForm;
