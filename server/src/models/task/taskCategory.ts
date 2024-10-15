import { model,Schema } from "mongoose";
import { ITaskCategory } from "@src/types/task";

const taskCategorySchema = new Schema<ITaskCategory>({
    name: { type: String, required: true, unique: true},
    description: { type: String, required: true },
    image: { type: String},
});

const TaskCategory = model<ITaskCategory>("TaskCategory", taskCategorySchema);
export default TaskCategory;

