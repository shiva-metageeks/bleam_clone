
import { graphql } from "@/gql"

export const getUserQuery = graphql(
    `#graphql
    query getUser($identifier: String!) {
        getUser(identifier: $identifier) {
            name
        }
    }
    `
)

export const getCurrentUserQuery = graphql(
    `#graphql
    query getCurrentUser {
        getCurrentUser {
            username
            name
            email
            profileImageUrl
            bio
        }
    }
    `
)
