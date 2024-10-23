
import { Schema, model } from "mongoose";
import type { IUserCompetition } from "@src/types/competition";

const userCompetitionSchema = new Schema<IUserCompetition>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    competition: { type: Schema.Types.ObjectId, ref: "Competition", required: true },
    pointsEarned: { type: Number },
    rank: { type: Number},
    completed: {
      type: String,
      enum: ["completed", "not completed"],
      default: "not completed",
    },
  },
  { timestamps: true }
);

// Compound index to ensure a user can't have duplicate entries for the same competition
userCompetitionSchema.index({ user: 1, competition: 1 }, { unique: true });
const UserCompetition = model<IUserCompetition>("UserCompetition", userCompetitionSchema);

export { UserCompetition };