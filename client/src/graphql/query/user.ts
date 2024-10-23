import { graphql } from "@/gql"
import { gql } from "graphql-request"
export const getUserQuery = graphql(
    `#graphql
    query getUser($identifier: String!) {
        getUser(identifier: $identifier) {
            name
        }
    }
    `
)

export const getCurrentUserQuery = gql
    `query getCurrentUser {
        getCurrentUser {
            _id
            name
            firebaseUid
            username
            email
            profileImageUrl
            bio
            globalRank
            platformPoints
            isEmailVerified
            coverPicture
            socialMedia {
                socialApp
                socialId
                socialUsername
                socialProfilePicture
                socialAccessToken
                socialRefreshToken
            }
            phoneNumber
            id  
        }
    }
    `

