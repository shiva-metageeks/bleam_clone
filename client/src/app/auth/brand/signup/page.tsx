"use client";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { signUpFormType, signUpLoaderType } from "@/types/user/brand";
import BrandSignUp from "@/components/brand/BrandSignUp";
import { useCreateBrand } from "@/hooks/brand/brand";
import { useRouter } from "next/navigation";

const BrandSignUpPage = () => {
  const { mutate: createBrand } = useCreateBrand();
  const router = useRouter();
  const [signUpForm, setSignUpForm] = useState<signUpFormType>({
    name: "",
    organizationName: "",
    website: "",
    email: "",
    password: "",
    term: false,
    showPassword:false
  });
  const [loaders, setLoaders] = useState<signUpLoaderType>({
    signUp: false,
  });

  const handleSignUp = async () => {
    const { name, organizationName, website, email, password, term } =
      signUpForm;
    if (
      !name ||
      !organizationName ||
      !website ||
      !email ||
      !password
    ) {
      toast.error("Please fill all the fields");
      return;
    }

    if(!term){
      toast.error("Please accept terms and conditions");
      return;
    }

    if (password.length < 8 || password.length > 20) {
      toast.error("Password must be between 8 and 20 characters");
      return;
    }
    if (name.length < 3 || name.length > 20) {
      toast.error("Name must be between 3 and 20 characters");
      return;
    }
    if (organizationName.length < 3 || organizationName.length > 20) {
      toast.error("Organization name must be between 3 and 20 characters");
      return;
    }
    if (!email.includes("@") || !email.includes(".") || email.includes(" ")) {
      toast.error("Please enter a valid email");
      return;
    }

    if (
      email.includes("@gmail.com") ||
      email.includes("@yahoo.com") ||
      email.includes("@hotmail.com")
    ) {
      toast.error("Please enter a valid work email");
      return;
    }

    if (!website.includes("https://")) {
      toast.error("Please enter a valid website");
      return;
    }

    setLoaders({ signUp: true });
    createBrand(
      { name, organizationName, website, email, password },
      {
        onSuccess: (data) => {

          console.log("data", data);
          if (data?.createBrand) {
            localStorage.setItem("_hypd_token", data.createBrand as string);
            localStorage.setItem("_hypd_user_type", "brand");
            setLoaders({ signUp: false });
            router.push("/brand/profile");
          }
        },
        onError: (error) => {
          console.error("Error creating brand:", error);
          toast.error("Failed to create brand. Please try again.");
          setLoaders({ signUp: false });
        },
      }
    );
  };

  return (
    <BrandSignUp
      signUpForm={signUpForm}
      loaders={loaders}
      setSignUpForm={setSignUpForm}
      handleSignUp={handleSignUp}
    />
  );
};

export default BrandSignUpPage;
