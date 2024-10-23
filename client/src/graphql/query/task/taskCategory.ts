import { gql } from "graphql-request";

export const getTaskCategoriesQuery = gql`
query getTaskCategories {
    getTaskCategories {
         _id
        name
        description
        image
    }
}
`