"use client";
import UserNavbar from "@/components/navbar/userNavbar";
import Link from "next/link";
const LandingPage = () => {
  return (
    <div className="h-screen bg">
      <div className="sm:w-[70%] w-full m-auto">
        <UserNavbar />
        <div className="py-24 ">
          <div className="flex gap-8 justify-center items-center">
            <img src="/images/Group 2.png" alt="" className="w-32 h-10" />
            <h1 className="text-2xl font-semibold">+10M Users Us This App</h1>
          </div>
          <div className=" m-auto w-full space-y-7 ">
            <h1 className="mt-4 text-8xl font-bold text-center">
              The{" "}
              <span className="bg-gradient-to-r from-[#FF4E50] to-[#FBB22E] bg-clip-text text-transparent">
                Business{" "}
              </span>{" "}
              <span className="bg-gradient-to-r from-[#FBB22E] to-[#F9D423] bg-clip-text text-transparent">
                Growth{" "}
              </span>{" "}
              Platform
            </h1>
            <div className=" flex justify-center ">
              <p className="text-center max-w-sm capitalize font-bold leading-6">
                Marketing apps designed to help you grow your Coupon
                Redemptions.
              </p>
            </div>
            <div className="flex justify-center  ">
              <Link href="/home" className=" flex gap-3 items-center px-6 py-1.5 border-2 rounded-full  font-bold bg-gradient-to-r from-[#FF4E50] to-[#F9D423] text-transparent bg-clip-text border-[#FF4E50] ">
                START NOW
                <img
                  src="/images/arrow-right-circle.png "
                  alt="arrow-right-circle"
                  className="w-7 h-7"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
