import { ITask } from "./task";
import { ICompetition } from "./competition";

export interface IBrand {
    _id?: string;
    name: string;
    email: string;
    isEmailVerified?: boolean;
    profileImageUrl: string;
    bio: string;
    tasks: ITask[];
    firebaseUid: string;
    competitions: ICompetition[];
}

export interface CreateBrandInput {
    name: string;
    email: string;
    profileImageUrl: string;
    firebaseUid: string;
    bio: string;
}