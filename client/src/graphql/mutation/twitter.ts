import {gql} from "graphql-request"

export const TwitterAuthMutation = gql`
mutation OAuth2WithTwitter {
  oAuth2WithTwitter{
    success
    message
    url
  }
}
`

export const TwitterAuthCallback=gql`
mutation OAuth2WithTwitterCallback($state: String!, $code: String!) {
  oAuth2WithTwitterCallback(state: $state, code: $code) {
    success
    message
    url
  }
}
`

export const TwitterTweet=gql`
mutation sendTweet($tweetBody: String!) {
  sendTweet(tweetBody: $tweetBody) {
    success
    message
  }
}
`