export const types = `#graphql
    input CreateTaskCategory {
        name: String!
        description: String!
        image: String
    }

    input UpdateTaskCategory {
        _id: ID!
        name: String
        description: String
        image: String
    }

    type TaskCategory {
        _id: ID
        name: String
        description: String
        image: String
    }
`