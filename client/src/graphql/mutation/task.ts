import { gql } from "graphql-request";

export const CreateTaskMutation=gql`
mutation CreateTask($payload: CreateTaskInput) {
  createTask(payload: $payload) {
    title
    type
  }
}
`