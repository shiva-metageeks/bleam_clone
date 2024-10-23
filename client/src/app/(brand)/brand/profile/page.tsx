"use client";
import { icons,nextImports } from "@/utils/imports/config";
import { useGetCurrentBrand } from "@/hooks/brand/brand";
const { Link,Image } = nextImports;
const { FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaDiscord, FaTelegram } = icons;

const BrandProfilePage = () => {
  const {brand} = useGetCurrentBrand();
  console.log("brand",brand);
  return (
    <div className="w-full min-h-screen bg-white text-black">
      <div className="w-[90%] mx-auto p-4 flex justify-center items-start gap-4">
        <div className="w-[30%] h-[100vh]">
          <div className="flex flex-col justify-center items-center bg-white text-black rounded-sm p-4 shadow-md ">
              <Image
                src={brand?.profileImageUrl || "/images/defaultProfilePic.png"}
                className="rounded-full"
                alt="profile"
                width={200}
                height={200}
              />
            <div className="text-lg font-bold">{brand?.name}</div>
            <div className="text-zinc-700 text-sm mb-2">{brand?.email}</div>
            <p className="text-zinc-700 text-sm mb-4">{brand?.organizationName}</p>
            <Link href="/brand/edit-profile" className="px-4 py-2 bg-orange-500 text-white rounded-full mb-2">Edit Profile</Link>
            <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                <div className="text-zinc-700 text-sm">100</div>
                <div className="text-zinc-700 text-sm">Following</div>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                <div className="text-zinc-700 text-sm">100</div>
                <div className="text-zinc-700 text-sm">Followers</div>
              </div>
            </div>
            <div className="w-full mb-2 flex justify-center items-center gap-2">
              <div className="border-1 border-zinc-700 w-full px-4 py-2 rounded-lg">
                <input
                  type="text"
                  placeholder="Write a tweet..."
                  className="w-full border-1 outline rounded-lg px-4 py-2 border-gray-700"
                  value="referral"
                />
              </div>
              <div className="px-4 py-2 bg-orange-500 text-white rounded-lg">
                Copy
              </div>
            </div>
            <div className="w-full flex flex-col justify-start items-center gap-2">
              <div className="text-lg font-semibold text-zinc-700">
                Connected Accounts
              </div>
              <div className="w-full flex flex-wrap justify-center items-center gap-2">
                <div className="px-4 py-2 cursor-pointer rounded-full bg-gray-200 font-semibold text-orange-500 shadow-sm border-1 border-zinc-700">
                  <FaInstagram />
                </div>
                <div className="px-4 py-2 cursor-pointer rounded-full bg-gray-200 font-semibold text-orange-500 shadow-sm border-1 border-zinc-700">
                  <FaTwitter />
                </div>
                <div className="px-4 py-2 cursor-pointer rounded-full bg-gray-200 font-semibold text-orange-500 shadow-sm border-1 border-zinc-700">
                  <FaFacebook />
                </div>
                <div className="px-4 py-2 cursor-pointer rounded-full bg-gray-200 font-semibold text-orange-500 shadow-sm border-1 border-zinc-700">
                  <FaLinkedin />
                </div>
                <div className="px-4 py-2 cursor-pointer rounded-full bg-gray-200 font-semibold text-orange-500 shadow-sm border-1 border-zinc-700">
                  <FaDiscord />
                </div>
                <div className="px-4 py-2 cursor-pointer rounded-full bg-gray-200 font-semibold text-orange-500 shadow-sm border-1 border-zinc-700">
                  <FaTelegram />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[70%] h-[100vh] text-black p-4 shadow-md rounded-lg">
          <div className="w-full flex flex-col justify-start items-start gap-4">
            <div className="w-full min-h-[50vh] flex flex-col justify-start items-start shadow-sm rounded-sm p-4">
              <div className="w-full flex justify-between items-center mb-4">
                <div className="text-lg font-semibold">
                  My Created Competitions
                </div>
                <div className="flex justify-center items-center gap-2">
                  <Link href="/brand/create-competition" className="px-4 py-2 bg-orange-500 text-white rounded-full">
                    Create Competition
                  </Link>
                  <Link href="/brand/my-competition" className="px-4 py-2 bg-orange-500 text-white rounded-full">
                    See all
                  </Link>
                </div>
              </div>
              <div className="w-full flex flex-wrap justify-start items-center gap-2 p-4 bg-gray-50 shadow-sm rounded-md">
                {
                  brand?.competitions.map((competition) => (
                    <Link href={`/brand/competition/${competition.id}`} className="flex flex-col justify-start items-start h-full gap-2 px-4 py-2 rounded-lg border-1 border-zinc-700 bg-white border shadow-sm">
                      <div className="w-full flex justify-center items-center max-h-[100px]" >
                      <img src={competition?.imageUrl} alt="competition" width={100} height={100} />
                      </div>
                      <div className="text-zinc-900 text-sm font-semibold ">{competition.name}</div>
                    </Link>
                  ))
                }
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-2">
              <div className="flex justify-center items-center">
                <Image
                  src="/images/noFriends.png"
                  alt="profile"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <div className="text-xl font-semibold text-zinc-700">
                You have no friends yet
              </div>
              <div className="text-zinc-700 text-sm">
                Be the first to follow someone
              </div>
              <button className="px-4 py-2 bg-orange-500 text-white rounded-full">
                Find Friends
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandProfilePage;
