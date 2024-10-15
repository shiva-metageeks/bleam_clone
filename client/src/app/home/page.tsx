"use client"
import UserNavbar from "@/components/navbar/userNavbar";
import UserProfileSection from "@/components/homePage/userProfileSection";
import Categories from "@/components/homePage/categories";

const HomePage = () => {
  return (
    <div>
      <UserNavbar/>
      <UserProfileSection/>
      <Categories/>
    </div>
  );
};

export default HomePage;
