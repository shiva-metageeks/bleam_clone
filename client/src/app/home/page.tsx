"use client"
import UserNavbar from "@/components/navbar/userNavbar";
import UserProfileSection from "@/components/homePage/userProfileSection";
import Categories from "@/components/homePage/categories";
import CompetitionSection from "@/components/homePage/competition";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <UserNavbar/>
      <UserProfileSection/>
      <Categories/>
      <CompetitionSection/>
    </div>
  );
};

export default HomePage;
