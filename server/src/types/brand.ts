import { ITask } from "./task";
import { ICompetition } from "./competition";

export interface IBrand {
    _id?: string;
    name: string;
    profileImageUrl: string;
    organizationName: string;
    email: string;
    password: string;
    website: string;
    isEmailVerified?: boolean;
    bio: string;
    tasks: ITask[];
    firebaseUid: string;
    competitions: ICompetition[];
    generateAuthToken: () => string;
    comparePassword: (password: string) => boolean;
    isModified: (password: string) => boolean;
}

export interface CreateBrandInput {
    name: string;
    organizationName: string;
    email: string;
    password: string;
    website: string;
}

export interface LoginBrandInput {
    email: string;
    password: string;
}

export interface UpdateBrandInput {
    name: string;
    organizationName: string;
    website: string;
    bio: string;
    profileImageUrl: string;
}

