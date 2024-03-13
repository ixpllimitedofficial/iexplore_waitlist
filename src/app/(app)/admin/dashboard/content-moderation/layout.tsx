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

import AddDrinkDialog from "@/components/admin/ContentModeration/AddDrinkDialog";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="flex items-center justify-between">
        <p className="font-bold text-3xl">Content Moderation</p>

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
            <SelectItem value="venue">Venue</SelectItem>
          </SelectContent>
        </Select>

        <AddDrinkDialog />
      </div>

      {children}
    </>
  );
}
