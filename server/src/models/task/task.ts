import { Schema, model } from "mongoose";
import type { ITask } from "@src/types/task";

const taskSchema = new Schema<ITask>(
  {
    taskId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    tags: [{ type: String }],
    type: { type: String, required: true },
    creator: { type: Schema.Types.ObjectId, ref: "Brand" },
    competition :{ type: Schema.Types.ObjectId, ref: "Competition", required: true },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
    participant: [{ type: Schema.Types.ObjectId, ref: "UserTask", required: true, unique: true }],
    visitLink: { type: String },
    twitter: {
      tweetLink: { type: String },
      tweetText: { type: String },
      tweetMedia: { type: String },
      userFollow: { type: String },
    },
    discord: {
      channelLink: { type: String },
    },
    telegram: {
      channelLink: { type: String },
    },  
    quiz: 
      [
        {
          question: { type: String, required: true },
          options: [{ type: String, required: true }],
          correctAnswer: { type: String, required: true },
        },
      ]
    ,
    poll:{
      question: { type: String, required: true },
      options: [{
        value: { type: String, required: true },
        votes: { type: Number, required: true },
      }],
      correctAnswer: { type: String, required: true },
    },
    reward: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Task = model<ITask>("Task", taskSchema);

export { Task };
