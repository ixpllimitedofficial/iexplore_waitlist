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
    <section className="lg:mt-5">
      {/* User Details */}
      <div className="bg-[#23232325] grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 p-4">
        {/* Profile Card */}
        <div className="flex flex-col items-start justify-center gap-3 bg-[#23232325] px-2 lg:py-6 rounded-2xl h-auto w-full">
          <div className="flex flex-row items-start gap-3 border border-[#4D4D4D] p-3 rounded-md bg-[#23232325] w-full">
            {/* Profile Image */}
            <Image
              src={ProfileImage}
              alt="Profile Image"
              className="h-20 w-20 rounded-full object-cover"
            />
            {/* Profile Details */}
            <div className="w-full flex flex-col items-start text-left">
              <p className="text-lg lg:text-xl font-extrabold text-white whitespace-nowrap">
                Christine Brooks
              </p>
              <p className="text-sm text-gray-400">Joined 5 months ago</p>
              <p className="text-sm text-gray-400">DOB: 04/09/1973</p>
              <p className="text-sm text-gray-400">Last active: 2 hours ago</p>
            </div>
          </div>
        </div>

        {/* User Details Card */}
        <div className="flex flex-col items-start justify-center gap-3 bg-[#23232325] px-2 py-6 rounded-2xl h-auto w-full">
          <div className="w-full flex flex-col sm:flex-row items-start gap-2 border border-[#4D4D4D] px-3 py-3 rounded-md bg-[#23232325]">
            <div className="flex flex-col items-start text-left space-y-1">
              <p className="text-lg lg:text-xl font-extrabold text-white">User Details</p>
              <p className="text-sm text-gray-400 whitespace-nowrap">Phone: +234 801 234 5678</p>
              <p className="text-sm text-gray-400 whitespace-nowrap">City: Ikeja, Lagos state</p>
              <p className="text-sm text-gray-400">Email address: kunlejacob123@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Status and Actions Card */}
        <div className="bg-[#23232325] flex flex-col items-center justify-center gap-3 px-4 py-6 rounded-2xl h-auto w-full">
          <div className="w-full flex flex-row lg:flex-col items-center justify-center gap-5">
            <span className="bg-[#008800] border border-[#b4ddb4] whitespace-nowrap px-4 py-2 rounded-full text-white font-semibold text-center">
              User Status: Active
            </span>
            <EditUserDetailsDialog />
          </div>
        </div>
      </div>
      {/* Preferences */}
      <div className="mx-4 lg:mx-0">
        <div className="w-[343px h-[182px] w-full lg:h-[80px] mt-5 bg-[#4D4D4D] p-5 rounded-2xl ">
          <div className="flex flex-col lg:flex-row gap-4 lg:justify-start items-center">
            {/* Preference Title */}
            <p className="text-center font-bold text-xl text-white">Preference</p>

            {/* Preferences List */}
            <div className="flex lg:flex-row flex-wrap  justify-center items-center gap-3">
              <p className="border-2 border-gold-500 px-3 py-1 text-sm font-semibold rounded-full hover:bg-gold-500 hover:text-black">
                Bar
              </p>
              <p className="border-2 border-gold-500 px-3 py-1 text-sm font-semibold rounded-full hover:bg-gold-500 hover:text-black">
                Club
              </p>
              <p className="border-2 border-gold-500 px-3 py-1 text-sm font-semibold rounded-full hover:bg-gold-500 hover:text-black">
                Beach
              </p>
              <p className="border-2 border-gold-500 px-3 py-1 text-sm font-semibold rounded-full hover:bg-gold-500 hover:text-black">
                Lounge
              </p>
              <p className="border-2 border-gold-500 px-3 py-1 text-sm font-semibold rounded-full hover:bg-gold-500 hover:text-black">
                Hotel
              </p>
              <p className="border-2 border-gold-500 px-3 py-1 text-sm font-semibold rounded-full hover:bg-gold-500 hover:text-black">
                Hotel
              </p>
              <p className="border-2 border-gold-500 px-3 py-1 text-sm font-semibold rounded-full hover:bg-gold-500 hover:text-black">
                Hotel
              </p>
              <p className="border-2 border-gold-500 px-3 py-1 text-sm font-semibold rounded-full hover:bg-gold-500 hover:text-black">
                Hotel
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Drinks */}
      <div className="mt-5 px-4 lg:px-0">
        <UserDrinksTable />
      </div>

      {/* Favorites */}
      <div className="mt-5 px-4 lg:px-0">
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
