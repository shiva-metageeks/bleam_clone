export const queries = `#graphql
    getUser(identifier: String!): User
    getCurrentUser: User
    getUserById(id: ID!): User
`