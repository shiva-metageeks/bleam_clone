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
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../clients/db");
class TweetService {
    static createTweet(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const tweet = yield db_1.prismaClient.tweet.create({
                data: {
                    content: input.content,
                    imageUrl: input.imageUrl,
                    author: {
                        connect: {
                            id: input.authorId
                        }
                    }
                }
            });
            return tweet;
        });
    }
    static getTweets() {
        return db_1.prismaClient.tweet.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });
    }
    static getTweetById(id) {
        return db_1.prismaClient.tweet.findUnique({ where: { id } });
    }
}
exports.default = TweetService;
