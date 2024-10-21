import { graphql } from "@/gql"
import { gql } from "graphql-request";

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
//             bio
//             website
//             profileImageUrl
//         }
//     }
//     `
// )

// export const getCurrentBrandQuery = graphql(
//     `#graphql
//     query getCurrentBrand {
//         getCurrentBrand {
//             _id
//             name
//             bio
//             email
//             website
//             profileImageUrl
//             organizationName
//             competitions {
//                 id
//                 terms
//                 name
//                 imageUrl
//                 startDate
//                 endDate
//                 description
//             }
//         }
//     }
//     `
// )

export const getCurrentBrandQuery = gql`
query getCurrentBrand {
    getCurrentBrand {
       _id
            name
            bio
            email
            website
            profileImageUrl  
            organizationName
            competitions {
                id
                terms
                name
                imageUrl
                startDate
                endDate
                description
            }
    }
}
`




