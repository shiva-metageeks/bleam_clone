import Task from "@src/models/task/task";
import { CreateTaskInput} from "@src/types/task";

class TaskService {
    public static async createTask(input: CreateTaskInput) {
        const task = await Task.create(input);
        return task;
    }

    public static getTasks() {
        return Task.find();
    }
    public static getTask(taskId: string) {
        return Task.findOne({ $or: [{ taskId: taskId }] });
    }
    public static getTaskById(id: string) {
        return Task.findById(id);
    }
}

export default TaskService; 