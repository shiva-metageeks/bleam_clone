"use client";
import React, { Suspense,useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useTwitterCallback } from "@/hooks/twitter/twitter";

const CallBackPageContent = () => {
  const router = useRouter();
  const {mutate:OAuth2WithTwitterCallback} =useTwitterCallback();
  const searchParams = useSearchParams();
  const state = searchParams.get("state");
  const code = searchParams.get("code");
  // console.log(state, code);

  const handleLogin = async () => {
    console.log("state,code",state,code);
    if(!state || !code){
        return;
    }
    try {
      OAuth2WithTwitterCallback({state,code},
      {
        onSuccess:(data)=>{
            console.log("data",data);
            router.push("/profile");
        },
        onError:(error)=>{
            console.log("error",error);
        }
      })
      // console.log(data);
    } catch (error) {
      router.push("/home");
      console.log(error);
    }
  };

  useEffect(() => {
    handleLogin();
  }, [state,code]); // Ensure dependencies are set correctly

  return <div className="min-h-screen flex justify-center items-center " >
    loading
   </div>;
};

const CallBackPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CallBackPageContent />
    </Suspense>
  );
};

export default CallBackPage;
