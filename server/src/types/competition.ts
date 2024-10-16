import { IUser } from "./user";
import { IBrand } from "./brand";
import { ITask } from "./task";


export interface ICreateCompetitionInput {
    name: string;
    description: string;
    imageUrl: string;
}

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
    imageUrl: string;
    startDate: Date;
    endDate: Date;
    creator: IBrand;
    participants: IParticipant[];
    tasks: ITask[];
    giveaways: IGiveaway[];
}

export interface IUserCompetition {
    user: IUser;
    competition: ICompetition;
    pointsEarned: number;
    rank: number;
    completed: "completed" | "not completed";
}
