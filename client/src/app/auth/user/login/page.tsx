"use client"
import React, { useState } from "react";
import { googleLogin,twitterLogin,facebookLogin, emailPasswordLogin } from "@/utils/firebase/loginOption";
import UserLogin from "@/components/user/userLogin";
import { useLoginUser } from "@/hooks/user/user";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { loginFormType } from "@/types/user/user";

const LoginPage = () => {
  const router = useRouter();
  const {mutate:loginUser,data} = useLoginUser();
  const [loginForm,setLoginForm] = useState<loginFormType>({
    email:"",
    password:""
  })
    const handleGoogleLogin = async () => {
        try {
            const user = await googleLogin();
            loginUser(
              {firebaseUid:user.uid},
            {
              onSuccess: (data) => {
                if (data?.loginUser) {
                  console.log("token",data.loginUser);
                  localStorage.setItem("_hypd_token",data.loginUser as string);
                  localStorage.setItem("_hypd_user_type", "user");
                  router.push("/profile");
                }
              },
              onError: (error) => {
                console.error("Error logging in with Google:", error);
                toast.error("Failed to login with Google. Please try again.");
              },
            }
            );
        } catch (error:any) {
            console.error('Error signing in with Google:', error.message);
        }
    }

    const handleEmailPasswordLogin = async () => {
        try {
            const user = await emailPasswordLogin(loginForm.email,loginForm.password);
            console.log('User signed in with Email and Password:', user);
            loginUser(
              {firebaseUid:user.uid},
              {
                onSuccess: (data) => {
                  if (data?.loginUser) {
                    console.log("token",data.loginUser);
                    localStorage.setItem("_hypd_token",data.loginUser as string);
                    router.push("/profile");
                  }
                },
                onError: (error) => {
                  console.error("Error logging in with Email and Password:", error);
                  toast.error("Failed to login with Email and Password. Please try again.");
                },
              }
            );
        } catch (error:any) {
            console.error('Error signing in with Email and Password:', error.message);
        }
    }

    const handleTwitterLogin = async () => {
        try {
            const user = await twitterLogin();
            console.log('User signed in with Twitter:', user);
            loginUser(
              {firebaseUid:user.uid},
              {
                onSuccess: (data) => {
                  if (data?.loginUser) {
                    console.log("token",data.loginUser);
                    localStorage.setItem("_hypd_token",data.loginUser as string);
                    router.push("/profile");
                  }
                },
                onError: (error) => {
                  console.error("Error logging in with Twitter:", error);
                  toast.error("Failed to login with Twitter. Please try again.");
                },
              }
              );
        } catch (error:any) {
            console.error('Error signing in with Twitter:', error.message);
        }
    }

    const handleFacebookLogin = async () => {
        try {
            // const user = await facebookLogin();
            // console.log('User signed in with Facebook:', user);
            // loginUser({firebaseUid:user.uid});
            // if(token){
            //     console.log("token",token);
            //     localStorage.setItem("_hypd_token",token as string);
            // }
        } catch (error:any) {
            console.error('Error signing in with Facebook:', error.message);
        }
    }

    const handleLinkedinLogin = async () => {
        try {
            // const user = await linkedinLogin();
            // console.log('User signed in with LinkedIn:', user);
        } catch (error:any) {
            console.error('Error signing in with LinkedIn:', error.message);
        }
    }

  return (
    <>
      <UserLogin
        loginForm={loginForm}
        setLoginForm={setLoginForm}
        handleEmailPasswordLogin={handleEmailPasswordLogin}
        handleGoogleLogin={handleGoogleLogin}
        handleTwitterLogin={handleTwitterLogin}
        handleFacebookLogin={handleFacebookLogin}
        handleLinkedinLogin={handleLinkedinLogin}
      />
    </>
  );
};

export default LoginPage;
