"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import {
  emailPasswordSignUp,
  facebookLogin,
  googleLogin,
  twitterLogin,
} from "@/utils/firebase/loginOption";
import Link from "next/link";
import { useCreateUser, useGetUser } from "@/hooks/user";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const [signUpForm, setSignUpForm] = useState({
    name: "",
    email: "",
    password: "",
    term: false,
  });
  const [loaders,setLoaders] = useState({
    signUp:false
  });
  const { mutate: createUser, data} = useCreateUser();
  const router = useRouter();

  const handleEmailPasswordSignUp = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if(!signUpForm.term){
      toast.error("Please accept terms and conditions");
      return;
    }
    setLoaders({...loaders,signUp:true});
    try {
      const user = await emailPasswordSignUp(signUpForm.email, signUpForm.password);
      if (user) {
        createUser(
          {
            email: signUpForm.email,
            firebaseUid: user.uid,
          },
          {
            onSuccess: (data) => {
              if (data?.createUser) {
                localStorage.setItem("_hyped_token", data.createUser as string);
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
    if(!signUpForm.term){
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
                localStorage.setItem("_hyped_token", data.createUser as string);
                router.push("/profile");
              }
            },
            onError: (error) => {
              console.error("Error creating user:", error);
              toast.error("Failed to create user. Please try again.");
            },
          }
        );
      }
    } catch (error: any) {
      console.error("Error signing up with Google:", error.message);
    }
  };

  const handleTwitterSignUp = async () => {
    if(!signUpForm.term){
      toast.error("Please accept terms and conditions");
      return;
    }
    try {
      const user = await twitterLogin();
      console.log("User signed up with Twitter:", user);

      if(user){
        createUser({
          email: user.email,
          name: user.displayName,
          profileImageUrl: user.photoURL,
          firebaseUid: user.uid,
          isEmailVerified: user.emailVerified,
        });
      }

      if(data?.createUser){
        localStorage.setItem("_hyped_token",data?.createUser as string);
        router.push("/profile");
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
    <div className="w-full flex sm:flex-row flex-col-reverse justify-center items-center min-h-screen text-black">
      <section className="sm:w-2/3 h-[40vh] sm:h-[100vh] w-full">
        <div
          className="relative w-full h-full flex justify-center items-center py-8 pr-8 bg-no-repeat bg-cover "
          style={{ backgroundImage: "url('/images/signUpBanner.png')" }}
        >
          <div className="w-[60%] mx-auto flex flex-col justify-center items-start">
            <div className="w-full h-full flex justify-start items-center mb-4">
              <Image
                src="/images/Stars.png"
                alt="Stars"
                width={100}
                height={100}
              />
            </div>
            <div className="w-full h-full text-white text-5xl font-bold mb-4">
              Start turning your ideas into reality.
            </div>
            <div className="w-full text-white text-sm opacity-70 mb-4">
              Create a free account and get full access to all features for
              30-days. No credit card needed. Trusted by over 4,000
              professionals.
            </div>
            <div className="w-full flex justify-start items-start mb-4">
              <Image
                src="/images/Row.png"
                alt="rowImage"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="sm:w-1/3 w-full h-[100vh] bg-white">
        <div className="flex justify-start items-center uppercase font-bold text-md px-4 text-orange-500 py-2">
          HyPd
        </div>
        <div className="flex flex-col items-center justify-center mx-8 p-6">
          <div className="w-full bg-white sm:max-w-md">
            <div className="space-y-2 md:space-y-4">
              <div className="text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-xl">
                Sign Up
              </div>
              <div className="text-xs text-gray-500">
                Welcome! Please enter your details
              </div>
              <form className="space-y-2 md:space-y-4" action="#">
                <div className="flex flex-col mb-2">
                  <label
                    htmlFor="email"
                    className="block mb-1 text-xs font-semibold text-[#344054]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={signUpForm.email}
                    onChange={(e) => {
                      setSignUpForm({ ...signUpForm, email: e.target.value });
                    }}
                    className="text-xs bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 "
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1 mb-2">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-xs font-semibold text-[#344054]"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={signUpForm.password}
                    onChange={(e) => {
                      setSignUpForm({
                        ...signUpForm,
                        password: e.target.value,
                      });
                    }}
                    placeholder="Create a password"
                    className="text-xs bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 "
                    required
                  />
                  <div className="text-xs text-gray-500">
                    Password must be at least 8 characters long
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-start">
                    <div className="flex items-center">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        checked={signUpForm.term}
                        onChange={(e) => {
                          setSignUpForm({
                            ...signUpForm,
                            term: e.target.checked,
                          });
                        }}
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <Link
                        href="#"
                        className="text-gray-700 font-semibold underline"
                      >
                        I agree with with Terms & Condition
                      </Link>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  onClick={(e) => {
                    handleEmailPasswordSignUp(e);
                  }}
                  className="w-full text-white font-semibold bg-gradient-to-r from-[#FF4E50] to-[#F9D423] rounded-lg text-sm px-4 py-2 text-center "
                >
                {loaders.signUp ? "Loading..." : "Getting Started"}
                </button>
                <div className="flex justify-center flex-col">
                  <div className="text-gray-500 text-center ">OR</div>
                </div>
                <div className="flex justify-center gap-2 items-center">
                  <button
                    type="button"
                    onClick={() => {
                      handleGoogleSignUp();
                    }}
                    className="px-4 py-2 rounded-lg border border-gray-300"
                  >
                    <FcGoogle />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      handleTwitterSignUp();
                    }}
                    className="px-4 py-2 rounded-lg border border-gray-300"
                  >
                    <FaXTwitter className="text-black" />
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 rounded-lg border border-gray-300"
                    onClick={() => {
                      handleFacebookSignUp();
                    }}
                  >
                    <FaFacebook className="text-blue-600" />
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 rounded-lg border border-gray-300"
                  >
                    <FaLinkedin className="text-blue-600" />
                  </button>
                </div>
                <p className="text-sm font-light text-black">
                  Already have an account?
                  <Link
                    href="/auth/login"
                    className="font-medium text-blue-800 hover:underline"
                  >
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUpPage;
