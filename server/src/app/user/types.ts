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
        username: String
        email: String
        password: String
        profileImageUrl: String
        bio: String
    }

    type SocialMedia {
        socialApp: String
        socialId: String
        socialUsername: String
        socialProfilePicture: String
        socialAccessToken: String
        socialRefreshToken: String
    }

    type User {
        _id: ID!
        name: String
        firebaseUid: String
        username: String
        email: String
        profileImageUrl: String
        bio: String
        globalRank: Int
        platformPoints: Int
        isEmailVerified: Boolean
        coverPicture: String
        socialMedia : [SocialMedia]
        phoneNumber: String
    }
`;
