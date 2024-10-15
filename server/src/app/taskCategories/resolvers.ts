import TaskCategoryService from "@src/services/taskCategories";
import { CreateTaskCategory, UpdateTaskCategory} from "@src/types/task";

const queries = {
    getTaskCategories: async () => {
        const taskCategories = await TaskCategoryService.getTaskCategories();
        return taskCategories;
    },
    getTaskCategory: async (parent: any, { id }: { id: string }) => {
        const taskCategory = await TaskCategoryService.getTaskCategory(id);
        return taskCategory;
    }
}

const mutations = {
    createTaskCategory: async (parent: any, { payload }: { payload: CreateTaskCategory }) => {
        console.log("payload", payload);
        const taskCategory = await TaskCategoryService.createTaskCategory(payload);
        return taskCategory;
    },
    updateTaskCategory: async (parent: any, { payload }: { payload: UpdateTaskCategory }) => {
        const taskCategory = await TaskCategoryService.updateTaskCategory(payload);
        return taskCategory;    
    }
}

export const resolvers = {
    queries,
    mutations
}

