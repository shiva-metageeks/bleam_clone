export const mutations = `#graphql
    oAuth2WithTwitter: AuthResponse!
    oAuth2WithTwitterCallback(state: String!, code: String!): AuthResponse!
    checkFollow(targetUserName: String!): FollowResponse
    sendTweet(tweetBody: String!): TweetResponse
`