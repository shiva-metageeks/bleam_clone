import UserService from "@src/services/user";
import { Context } from "@src/types/types";
import { CreateUserInput, UpdateUserInput, LoginUserInput } from "@src/types/user";

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
        const user = await UserService.getUserById(context.user?.id);
        return user;
    }
}

const mutations = {
    createUser: async (parent: any, { payload }: { payload: CreateUserInput }) => {
        console.log("payload",payload);
        const token = await UserService.createUser(payload);
        if(!token){
            throw new Error("User not created");
        }
        return token;
    },
    updateUser: async (parent: any, { payload }: { payload: UpdateUserInput }, context: Context) => {
        const user = await UserService.updateUser(payload, context);
        return user;
    },
    loginUser: async (parent: any, { payload }: { payload: LoginUserInput }) => {
        const token = await UserService.loginUser(payload);

        if(!token){
            throw new Error("User not found");
        }
        return token;
    }
}

export const resolvers = {
    queries,
    mutations
}
