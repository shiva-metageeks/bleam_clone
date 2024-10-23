export type TaskCategoryResult = {
    getTaskCategories: TaskCategory[];
}

export type TaskCategory = {
    _id: string;
    name: string;
    description: string;
    image: string;
}
