import UserService from "@src/services/user";
import { Context, CreateUserInput } from "@src/types/types";
import JWTService from "@src/services/jwt";

const queries = {
    getUser: async (parent: any, { identifier }: { identifier: string }, context: Context) => {
        if (!context.user) {
            throw new Error("User not authenticated");
        }
        const user = await UserService.getUser(identifier);
        return user;
    },
    getUserById: async (parent: any, { id }: { id: string }) => {
        const user = await UserService.getUserById(id);
        return user;
    },
}


const mutations = {
    createUser: async (parent: any, { payload }: { payload: CreateUserInput }) => {
        const user = await UserService.createUser(payload);
        const token = await JWTService.generateTokenForUser(user);
        return token;
    },
}

export const resolvers = {
    queries,
    mutations
}
