export const  types = `#graphql

    input CreateBrandInput {
       name: String!
       organizationName: String!
       website: String!
       email: String!
       password: String!
    }

    input LoginBrandInput {
        email: String!
        password: String!
    }

    input UpdateBrandInput {
        name: String
        organizationName: String
        website: String
        bio: String
        profileImageUrl: String
    }

    type Brand {
        _id: ID!
        name: String
        bio: String
        email: String
        website: String
        profileImageUrl: String
        organizationName: String
    }
`

