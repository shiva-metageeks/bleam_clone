import { useQuery } from "@tanstack/react-query";
import { graphqlClient } from "@/clients/api"
import { getTaskCategoriesQuery } from "@/graphql/query/task/taskCategory";
import { TaskCategoryResult } from "./type";

export const useGetTaskCategories = () => {
    const query = useQuery({
        queryKey: ["taskCategories"],
        queryFn: () => graphqlClient.request<TaskCategoryResult>(getTaskCategoriesQuery),
    })
    console.log("tasks query",query);
    return {taskCategories:query.data?.getTaskCategories};
}

