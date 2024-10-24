export type ExpandForm = {
    visitLink:boolean,
    textEnter:boolean,
    urlEnter:boolean,
    numberEnter:boolean,
    poll:boolean,
    quiz:boolean,
    discordChannelJoin:boolean,
    telegramGroupJoin:boolean,
    tweetLike:boolean,
    retweet:boolean,
    tweet:boolean,
    twitterFollow:boolean,
}

export type TwitterTask={
    tweetLink:string;
    tweetText:string;
    userFollow:string;
}

export type DiscordTask={
    channelLink:string;
}

export type TelegramTask={
    channelLink:string;
}

export type QuizTask={
    question:string;
    options:string[];
    correctAnswer:string;
}

export type Option={
    value:string;
    votes:number;
}

export type PollTask={
    question:string;
    options:Option[]
}

export type TaskFormData={
    type:string
    title:string;
    description:string;
    visitLink:string;
    twitter:TwitterTask;
    discord:DiscordTask;
    telegram:TelegramTask;
    quiz:QuizTask;
    poll:PollTask;
    points:number;
}

export type Twitter = {
    tweetText:string;
    tweetLink:string;
    userFollow:string;
}

export type ITask ={
    title:string;
    type:string;
    visitLink:string;
    twitter:Twitter;
}
