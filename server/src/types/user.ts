import mongoose from "mongoose";
import { ICompetition, IUserCompetition } from "./competition";
import { ITask } from "./task";
import { JWTUser } from "./types";

export type CreateUserInput = {
    firebaseUid: string
    email?: string
    isEmailVerified?: boolean;
    name?: string;
    profileImageUrl?: string;
}

export type LoginUserInput = {
    firebaseUid: string
}

export type UpdateUserInput = {
    name?: string
    username?: string
    email?: string
    profileImageUrl?: string
    bio?: string
    password?: string
}

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
    firebaseUid: string;
    username?: string;
    name?: string;
    email?: string;
    profileImageUrl?: string;
    bio?: string;
    globalRank?: number;
    platformPoints?: number;
    socialMedia?: ISocialMedia[];
    coverPicture?: string;
    joinedCompetitions?: IUserCompetition[];
    tasks?: IUserTask[];
    phoneNumber?: string;
    isEmailVerified?: boolean;
    generateAuthToken: () => string;
    comparePassword: (password: string) => boolean;
    verifyToken: (token: string) => JWTUser;
}



