export const types = `#graphql
     input CreateUserInput {
        name: String!
        username: String!
        email: String!
        bio: String
        profileImageUrl: String
        
    }

    type User {
        id: ID!
        username: String!
        name: String!
        email: String!
        profileImageUrl: String
        bio: String
        globalRank: Int
        points: Int
    }
`
