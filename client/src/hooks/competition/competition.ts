import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { graphqlClient } from "@/clients/api";
import { createCompetitionMutation,joinCompetitionMutation } from "@/graphql/mutation/competition";
import { Competition, CreateCompetitionInput } from "@/gql/graphql";
import { getCompetitionsQuery, getCompetitionByIdQuery,CheckUserCompetitionQuery } from "@/graphql/query/competition";
import { CompetitionByIdQueryResult,CompetitionsQueryResult, CreateCompetitionResponse, JoinCompetitionResult,checkUserCompetitionQueryResult } from "./types";
import { toast } from "react-hot-toast";

export const useCreateCompetition = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (payload: CreateCompetitionInput) => graphqlClient.request<CreateCompetitionResponse>(createCompetitionMutation, { payload }),
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

export const useJoinCompetition=()=>{
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (payload: {competitionId:string}) => graphqlClient.request<JoinCompetitionResult>(joinCompetitionMutation, { payload }),
        onMutate: () => {
            toast.loading("Joining competition...",{id:"1"});
        },
        onSuccess: async (payload) => {
            await queryClient.invalidateQueries({ queryKey: ["currentUser"] })
            toast.success("Competition joined successfully",{id:"1"});
        },
        onError: (error) => {
            toast.error("Failed to join competition",{id:"1"});
            console.log(error);
        }
    })
    return mutation;
}

export const useGetCompetitions = () => {
    const query = useQuery({
        queryKey: ["getCompetitions"],
        queryFn: () => graphqlClient.request<CompetitionsQueryResult>(getCompetitionsQuery),
    })
    return {...query,competitions:query.data?.getCompetitions};
}

export const useGetCompetitionById = (id: string) => {
    const query = useQuery({
        queryKey: ["getCompetitionById", id],
        queryFn: () => graphqlClient.request<CompetitionByIdQueryResult>(getCompetitionByIdQuery, {id}),
    })
    return {...query, competition: query.data?.getCompetitionById};
}

export const useCheckUserCompetition=(id:string)=>{
    const query=useQuery({
        queryKey:["checkUserCompetition",id],
        queryFn:()=> graphqlClient.request<checkUserCompetitionQueryResult>(CheckUserCompetitionQuery, {id}),
    })
    console.log("check user and competition",query);
    return {...query,userCompetition:query.data?.checkUserCompetition}
}
