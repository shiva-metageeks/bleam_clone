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
exports.initServer = initServer;
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const tweet_1 = require("./tweet");
const jwt_1 = __importDefault(require("../services/jwt"));
function initServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        const graphqlServer = new server_1.ApolloServer({
            typeDefs: `
            ${tweet_1.Tweet.types}

            type Query {
            ${tweet_1.Tweet.queries}
            }

            type Mutation {
                ${tweet_1.Tweet.mutations}
            }
            `,
            resolvers: {
                Query: Object.assign({}, tweet_1.Tweet.resolvers.queries),
                Mutation: Object.assign({}, tweet_1.Tweet.resolvers.mutations),
            },
        });
        yield graphqlServer.start();
        app.use('/graphql', (0, cors_1.default)(), express_1.default.json(), (0, express4_1.expressMiddleware)(graphqlServer, {
            context: (_a) => __awaiter(this, [_a], void 0, function* ({ req }) {
                const authHeader = req.headers.authorization || '';
                const token = authHeader.startsWith('Bearer ') ? authHeader.split('Bearer ')[1] : null;
                let user = null;
                if (token) {
                    try {
                        user = jwt_1.default.verifyToken(token);
                    }
                    catch (e) {
                        console.error('Invalid token', e);
                    }
                }
                return { user };
            })
        }));
        return app;
    });
}
const app = (0, express_1.default)();
