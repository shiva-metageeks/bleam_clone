import { graphql } from "@/gql"

export const createUserMutation = graphql(
    `#graphql
    mutation createUser($payload: CreateUserInput) {
        createUser(payload: $payload)
    }  `   
)

export const loginUserMutation = graphql(
    `#graphql
    mutation loginUser($payload: LoginUserInput) {
        loginUser(payload: $payload)
    }  `
)

export const updateUserMutation = graphql(
    `#graphql
    mutation updateUser($payload: UpdateUserInput) {
        updateUser(payload: $payload){
            name,
            bio
        }
    }  `
)


