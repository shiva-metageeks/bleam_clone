import { IUser } from "./user";
import { IBrand } from "./brand";
import { ITask } from "./task";
export interface ICreateCompetitionInput {
    name: string;
    description: string;
    imageUrl: string;
    terms: string;
    startDate: string;
    endDate: string;
    prizes: {
        rank: number;
        title: string;
        description: string;
        points: number;
    }[];
}

export interface IParticipant {
    user: IUser;
    pointsEarned: number;
    rank: number;
}

export interface IPrizes {
    rank: number;
    title: string;
    description: string;
    points: number;
}

export interface ICompetition {
    _id: string;
    name: string;
    description: string;
    imageUrl: string;
    terms: string;
    startDate: string;
    endDate: string;
    brand: IBrand;
    participants: IParticipant[];
    tasks: ITask[];
    prizes: IPrizes[];
}

export interface IUserCompetition {
    user: IUser;
    competition: ICompetition;
    pointsEarned: number;
    rank: number;
    completed: "completed" | "not completed";
}
