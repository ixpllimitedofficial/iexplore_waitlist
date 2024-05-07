"use client";

import React, { useEffect } from "react";
import ProfileCard from "@/components/UI/AdminUI/Cards/ProfileCard";
import { userStore } from "@/store/user";
import { Button } from "@/components/UI/button";

const Header = () => {
  const userData = userStore((state: any) => state.user);
  
  return (
    <header className="flex flex-col-reverse gap-7 lg:flex-row items-center justify-between">
      <div className="self-start">
        <p className="font-bold text-2xl">Dashboard</p>
        <p className="text-gold-500 text-sm mt-1">
          Hi, Anita Cruz. Welcome back to iExplore Admin!
        </p>
      </div>

      <ProfileCard />
    </header>
  );
};

export default Header;
