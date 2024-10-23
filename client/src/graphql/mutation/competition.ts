import { graphql } from "@/gql";
import { gql } from "graphql-request";

export const createCompetitionMutation = gql`
  mutation createCompetition($payload: CreateCompetitionInput) {
    createCompetition(payload: $payload) {
      id
      name
      terms
      startDate
      imageUrl
      id
      endDate
      description
    }
  }
`;

export const joinCompetitionMutation = gql`
  mutation joinCompetition($payload: JoinCompetitionInput) {
    joinCompetition(payload: $payload) {
      success
      message
    }
  }
`;
