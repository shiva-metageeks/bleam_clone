import { gql } from "graphql-request";

export const getCompetitionsQuery = gql
  `
    query getCompetitions {
      getCompetitions {
         id
        name
        description
        imageUrl
        terms
        startDate
        endDate
      }
    }
`

export const getCompetitionByIdQuery = gql`
query getCompetitionById($id: ID!) {
  getCompetitionById(id: $id) {
          id
    name
    description
    imageUrl
    terms
    startDate
    endDate
    tasks {
      title
      type
      twitter {
        userFollow
        tweetText
        tweetLink
      }
      visitLink
    }
  }
}
`

export const CheckUserCompetitionQuery = gql`
query checkUserCompetition($id: ID!) {
  checkUserCompetition(id: $id) {
    success
    joined
    completed
    pointsEarned
    rank
  }
}
`
