import { Schema, model,Types } from "mongoose";
import { ICompetition } from "@src/types/competition";    

const competitionSchema = new Schema<ICompetition>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true},
    terms: { type: String},
    startDate: { type: String },
    endDate: { type: String },
    brand: { type: Types.ObjectId, ref: "Brand"},
    participants: [{ type: Types.ObjectId, ref: "UserCompetition" }],
    tasks: [{ type: Types.ObjectId, ref: "Task" }],
    prizes: [{ 
        rank: { type: Number, required: true},
        title: { type: String, required: true },
        description: { type: String, required: true },
        points: { type: Number, required: true },
    }],
},
{ timestamps: true }
);

export const Competition = model<ICompetition>("Competition", competitionSchema);
