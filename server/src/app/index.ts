import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import express from 'express';
import { Context } from '@src/types/types';
import connectDB from '@src/clients/db';
import { User } from '@src/app/user';
import {Task} from '@src/app/task';
import UserModel from '@src/models/user/user';
import envConfig from '@src/utils/imports/env';
import JWTService from '@src/services/jwt';
import { Competition } from '@src/app/competition';
import { taskCategories } from '@src/app/taskCategories';
import { Aws } from '@src/app/aws';
const {MONGO_URI} =envConfig

export async function initServer() {
    const app = express();
    await connectDB(MONGO_URI);

    const graphqlServer = new ApolloServer<Context>({
        typeDefs: `
            ${User.types}
            ${Competition.types}
            ${Task.types}
            ${taskCategories.types}

            type Query {
                ${User.queries}
                ${Competition.queries}
                ${Task.queries}
                ${taskCategories.queries}
                ${Aws.awsQueries}
    }
            type Mutation {
                ${User.mutations}
                ${Competition.mutations}
                ${Task.mutations}
                ${taskCategories.mutations}
            }
        `,
        resolvers: {
            Query: {
                ...User.resolvers.queries,
                ...Competition.resolvers.queries,
                ...Task.resolvers.queries,
                ...taskCategories.resolvers.queries,
                ...Aws.resolvers.queries,
            },
            Mutation: {
                ...User.resolvers.mutations,
                ...Competition.resolvers.mutations,
                ...Task.resolvers.mutations,
                ...taskCategories.resolvers.mutations,
            },
        },
    });
    await graphqlServer.start();

    app.use('/graphql', cors<cors.CorsRequest>(), express.json(), expressMiddleware(graphqlServer, {
        context: async ({ req }: { req: any }) => {
            const authHeader = req.headers.authorization || '';
            // console.log("authHeader", authHeader);
            const token = authHeader.startsWith('Bearer ') ? authHeader.split('Bearer ')[1] : null;
            let user = null;
            if (token) {
                try {
                    // console.log("token", token);
                    const decodedToken = JWTService.verifyToken(token as string);
                    if (!decodedToken) {
                        throw new Error('Invalid token');
                    }
                    // console.log("decodedToken", decodedToken);
                    const userObject = await UserModel.findOne({ firebaseUid: decodedToken?.firebaseUid });
                    if (!userObject) {
                        throw new Error('User not found');
                    }
                    user = userObject;
                } catch (e) {
                    console.error('Invalid token', e);
                }
            }
            return { user };
        }
    }));
    return app;
}
