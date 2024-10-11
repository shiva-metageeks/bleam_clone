import { Schema, model } from "mongoose";
import type { IUserTaskSubmission } from "@src/types/task";

const userTaskSubmissionSchema = new Schema<IUserTaskSubmission>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    task: { type: Schema.Types.ObjectId, ref: "Task", required: true },
    competition: { type: Schema.Types.ObjectId, ref: "Competition", required: true },
    type: { type: String, required: true },
    quizScore: { type: Number, required: false },
    pollAnswer: { type: String, required: false },
    submission:{
        submissionText: { type: String, required: false },
        submissionMedia: { type: String, required: false },
        submissionNumber: { type: Number, required: false },
        submissionUrl: { type: String, required: false },
    },
  },
  { timestamps: true }
);

const UserTaskSubmission = model<IUserTaskSubmission>("UserTaskSubmission", userTaskSubmissionSchema);
export { UserTaskSubmission };