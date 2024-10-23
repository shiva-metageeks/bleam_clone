export const types = `#graphql

    input CreateCompetitionInput {
        name: String!
        description: String!
        imageUrl: String
        terms: String
        startDate: String
        endDate: String
        prizes: [CreateCompetitionPrizeInput]
    }

    input CreateCompetitionPrizeInput {
        rank: Int!
        title: String!
        description: String!
        points: Int!
    }

    input JoinCompetitionInput {
        competitionId: String!
    }

    type Response {
        success: Boolean
        message: String
    }

    type CheckUserCompetitionResponse {
        success: Boolean
        joined: Boolean
        completed: String
        pointsEarned: Int
        rank: Int
    }

    type Competition {
        id: ID
        name: String
        description: String
        imageUrl: String
        terms: String
        startDate: String
        endDate: String
    }
`