export const types = `#graphql

    input CreateCompetitionInput {
        name: String!
        description: String!
        imageUrl: String
    }

    type Competition {
        id: ID!
        name: String!
        description: String
        imageUrl: String

    }

`