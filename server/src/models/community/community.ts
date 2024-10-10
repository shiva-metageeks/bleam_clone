import { Schema, model,Types } from "mongoose";
import type { ICommunity } from "../../types/types";

const communitySchema = new Schema<ICommunity>({
    communityId: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    logo: { type: String, required: true },
    creator: { type: Types.ObjectId, ref: "User" },
    banner: { type: String},
    tags: [{ type: String }],
    quests: [{ type: Types.ObjectId, ref: "Quest" }],
    members: [{ type: Schema.Types.ObjectId, ref: "User" }],
},
{ timestamps: true }
);

const Community = model<ICommunity>("Community", communitySchema);

export { Community };