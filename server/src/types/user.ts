import mongoose from "mongoose";
import { ICompetition } from "./competition";
import { ITask } from "./task";

interface ISocialMedia {
    socialApp: string;
    socialId: string;
    socialUsername: string;
    socialProfilePicture: string;
    socialAccessToken: string;
    socialRefreshToken: string;
}

interface IUserTask {
    task: ITask | mongoose.Types.ObjectId;
    status: string;
    competition: ICompetition | mongoose.Types.ObjectId;
}

export interface IUser {
    _id?: string;
    username: string;
    name: string;
    email: string;
    profileImageUrl: string;
    bio: string;
    globalRank: number;
    points: number;
    socialMedia: ISocialMedia[];
    coverPicture: string;
    joinedCompetitions: ICompetition[];
    competitionCompleted: ICompetition[];
    tasks: IUserTask[];
    phoneNumber: string;
}
