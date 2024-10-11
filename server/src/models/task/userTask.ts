import { Schema, model } from "mongoose";
import type { IUserTask } from "@src/types/task";

const userTaskSchema = new Schema<IUserTask>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    task: { type: Schema.Types.ObjectId, ref: "Task", required: true },
    competition: { type: Schema.Types.ObjectId, ref: "Competition", required: true },
    status: {
      type: String,
      enum: ["completed", "not completed"],
      default: "not completed",
    },
  },
  { timestamps: true }
);

// Compound index to ensure a user can't have duplicate entries for the same task
userTaskSchema.index({ user: 1, task: 1 }, { unique: true });
const UserTask = model<IUserTask>("UserTask", userTaskSchema);

export { UserTask };