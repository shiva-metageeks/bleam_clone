import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import express from 'express';
// import { Tweet } from '@src/app/tweet';
import { Context } from '@src/types/types';
// import JWTService from '@src/services/jwt';
import connectDB from '../clients/db';
import { User } from '@src/app/user';

export async function initServer() {
    const app = express();
    await connectDB(process.env.MONGO_URI as string);

    const graphqlServer = new ApolloServer<Context>({
        typeDefs: `
            ${User.types}

             type Query {
                ${User.queries}
            }

            type Mutation {
                ${User.mutations}
            }
            `,
        resolvers: {
            Query: {
                ...User.resolvers.queries,
            },
            Mutation: {
                ...User.resolvers.mutations,
            },
        },
    });
    await graphqlServer.start();

    app.use('/graphql', cors<cors.CorsRequest>(), express.json(), expressMiddleware(graphqlServer, {
        context: async ({ req }) => {
            const authHeader = req.headers.authorization || '';
            const token = authHeader.startsWith('Bearer ') ? authHeader.split('Bearer ')[1] : null;
            let user = null;
            if (token) {
                try {
                    // user = JWTService.verifyToken(token);
                } catch (e) {
                    console.error('Invalid token', e);
                }
            }
            return { user };
        }
    }));
    return app;
}
