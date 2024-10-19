"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { loginFormType } from "@/types/user/brand";
import { useLoginBrand } from "@/hooks/brand";
import BrandLogin from "@/components/brand/BrandLogin";

const BrandLoginPage = () => {
  const router = useRouter();
  const { mutate: loginBrand } = useLoginBrand();
  const [loader, setLoader] = useState<boolean>(false);
  const [loginForm, setLoginForm] = useState<loginFormType>({
    email: "",
    password: "",
    showPassword:false
  });

  const handleLogin = async () => {
    const {email,password} = loginForm;
    if (!email || !password) {
      toast.error("Please enter your email and password");
      return;
    }
    setLoader(true);

    loginBrand({email,password}, {
      onSuccess: (data) => {
        if (data?.loginBrand) {
          localStorage.setItem("_hyped_token", data.loginBrand as string);
          router.push("/brand/profile");
        }
      },
      onError: (error) => {
        toast.error("Invalid email or password");
      },
    });
    setLoader(false);
  };
  return (
    <>
      <BrandLogin
        loginForm={loginForm}
        setLoginForm={setLoginForm}
        handleLogin={handleLogin}
        loader={loader}
      />
    </>
  );
};

export default BrandLoginPage;
