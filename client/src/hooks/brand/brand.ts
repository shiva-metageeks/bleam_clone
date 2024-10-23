import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { graphqlClient } from "@/clients/api"
import { createBrandMutation, loginBrandMutation, updateBrandMutation } from "@/graphql/mutation/brand"
import { CreateBrandInput, LoginBrandInput, UpdateBrandInput } from "@/gql/graphql";
import { toast } from "react-hot-toast";
import { getCurrentBrandQuery } from "@/graphql/query/brand";
import { CurrentBrandQueryResult } from "./types";

export const useCreateBrand = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (payload: CreateBrandInput) => graphqlClient.request(createBrandMutation, { payload }),
        onMutate: (payload) => toast.loading("Signing up",{id:"1"}),
        onSuccess: async (payload) => {
            await queryClient.invalidateQueries({ queryKey: ["currentBrand"] })
            toast.success("Brand created successfully",{id:"1"});
        },
        onError: (error) => {
            toast.error("Brand created failed",{id:"1"});
            console.log(error);
        }
    })
    return mutation;
}

export const useLoginBrand = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (payload: LoginBrandInput) => graphqlClient.request(loginBrandMutation, { payload }),
        onMutate: (payload) => toast.loading("Logging in",{id:"1"}),
        onSuccess: async (payload) => {
            await queryClient.invalidateQueries({ queryKey: ["currentBrand"] })
            toast.success("Login successfully",{id:"1"});
        },
        onError: (error) => {
            toast.error("Login failed",{id:"1"});
        }
    })
    return mutation;
}

export const useUpdateBrand = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (payload: UpdateBrandInput) => graphqlClient.request(updateBrandMutation, { payload }),
        onMutate: (payload) => toast.loading("Updating brand",{id:"1"}),
        onSuccess: async (payload) => {
            await queryClient.invalidateQueries({ queryKey: ["currentBrand"] })
            toast.success("Brand updated successfully",{id:"1"});
        },
        onError: (error) => {
            toast.error("Brand updated failed",{id:"1"});
        }
    })
    return mutation;
}

export const useGetCurrentBrand = () => {
    const query = useQuery({
        queryKey: ["currentBrand"],
        queryFn: () => graphqlClient.request<CurrentBrandQueryResult>(getCurrentBrandQuery),
    })
    console.log("query current brand",query)
    return {...query,brand:query.data?.getCurrentBrand};
}

