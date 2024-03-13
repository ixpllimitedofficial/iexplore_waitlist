import Image from "next/image";
import DashboardNotificationsIcon from "@/assets/svg/AdminIconsSvg/DashboardNotificationsIcon.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/UI/avatar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="flex items-center justify-between">
        <p className="font-bold text-[28px]">Vendor Management</p>

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

      <div className="grid grid-cols-5 gap-4 mt-5">
        <div className="col-span-1 bg-[#333333] p-5 rounded-2xl">
          TOTAL VENDORS
        </div>
        <div className="col-span-1 bg-[#333333] p-5 rounded-2xl">
          NEW VENDORS
        </div>
        <div className="col-span-1 bg-[#333333] p-5 rounded-2xl">
          ACTIVE VENDORS
        </div>
      </div>

      {children}
    </>
  );
}
