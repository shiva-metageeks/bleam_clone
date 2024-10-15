export const types = `#graphql

     input CreateTaskInput {
        name: String!
        taskId: String!
        description: String!
        reward: Int!
        media: String
        type: String!   
    }

    type Task {
        name: String!
        taskId: String!
        description: String!
        reward: Int!
        media: String
        type: String!   
    }

`
