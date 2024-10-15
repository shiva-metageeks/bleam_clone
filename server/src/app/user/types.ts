export const types = `#graphql

    input CreateUserInput {
        email: String
        name: String
        profileImageUrl: String
        firebaseUid: String!
        isEmailVerified: Boolean
    }
    
    input LoginUserInput {
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
        name: String
        username: String
        email: String
        profileImageUrl: String
        bio: String
        globalRank: Int
        points: Int
        isEmailVerified: Boolean
    }
`;
