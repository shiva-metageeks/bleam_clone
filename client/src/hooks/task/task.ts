import { useMutation, useQueryClient } from "@tanstack/react-query"
import { graphqlClient } from "@/clients/api";
import {CreateTaskMutation} from "@/graphql/mutation/task"
import { CreateTaskResponse,CreateTaskInput } from "./types";
import {toast} from "react-hot-toast"

export const useCreateTask=()=>{
    const queryClient=useQueryClient();
    const mutation=useMutation({
        mutationFn:(payload:CreateTaskInput)=> graphqlClient.request<CreateTaskResponse>(CreateTaskMutation,{payload}),
        onMutate:()=>{
            toast.loading("creating Tasks",{id:"1"})
        },
        onSuccess: async (payload) => {
            await queryClient.invalidateQueries({ queryKey: ["getTasks"] })
            toast.success("Task created successfully",{id:"1"});
        },
        onError: (error) => {
            toast.error("Failed to create Task",{id:"1"});
            console.log(error);
        }
    })
    return mutation;
}
