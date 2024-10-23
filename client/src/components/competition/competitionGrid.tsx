import {Competition} from "@/hooks/competition/types";
import Link from "next/link";
import { icons } from "@/utils/imports/config";
const { LuSearch, MdArrowOutward } = icons;
const competitionGrid = ({competitions}:{competitions:Competition[]}) => {
    return (
         <div className="w-4/5 p-4 rounded-md">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="What are you looking for ?"
              className="px-7 py-2 border border-gray-300  rounded-md focus:outline-none w-full"
            />
            <LuSearch className="absolute top-3 left-1.5 h-5 w-5 text-[#667085]" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-6 my-8 p-4">
            {competitions?.map((competition:Competition) => (
              <Link href={`/competitions/${competition.id}`} key={competition.id} className="p-2">
                <div className="flex flex-col">
                  <img
                    src={competition?.imageUrl || "/images/CompetitionImage.png"}
                    alt={competition?.name}
                    className=" w-full h-72 object-cover rounded-xl"
                  />
                  <div className="flex justify-between items-center">
                    <div className="text-xl font-semibold text-gray-800 ">
                      {competition.name}
                    </div>
                    <MdArrowOutward className="h-6 w-6"/>
                  </div>
                  <p className="text-gray-600 ">{competition.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
    );
}

export default competitionGrid;