"use client"
import React from 'react'
import { icons } from '@/utils/imports/config';
import {editFormType } from '@/types/user/user';
import { User } from '@/gql/graphql';
import Breadcrumbs from '@/components/breadcrumbs';
const { IoArrowBackOutline, LuSearch, RiArrowRightSLine } = icons;

const EditProfile = ({user,handleUpdateUser,editForm,setEditForm,loader}:{
    user:User,
    handleUpdateUser:()=>void,
    editForm:editFormType,
    setEditForm:(editForm:editFormType)=>void,
    loader:boolean
}) => {
  return (
     <div className="w-full">
      <div className="w-full">
        <div className="h-52">
          <img
            src="https://t4.ftcdn.net/jpg/05/49/86/39/360_F_549863991_6yPKI08MG7JiZX83tMHlhDtd6XLFAMce.jpg"
            className="w-full h-full object-cover"
            alt="Background"
          />
        </div>

        {/* Profile Section */}
        <div className="flex  justify-between items-center py-4 lg:w-[90%] lg:m-auto sm:border-b lg:px-0 px-3 ">
          {/* Left - Profile Info */}
          <div className="flex items-center space-x-2 sm:flex-row flex-col ">
            <div className="relative">
              <img
                src={editForm?.profileImageUrl || "/images/defaultProfilePic.png"}
                className="lg:w-28 lg:h-28 w-24 h-24 object-cover rounded-full border-4 border-white -mt-14 "
                alt={editForm?.name ?? ""}
              />
              <div className="absolute bottom-0 right-0  text-white p-1 rounded-full">
                <img
                  src="/images/Verified tick.svg"
                  alt="Verified"
                  className="h-7 w-7"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <div className="lg:block hidden">
               <Breadcrumbs BreadcrumbsArray={["Edit Profile"]}/>
              </div>
              <div>
                <h1 className="text-xl font-semibold">{user?.name}</h1>
                <p className="text-gray-500">@{user?.username}</p>
              </div>
            </div>
          </div>
          {/* for mobile and tab view */}
          <div className="sm:hidden block">
            <div className="flex gap-3 items-center cursor-pointer">
              <IoArrowBackOutline className="h-8 w-8 mt-1" />
              <h4 className="text-2xl font-semibold text-[#475467] ">Back</h4>
            </div>
          </div>
        </div>
        {/* for mobile*/}
         <div className="sm:hidden block">
        <div className="flex gap-4 px-4">
          <button className="px-4 py-2 border border-gray-300 text-gray-600 rounded-md hover:bg-gray-100">
            Cancel
          </button>
          <button disabled={loader} onClick={handleUpdateUser} className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
            {loader ? "Saving..." : "Save"}
          </button>
        </div>
        </div>

      </div>

      <div className=" lg:w-[50%] w-full m-auto my-6  lg:px-0 px-4 ">
        <form className="bg-white w-full rounded-lg space-y-4">
        {/* name and email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b py-4">
            <div className='flex flex-col gap-1'>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                value={editForm?.name}
                placeholder="Enter your name"
                title="Enter your name"
                onChange={(e)=>setEditForm({...editForm,name:e.target.value})}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md "
              />
            </div>
             <div className="flex flex-col gap-1">
              <label className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                value={editForm?.email}
                onChange={(e)=>setEditForm({...editForm,email:e.target.value})}
                placeholder="Enter your email"
                title="Enter your email"
                className="block w-full px-3 py-2 border mt-1 border-gray-300 rounded-md"
              />
            </div>
          </div>
          {/* Profile Upload */}
          <div className="flex sm:flex-row flex-col  sm:gap-8 gap-4 pb-4   border-b">
            <img
              className="inline-block h-20 w-20 rounded-full"
              src={editForm?.profileImageUrl || "/images/defaultProfilePic.png"}
              alt="profile"
            />
            <div className="w-full flex border justify-center py-5 rounded-xl">
              <div className="flex flex-col justify-center gap-2">
                <img
                  src="/images/drop file.svg"
                  alt=""
                  className="h-16 w-16 self-center "
                />

                <label
                  htmlFor="file-upload"
                  className="block  cursor-pointer text-[#475467]"
                >
                  <span className="text-[#FFB604] font-semibold">
                    Click to upload
                  </span>{" "}
                  or drag and drop
                </label>
                <p className="text-sm text-gray-500 text-center">
                  SVG, PNG, JPG or GIF (max. 800x400px)
                </p>
                {/* Hidden file input */}
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  accept="image/*"
                />
              </div>
            </div>
          </div>

          {/* Country */}
          <div className="border-b pb-4">
            <div className="relative ">
              <label className="block text-sm font-medium text-gray-700" htmlFor='bio' >
                Bio
              </label>
              <textarea
                id='bio'
                placeholder='Enter your bio'
                title='Enter your bio'
                name='bio'
                value={editForm?.bio}
                onChange={(e)=>setEditForm({...editForm,bio:e.target.value})}
                className="block w-full px-8 py-2 font-semibold border mt-1 border-gray-300 rounded-md "
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 justify-end">
            <button
              type="button"
              className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loader}
              onClick={handleUpdateUser}
              className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditProfile;