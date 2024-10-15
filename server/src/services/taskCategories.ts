import TaskCategory from "@src/models/task/taskCategory";
import { CreateTaskCategory, UpdateTaskCategory } from "@src/types/task";

class TaskCategoryService {
    public static async createTaskCategory(payload: CreateTaskCategory) {
        const taskCategory = await TaskCategory.create(payload);
        return taskCategory;
    }

    public static async updateTaskCategory(payload: UpdateTaskCategory) {
        const taskCategory = await TaskCategory.findByIdAndUpdate(payload._id, payload, { new: true });
        return taskCategory;
    }

    public static async getTaskCategories() {
        const taskCategories = await TaskCategory.find();
        return taskCategories;
    }
    
    public static async getTaskCategory(id: string) {
        const taskCategory = await TaskCategory.findById(id);
        return taskCategory;
    }
}

export default TaskCategoryService;
