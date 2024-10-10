"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
const s3_request_presigner_1 = require("@aws-sdk/s3-request-presigner");
const tweet_1 = __importDefault(require("../../services/tweet"));
const s3Config = {
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
};
const s3Client = new client_s3_1.S3Client(s3Config);
const queries = {
    getTweets: () => __awaiter(void 0, void 0, void 0, function* () {
        const tweets = yield tweet_1.default.getTweets();
        return tweets;
    }),
    getTweet: (parent_1, _a) => __awaiter(void 0, [parent_1, _a], void 0, function* (parent, { id }) {
        const tweet = yield tweet_1.default.getTweetById(id);
        return tweet;
    }),
    getSignedUrlForTweet: (parent_1, _a, context_1) => __awaiter(void 0, [parent_1, _a, context_1], void 0, function* (parent, { imageType }, context) {
        if (!context.user) {
            throw new Error("User not authenticated");
        }
        const allowedImageTypes = ["png", "jpeg", "jpg", "webp"];
        if (!allowedImageTypes.includes(imageType)) {
            throw new Error("Invalid image type");
        }
        const command = new client_s3_1.PutObjectCommand({
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: `tweets/${context.user.id}-${Date.now()}.${imageType}`, // The key (file path) for the object in the bucket
            ContentType: `image/${imageType}`,
        });
        const signedUrl = yield (0, s3_request_presigner_1.getSignedUrl)(s3Client, command, { expiresIn: 3600 });
        return signedUrl;
    })
};
const mutations = {
    createTweet: (parent_1, _a, context_1) => __awaiter(void 0, [parent_1, _a, context_1], void 0, function* (parent, { payload }, context) {
        if (!context.user) {
            throw new Error("User not authenticated");
        }
        const tweet = yield tweet_1.default.createTweet(Object.assign(Object.assign({}, payload), { authorId: context.user.id }));
        return tweet;
    }),
};
exports.resolvers = {
    mutations,
    queries
};
