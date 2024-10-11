import { Schema, model,Types } from "mongoose";
import { ICompetition } from "@src/types/competition";    

const competitionSchema = new Schema<ICompetition>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    creator: { type: Types.ObjectId, ref: "Brand", required: true },
    participants: [{ type: Types.ObjectId, ref: "UserCompetition" }],
    tasks: [{ type: Types.ObjectId, ref: "Task" }],
    giveaways: [
        {
            rank: { type: Number, required: true },
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
