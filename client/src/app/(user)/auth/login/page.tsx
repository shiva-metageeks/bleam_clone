"use client"
import React, { useState } from "react";
import { googleLogin,twitterLogin,facebookLogin, emailPasswordLogin } from "@/utils/firebase/loginOption";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin,FaFacebook } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  const [loginForm,setLoginForm] = useState({
    email:"",
    password:""
  })

    const handleGoogleLogin = async () => {
        try {
            const user = await googleLogin();
            console.log('User signed in with Google:', user);
        } catch (error:any) {
            console.error('Error signing in with Google:', error.message);
        }
    }

    const handleEmailPasswordLogin = async () => {
        try {
            const user = await emailPasswordLogin(loginForm.email,loginForm.password);
            console.log('User signed in with Email and Password:', user);
        } catch (error:any) {
            console.error('Error signing in with Email and Password:', error.message);
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

    const handleFacebookLogin = async () => {
        try {
            const user = await facebookLogin();
            console.log('User signed in with Facebook:', user);
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
    <div className="w-full flex sm:flex-row flex-col-reverse justify-center items-center min-h-screen text-black">
      <section className="sm:w-1/2 w-full h-[100vh] bg-white">
      <div className="flex justify-start items-center uppercase font-bold text-md px-4 py-2" >HyPd</div>
        <div className="flex flex-col items-center justify-center mx-8 p-6">
          <div className="w-full bg-white sm:max-w-md">
            <div className="space-y-2 md:space-y-4">
              <div className="text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-xl">
                Log in 
              </div>
              <div className="text-xs text-gray-500">Welcome back! Please enter your details</div>
              <form className="space-y-2 md:space-y-4" action="#">
                <div className="flex flex-col">
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
                    value={loginForm.email}
                    onChange={(e)=>{setLoginForm({...loginForm,email:e.target.value})}}
                    className="text-xs bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 "
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
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
                    value={loginForm.password}
                    onChange={(e)=>{setLoginForm({...loginForm,password:e.target.value})}}
                    placeholder="••••••••"
                    className="text-xs bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 "
                    required
                  />
                </div>
                <div className="flex justify-end items-center">
                  <Link
                    href="#"
                    className="text-sm text-end font-medium text-nowrap text-[#f37d29] hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <button
                  type="submit"
                  onClick={()=>{handleEmailPasswordLogin()}}
                  className="w-full text-white font-semibold bg-gradient-to-r from-[#FF4E50] to-[#F9D423] rounded-lg text-sm px-4 py-2 text-center "
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
                  <button
                    type="button"
                    className="px-4 py-2 rounded-lg border border-gray-300"
                    onClick={()=>{handleFacebookLogin()}}
                  >
                  <FaFacebook className="text-blue-600" />
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 rounded-lg border border-gray-300"
                    onClick={()=>{handleLinkedinLogin()}}
                  >
                  <FaLinkedin className="text-blue-600" />
                  </button>
                </div>
                <p className="text-sm font-light text-black">
                  Don’t have an account yet?{" "}
                  <Link
                    href="/auth/signup"
                    className="font-medium text-blue-800 hover:underline"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="sm:w-1/2 h-[40vh] sm:h-[100vh] w-full bg-white">
      <div className="relative w-full h-full py-8 pr-8">
        <Image src="/images/loginBanner.png" alt="loginBanner" fill={true} className="bg-cover "/>
      </div>
      </section>
    </div>
  );
};

export default LoginPage;
