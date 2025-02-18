'use client'

import React from "react";
import Image from "next/image";
import SignOutIconSvg from "@/assets/svg/AdminIconsSvg/SignOutIconSvg.svg";
import AppButton from "@/components/UI/Button/AppButton";
import AppInput from "@/components/UI/Inputs/AppInput";
import Link from "next/link";
import ProfileImage from "@/assets/img/AdminPageImages/ReferralProfileImage.png";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { adminStore } from "@/store/admin";


const Page = () => {
  const isAdminLoggedin = adminStore((state) => state.isAdminLoggedin);
  const logoutAdmin = adminStore((state) => state.logoutAdmin);
  const router = useRouter();

  const handleLogout = () => {
    // Clear token from cookies
    document.cookie = "adminToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    logoutAdmin();
  };

  useEffect(() => {
    // Redirect to login if admin is not logged in
    if (!isAdminLoggedin) {
      router.replace("/admin-login");
    }
  }, [isAdminLoggedin, router]);

  if (!isAdminLoggedin) {
    return <p>Loading...</p>; // Optionally display a loading message
  }
  return (
    <div className="w-full lg:w-[801px]  mx-auto px-4  lg:px-8 mt-6 md:mt-16">
      <div className="flex flex-col justify-center gap-10">
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Profile Card */}
          <div className="flex flex-col items-start gap-3 rounded-2xl bg-[#23232325] border border-[#4D4D4D] p-4 w-full">
            <div className="flex items-center gap-4">
              {/* Profile Image */}
              <Image
                src={ProfileImage}
                alt="Profile Image"
                className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover"
              />
              {/* Profile Details */}
              <div className="flex flex-col text-left">
                <p className="text-lg sm:text-xl font-extrabold text-white">
                  Christine Brooks
                </p>
                <p className="text-sm text-gray-400">Joined 5 months ago</p>
                <p className="text-sm text-gray-400">DOB: 04/09/1973</p>
                <p className="text-sm text-gray-400">Last active: 2 hours ago</p>
              </div>
            </div>
          </div>

          {/* User Details Card */}
          <div className="flex flex-col gap-3 rounded-2xl bg-[#23232325] border border-[#4D4D4D] p-4 w-full">
            <div className="flex flex-col text-left space-y-2">
              <p className="text-lg sm:text-xl font-extrabold text-white">
                User Details
              </p>
              <p className="text-sm text-gray-400">Phone: +234 801 234 5678</p>
              <p className="text-sm text-gray-400">City: Ikeja, Lagos state</p>
              <p className="text-sm text-gray-400">
                Email address: kunlejacob123@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Personal Details Section */}
        <div>
          <p className="text-2xl sm:text-3xl font-bold text-center mb-4">
            Personal Details
          </p>
          <div className="flex flex-col gap-3">
            <AppInput
              value=""
              type="text"
              name="name"
              label="Full Name:"
              placeholder="Enter your name"
              labelClassName="text-white"
            />
            <AppInput
              value=""
              type="email"
              name="email"
              label="Email Address:"
              placeholder="Enter your email"
              labelClassName="text-white"
            />
            <AppInput
              value=""
              type="text"
              name="phone"
              label="Phone Number:"
              placeholder="Enter your phone number"
              labelClassName="text-white"
            />
          </div>
        </div>

        {/* Change Password Section */}
        <div>
          <p className="text-2xl sm:text-3xl font-bold text-center mb-4">
            Change Password
          </p>
          <div className="flex flex-col gap-3">
            <AppInput
              value=""
              type="password"
              name="currentPassword"
              label="Current Password:"
              placeholder="Enter current password"
              labelClassName="text-white"
            />
            <AppInput
              value=""
              type="password"
              name="newPassword"
              label="New Password:"
              placeholder="Enter new password"
              labelClassName="text-white"
            />
            <AppInput
              value=""
              type="password"
              name="confirmPassword"
              label="Confirm Password:"
              placeholder="Confirm new password"
              labelClassName="text-white"
            />
          </div>
        </div>

        {/* Sign Out Button */}
        <div className="flex justify-center mt-5">
          <AppButton
            handleClick={handleLogout}
            leftIcon={SignOutIconSvg}
            btnText="Sign Out"
            className="text-sm bg-red-600 text-white px-6 py-2 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
