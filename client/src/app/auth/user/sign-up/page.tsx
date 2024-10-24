"use client";
import React, { useState } from "react";
import {
  emailPasswordSignUp,
  facebookLogin,
  googleLogin,
  twitterLogin,
} from "@/utils/firebase/loginOption";
import { useCreateUser } from "@/hooks/user/user";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import UserSignUp from "@/components/user/userSignUp";
import { signUpFormType, signUpLoaderType } from "@/types/user/user";

const SignUpPage = () => {
  const [signUpForm, setSignUpForm] = useState<signUpFormType>({
    name: "",
    email: "",
    password: "",
    term: false,
  });
  const [loaders, setLoaders] = useState<signUpLoaderType>({
    signUp: false,
  });
  const { mutate: createUser} = useCreateUser();
  const router = useRouter();

  const handleEmailPasswordSignUp = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (!signUpForm.term) {
      toast.error("Please accept terms and conditions");
      return;
    }

    setLoaders({ ...loaders, signUp: true });
    try {
      const user = await emailPasswordSignUp(
        signUpForm.email,
        signUpForm.password
      );
      if (user) {
        createUser(
          {
            email: signUpForm.email,
            firebaseUid: user.uid,
          },
          {
            onSuccess: (data) => {
              if (data?.createUser) {
                localStorage.setItem("_hypd_token", data.createUser as string);
                router.push("/profile");
              }
            },
            onError: (error) => {
              console.error("Error creating user:", error);
              toast.error("Failed to create user. Please try again.");
            },
            onSettled: () => {
              setLoaders({ ...loaders, signUp: false });
            },
          }
        );
      }
    } catch (error: any) {
      console.error("Error signing up with Email and Password:", error.message);
      toast.error("Sign up failed. Please try again.");
      setLoaders({ ...loaders, signUp: false });
    }
  };

  const handleGoogleSignUp = async () => {
    if (!signUpForm.term) {
      toast.error("Please accept terms and conditions");
      return;
    }
    try {
      const user = await googleLogin();
      console.log("User signed up with Google:", user);
      if (user) {
        createUser(
          {
            email: user.email,
            name: user.displayName,
            profileImageUrl: user.photoURL,
            firebaseUid: user.uid,
            isEmailVerified: user.emailVerified,
          },
          {
            onSuccess: (data) => {
              if (data?.createUser) {
                localStorage.setItem("_hypd_token", data.createUser as string);
                router.push("/profile");
              }
            },
            onError: (error:any) => {
              console.log("graphql error",error.response.errors[0].message);
              toast.error(error.response.errors[0].message || "Failed to create user. Please try again.",{id:"1"})
            },
          }
        );
      }
    } catch (error: any) {
      console.error("Error signing up with Google:", error.message);
    }
  };

  const handleTwitterSignUp = async () => {
    if (!signUpForm.term) {
      toast.error("Please accept terms and conditions");
      return;
    }
    try {
      const user = await twitterLogin();
      console.log("User signed up with Twitter:", user);

      if (user) {
        createUser(
          {
            email: user.email,
            name: user.displayName,
            profileImageUrl: user.photoURL,
            firebaseUid: user.uid,
            isEmailVerified: user.emailVerified,
          },
          {
            onSuccess: (data) => {
              if (data?.createUser) {
                localStorage.setItem("_hypd_token", data.createUser as string);
                localStorage.setItem("_hypd_user_type", "user");
                router.push("/profile");
              }
            },
            onError: (error) => {
              console.error("Error creating user:", error.message);
              toast.error("Failed to create user. Please try again.");
            },
          }
        );
      }
    } catch (error: any) {
      console.error("Error signing up with Twitter:", error.message);
    }
  };

  const handleFacebookSignUp = async () => {
    try {
      const user = await facebookLogin();
    } catch (error: any) {
      console.error("Error signing up with Facebook:", error.message);
    }
  };

  return (
    <UserSignUp
      signUpForm={signUpForm}
      loaders={loaders}
      setSignUpForm={setSignUpForm}
      handleEmailPasswordSignUp={handleEmailPasswordSignUp}
      handleGoogleSignUp={handleGoogleSignUp}
      handleTwitterSignUp={handleTwitterSignUp}
      handleFacebookSignUp={handleFacebookSignUp}
    />
  );
};

export default SignUpPage;
