import Image from "next/image";
import DashboardNotificationsIcon from "@/assets/svg/AdminIconsSvg/DashboardNotificationsIcon.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/UI/avatar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="flex flex-col-reverse gap-7 lg:flex-row items-center justify-between">
        <div className="self-start">
          <p className="font-bold text-xl lg:text-[28px]">User Management</p>
        </div>

        <div className="hidden bg-[#F7D0984D] p-4 rounded-2xl lg:flex items-center gap-4">
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

      <div className="grid grid-cols-6 gap-4 mt-5">
        <div className="col-span-3 lg:col-span-1 bg-[#333333] p-5 rounded-2xl">
          TOTAL USERS
        </div>
        <div className="col-span-3 lg:col-span-1 bg-[#333333] p-5 rounded-2xl">NEW USERS</div>
        <div className="col-span-3 lg:col-span-1 bg-[#333333] p-5 rounded-2xl">
          ACTIVE NOW
        </div>
      </div>

      {children}
    </>
  );
}
