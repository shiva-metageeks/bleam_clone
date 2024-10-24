import React from "react";
import Link from "next/link";
import Image from "next/image";
import { icons } from "@/utils/imports/config";
import { loginFormType } from "@/types/user/brand";

const { FcGoogle, FaFacebook, FaLinkedin, FaXTwitter,FaEye,FaEyeSlash } = icons;
const BrandLogin = ({
  loginForm,
  setLoginForm,
  handleLogin,
  loader,
}: {
  loginForm: loginFormType;
  setLoginForm: React.Dispatch<React.SetStateAction<loginFormType>>;
  handleLogin: () => void;
  loader: boolean;
}) => {
  return (
    <div className="w-full flex sm:flex-row flex-col-reverse justify-center items-center min-h-screen text-black">
      <section className="sm:w-1/2 w-full h-[100vh] bg-white mx-8 p-6">
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 mb-4">
          HyPd
        </div>
        <div className="w-[70%] mx-auto flex items-center justify-center ">
          <div className="w-full bg-white">
            <div className="space-y-2 md:space-y-4">
              <div className="flex flex-col">
                <div className="text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Log in as a brand
                </div>
                <div className="text-md text-gray-500">
                  Welcome back! Please enter your details
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-center gap-2 items-center mb-4">
                  <button
                    type="button"
                    // onClick={() => {
                    //   handleGoogleLogin();
                    // }}
                    className="px-4 py-2 rounded-lg border border-gray-300"
                  >
                    <FcGoogle />
                  </button>
                  <button
                    type="button"
                    // onClick={() => {
                    //   handleTwitterLogin();
                    // }}
                    className="px-4 py-2 rounded-lg border border-gray-300"
                  >
                    <FaXTwitter className="text-black" />
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 rounded-lg border border-gray-300"
                    // onClick={() => {
                    //   handleFacebookLogin();
                    // }}
                  >
                    <FaFacebook className="text-blue-600" />
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 rounded-lg border border-gray-300"
                    // onClick={() => {
                    //   handleLinkedinLogin();
                    // }}
                  >
                    <FaLinkedin className="text-blue-600" />
                  </button>
                </div>
                <div className="flex justify-center flex-col mb-4">
                  <div className="text-gray-500 text-center ">OR</div>
                </div>
                <form className="space-y-2 md:space-y-4" onSubmit={(e)=>{
                  e.preventDefault();
                  handleLogin();
                }} >
                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className="block mb-1 text-xs font-semibold text-[#344054]"
                    >
                      Work Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={loginForm.email}
                      onChange={(e) => {
                        setLoginForm({ ...loginForm, email: e.target.value });
                      }}
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
                    <div className="relative">
                    <input
                      type={loginForm.showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      value={loginForm.password}
                      onChange={(e) => {
                        setLoginForm({
                          ...loginForm,
                          password: e.target.value,
                        });
                      }}
                      placeholder="Enter your password"
                      className="text-xs bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 "
                      required
                    />
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={()=>{
                      setLoginForm({...loginForm,showPassword:!loginForm.showPassword})
                    }}>
                      {loginForm.showPassword ? <FaEyeSlash/> : <FaEye/>}
                    </div>
                  </div>
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
                    disabled={loader}
                    className="w-full text-white font-semibold bg-gradient-to-r from-[#FF4E50] to-[#F9D423] rounded-lg text-sm px-4 py-2 text-center "
                  >
                    {loader ? "signing in..." : "Sign in"}
                  </button>
                </form>
                <p className="text-sm font-light text-black">
                  Don’t have an account yet?{" "}
                  <Link
                    href="/auth/brand/sign-up"
                    className="font-medium text-blue-800 hover:underline"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sm:w-1/2 h-[40vh] sm:h-[100vh] w-full bg-white">
        <div className="relative w-full h-full py-8 pr-8">
          <Image
            src="/images/loginBanner.png"
            alt="loginBanner"
            fill={true}
            className="bg-cover "
          />
        </div>
      </section>
    </div>
  );
};

export default BrandLogin;
