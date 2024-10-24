import { ICompetition } from "@src/types/competition";
import { IBrand } from "@src/types/brand";
import { IUser } from "@src/types/user";

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
  };
}

export interface ITwitter {
  tweetLink: string;
  tweetText: string;
  userFollow: string;
}

export interface IDiscord {
  channelLink: string;
}

export interface ITelegram {
  channelLink: string;
}

export interface IQuiz {
  question: string;
  option: string[];
  correctAnswer: string;
}

export interface IOption {
  value: string;
  votes: number;
}

export interface IPoll {
  question: string;
  options: IOption[];
  correctAnswer: string;
}

export interface ITask {
  _id?: string;
  type?: string;
  title?: string;
  description?: string;
  creator?: IBrand;
  competition?: ICompetition;
  status: string;
  participant: IUserTask[];
  visitLink?: string;
  twitter?: ITwitter;
  discord?: IDiscord;
  telegram?: ITelegram;
  quiz?: IQuiz;
  poll?: IPoll;
  points: number;
}

export interface CreateTaskInput {
    competition:string;
    type: string;
    title: string;
    visitLink?: string;
    twitter?: TwitterTaskInput;
    discord?: DiscordTaskInput;
    telegram?: TelegramTaskInput;
    quiz?: QuizTaskInput;
    poll?: PollTaskInput;
    points?: number;
}

type TwitterTaskInput ={
        tweetLink?: string;
        tweetText?: string;
        userFollow?: string;
    }

    type DiscordTaskInput ={
        channelLink?: string;
    }

    type TelegramTaskInput ={
        channelLink?: string;
    }

    type QuizTaskInput ={
        question?: string;
        options?: string[];
        correctAnswer:string
    }

    type PollOptionInput ={
        value?: string;
        votes?: number;
    }

    type PollTaskInput ={
        question?: string;
        options?: PollOptionInput[];
    }

export interface ITaskCategory {
  name: string;
  description: string;
  image: string;
}

export interface CreateTaskCategory {
  name: string;
  description: string;
  image: string;
}

export interface UpdateTaskCategory {
  _id: string;
  name: string;
  description: string;
  image: string;
}
