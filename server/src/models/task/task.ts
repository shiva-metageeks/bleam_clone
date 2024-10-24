import { Schema, model } from "mongoose";
import type { ITask } from "@src/types/task";

const taskSchema = new Schema<ITask>(
  {
    title: { type: String, required: true },
    description: { type: String},
    type: { type: String, required: true },
    creator: { type: Schema.Types.ObjectId, ref: "Brand" },
    competition :{ type: Schema.Types.ObjectId, ref: "Competition"},
    status: { type: String, enum: ["active", "inactive"], default: "active" },
    participant: [{ type: Schema.Types.ObjectId, ref: "UserTask"}],
    visitLink: { type: String },
    twitter: {
      tweetLink: { type: String },
      tweetText: { type: String },
      userFollow: { type: String },
    },
    discord: {
      channelLink: { type: String },
    },
    telegram: {
      channelLink: { type: String },
    },  
    quiz: 
        {
          question: { type: String},
          options: [{ type: String}],
          correctAnswer: { type: String},
        },
    poll:{
      question: { type: String},
      options: [{
        value: { type: String},
        votes: { type: Number},
      }],
      correctAnswer: { type: String},
    },
    points:{type:Number,default:0},
  },
  {
    timestamps: true,
  }
);

const Task = model<ITask>("Task", taskSchema);

export default Task;
