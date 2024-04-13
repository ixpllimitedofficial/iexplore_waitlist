import React from "react";
import Image from "next/image";
import DashboardNotificationsIcon from "@/assets/svg/AdminIconsSvg/DashboardNotificationsIcon.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/UI/avatar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="flex flex-col-reverse gap-7 lg:flex-row items-center justify-between">
        <p className="self-start lg:self-center font-bold text-2xl lg:text-[28px]">
          Support & Help desk
        </p>

        <div className="hidden lg:flex items-center gap-4  bg-[#F7D0984D] p-4 rounded-2xl">
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

      <div className="flex justify-between gap-4 mt-5 items-center">
        <div className="flex flex-wrap items-center gap-4">
          <div className="text-[#F7D098] bg-[#887254] p-3 rounded-xl flex items-center gap-2">
            <p className="font-bold">All Issues</p>
            <p className="bg-[#FF7300] text-white px-2 rounded-full text-sm">
              4
            </p>
          </div>

          <div className="text-[#F7D098] flex items-center gap-2 border-2 border-[#F7D098] px-3 py-2 rounded-2xl">
            <p className="">Completed</p>
            <p className="bg-[#0DDA15] text-white px-2 rounded-full text-sm">
              4
            </p>
          </div>

          <div className="text-[#F7D098] flex items-center gap-2 border-2 border-[#F7D098] px-3 py-2 rounded-2xl">
            <p className="">In progress</p>
            <p className="bg-[#FF7300] text-white px-2 rounded-full text-sm">
              4
            </p>
          </div>

          <div className="text-[#F7D098] flex items-center gap-2 border-2 border-[#F7D098] px-3 py-2 rounded-2xl">
            <p className="">Pending</p>
            <p className="bg-[#BE2424] text-white px-2 rounded-full text-sm">
              4
            </p>
          </div>

          <div className="text-[#F7D098] flex items-center gap-2 border-2 border-[#F7D098] px-3 py-2 rounded-2xl">
            <p className="">Read</p>
            <p className="bg-[#0DDA15] text-white px-2 rounded-full text-sm">
              4
            </p>
          </div>

          <div className="text-[#F7D098] flex items-center gap-2 border-2 border-[#F7D098] px-3 py-2 rounded-2xl">
            <p className="">Unread</p>
            <p className="bg-[#C4C4C4] text-white px-2 rounded-full text-sm">
              4
            </p>
          </div>
        </div>
      </div>

      {children}
    </>
  );
}
