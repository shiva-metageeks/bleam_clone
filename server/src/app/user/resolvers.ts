import UserService from "@src/services/user";
import { CreateUserInput } from "@src/types/types";


const queries = {
    getUser: async (parent: any, { identifier }: { identifier: string }) => {
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
        return user;
    },
}

export const resolvers = {
    queries,
    mutations
}
