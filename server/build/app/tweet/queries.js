"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queries = void 0;
exports.queries = `#graphql
    getTweets: [Tweet]
    getTweet(id: ID!): Tweet
    getSignedUrlForTweet(imageType: String!): String
`;
