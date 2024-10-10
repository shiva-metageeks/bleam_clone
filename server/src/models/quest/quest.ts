import { Schema, model } from "mongoose";
import type { IQuest } from "../../types/types";

const questSchema = new Schema<IQuest>(
  {
    questId: { type: String, unique: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    logo: { type: String, required: true },
    tags: [{ type: String }],
    community: { type: Schema.Types.ObjectId, ref: "Community" },
    creator: { type: Schema.Types.ObjectId, ref: "User" },
    participants: [{ type: Schema.Types.ObjectId, ref: "User" }],
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
  },
  {
    timestamps: true,
  }
);

const Quest = model<IQuest>("Quest", questSchema);

export { Quest };
