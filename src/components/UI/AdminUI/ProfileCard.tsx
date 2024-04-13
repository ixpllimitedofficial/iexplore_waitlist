import React from "react";
import Image from "next/image";
import DashboardNotificationsIcon from "@/assets/svg/AdminIconsSvg/DashboardNotificationsIcon.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/UI/avatar";
import Link from "next/link";

const ProfileCard = () => {
  return (
    <Link
      href="/admin/dashboard/profile"
      className="self-end bg-[#F7D0984D] p-2 lg:p-4 rounded-2xl flex items-center gap-2 lg:gap-4"
      //   className="hidden lg:flex items-center gap-4  bg-[#F7D0984D] p-4 rounded-2xl"
    >
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div>
        <p className="text-[#F7D098] font-bold">Anita Cruz</p>
        <p className="text-[#F7D098]">anita@commerce.com</p>
      </div>

      <Image
        src={DashboardNotificationsIcon}
        alt="DashboardNotificationsIcon"
      />
    </Link>
  );
};

export default ProfileCard;
