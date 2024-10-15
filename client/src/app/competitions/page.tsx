"use client";
import React, { useState } from "react";
import { icons } from "@/utils/imports/config";
const { LuSearch, MdArrowOutward } = icons;
import UserNavbar from "@/components/navbar/userNavbar";
import Filter from "@/components/competition/filter";

const cards = [
  {
    id: 1,
    image: "/images/CompetitionImage.png",
    category: "Design",
    title: "Competitions 1",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
  },
  {
    id: 2,
    image: "/images/CompetitionImage.png",
    category: "Design",
    title: "Competitions 2",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
  },
  {
    id: 3,
    image: "/images/CompetitionImage.png",
    category: "Design",
    title: "Competitions 3",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
  },
  {
    id: 4,
    image: "/images/CompetitionImage.png",
    category: "Design",
    title: "Competitions 4",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
  },
  {
    id: 5,
    image: "/images/CompetitionImage.png",
    category: "Design",
    title: "Competitions 5",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
  },
  {
    id: 6,
    image: "/images/CompetitionImage.png",
    category: "Design",
    title: "Competitions 6",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
  },
];

const CompetitionsPage = () => {
  const [selectedTeams, setSelectedTeams] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const teams = [
    { id: 1, name: "Design", color: "bg-yellow-200" },
    { id: 2, name: "Product", color: "bg-blue-200" },
    { id: 3, name: "Marketing", color: "bg-purple-200" },
    { id: 4, name: "Management", color: "bg-red-200" },
    { id: 5, name: "Sales", color: "bg-green-200" },
    { id: 6, name: "Product", color: "bg-blue-200" },
    { id: 7, name: "Operations", color: "bg-blue-200" },
  ];

  const roles = [
    "Backend Developer",
    "Frontend Developer",
    "Fullstack Developer",
    "Product Designer",
    "Product Manager",
    "QA Engineer",
    "UX Copywriter",
    "UX Designer",
  ];

  const filteredRoles = roles.filter((role) =>
    role.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="flex flex-col">
      <UserNavbar />
    <div className="p-4">
      <div className="main flex justify-between gap-4">
        <Filter />
        <div className="w-4/5">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="What are you looking for ?"
              className="px-7 py-2 border border-gray-300  rounded-md focus:outline-none w-full"
            />
            <LuSearch className="absolute top-3 left-1.5 h-5 w-5 text-[#667085]" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-6 my-8">
            {cards.map((card) => (
              <div key={card.id} className="p-2">
                <div className="flex flex-col gap-2">
                  <img
                    src={card.image}
                    alt={card.title}
                    className=" w-full h-72 object-cover rounded-xl"
                  />
                  <p className="text-sm text-purple-600 font-semibold mt-4">
                    {card.category}
                  </p>
                  <div className="flex justify-between items-center">
                    <h2 className="text-3xl font-semibold text-gray-800 ">
                      {card.title}
                    </h2>
                    <MdArrowOutward className="h-6 w-6"/>
                  </div>
                  <p className="text-gray-600 ">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CompetitionsPage;
