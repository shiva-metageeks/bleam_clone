import { IUser } from "./user";
import { IBrand } from "./brand";
import { ITask } from "./task";

export interface IParticipant {
    user: IUser;
    pointsEarned: number;
    rank: number;
}

export interface IGiveaway {
    rank: number;
    giveawayImage: string;
    giveawayDescription: string;
    giveawayLink: string;
    giveawayName: string;
}


export interface ICompetition {
    _id: string;
    name: string;
    description: string;
    image: string;
    startDate: Date;
    endDate: Date;
    creator: IBrand;
    participants: IParticipant[];
    tasks: ITask[];
    giveaways: IGiveaway[];
    rank: number;
    pointsEarned: number;
}
