import React from "react";
import Image from "next/image";
import DashboardNotificationsIcon from "@/assets/svg/AdminIconsSvg/DashboardNotificationsIcon.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/UI/avatar";
import AppButton from "@/components/UI/Button/AppButton";

import { DownloadIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/UI/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>
        <header className="flex items-center justify-between">
          <p className="font-bold text-[28px]">Analytics & Reporting</p>

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
      </div>

      <div className="flex justify-end my-5">
        <Button className="bg-[#615545] text-[#F7D098] hover:bg-[#615545]">
          <DownloadIcon className="mr-2 h-5 w-5" />{" "}
          <p className="font-medium text-lg">Download</p>
        </Button>
      </div>

      {children}
    </>
  );
}
