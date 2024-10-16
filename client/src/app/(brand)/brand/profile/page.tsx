import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { RiArrowRightSLine } from "react-icons/ri";

const BrandProfile = () => {
  return (
    <div>
      <div className="w-full">
        <div className="h-52">
          <img
            src="https://s3-alpha-sig.figma.com/img/c83a/087b/e1593781d9824cdbd991d7501ed1daa7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I~vd6B-5MrVo2AWO0zL7V7KqJUIn~rYorewMK72Vfl3eNLqTowRgljI3Xh~rEpSc-yntouCdW8tKn4f6uvx05kLOsPd7WSykeInxBi6eF9n9ViWGkj87C415RAJJlRxDh0g9qN7FCpnmh61-iO32GB3m-EiGaMaX2ghcZsBmf3s7Ci3V5HiAq7oe~ZVjPa5K9Q6wjMGCu7EQWfXVSv98lsCwbSU~bMFlhYoz7wLIVktVclgVpHC~XXQ5gOItlOHvxfd5p38s3efYpRVs1CNIk~vBykZZQ5SEJqu6sDtPilXVyKh1qY2wyq9XqxgG3DbFEIIw0lJen3fSNrg8AuJ9yw__" // Replace with your background image
            className="w-full h-full object-cover"
            alt="Background"
          />
        </div>

        {/* Profile Section */}
        <div className="flex  justify-between items-cente py-4 lg:w-[90%] lg:m-auto sm:border-b lg:px-0 px-3 ">
          {/* Left - Profile Info */}
          <div className="flex items-center space-x-2 sm:flex-row flex-col ">
            <div className="relative">
              <img
                src="https://s3-alpha-sig.figma.com/img/964e/f072/9a6eefcbb85b20d81969a7235b4ac143?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nG5M0H5JGfyV8fJNCsiQVmtIa~nv6zorwb7MYN20OmtE~0t7XpIBU-77y9VYvOH~VvipBRrnHYCU5p~B4coXoTOdPrHIIBVNh0arN10ys1av7y6rSbX9Y1sH2gwPlKz7CBA~xgsNk0oEoTCLgibqo3INwP~EQKulqp3WeA7n4Y8EJAjUV3YJk-oHykt7Cz9rcALA3DisXrCefrRUJsXxSp4PrzKLRkIb7wo4Ka38ZHgJTcAGaPMBxkl3EcZtEHaietrzBgxMLFrZvwwV1EcAFCA09CayjZ6p7GRnUoUQvWEkMjjdZZFDiMfT-GLk6hkth2Ed~ksGESQVjkC~Cz4vRg__" // Replace with your profile image
                className="lg:w-28 lg:h-28 w-24 h-24 object-cover rounded-full border-4 border-white -mt-14 "
                alt="Profile"
              />
              <div className="absolute bottom-0 right-0  text-white p-1 rounded-full">
                <img
                  src="/asset/Verified tick.svg"
                  alt=""
                  className="h-7 w-7"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <div className="lg:block hidden">
                <div className="flex gap-3 items-center">
                  <img
                    src="/asset/Home.svg"
                    alt=""
                    className="cursor-pointer"
                  />
                  <RiArrowRightSLine className="h-6 w-6 text-[#D0D5DD]" />
                  <h3 className="text-[#475467] hover:text-[#344054] font-semibold cursor-pointer">
                    Setting
                  </h3>
                  <RiArrowRightSLine className="h-6 w-6 text-[#D0D5DD]" />
                  <h3 className="text-[#475467] font-semibold hover:text-[#344054] cursor-pointer">
                    Profile
                  </h3>
                </div>
              </div>

              <div>
                <h1 className="text-xl font-semibold">Olivia Rhye</h1>
                <p className="text-gray-500">@olivia</p>
              </div>
            </div>
          </div>

          {/* Right - Actions */}

          <div className="sm:block hidden">
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 border border-gray-300 text-gray-600 rounded-md hover:bg-gray-100">
                Cancel
              </button>
              <button className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
                Save
              </button>

              {/* Search */}
              <div className="relative ">
                <input
                  type="text"
                  placeholder="Search"
                  className="px-7 py-2 border border-gray-300 lg:w-72 rounded-md focus:outline-none"
                />
                <LuSearch className="absolute top-3 left-1.5 h-5 w-5 text-[#667085]" />
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
          <button className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
            Save
          </button>
        </div>
        </div>

      </div>

      <div className=" lg:w-[50%] w-full m-auto my-6  lg:px-0 px-4 ">
        <form className="bg-white w-full rounded-lg space-y-4">
          {/* First and Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b py-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First name
              </label>
              <input
                type="text"
                defaultValue="Olivia"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md "
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last name
              </label>
              <input
                type="text"
                defaultValue="Rhye"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md "
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="border-b pb-4">
            <div className=" sm:w-4/5 ">
              <label className="block text-sm font-medium text-gray-700">
                Email address
              </label>

              <input
                type="email"
                defaultValue="olivia@untitledui.com"
                className="block w-full px-3 py-2 border mt-1 border-gray-300 rounded-md"
              />
            </div>
          </div>

          {/* Profile Upload */}

          <div className="flex sm:flex-row flex-col  sm:gap-8 gap-4 pb-4   border-b">
            <img
              className="inline-block h-20 w-20 rounded-full"
              src="https://s3-alpha-sig.figma.com/img/964e/f072/9a6eefcbb85b20d81969a7235b4ac143?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nG5M0H5JGfyV8fJNCsiQVmtIa~nv6zorwb7MYN20OmtE~0t7XpIBU-77y9VYvOH~VvipBRrnHYCU5p~B4coXoTOdPrHIIBVNh0arN10ys1av7y6rSbX9Y1sH2gwPlKz7CBA~xgsNk0oEoTCLgibqo3INwP~EQKulqp3WeA7n4Y8EJAjUV3YJk-oHykt7Cz9rcALA3DisXrCefrRUJsXxSp4PrzKLRkIb7wo4Ka38ZHgJTcAGaPMBxkl3EcZtEHaietrzBgxMLFrZvwwV1EcAFCA09CayjZ6p7GRnUoUQvWEkMjjdZZFDiMfT-GLk6hkth2Ed~ksGESQVjkC~Cz4vRg__"
              alt="profile"
            />
            <div className="w-full flex border justify-center py-5 rounded-xl">
              <div className="flex flex-col justify-center gap-2">
                <img
                  src="/asset/drop file.svg"
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
            <div className="sm:w-4/5 relative ">
              <label className="block text-sm font-medium text-gray-700">
                Country
              </label>

              <input
                type="text"
                defaultValue="Australia"
                className="block w-full px-8 py-2 font-semibold border mt-1 border-gray-300 rounded-md "
              />
              <LuSearch className="absolute top-9 left-1.5 h-5 w-5 text-[#667085]" />
            </div>
          </div>

          {/* Timezone */}
          <div className="border-b pb-4">
            <div className="sm:w-4/5">
              <label className="block text-sm font-medium text-gray-700">
                Timezone
              </label>

              <div className="relative">
                <select
                  defaultValue="PST"
                  className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md "
                >
                  <option value="PST">
                    Pacific Standard Time (PST) UTC-08:00
                  </option>
                  <option value="EST">
                    Eastern Standard Time (EST) UTC-05:00
                  </option>
                  <option value="CST">
                    Central Standard Time (CST) UTC-06:00
                  </option>
                  <option value="MST">
                    Mountain Standard Time (MST) UTC-07:00
                  </option>
                  <option value="GMT">
                    Greenwich Mean Time (GMT) UTC+00:00
                  </option>
                </select>

                {/* <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.58 7.41L10 11.83l4.42-4.42L16 8.83 10 14.83 4 8.83l1.58-1.42z" />
                </svg>
                </div> */}
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              rows={5}
              defaultValue="Short Description about community"
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md"
            ></textarea>
            <p className="text-sm text-gray-400 mt-1">275 characters left</p>
          </div>

          {/* Rich Text Tools */}
          <div className=" sm:max-w-xs ">
            <div className="relative">
              <select className="block appearance-none w-full bg-white border border-gray-300 rounded-lg py-2 px-4 pr-8 leading-tight focus:outline-none ">
                <option>Regular</option>
                <option>Medium</option>
                <option>Bold</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.58 7.41L10 11.83l4.42-4.42L16 8.83 10 14.83 4 8.83l1.58-1.42z" />
                </svg>
              </div>
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
              className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BrandProfile;
