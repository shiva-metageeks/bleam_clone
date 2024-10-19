import { graphql } from "@/gql"

export const createBrandMutation = graphql(
    `#graphql
    mutation createBrand($payload: CreateBrandInput) {
        createBrand(payload: $payload)
    }  `
)

export const loginBrandMutation = graphql(
    `#graphql
    mutation loginBrand($payload: LoginBrandInput) {
        loginBrand(payload: $payload)
    }  `
)

export const updateBrandMutation = graphql(
    `#graphql
    mutation updateBrand($payload: UpdateBrandInput) {
        updateBrand(payload: $payload) {
            name
            organizationName
            email
            bio
            website
            profileImageUrl
        }
    }  `
)



