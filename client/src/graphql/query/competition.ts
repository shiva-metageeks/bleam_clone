import { graphql } from "@/gql";

export const getCompetitionsQuery = graphql(
    `#graphql
    query getCompetitions {
        getCompetitions {
            name,
            description,
            imageUrl,
        }
    }  `
)
