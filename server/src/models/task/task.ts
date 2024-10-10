import { Schema, model } from "mongoose";
import type { ITask } from "../../types/types";

const taskSchema = new Schema<ITask>(
  {
    taskId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    tags: [{ type: String }],
    quest: { type: Schema.Types.ObjectId, ref: "Quest" },
    creator: { type: Schema.Types.ObjectId, ref: "User" },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
    participants: [{ type: Schema.Types.ObjectId, ref: "User" }],
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    reward: { type: Number, required: true },
    type: { type: String, required: true },
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
