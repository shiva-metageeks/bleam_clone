import { graphql } from "@/gql"

export const createUserMutation = graphql(
    `#graphql
    mutation createUser($payload: CreateUserInput) {
        createUser(payload: $payload) {
            _id,
            username,
            email,
            name,
            profileImageUrl,
            bio,
        }
    }  `
)
