import { Competition } from "@src/models/competition/competition";
import Task from "@src/models/task/task";
import { CreateTaskInput, ITask} from "@src/types/task";
import { Context } from "@src/types/types";

class TaskService {
    public static async createTask(input: CreateTaskInput,context:Context) {
        if(!context.brand || !context.brand?._id ){
            throw new Error("unauthorized");
        }
        const task = await Task.create({...input,
            creator:context.brand._id
        }
        );
        if(!task){
            throw new Error("task creation failed")
        }
        const competition =await Competition.findById(input.competition);
        if(!competition){
            throw new Error("Competition not found");
        }

        competition.tasks.push(task._id as any);
        await competition.save();
        return task;
    }

    public static getTasks() {
        return Task.find();
    }
    public static getTask(taskId: string) {
        return Task.findOne({ $or: [{ taskId: taskId }] });
    }
    public static getTaskById(id: string,context:Context) {
        return Task.findById(id);
    }
}

export default TaskService; 