export const queries = `#graphql
    checkTweetLike(tweetId: String!): LikeResponse!
    checkTweetRetweet(tweetId: String!): RetweetResponse!
`