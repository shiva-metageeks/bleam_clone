
import { graphql } from "@/gql"

export const getUserQuery = graphql(
    `#graphql
    query getUser($identifier: String!) {
        getUser(identifier: $identifier) {
            username
            name
            email
            profileImageUrl
            bio
        }
    }
    `
)