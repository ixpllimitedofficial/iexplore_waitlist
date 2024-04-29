"use client";

import React, { useEffect } from "react";
import ProfileCard from "@/components/UI/AdminUI/Cards/ProfileCard";
import { userStore } from "@/store/user";
import { Button } from "@/components/UI/button";

const Header = () => {
  // const userData = userStore((state: any) => state.user);
  // const fetchExternalData = userStore((state: any) => state.fetchExternalData);

  return (
    <header className="flex flex-col-reverse gap-7 lg:flex-row items-center justify-between">
      <div className="self-start">
        <p className="font-bold text-2xl">Dashboard</p>
        <p className="text-[#F7D098] text-sm mt-1">
          Hi, Anita Cruz. Welcome back to iExplore Admin!
        </p>
        {/* <Button
          onClick={fetchExternalData}
          className="mt-4"
          variant="secondary"
        >
          Test button
        </Button> */}
      </div>

      <ProfileCard />
    </header>
  );
};

export default Header;
