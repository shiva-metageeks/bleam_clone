import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { graphqlClient } from "@/clients/api";
import { createUserMutation, loginUserMutation, updateUserMutation } from "@/graphql/mutation/user";
import { getCurrentUserQuery, getUserQuery } from "@/graphql/query/user";
import { CreateUserInput, UpdateUserInput, LoginUserInput } from "@/gql/graphql";
import { toast } from "react-hot-toast";
import { CurrentUserResult } from "./types";

export const useCreateUser = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (payload: CreateUserInput) => graphqlClient.request(createUserMutation, { payload }),
    })
    return mutation;
}

export const useLoginUser = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (payload: LoginUserInput) => graphqlClient.request(loginUserMutation, { payload }),
        onMutate: (payload) => toast.loading("Logging in user",{id:"1"}),
        onSuccess: async (payload) => {
            await queryClient.invalidateQueries({ queryKey: ["user"] })
            toast.success("User logged in successfully",{id:"1"});
        },
        onError: (error) => {
            toast.error("User logged in failed",{id:"1"});
        }
    })
    return mutation;
}

export const useUpdateUser = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (payload: UpdateUserInput) => graphqlClient.request(updateUserMutation, { payload }),
        onMutate: (payload) => toast.loading(`Updating user`, { id: "1" }),
        onSuccess: async (payload) => {
            await queryClient.invalidateQueries({ queryKey: ["user"] })
            toast.success("User updated successfully",{id:"1"});
        },
        onError: (error) => {
            toast.error("User updated failed",{id:"1"});
        }
    })
    return mutation;
}

export const useGetUser = (identifier: string) => {
    console.log("identifier",identifier);
    const query = useQuery({
        queryKey: ["user"],
        queryFn: () => graphqlClient.request(getUserQuery, { identifier }),
    })
     return { ...query, user: query.data?.getUser};
}

export const useGetCurrentUser = () => {
    const query = useQuery({
        queryKey: ["currentUser"],
        queryFn: () => graphqlClient.request<CurrentUserResult>(getCurrentUserQuery),
    })
    console.log(query);
    return { ...query, user: query.data?.getCurrentUser};
}
