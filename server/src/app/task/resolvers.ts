import TaskService from "@src/services/task";
import { Context } from "@src/types/types";
import { CreateTaskInput } from "@src/types/task";


const queries = {
    getTask: async (parent: any, { taskId }: { taskId: string }, context: Context) => {
        // if (!context.user) {
        //     throw new Error("User not authenticated");
        // }
        const task = await TaskService.getTask(taskId);
        return task;
    },
}

const mutations = {
    createTask: async (parent: any, { payload }: { payload: CreateTaskInput }, context: Context) => {
        const task = await TaskService.createTask(payload,context);
        return task;
    }
}

export const resolvers = {
    queries,
    mutations
}
