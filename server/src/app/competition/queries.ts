export const queries = `#graphql
    getCompetitions: [Competition]
    getCompetitionById(id: ID!): Competition
    checkUserCompetition(id: ID!):CheckUserCompetitionResponse
`

