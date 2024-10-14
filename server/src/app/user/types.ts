export const types = `#graphql

     input CreateUserInput {
        name: String!
        username: String!
        email: String!
        firebaseUid: String!
    }

    input UpdateUserInput {
        name: String
        email: String
        profileImageUrl: String
        bio: String
    }

    type User {
        _id: ID!
        username: String!
        name: String!
        email: String!
        profileImageUrl: String
        bio: String
        globalRank: Int
        points: Int
        
    }
`
