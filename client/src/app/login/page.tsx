"use client"
import React from "react";
import { googleLogin,twitterLogin } from "@/utils/firebase/loginOption";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";

const LoginPage = () => {

    const handleGoogleLogin = async () => {
        try {
            const user = await googleLogin();
            console.log('User signed in with Google:', user);
        } catch (error:any) {
            console.error('Error signing in with Google:', error.message);
        }
    }

    const handleTwitterLogin = async () => {
        try {
            const user = await twitterLogin();
            console.log('User signed in with Twitter:', user);
        } catch (error:any) {
            console.error('Error signing in with Twitter:', error.message);
        }
    }
  return (
    <div className="w-full flex justify-center items-center min-h-screen text-black">
      <section className="sm:w-1/2 h-full w-full bg-white p-2">
      <div className="flex justify-start items-center uppercase font-bold text-xl px-4 py-2" >HyPd</div>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Log in 
              </h1>
              <div className="text-sm text-gray-500 mb-2">Welcome back! Please enter your details</div>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-semibold text-[#344054]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-semibold text-[#344054]"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-start">
                    <div className="flex items-center">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-black"
                      >
                        I agree with with Terms & Condition
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm text-end font-medium text-nowrap text-[#f37d29] hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white font-semibold bg-gradient-to-r from-[#FF4E50] to-[#F9D423] rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Sign in
                </button>
                <div className="flex justify-center flex-col">
                  <div className="text-gray-500 text-center ">OR</div>
                </div>
                <div className="flex justify-center gap-2 items-center">
                  <button
                    type="button"
                    onClick={()=>{handleGoogleLogin()}}
                    className="px-4 py-2 rounded-lg border border-gray-300"
                  >
                    <FcGoogle/>
                  </button>
                  <button
                    type="button"
                    onClick={()=>{handleTwitterLogin()}}
                    className="px-4 py-2 rounded-lg border border-gray-300"
                  >
                   <FaXTwitter className="text-black" />
                  </button>
                </div>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="sm:w-1/2 h-full w-full bg-gray-50">
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="loginBanner" className="bg-cover object-cover bg-center h-full w-full" />
      </section>
    </div>
  );
};

export default LoginPage;
