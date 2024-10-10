import { Schema, model } from "mongoose";
import type { ITask } from "@src/types/task";

const taskSchema = new Schema<ITask>(
  {
    taskId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    tags: [{ type: String }],
    type: { type: String, required: true },
    competition: { type: Schema.Types.ObjectId, ref: "Competition" },
    creator: { type: Schema.Types.ObjectId, ref: "Brand" },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
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
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    reward: { type: Number, required: true },
    submission: {
      submissionLink: { type: String },
      submissionDate: { type: Date },
      submissionText: { type: String },
      submissionMedia: { type: String },
      submissionNumber: { type: Number },
    },
  },
  {
    timestamps: true,
  }
);

const Task = model<ITask>("Task", taskSchema);

export { Task };
