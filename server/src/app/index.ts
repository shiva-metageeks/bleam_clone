import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import express from 'express';
import { Context, JWTUser } from '@src/types/types';
import connectDB from '@src/clients/db';
import UserModel from '@src/models/user/user';
import envConfig from '@src/utils/imports/env';
import JWTService from '@src/services/jwt';
import { User } from '@src/app/user';
import { Brand } from '@src/app/brand';
import {Task} from '@src/app/task';
import {Twitter} from '@src/app/twitter'
import { Competition } from '@src/app/competition';
import { TaskCategories } from '@src/app/taskCategories';
import { Aws } from '@src/app/aws';
import BrandModel from '@src/models/user/brand';
import { IUser } from '@src/types/user';
import { IBrand } from '@src/types/brand';
const {MONGO_URI} =envConfig

export async function initServer() {
    const app = express();
    await connectDB(MONGO_URI);

    const graphqlServer = new ApolloServer<Context>({
        typeDefs: `
            ${User.types}
            ${Brand.types}
            ${Competition.types}
            ${Task.types}
            ${TaskCategories.types}
            ${Twitter.types}
            type Query {
                ${User.queries}
                ${Brand.queries}
                ${Competition.queries}
                ${Task.queries}
                ${TaskCategories.queries}
                ${Aws.awsQueries}
                ${Twitter.queries}
    }
            type Mutation {
                ${User.mutations}
                ${Brand.mutations}
                ${Competition.mutations}
                ${Task.mutations}
                ${TaskCategories.mutations}
                ${Twitter.mutations}
            }
        `,
        resolvers: {
            Query: {
                ...User.resolvers.queries,
                ...Brand.resolvers.queries,
                ...Competition.resolvers.queries,
                ...Task.resolvers.queries,
                ...TaskCategories.resolvers.queries,
                ...Aws.resolvers.queries,
                ...Twitter.resolvers.queries
            },
            Mutation: {
                ...User.resolvers.mutations,
                ...Brand.resolvers.mutations,
                ...Competition.resolvers.mutations,
                ...Task.resolvers.mutations,
                ...TaskCategories.resolvers.mutations,
                ...Twitter.resolvers.mutations

            },
            ...Brand.resolvers.extraResolvers,
            ...Competition.resolvers.extraResolvers
        },
    });
    await graphqlServer.start();

    app.use('/graphql', cors<cors.CorsRequest>(), express.json(), expressMiddleware<Context>(graphqlServer, {
        context: async ({ req }) => {
            const authHeader = req.headers.authorization || '';
            // console.log("authHeader", authHeader);
            const token = authHeader.startsWith('Bearer ') ? authHeader.split('Bearer ')[1] : null;
            let user: IUser | undefined;
            let brand: IBrand | undefined;

            if (token) {
                try {
                    // console.log("token", token);
                    const decodedToken= JWTService.verifyToken(token as string)  as JWTUser;
                    
                    if (!decodedToken) {
                        throw new Error('Invalid token');
                    }
                    // console.log("decodedToken", decodedToken);
                    if(decodedToken.role==="user"){
                        const userObject: IUser | null = await UserModel.findOne({ firebaseUid: decodedToken?.identifier });
                        if (!userObject) {
                            throw new Error('User not found');
                        }
                        user = userObject;
                    }
                    else if(decodedToken.role==="brand"){
                        const brandObject: IBrand | null = await BrandModel.findById(decodedToken.id);
                        // console.log("brandObject", brandObject);
                        if (!brandObject) {
                            throw new Error('Brand not found');
                        }
                        brand = brandObject;
                    }
                    else{
                        throw new Error('Invalid token');
                    }
                } catch (e) {
                    console.error('Invalid token', e);
                }
            }

            return { user,brand };
        }
    }));
    return app;
}
