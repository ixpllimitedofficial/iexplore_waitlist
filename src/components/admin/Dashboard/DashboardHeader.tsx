import React from "react";
import Image from "next/image";
import DashboardNotificationsIcon from "@/assets/svg/AdminIconsSvg/DashboardNotificationsIcon.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/UI/avatar";

const Header = () => {
  return (
    <header className="flex flex-col-reverse gap-7 lg:flex-row items-center justify-between">
      <div className="self-start">
        <p className="font-bold text-2xl lg:text-3xl">Dashboard</p>
        <p className="text-[#F7D098] text-sm mt-1">
          Hi, Anita. Welcome back to iExplore Admin!
        </p>
      </div>

      <div className="self-end bg-[#F7D0984D] p-2 lg:p-4 rounded-2xl flex items-center gap-2 lg:gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div>
          <p className="text-[#F7D098] text-sm lg:text-base font-bold">
            Anita Cruz
          </p>
          <p className="text-[#F7D098] text-sm lg:text-base">
            anita@commerce.com
          </p>
        </div>

        <Image
          src={DashboardNotificationsIcon}
          alt="DashboardNotificationsIcon"
        />
      </div>
    </header>
  );
};

export default Header;
