export const types = `#graphql

    input TwitterTaskInput {
        tweetLink: String
        tweetText: String
        userFollow: String
    }

    input DiscordTaskInput {
        channelLink: String
    }

    input TelegramTaskInput {
        channelLink: String
    }

    input QuizTaskInput {
        question: String
        options: [String]
        correctAnswer:String
    }

    input PollOptionInput {
        value: String
        votes: Int
    }

    input PollTaskInput {
        question: String
        options: [PollOptionInput]
    }

    input CreateTaskInput {
        type: String!   
        title: String!
        visitLink: String
        twitter: TwitterTaskInput
        discord: DiscordTaskInput
        telegram: TelegramTaskInput
        quiz: QuizTaskInput
        poll: PollTaskInput
        points: Int
        competition:String
    }

    type Twitter {
        tweetLink:String
        tweetText:String
        userFollow:String
    }

    type Task {
        title: String!
        type: String!
        visitLink:String
        twitter:Twitter
    }
`;
