import { graphql } from "@/gql"

export const createUserMutation = graphql(
    `#graphql
    mutation createUser($payload: CreateUserInput) {
        createUser(payload: $payload)
    }  `
)
