import { Schema, model,Types } from "mongoose";
import { ICompetition } from "@src/types/competition";    

const competitionSchema = new Schema<ICompetition>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true},
    startDate: { type: Date ,default: Date.now() },
    endDate: { type: Date},
    creator: { type: Types.ObjectId, ref: "Brand"},
    participants: [{ type: Types.ObjectId, ref: "UserCompetition" }],
    tasks: [{ type: Types.ObjectId, ref: "Task" }],
    giveaways: [
        {
            rank: { type: Number, required: true},
            giveawayImage: { type: String, required: true },
            giveawayDescription: { type: String, required: true },
            giveawayLink: { type: String, required: true },
            giveawayName: { type: String, required: true },
        }
    ],
},
{ timestamps: true }
);

export const Competition = model<ICompetition>("Competition", competitionSchema);
