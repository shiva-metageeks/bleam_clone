import React, { useState } from "react";
import { icons } from "@/utils/imports/config";
import { useGetCurrentUser, useUpdateUser } from "@/hooks/user";
import { QueryClient } from "@tanstack/react-query";
const {
    FaInstagram,
    FaTwitter,
    FaFacebook,
    FaLinkedin,
    FaDiscord,
    FaTelegram,
  } = icons;

const EditProfilePage = () => {
  const queryClient = new QueryClient();
  const {user} = useGetCurrentUser();
  console.log("user",user);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { mutate: updateUser, data } = useUpdateUser();
  const [updateFormData, setUpdateFormData] = useState({
    name: "",
    bio: "",
    email: "",
    profileImageUrl: "",
  });

  const handleUpdateUser = async () => {
    updateUser({
      name: updateFormData.name?updateFormData.name:user?.name,
      bio: updateFormData.bio?updateFormData.bio:user?.bio,
      email: updateFormData.email?updateFormData.email:user?.email,
      profileImageUrl: updateFormData.profileImageUrl?updateFormData.profileImageUrl:user?.profileImageUrl,
    });
    await queryClient.refetchQueries({ queryKey: ["currentUser"] });
    setIsEditModalOpen(!isEditModalOpen);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsEditModalOpen(!isEditModalOpen)}
        className="bg-orange-500 text-white px-4 py-2 rounded-full mb-4"
      >
        Edit Profile
      </button>
      <div
        id="static-modal"
        data-modal-backdrop="static"
        tabIndex={-1}
        aria-hidden="true"
        className={`${
          isEditModalOpen ? "block" : "hidden"
        } overflow-y-auto overflow-x-hidden fixed z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative p-4 w-full max-w-xl max-h-full bg-gray-100 rounded-lg shadow ">
          <div className="relative ">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
              <h3 className="text-xl font-semibold text-gray-900 ">
                Edit Profile
              </h3>
              <button
                type="button"
                onClick={() => setIsEditModalOpen(!isEditModalOpen)}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                data-modal-hide="static-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-2 md:p-3 space-y-4 overflow-y-scroll max-h-[500px]">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="profile"
                    className="text-sm font-medium text-gray-900"
                  >
                    Profile Picture
                  </label>
                  <input
                    type="file"
                    id="profile"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-900"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={updateFormData.name}
                    onChange={(e) =>
                      setUpdateFormData({
                        ...updateFormData,
                        name: e.target.value,
                      })
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="bio"
                    className="text-sm font-medium text-gray-900"
                  >
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    value={updateFormData.bio}
                    onChange={(e) =>
                      setUpdateFormData({
                        ...updateFormData,
                        bio: e.target.value,
                      })
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                    placeholder="I am a software engineer"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={updateFormData.email}
                    onChange={(e) =>
                      setUpdateFormData({
                        ...updateFormData,
                        email: e.target.value,
                      })
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                    placeholder="JohnDoe@gmail.com"
                  />
                </div>
                {/* <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="text-sm font-medium text-gray-900">Phone</label>
                        <input type="text" id="phone" value={updateFormData.phoneNumber} onChange={(e) => setUpdateFormData({ ...updateFormData, phoneNumber: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5" placeholder="+91_ _ _ _ _ _ _ _ _ _" />
                    </div> */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-900">
                    Connect with Social Media
                  </label>
                  <div className="flex justify-start items-center flex-wrap gap-2">
                    <button className="text-sm text-nowrap font-medium bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full flex justify-center items-center gap-2">
                      <span>Connect with</span>
                      <span>
                        <FaInstagram />
                      </span>
                    </button>
                    <button className="text-sm text-nowrap font-medium bg-zinc-800 hover:bg-zinc-900 text-white px-4 py-2 rounded-full flex justify-center items-center gap-2">
                      <span>Connect with</span>{" "}
                      <span>
                        <FaTwitter />
                      </span>
                    </button>
                    <button className="text-sm text-nowrap font-medium bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full flex justify-center items-center gap-2">
                      <span>Connect with</span>{" "}
                      <span>
                        <FaFacebook />
                      </span>
                    </button>
                    <button className="text-sm text-nowrap font-medium bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex justify-center items-center gap-2">
                      <span>Connect with</span>
                      <span>
                        <FaLinkedin />
                      </span>
                    </button>
                    <button className="text-sm text-nowrap font-medium bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded-full flex justify-center items-center gap-2">
                      <span>Connect with</span>{" "}
                      <span>
                        <FaDiscord />
                      </span>
                    </button>
                    <button className="text-sm text-nowrap font-medium bg-[#25a2dc] hover:bg-[#25a2dc]/80 text-white px-4 py-2 rounded-full flex justify-center items-center gap-2">
                      <span>Connect with</span>{" "}
                      <span>
                        <FaTelegram />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b ">
              <button
                data-modal-hide="static-modal"
                type="button"
                onClick={handleUpdateUser}
                className="text-white bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Update Profile
              </button>
              <button
                data-modal-hide="static-modal"
                type="button"
                onClick={() => setIsEditModalOpen(!isEditModalOpen)}
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfilePage;
