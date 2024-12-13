"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ProfileImage from "@/assets/img/AdminPageImages/ReferralProfileImage.png";
import EditUserDetailsDialog from "./EditUserDetailsDialog";
import UserDrinksTable from "./UserDrinksTable";
import UserFavoritesTable from "./UserFavoritesTable";

const UserDetails = () => {
  const pathname = usePathname();

  return (
    <section className="mt-5">
      {/* User Details */}
      <div className="bg-[#23232325] grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {/* Profile Card */}
        <div className="flex flex-col items-start justify-center gap-3 bg-[#23232325] p-6 md:p-4 rounded-2xl h-full w-full  l">
          <div className="w-full flex flex-row items-start gap-3 border border-[#4D4D4D] p-3 rounded-md bg-[#23232325] h-full">
            {/* Profile Image */}
            <Image
              src={ProfileImage}
              alt="Profile Image"
              className="h-20 w-20 rounded-full object-cover"
            />

            {/* Profile Details */}
            <div className="flex flex-col items-start text-left">
              <p className="text-2xl font-extrabold text-white">Christine Brooks</p>
              <p className="text-sm text-gray-400">Joined 5 months ago</p>
              <p className="text-sm text-gray-400">DOB: 04/09/1973</p>
              <p className="text-sm text-gray-400">Last active: 2 hours ago</p>
            </div>
          </div>
        </div>

        {/* User Details Card */}
        <div className="flex flex-col items-start justify-center gap-3 bg-[#23232325] p-6 md:p-4 rounded-2xl h-full w-full lg:w-[356px]">
          <div className="w-full flex flex-col sm:flex-row items-start gap-2 border border-[#4D4D4D] px-3 py-3 rounded-md bg-[#23232325] h-full">
            <div className="flex flex-col items-start text-left space-y-1">
              <p className="text-2xl font-extrabold text-white">User Details</p>
              <p className="text-sm text-gray-400">Phone: +234 801 234 5678</p>
              <p className="text-sm text-gray-400">City: Ikeja, Lagos state</p>
              <p className="text-sm text-gray-400">
                Email address: kunlejacob123@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Status and Actions Card */}
        <div className="bg-[#23232325] flex flex-col items-center justify-center gap-3  p-4 rounded-2xl h-full w-full md:w-[356px]">
          <div className="w-full flex flex-row md:flex-col items-center justify-center gap-5">
            <span className="bg-[#008800] border border-[#b4ddb4] px-4 py-2 rounded-full text-white font-semibold whitespace-nowrap">
              User Status: Active
            </span>
            <EditUserDetailsDialog />
          </div>
        </div>
      </div>


      {/* Preferences */}
      <div className="mt-5 bg-[#23232325] p-5 rounded-2xl">
        <div className="flex flex-row gap-4">
          {/* Preference Title */}
          <p className="text-center font-bold text-xl text-gold-500">Preference</p>

          {/* Preferences List */}
          <div className="flex flex-wrap items-center gap-3">
            <p className="border-2 border-gold-500 px-3 py-1 text-sm font-semibold rounded-xl">
              Bar
            </p>
            <p className="border-2 border-gold-500 px-3 py-1 text-sm font-semibold rounded-xl">
              Club
            </p>
            <p className="border-2 border-gold-500 px-3 py-1 text-sm font-semibold rounded-xl">
              Beach
            </p>
            <p className="border-2 border-gold-500 px-3 py-1 text-sm font-semibold rounded-xl">
              Lounge
            </p>
            <p className="border-2 border-gold-500 px-3 py-1 text-sm font-semibold rounded-xl">
              Hotel
            </p>
            <p className="border-2 border-gold-500 px-3 py-1 text-sm font-semibold rounded-xl">
              Hotel
            </p>
            <p className="border-2 border-gold-500 px-3 py-1 text-sm font-semibold rounded-xl">
              Hotel
            </p>
            <p className="border-2 border-gold-500 px-3 py-1 text-sm font-semibold rounded-xl">
              Hotel
            </p>
          </div>
        </div>
      </div>


      {/* Drinks */}
      <div className="mt-5">
        <UserDrinksTable />
      </div>

      {/* Favorites */}
      <div className="mt-5">
        <UserFavoritesTable />
      </div>

      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mt-5 mx-auto"
      >
        <path
          d="M13.5 16L10.725 12.3C10.5917 12.1222 10.5917 11.8778 10.725 11.7L13.5 8"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" />
      </svg>
    </section>
  );
};

export default UserDetails;
