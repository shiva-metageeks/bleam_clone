export const types = `#graphql
type TwitterInfo {
    twitterId: String
    username: String
    profileImageUrl: String
    accessToken: String
    refreshToken: String
  }

  type User {
    id: ID!
    twitterInfo: TwitterInfo
  }

  type AuthResponse {
    success: Boolean!
    message: String
    url: String
  }

  type FollowResponse {
    success: Boolean!
    response: String
  }

  type LikeResponse {
    success: Boolean!
    isLiked: Boolean
    message:String
  }

  type RetweetResponse {
    success: Boolean!
    isRetweeted: Boolean
    message:String
  }

  type TweetResponse {
    success: Boolean!
    message:String
  }
`;

