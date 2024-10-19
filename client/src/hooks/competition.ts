import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { graphqlClient } from "@/clients/api";
import { createCompetitionMutation } from "@/graphql/mutation/competition";
import { CreateCompetitionInput } from "@/gql/graphql";
import { getCompetitionsQuery, getCompetitionByIdQuery } from "@/graphql/query/competition";
import { toast } from "react-hot-toast";

export const useCreateCompetition = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (payload: CreateCompetitionInput) => graphqlClient.request(createCompetitionMutation, { payload }),
        onMutate: () => {
            toast.loading("Creating competition...",{id:"1"});
        },
        onSuccess: async (payload) => {
            await queryClient.invalidateQueries({ queryKey: ["getCompetitions"] })
            toast.success("Competition created successfully",{id:"1"});
        },
        onError: (error) => {
            toast.error("Failed to create competition",{id:"1"});
            console.log(error);
        }
    })
    return mutation;
}

export const useGetCompetitions = () => {
    const query = useQuery({
        queryKey: ["getCompetitions"],
        queryFn: () => graphqlClient.request(getCompetitionsQuery),
    })
    return {...query,competitions:query.data?.getCompetitions};
}

export const useGetCompetitionById = (id: string) => {
    const query = useQuery({
        queryKey: ["getCompetitionById", id],
        queryFn: () => graphqlClient.request(getCompetitionByIdQuery, {id}),
    })
    return {...query, competition: query.data?.getCompetitionById};
}
