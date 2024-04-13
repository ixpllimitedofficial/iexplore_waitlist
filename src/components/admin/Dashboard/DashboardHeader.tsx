import React from "react";
import ProfileCard from "@/components/UI/AdminUI/ProfileCard";

const Header = () => {
  return (
    <header className="flex flex-col-reverse gap-7 lg:flex-row items-center justify-between">
      <div className="self-start">
        <p className="font-bold text-2xl lg:text-3xl">Dashboard</p>
        <p className="text-[#F7D098] text-sm mt-1">
          Hi, Anita. Welcome back to iExplore Admin!
        </p>
      </div>

      <ProfileCard />
    </header>
  );
};

export default Header;
