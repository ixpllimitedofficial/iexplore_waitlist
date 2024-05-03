import React from "react";
import Image from "next/image";
import AddIcon from "@/assets/svg/AdminIconsSvg/AddIconSvg.svg";
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
        <Button className="bg-gold-800 text-gold-500">
          <p>Send notifications</p>
          <Image src={AddIcon} alt="add icon" className="ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[90%] md:max-w-[800px] bg-[#212121]">
        <DialogHeader>
          <DialogTitle className="text-gold-500 text-2xl text-center">
            Send notifications
          </DialogTitle>
          {/* <DialogDescription>
          Make changes to your profile here. Click save when you are done.
        </DialogDescription> */}
        </DialogHeader>
        <div className="grid gap-2 py-2">
          <div className="bg-[#33333399] border-2 border-gold-500 p-2 rounded-xl text-center text-gold-500 font-semibold">
            Notification Type*
          </div>
        </div>

        <div className="grid gap-2 py-2">
          <div className="bg-[#33333399] border-2 border-gold-500 p-2 rounded-xl text-center text-gold-500 font-semibold">
            Notification Subject*
          </div>
        </div>

        <div className="grid gap-2 py-2">
          <div className="bg-[#33333399] border-2 border-gold-500 p-2 rounded-xl text-center text-gold-500 font-semibold">
            Message ID
          </div>
        </div>

        <div className="grid gap-2 py-2">
          <div className="bg-[#33333399] border-2 border-gold-500 p-2 rounded-xl text-center text-gold-500 font-semibold">
            Message*
          </div>
        </div>

        <DialogFooter>
          <Button
            type="submit"
            className="bg-[#333333] text-gold-500 border-2 border-gold-500"
          >
            Save as Draft
          </Button>

          <Button
            type="submit"
            className="bg-gold-500 text-brandDark font-semibold border-2 border-gold-500"
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SendNotificationsDialog;
