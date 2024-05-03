"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ProfileImage from "@/assets/img/AdminPageImages/ReferralProfileImage.png";
import { Badge } from "@/components/UI/badge";
import EditUserDetailsDialog from "./EditUserDetailsDialog";
import UserDrinksTable from "./UserDrinksTable";
import UserFavoritesTable from "./UserFavoritesTable";

const UserDetails = () => {
  const pathname = usePathname();

  return (
    <section className="mt-5">
      {/* user details */}
      <div className="grid grid-cols-3 gap-6">
        <div className="flex flex-col items-center gap-3 col-span-1 bg-[#333333] p-4 rounded-2xl">
          <div className="flex items-center w-full gap-3">
            <Image
              src={ProfileImage}
              alt="ProfileImage"
              className="h-[100px] w-auto"
            />

            <div className="">
              <p className="font-bold text-2xl text-gold-500">
                Christine Brooks
              </p>
              <p className="font-medium">04 Sep 1973</p>
              <p className="text-sm">Joined 5 months ago</p>
            </div>
          </div>

          {/* divider */}
          <div className="border-t-2 border-[#979797] w-full"></div>

          <p className="text-sm">Active: 1hr 30mns ago</p>
        </div>

        <div className="flex flex-col justify-center gap-3 col-span-1 bg-[#333333] p-4 rounded-2xl">
          <p className="font-bold text-xl text-gold-500">User details:</p>

          <div className="flex justify-between">
            <div>
              <p className="text-sm">Phone No:</p>
              <p className="font-semibold text-sm text-gold-500">09123456789</p>
            </div>

            <div>
              <p className="text-sm">City:</p>
              <p className="font-semibold text-sm text-gold-500">Lagos</p>
            </div>
          </div>

          <div>
            <p className="text-sm">Email Address:</p>
            <p className="font-semibold text-sm text-gold-500">brookschristine.mail.com</p>
          </div>
        </div>
        <div>
          <div className="flex gap-5 justify-center">
            <Badge className="bg-[#00b69b48] text-[#00B69B] text-sm">
              Active
            </Badge>
            <EditUserDetailsDialog />
          </div>
        </div>
      </div>

      {/* preference */}
      <div className="mt-5 bg-[#333333] p-5 rounded-2xl">
        <p className="font-bold text-xl text-gold-500 mb-2">Preference</p>

        <div className="flex flex-wrap gap-3 mt-3">
          <p className="border-2 border-gold-500 px-5 py-1 text-sm font-semibold rounded-xl">
            Bar
          </p>
          <p className="border-2 border-gold-500 px-5 py-1 text-sm font-semibold rounded-xl">
            Club
          </p>
          <p className="border-2 border-gold-500 px-5 py-1 text-sm font-semibold rounded-xl">
            Beach
          </p>
          <p className="border-2 border-gold-500 px-5 py-1 text-sm font-semibold rounded-xl">
            Lounge
          </p>
          <p className="border-2 border-gold-500 px-5 py-1 text-sm font-semibold rounded-xl">
            Hotel
          </p>
        </div>
      </div>

      {/* drinks */}
      <UserDrinksTable />

      {/* favourites */}
      <UserFavoritesTable />

      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mt-5"
      >
        <path
          d="M13.5 16L10.725 12.3C10.5917 12.1222 10.5917 11.8778 10.725 11.7L13.5 8"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <circle cx="12" cy="12" r="10" stroke="white" stroke-width="1.5" />
      </svg>
    </section>
  );
};

export default UserDetails;
