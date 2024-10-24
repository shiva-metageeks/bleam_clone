import React from "react";
import Image from "next/image";
import Link from "next/link";
import { icons } from "@/utils/imports/config";
import { signUpFormType, signUpLoaderType } from "@/types/user/brand";
const { FcGoogle, FaXTwitter, FaFacebook, FaLinkedin,FaEye,FaEyeSlash } = icons;

const BrandSignUp = ({
  signUpForm,
  setSignUpForm,
  loaders,
  handleSignUp,
}: {
  signUpForm: signUpFormType;
  setSignUpForm: React.Dispatch<React.SetStateAction<signUpFormType>>;
  loaders: signUpLoaderType;
  handleSignUp: () => void;
}) => {
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
          <div className="w-full bg-white sm:max-w-md space-y-2 md:space-y-4">
            <div className="text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-xl">
              Sign Up
            </div>
            <div className="text-xs text-gray-500">
              Welcome! Please enter your details to get started.
            </div>
            <div className="flex flex-col">
              {/* <div className="flex justify-center gap-2 items-center mb-4">
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
                <div className="flex justify-center flex-col">
                  <div className="text-gray-500 text-center ">OR</div>
                </div> */}
              <form className="space-y-2 md:space-y-4 mb-4" onSubmit={(e)=>{
                e.preventDefault();
                handleSignUp();
              }}>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold text-[#344054]">
                    <span className="mr-1" >Name</span><span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    title="Please enter your name"
                    required
                    disabled={loaders.signUp}
                    value={signUpForm.name}
                    onChange={(e) => {
                      setSignUpForm({ ...signUpForm, name: e.target.value });
                    }}
                    placeholder="Name"
                    className="text-xs bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 "
                  />
                </div>
                <div className="w-full flex justify-between items-center gap-2 mb-2" >
                <div className="w-full flex flex-col gap-2">
                  <label
                    htmlFor="organizationName"
                    className="block text-xs font-semibold text-[#344054]"
                  >
                  <span className="mr-1" >Organization Name</span><span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="organizationName"
                    title="Please enter your organization name"
                    id="organizationName"
                    disabled={loaders.signUp}
                    required
                    value={signUpForm.organizationName}
                    onChange={(e) => {
                      setSignUpForm({ ...signUpForm, organizationName: e.target.value });
                    }}
                    placeholder="Organization Name"
                    className="text-xs bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 "
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label
                    htmlFor="website"
                    className="block text-xs font-semibold text-[#344054]"
                  >
                  <span className="mr-1" >Organization Website</span><span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="website"
                    id="website"
                    title="Please enter your website"
                    required
                    disabled={loaders.signUp}
                    value={signUpForm.website}
                    onChange={(e) => {
                      setSignUpForm({ ...signUpForm, website: e.target.value });
                    }}
                    placeholder="Website URL"
                    className="text-xs bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 "
                  />
                </div>
                </div>
                <div className="flex flex-col gap-2 mb-2">
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-[#344054]"
                  >
                  <span className="mr-1" >Work Email</span><span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    title="Please enter your work email"
                    disabled={loaders.signUp}
                    required
                    id="email"
                    value={signUpForm.email}
                    onChange={(e) => {
                      setSignUpForm({ ...signUpForm, email: e.target.value });
                    }}
                    className="text-xs bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 "
                    placeholder="Enter your email"
                  />
                </div>
                <div className="flex flex-col gap-2 mb-2">
                  <label
                    htmlFor="password"
                    className="block text-xs font-semibold text-[#344054]"
                  >
                  <span className="mr-1" >Password</span><span className="text-red-500">*</span>
                  </label>
                  <div className="relative w-full flex justify-between items-center">
                  <input
                    type={signUpForm.showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    title="Please enter your password"
                    disabled={loaders.signUp}
                    required
                    value={signUpForm.password}
                    onChange={(e) => {
                      setSignUpForm({
                        ...signUpForm,
                        password: e.target.value,
                      });
                    }}
                    placeholder="Create a password"
                    className="text-xs bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 "
                  />
                  <div title={signUpForm.showPassword ? "Hide Password" : "Show Password"} className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={()=>{
                    setSignUpForm({...signUpForm,showPassword:!signUpForm.showPassword})
                  }}>
                    {signUpForm.showPassword ? <FaEyeSlash/> : <FaEye/>}
                  </div>
                  </div>
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
                        required
                        disabled={loaders.signUp}
                        onChange={(e) => {
                          setSignUpForm({
                            ...signUpForm,
                            term: e.target.checked,
                          });
                        }}
                        type="checkbox"
                        onInvalid={(e) => e.currentTarget.setCustomValidity('Please agree to the terms and conditions')}
                        onInput={(e) => e.currentTarget.setCustomValidity('')}
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
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
                  className="w-full text-white font-semibold bg-gradient-to-r from-[#FF4E50] to-[#F9D423] rounded-lg text-sm px-4 py-2 text-center mb-2"
                >
                  {loaders.signUp ? "Signing Up..." : "Sign Up"}
                </button>
              </form>
              <p className="text-sm font-light text-black mb-4">
                Already have an account?
                <Link
                  href="/auth/brand/login"
                  className="font-medium text-blue-800 hover:underline ml-2"
                >
                  Login
                </Link>
              </p>
              <div className="w-full text-sm font-light text-black mb-2 flex flex-col items-start">
                <span>Want to earn exciting rewards and giveaways?</span>
                <Link
                  href="/auth/user/sign-up"
                  className="font-medium text-blue-800 hover:underline"
                >
                  Sign up as a User
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandSignUp;
