import { graphql } from "@/gql";
import { gql } from "graphql-request";

export const getCompetitionsQuery = graphql(
  `
    #graphql
    query getCompetitions {
      getCompetitions {
        name
        description
        imageUrl
      }
    }
  `
);

// export const getCompetitionByIdQuery = graphql(
//   `
//     #graphql
//     query getCompetitionById($id: ID!) {
//       getCompetitionById(id: $id) {
//         id
//         name
//         description
//         imageUrl
//         terms
//         startDate
//         endDate
//       }
//     }
//   `
// );

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
  }
}
`
