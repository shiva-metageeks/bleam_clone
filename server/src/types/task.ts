import { ICompetition } from "./competition";
import { IBrand } from "./brand";
import { IUser } from "./user";

export interface ITask {
    _id: string;
    taskId: string;
    name: string;
    description: string;
    image: string;
    startDate: Date;
    endDate: Date;
    type: string;
    competition: ICompetition;
    creator: IBrand;
    status: string;
    visitLink: string;
    twitter: {
        tweetLink: string;
        tweetText: string;
        tweetMedia: string;
    }
    discord: {
        channelLink: string;
    }
    telegram: {
        channelLink: string;
    }
    quiz: [
        {
            question: string;
            options: string[];
            correctAnswer: string;
        }
    ]
    poll: {
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
    participants: IUser[];
    tags: string[];
    submission: {
        submissionLink: string;
        submissionDate: Date;
        submissionText: string;
        submissionMedia: string;
        submissionNumber: number;
    }
}