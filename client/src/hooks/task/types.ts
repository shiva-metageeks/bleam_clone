export type CreateTaskResponse ={
    title:string;
    type:string;
}

export type CreateTaskInput = {
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
};

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


