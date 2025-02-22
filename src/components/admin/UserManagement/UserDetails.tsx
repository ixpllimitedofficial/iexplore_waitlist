"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ProfileImage from "@/assets/img/AdminPageImages/ReferralProfileImage.png";
import EditUserDetailsDialog from "./EditUserDetailsDialog";
import UserDrinksTable from "./UserDrinksTable";
import UserFavoritesTable from "./UserFavoritesTable";

type UserData = {
  id: string;
  first_name: string;
  last_name: string;
  created_at: string;
  date_of_birth: string;
  country: string;
  last_login: string | null;
  phone: string ;
  email: string;
  is_active: boolean;
};

const UserDetails: React.FC = () => {
  const pathname = usePathname();
  const userId = pathname.split("/").pop() || ""; // Ensure userId is a string
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && userId) {
      const fetchUserData = async () => {
        try {
          const response = await fetch(
            `https://ixpl-backend.vercel.app/api/v1/admin/users/${encodeURIComponent(userId)}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );

          if (!response.ok) {
            throw new Error("Failed to fetch user data");
          }

          const data: UserData = await response.json();
          setUserData(data);
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      };

      fetchUserData();
    }
  }, [userId]);

  if (!userData) {
    return <p className="text-center text-gray-400">Loading user details...</p>;
  }

  return (
    <section className="lg:mt-5">
      <div className="bg-[#23232325] grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 p-4">
        <div className="flex flex-col items-start justify-center gap-3 bg-[#23232325] border border-[#4D4D4D] px-2 lg:py-6 rounded-2xl h-auto w-full">
          <div className="flex flex-row items-start gap-3  p-3 rounded-md w-full">
            <Image
              src={ProfileImage} // Replace with dynamic image if available
              alt="Profile Image"
              className="h-20 w-20 rounded-full object-cover"
            />
            <div className="w-full flex flex-col items-start text-left">
              <p className="text-lg lg:text-xl font-extrabold text-white whiteSpace-no">
                {userData.first_name} {userData.last_name}
              </p>
              <p className="text-sm text-gray-400">
                Joined: {new Date(userData.created_at).toDateString()}
              </p>
              <p className="text-sm text-gray-400">DOB: {userData.date_of_birth}</p>
              <p className="text-sm text-gray-400">
                Last active: {userData.last_login ? new Date(userData.last_login).toLocaleString() : "N/A"}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center gap-3 bg-[#23232325] border border-[#4D4D4D]  px-2 py-6 rounded-2xl h-auto w-full">
          <div className="w-full flex flex-col sm:flex-row items-start gap-2 px-3 py-3 rounded-md ">
            <div className="flex flex-col items-start text-left space-y-1">
              <p className="text-lg lg:text-xl font-extrabold text-white">User Details</p>
              <p className="text-sm text-gray-400">Phone: {userData.phone || "N/A"}</p>
              <p className="text-sm text-gray-400">Email: {userData.email}</p>
            </div>
          </div>
        </div>

        <div className="bg-[#23232325] flex flex-col items-center justify-center gap-3 px-4 py-6 rounded-2xl h-auto w-full">
          <span
            className={`border px-4 py-2 rounded-full text-white font-semibold ${
              userData.is_active ? "bg-green-500 border-green-700" : "bg-red-500 border-red-700"
            }`}
          >
            Status: {userData.is_active ? "Active" : "Inactive"}
          </span>
          <EditUserDetailsDialog userId={userId} initialUserData={userData} />
        </div>
      </div>
      <div className="mt-5 px-4 lg:px-0">
        <UserDrinksTable  />
      </div>
      <div className="mt-5 px-4 lg:px-0">
        <UserFavoritesTable  />
      </div>
    </section>
  );
};

export default UserDetails;
