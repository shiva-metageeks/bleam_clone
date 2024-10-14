import UserService from "@src/services/user";
import { Context } from "@src/types/types";
import { CreateUserInput, UpdateUserInput } from "@src/types/user";
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
    getCurrentUser: async (parent: any, args: any, context: Context) => {
        if (!context.user) {
            throw new Error("User not authenticated");
        }
        const user = await UserService.getUserById(context.user.id);
        return user;
    }
}


const mutations = {
    createUser: async (parent: any, { payload }: { payload: CreateUserInput }) => {
        console.log("payload",payload);
        const user = await UserService.createUser(payload);
        console.log("user",user);
        const token = await JWTService.generateTokenForUser({ id: user.id, firebaseUid: user.firebaseUid });
        console.log("token",token);
        return token;
    },
    updateUser: async (parent: any, { payload }: { payload: UpdateUserInput }, context: Context) => {
        const user = await UserService.updateUser(payload, context);
        return user;
    },
}

export const resolvers = {
    queries,
    mutations
}
