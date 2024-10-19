import { graphql } from "@/gql";

export const createCompetitionMutation = graphql(
    `#graphql
    mutation createCompetition($payload: CreateCompetitionInput) {
        createCompetition(payload: $payload){
            id,
            name,
            terms,
            startDate,
            imageUrl,
            id,
            endDate,
            description
        }
    }  `
)

