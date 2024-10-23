import { gql } from "graphql-request";

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




