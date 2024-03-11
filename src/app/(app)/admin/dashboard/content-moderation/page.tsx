import React from "react";
import Image from "next/image";
import DashboardNotificationsIcon from "@/assets/svg/AdminIconsSvg/DashboardNotificationsIcon.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/UI/avatar";
import ContentPage from "@/components/admin/ContentModeration/ContentPage";

const page = () => {
  return (
    <>
      <header className="flex justify-between">
        <div>
          <p className="font-bold text-3xl">Content Moderation</p>
        </div>

        <div className="bg-[#F7D0984D] p-4 rounded-2xl flex items-center gap-4">
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
        </div>
      </header>

      <ContentPage />
    </>
  );
};

export default page;
