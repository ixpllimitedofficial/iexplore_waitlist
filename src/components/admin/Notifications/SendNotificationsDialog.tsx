import React from "react";
import Image from "next/image";
import DashboardNotificationsIcon from "@/assets/svg/AdminIconsSvg/DashboardNotificationsIcon.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/UI/avatar";
import AddIcon from "@/assets/svg/AdminIconsSvg/AddIconSvg.svg";
import AllReferralsTable from "@/components/admin/ReferralManagement/AllReferralsTable";

import { Button } from "@/components/UI/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/UI/dialog";

const SendNotificationsDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild className="col-end-12">
        <Button className="bg-[#776751] text-[#F7D098]">
          <p>Send notifications</p>
          <Image src={AddIcon} alt="add icon" className="ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent className="md:max-w-[800px]  bg-[#212121]">
        <DialogHeader>
          <DialogTitle className="text-[#F7D098] text-2xl text-center">
            Send notifications
          </DialogTitle>
          {/* <DialogDescription>
          Make changes to your profile here. Click save when you are done.
        </DialogDescription> */}
        </DialogHeader>
        <div className="grid gap-2 py-2">
          <div className="bg-[#33333399] border-2 border-[#F7D098] p-2 rounded-xl text-center text-[#F7D098] font-semibold">
            Notification Type*
          </div>
        </div>

        <div className="grid gap-2 py-2">
          <div className="bg-[#33333399] border-2 border-[#F7D098] p-2 rounded-xl text-center text-[#F7D098] font-semibold">
            Notification Subject*
          </div>
        </div>

        <div className="grid gap-2 py-2">
          <div className="bg-[#33333399] border-2 border-[#F7D098] p-2 rounded-xl text-center text-[#F7D098] font-semibold">
            Message ID
          </div>
        </div>

        <div className="grid gap-2 py-2">
          <div className="bg-[#33333399] border-2 border-[#F7D098] p-2 rounded-xl text-center text-[#F7D098] font-semibold">
            Message*
          </div>
        </div>

        <DialogFooter>
          <Button
            type="submit"
            className="bg-[#333333] text-[#F7D098]  border-2 border-[#F7D098]"
          >
            Save as Draft
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SendNotificationsDialog;
