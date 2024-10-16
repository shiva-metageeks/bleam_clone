export const  types = `#graphql

    input CreateBrandInput {
        name: String!
        email: String!
        firebaseUid: String!
        profileImageUrl: String!
        bio: String!
    }

    type Brand {
        name: String!
        email: String!
        firebaseUid: String!
        profileImageUrl: String!
        bio: String!
    }
`

