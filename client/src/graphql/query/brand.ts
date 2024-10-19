import { graphql } from "@/gql"

// export const getBrandsQuery = graphql(
//     `#graphql
//     query GetBrands {
//         getBrands{
//             name
//             email
//         }
//     }
//     `
// )
// export const getBrandQuery = graphql(
//     `#graphql
//     query GetBrand($identifier: String!) {
//         getBrand(identifier: $identifier){
//             name
//             email
//             website
//             profileImageUrl
//         }
//     }
//     `
// )

// export const getBrandByIdQuery = graphql(
//     `#graphql
//     query GetBrandById($id: String!) {
//         getBrandById(id: $id){
//             name
//             email
//             website
//             profileImageUrl
//         }
//     }
//     `
// )

export const getCurrentBrandQuery = graphql(
    `#graphql
    query getCurrentBrand {
        getCurrentBrand {
            name
            email
            website
            profileImageUrl
            organizationName
        }
    }
    `
)




