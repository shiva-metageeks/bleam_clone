import { TwitterApi } from "twitter-api-v2";
import User from "@src/models/user/user";
import AuthState from "@src/models/authState/authState";
import { Context } from "@src/types/types";
import { IUser } from "@src/types/user";
import envConfig from "@src/utils/imports/env";
const { TWITTER_CLIENT_ID, TWITTER_SECRET_KEY, CLIENT_URL } = envConfig;

const client = new TwitterApi({
  clientId: TWITTER_CLIENT_ID as string,
  clientSecret: TWITTER_SECRET_KEY as string,
});

const callbackURL = `${CLIENT_URL}/callback`;

const queries = {
  checkTweetLike: async (
    parent: any,
    { tweetId }: { tweetId: string },
    context: Context
  ) => {
    if(!context.user || !context.user._id){
      throw new Error("unauthorized");
    }
  const id = context.user?._id;

  try {
      const user = await User.findById(id);

      if (!user) {
        throw new Error("User not found");
      }

      const twitterInfo = user.socialMedia?.find((social) => social.socialApp === "Twitter");
      //console.log("twitterInfo",twitterInfo);

      if (!twitterInfo) {
        throw new Error("Connect twitter with your hypd account ");
      }

      const refreshToken = twitterInfo.socialRefreshToken;
      const twitterId = twitterInfo.socialId;
    const {
      client: loggedClient,
      accessToken,
      refreshToken: newRefreshToken,
    } = await client.refreshOAuth2Token(refreshToken);

    //console.log("Refreshed token:", newRefreshToken);
   const userToUpdate = await User.findById(id);
      if (!userToUpdate) {
        throw new Error("user not found");
      }

      userToUpdate?.socialMedia?.map((social) => {
        if (social.socialApp === "Twitter") {
          social.socialAccessToken = accessToken;
          if (newRefreshToken) {
            social.socialRefreshToken = newRefreshToken;
          }
        }
      });
      await userToUpdate.save();

    const response = await loggedClient.v2.userLikedTweets(twitterId as string);
    //console.log("Response from Twitter API:", response);

    if (!response.data.data) {
      return { success: false, isLiked: false };
    }

    let isLiked = false;
    response.data.data.forEach(async (tweet: any) => {
      if (tweet.id === tweetId) {
        isLiked = true;
      }
    });

    return { success: true, isLiked };
  } catch (error) {
    console.error("Error in tweetLiked API:", error);
    return {
      success: false,
      message: "An error occurred while checking tweet",
    };
  }
  },
  checkTweetRetweet: async (
    parent: any,
    { tweetId }: { tweetId: string },
    context: Context
  ) => {
    if(!context.user || !context.user._id){
      throw new Error("unauthorized");
    }
  const id = context.user._id;
  try {
    const user = await User.findById(id);
    if (!user) {
      throw new Error("User not found");
    }

    const twitterInfo = user.socialMedia?.find((social) => social.socialApp === "Twitter");

      if (!twitterInfo) {
        throw new Error("Connect twitter with your hypd account ");
      }

      const refreshToken = twitterInfo.socialRefreshToken;
      const twitterId = twitterInfo.socialId;

    const {
      client: loggedClient,
      accessToken,
      refreshToken: newRefreshToken,
    } = await client.refreshOAuth2Token(refreshToken);
    //console.log("Refreshed token:", accessToken);

    const userToUpdate = await User.findById(id);
      if (!userToUpdate) {
        throw new Error("user not found");
      }

      userToUpdate?.socialMedia?.map((social) => {
        if (social.socialApp === "Twitter") {
          social.socialAccessToken = accessToken;
          if (newRefreshToken) {
            social.socialRefreshToken = newRefreshToken;
          }
        }
      });
      await userToUpdate.save();

    const response = await loggedClient.v2.tweetRetweetedBy(tweetId as string);
    //console.log("Response from Twitter API:", response);
    let isRetweeted = false;
    response?.data?.forEach(async (user: any) => {
      if (user.id === twitterId) {
        isRetweeted = true;
      }
    });
    return { success: true, isRetweeted };
  } catch (error) {
    console.error("Error in tweetRetweeted API:", error);
    return {
      success: false,
      message: "An error occurred while retweeting tweet",
    };
  }
  },
};
const mutations = {
  oAuth2WithTwitter: async () => {
    //console.log("callback url", callbackURL);
    try {
      const { url, codeVerifier, state } = client.generateOAuth2AuthLink(
        callbackURL,
        {
          scope: [
            "tweet.read",
            "tweet.write",
            "users.read",
            "offline.access",
            "follows.read",
            "like.read",
          ],
        }
      );
      await AuthState.create({ codeVerifier, state });
      return { success: true, url };
    } catch (error) {
      console.error("Error in OAuth2WithTwitter:", error);
      return {
        success: false,
        message: "An error occurred while authenticating with Twitter",
      };
    }
  },
  oAuth2WithTwitterCallback: async (
    parent: any,
    { state, code }: { state: string; code: string },
    context: Context
  ) => {
    try {
      const LoggedInUser = context.user;
      //console.log("Logged in user:", LoggedInUser);
      if (!LoggedInUser) {
        throw new Error("User not loggedIn.Please Login first");
      }

      //console.log("state", state);

      const data = await AuthState.findOne({ state });
      //console.log("Auth state:", data);
      if (!data) {
        throw new Error(
          "Invalid code or states, You may changed your browser or request is expired. Please try again."
        );
      }

      const {
        client: loggedClient,
        accessToken,
        refreshToken,
      } = await client.loginWithOAuth2({
        code: code as string,
        codeVerifier: data.codeVerifier as string,
        redirectUri: callbackURL,
      });

      const { data: profile } = await loggedClient.v2.me();
      const { _id } = LoggedInUser;
      const userToUpdate = await User.findById(_id);

      //console.log("profile", profile);

      if (!userToUpdate) {
        throw new Error("User not found");
      }
      userToUpdate.socialMedia?.push({
        socialApp: "Twitter",
        socialId: profile.id,
        socialUsername: profile.username,
        socialProfilePicture: profile.profile_image_url || "",
        socialAccessToken: accessToken,
        socialRefreshToken: refreshToken || "",
      });
      //console.log("user to update", userToUpdate);
      await userToUpdate.save();
      return { success: true };
    } catch (error) {
      console.error("Error in OAuth2WithTwitterCallback:", error);
      throw new Error("An error occurred while authenticating with Twitter");
    }
  },
  checkFollow: async (
    parent: any,
    { targetUserName }: { targetUserName: string },
    context: Context
  ) => {
    // ... (implementation similar to checkFollow function)
  },
  sendTweet: async (
    parent: any,
    { tweetBody }: { tweetBody: string },
    context: Context
  ) => {
    if (!context.user || !context.user._id) {
      throw new Error("unauthorized");
    }
    const id = context.user?._id;

    if (!tweetBody) {
      throw new Error("Tweet body not provided");
    }
    try {
      const user = await User.findById(id);

      if (!user) {
        throw new Error("User not found");
      }

     const twitterInfo = user.socialMedia?.find((social) => social.socialApp === "Twitter");

      if (!twitterInfo) {
        throw new Error("Connect twitter with your hypd account ");
      }

      const refreshToken = twitterInfo.socialRefreshToken;

      if (!refreshToken) {
        throw new Error("User not authenticated with Twitter");
      }

      const {
        client: loggedClient,
        accessToken,
        refreshToken: newRefreshToken,
      } = await client.refreshOAuth2Token(refreshToken);
      // console.log("Refreshed token:", accessToken);

      const userToUpdate = await User.findById(id);
      if (!userToUpdate) {
        throw new Error("user not found");
      }

      userToUpdate?.socialMedia?.map((social) => {
        if (social.socialApp === "Twitter") {
          social.socialAccessToken = accessToken;
          if (newRefreshToken) {
            social.socialRefreshToken = newRefreshToken;
          }
        }
      });
      await userToUpdate.save();

      const response = await loggedClient.v2.tweet(tweetBody);
      //console.log("Response from Twitter API:", response);
      return { success: true, message: "tweeted successfully" };
    } catch (error) {
      console.error("Error in tweetReplied API:", error);
      return {
        success: false,
        message: "An error occurred while replying to tweet",
      };
    }
  },
};

export const resolvers = {
  queries,
  mutations,
};
