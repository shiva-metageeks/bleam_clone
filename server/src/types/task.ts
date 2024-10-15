import { ICompetition } from "./competition";
import { IBrand } from "./brand";
import { IUser } from "./user";


export interface IUserTask {
    user: IUser;
    task: ITask;
    competition: ICompetition;
    status: string;
}

export interface IUserTaskSubmission {
    user: IUser;
    task: ITask;
    competition: ICompetition;
    type: string;
    quizScore?: number;
    pollAnswer?: string;
    submission?: {
        submissionText?: string;
        submissionMedia?: string;
    }
}

export interface ITask {
    _id: string;
    taskId: string;
    name: string;
    description: string;
    image?: string;
    tags?: string[];
    type: string;
    creator: IBrand;
    competition: ICompetition;
    status: string;
    participant: IUser[];
    visitLink?: string;
    twitter?: {
        tweetLink: string;
        tweetText: string;
        tweetMedia: string;
    }
    discord?: {
        channelLink: string;
    }
    telegram?: {
        channelLink: string;
    }
    quiz?: [
        {
            question: string;
            options: string[];
            correctAnswer: string;
        }
    ]
    poll?: {
        question: string;
        options: [
            {
                value: string;
                votes: number;
            }
        ]
        correctAnswer: string;
    },
    reward: number;
}

export interface CreateTaskInput {
    name: string;
    taskId: string;
    description: string;
    points: number;
    media?: string;
    type: string;
}