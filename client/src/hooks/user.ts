import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { graphqlClient } from "@/clients/api"
import { createUserMutation, updateUserMutation } from "@/graphql/mutation/user"
import { getCurrentUserQuery, getUserQuery } from "@/graphql/query/user"
import { CreateUserInput, UpdateUserInput } from "@/gql/graphql"
import { toast } from "react-hot-toast"
import { DocumentNode } from 'graphql'

export const useCreateUser = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (payload: CreateUserInput) => graphqlClient.request(createUserMutation, { payload }),
        onMutate: (payload) => toast.loading(`Creating user`),
        onSuccess: async (payload) => {
            await queryClient.invalidateQueries({ queryKey: ["user"] })
            toast.success("User created successfully")
            toast.success('created', { id: '1' })
        },
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
            toast.success("User updated successfully")
            toast.success('updated', { id: '1' })
        },
        onError: (error) => {
            toast.error("User updated failed")
            toast.error('updated', { id: '1' })
        }
    })
    return mutation;
}

export const useGetUser = (identifier: string) => {
    const query = useQuery({
        queryKey: ["user"],
        queryFn: () => graphqlClient.request(getUserQuery, { identifier }),
    })
    return query;
}

export const useGetCurrentUser = () => {
    const query = useQuery({
        queryKey: ["currentUser"],
        queryFn: () => graphqlClient.request(getCurrentUserQuery as DocumentNode),
    })
    return query;
}
