"use client";
import { useEffect, useState } from "react";
import { icons, nextImports } from "@/utils/imports/config";
import { useGetCurrentUser } from "@/hooks/user/user";
import { useGetCurrentBrand } from "@/hooks/brand/brand";
import { userLogout } from "@/utils/helper/logout";
const { IoIosArrowDown } = icons;
const { Link, Image } = nextImports;
import { useRouter } from "next/navigation";

const UserNavbar = () => {
  const router = useRouter();
  const [userType, setUserType] = useState<string | null>(null);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { user } = useGetCurrentUser();
  const { brand } = useGetCurrentBrand();

  useEffect(() => {
    setUserType(localStorage.getItem("_hypd_user_type"));
  }, []);

  return (
    <div className="w-full pt-2">
      <nav className="w-full bg-pink-50 py-5 px-6 rounded-full flex items-center justify-center ">
        <div className="flex justify-between items-center w-[95%]">
          <Link
            href="/home"
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 "
          >
            HYPD
          </Link>
          {/* Links */}
          <div className="hidden md:flex space-x-8 justify-start items-center">
            <div className="flex justify-start space-x-10">
              <div className="flex gap-2 items-center ">
                <Link href="#" className="hover:text-orange-500 font-semibold">
                  App
                </Link>
                <IoIosArrowDown />
              </div>
              <div className="flex gap-2 items-center ">
                <Link href="#" className="hover:text-orange-500 font-semibold">
                  Templates
                </Link>
                <IoIosArrowDown />
              </div>
              <div className="flex gap-2 items-center ">
                <Link href="#" className="hover:text-orange-500 font-semibold">
                  Learn
                </Link>
                <IoIosArrowDown />
              </div>
              <Link href="#" className="hover:text-orange-500 font-semibold">
                Browse Giveaways
              </Link>
              <Link href="#" className="hover:text-orange-500 font-semibold">
                Pricing
              </Link>
            </div>
          </div>
          {user || brand ? (
            <div className=" flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <div className="relative">
                <button
                  type="button"
                  className="flex text-sm shadow-sm rounded-full md:me-0 ring ring-orange-500 "
                  id="user-menu-button"
                  aria-expanded="false"
                  data-dropdown-toggle="user-dropdown"
                  data-dropdown-placement="bottom"
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                >
                  <span className="sr-only">Open user menu</span>
                  <Image
                    className={`w-8 h-8 rounded-full ${
                      isProfileMenuOpen ? "opacity-70" : "opacity-100"
                    }`}
                    src={
                      userType === "user"
                        ? (user?.profileImageUrl as string)
                        : (brand?.profileImageUrl as string)
                    }
                    width={50}
                    height={50}
                    alt="user photo"
                  />
                </button>
                <div
                  className={`z-50 ${
                    !isProfileMenuOpen && "hidden"
                  } absolute top-6 right-0 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow `}
                  id="user-dropdown"
                >
                  <div className="px-4 py-3">
                    <div className="flex flex-col justify-center items-center">
                      <span className="block text-sm text-gray-900 ">
                        {userType === "user" ? user?.name : brand?.name}
                      </span>
                      <span className="block text-xs font-bold text-zinc-900 truncate">
                        {userType === "user" ? user?.email : brand?.email}
                      </span>
                    </div>
                  </div>
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <Link
                        href={
                          userType === "user" ? "/profile" : "/brand/profile"
                        }
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={
                          userType === "user"
                            ? "/competitions"
                            : "/brand/competitions"
                        }
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                      >
                        My Competitions
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Earnings
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={() => userLogout({ redirectTo: "/", router })}
                        className="block w-full text-left px-4 py-2 text-sm font-semibold text-red-500 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <button
                data-collapse-toggle="navbar-user"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                aria-controls="navbar-user"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <div className="flex  items-center space-x-8">
              <Link
                href={
                  userType === "user" ? "/auth/user/login" : "/auth/brand/login"
                }
                className="hover:text-orange-500 font-semibold"
              >
                Login
              </Link>
              <Link
                href={
                  userType === "user"
                    ? "/auth/user/signup"
                    : "/auth/brand/signup"
                }
                className="px-4 py-2 shadow-lg rounded-full bg-gradient-to-r from-orange-400 to-yellow-500 text-white hover:opacity-90"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default UserNavbar;
