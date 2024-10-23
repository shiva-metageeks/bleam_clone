import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { graphqlClient } from "@/clients/api";
import { TwitterAuthMutation,TwitterAuthCallback,TwitterTweet } from "@/graphql/mutation/twitter";
import {checkTweetLike,checkTweetRetweet} from "@/graphql/query/twitter"
import { AuthResponse,AuthCallBackInput, AuthCallBackResponse, CheckTweetRetweetResponse, CheckTweetLikeResponse, TweetResponse } from "./types";
import envConfig from "@/utils/imports/configEnv";

export const useTwitterAuth=()=>{
    const mutation=useMutation({
        mutationFn:()=>graphqlClient.request<AuthResponse>(TwitterAuthMutation),
        onSuccess:(data)=>{
            console.log("auth data",data);
            const url=data.oAuth2WithTwitter.url;
            if (url) {
                window.open(url, '_blank');
            }
        },
        onError:(error:any)=>{
            console.log("error",error);
        }
    })
    return mutation;
}

export const useTwitterCallback=()=>{
    const queryClient=useQueryClient();
    const mutation=useMutation({
        mutationFn:(payload:AuthCallBackInput)=>graphqlClient.request<AuthCallBackResponse>(TwitterAuthCallback,payload),
        onSuccess:(data)=>{
            console.log("auth callback data",data);
            const url=`${envConfig.CLIENT_URL}/profile`;
            if(data.oAuth2WithTwitterCallback.success){
                window.location.href=url;
            }
        },
        onError:(error:any)=>{
            console.log("error",error);
        }
    })
    return mutation;
}

export const useTweet=()=>{
    const mutation=useMutation({
        mutationFn:()=>graphqlClient.request<TweetResponse>(TwitterTweet),
        onSuccess:(data)=>{
            console.log("tweet",data.sendTweet);
        },
        onError:(error)=>{
            console.log("error",error);
        }
    })
    return mutation;
}

export const useCheckTweetLike=()=>{
    const query=useQuery({
        queryKey:["checkTweetLike"],
        queryFn:()=>graphqlClient.request<CheckTweetLikeResponse>(checkTweetLike),
    });
    console.log("query check like",query);
    return {...query,checkTweetLike:query.data?.checkTweetLike};
}

export const useCheckTweetRetweet=()=>{
    const query=useQuery({
        queryKey:["checkTweetRetweet"],
        queryFn:()=>graphqlClient.request<CheckTweetRetweetResponse>(checkTweetRetweet),
    });
    console.log("query check like",query);
    return {...query,checkTweetRetweet:query.data?.checkTweetRetweet};
}