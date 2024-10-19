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

    type Competition {
        id: ID
        name: String!
        description: String
        imageUrl: String
        terms: String
        startDate: String
        endDate: String
        brand: Brand
    }
`