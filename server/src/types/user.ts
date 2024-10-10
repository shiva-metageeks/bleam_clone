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

export interface IUser {
    _id: string;
    username: string;
    name: string;
    email: string;
    profileImageUrl: string;
    bio: string;
    globalRank: number;
    points: number;
    socialMedia: ISocialMedia;
    coverPicture: string;
    joinedCompetitions: ICompetition[];
    competitionCompleted: ICompetition[];
    taskCompleted: ITask[];
    phoneNumber: string;
}
