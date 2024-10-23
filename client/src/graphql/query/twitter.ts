import {gql} from "graphql-request"

export const checkTweetLike=gql`
query checkTweetLike($tweetId: String!) {
  checkTweetLike(tweetId: $tweetId) {
    success
    isLiked
    message
  }
}
`

export const checkTweetRetweet=gql`
query checkTweetRetweet($tweetId: String!) {
  checkTweetRetweet(tweetId: $tweetId) {
    success
    isRetweeted
    message
  }
}
`