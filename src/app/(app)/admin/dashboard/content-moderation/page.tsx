import React from "react";
import Image from "next/image";
import DashboardNotificationsIcon from "@/assets/svg/AdminIconsSvg/DashboardNotificationsIcon.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/UI/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/UI/select";

import AppButton from "@/components/UI/Button/AppButton";

import AddIcon from "@/assets/svg/AdminIconsSvg/AddIconSvg.svg";
import AllContentsTable from "@/components/admin/ContentModeration/AllContentsTable";

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

      <div className="flex justify-between items-center w-full my-10">
        <Select>
          <SelectTrigger className="w-auto bg-[#F7D098] text-[#1A1A1A] border-none focus-visible:ring-0">
            <SelectValue placeholder="Drinks" className="font-bold" />
          </SelectTrigger>
          <SelectContent className="">
            <SelectItem value="newest" >Newest</SelectItem>
          </SelectContent>
        </Select>

        <AppButton
          className="bg-[#776751] text-[#F7D098] font-medium "
          btnText="Add new drink"
          rightIcon={AddIcon}
        />
      </div>

      <AllContentsTable />
    </>
  );
};

export default page;
