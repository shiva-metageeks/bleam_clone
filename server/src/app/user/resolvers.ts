import UserService from "@src/services/user";
import { CreateUserInput } from "@src/types/types";
const mutations = {
    createUser: async (parent: any, { payload }: { payload: CreateUserInput }) => {
        const user = await UserService.createUser(payload);
        return user;
    },
}

export const resolvers = {
    mutations
}
