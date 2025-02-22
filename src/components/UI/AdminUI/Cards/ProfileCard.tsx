'use client'

import React from "react";
import Image from "next/image";
import DashboardNotificationsIcon from "@/assets/svg/AdminIconsSvg/DashboardNotificationsIcon.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/UI/avatar";
import Link from "next/link";
import { adminStore } from "@/store/admin";

const ProfileCard = () => {
  const admin = adminStore((state) => state.admin);
  
  // Get user details with fallbacks
  const firstName = admin?.user?.first_name;
  const lastName = admin?.user?.last_name;
  const username = admin?.user?.username;
  const email = admin?.user?.email || 'admin@example.com';
  
  // Display name logic with fallbacks
  const displayName = firstName && lastName 
    ? `${firstName} ${lastName}`
    : username || 'Admin';

  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  return (
    <Link
      href="/admin/profile"
      className="hidden lg:flex items-center gap-3 bg-[#23232325] border border-[#4D4D4D] p-4 rounded-2xl hover:bg-[#23232340] transition-colors"
    >
      <Avatar>
        <AvatarImage src="" alt={displayName} />
        <AvatarFallback>{getInitials(displayName)}</AvatarFallback>
      </Avatar>

      <div>
        <p className="text-white font-bold text-sm">{displayName}</p>
        <p className="text-white text-sm">{email}</p>
      </div>

      <Image
        src={DashboardNotificationsIcon}
        alt="DashboardNotificationsIcon"
        className="w-6 h-6"
      />
    </Link>
  );
};
export default ProfileCard