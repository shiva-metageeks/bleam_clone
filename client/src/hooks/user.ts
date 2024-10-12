import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { graphqlClient } from "@/clients/api"
import { createUserMutation } from "@/graphql/mutation/user"
import { getUserQuery } from "@/graphql/query/user"
import { CreateUserInput } from "@/gql/graphql"
import { toast } from "react-hot-toast"


export const useCreateUser = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (payload: CreateUserInput) => graphqlClient.request(createUserMutation, { payload }),
        onMutate: (payload) => toast.loading(`Creating user`, { id: "1" }),
        onSuccess: async (payload) => {
            await queryClient.invalidateQueries({ queryKey: ["user"] })
            toast.success("User created successfully")
            toast.success('created', { id: '1' })
        },
    })
    return mutation;
}

export const useGetUser = (identifier: string) => {
    const query = useQuery({
        queryKey: ["user"],
        queryFn: () => graphqlClient.request(getUserQuery, { identifier }),
    })
    return query
}
