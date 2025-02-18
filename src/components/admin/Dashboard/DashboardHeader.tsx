"use client";

import React, { useEffect } from "react";
import ProfileCard from "@/components/UI/AdminUI/Cards/ProfileCard";
import { adminStore } from "@/store/admin";

const Header = () => {
  const admin = adminStore((state) => state.admin);
  const displayName = admin?.user?.username || admin?.user?.email?.split('@')[0] || 'Admin';

  return (
    <header className="flex flex-col-reverse gap-7 pt-28 lg:pt-6 p-6 sm:px-7 lg:flex-row items-center justify-between">
      <div className="self-start">
        <p className="font-bold text-2xl">Dashboard</p>
        <p className="text-gold-500 text-sm mt-1">
          Hi, <span>{displayName}</span> Welcome back to iExplore Admin!
        </p>
      </div>

      <ProfileCard />
    </header>
  );
};

export default Header;
