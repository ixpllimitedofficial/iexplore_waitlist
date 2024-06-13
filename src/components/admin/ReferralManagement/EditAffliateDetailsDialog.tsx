import React from "react";
import Image from "next/image";
import EditOutlineIconSvg from "@/assets/svg/AdminIconsSvg/EditOutlineIconSvg.svg";
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

const EditAffliateDetailsDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild className="">
        <Button className="bg-gold-800 text-gold-500">
          <p>Edit</p>
          <Image src={EditOutlineIconSvg} alt="edit icon" className="ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[90%] md:max-w-[800px]  bg-[#212121]">
        <DialogHeader>
          <DialogTitle className="text-gold-500 text-2xl text-center">
            Edit affiliate details
          </DialogTitle>
          {/* <DialogDescription>
          Make changes to your profile here. Click save when you are done.
        </DialogDescription> */}
        </DialogHeader>
        <div className="grid gap-2 py-2">
          <div className="bg-[#33333399] border-2 border-gold-500 border-dotted p-2 rounded-xl text-center text-gold-500 font-semibold">
            Personal Information
          </div>
        </div>

        <div className="grid gap-2 py-2">
          <div className="bg-[#33333399] border-2 border-gold-500 border-dotted p-2 rounded-xl text-center text-gold-500 font-semibold">
            Payment Methods
          </div>
        </div>

        <div className="grid gap-2 py-2">
          <div className="bg-[#33333399] border-2 border-gold-500 border-dotted p-2 rounded-xl text-center text-gold-500 font-semibold">
            Social media accounts
          </div>
        </div>

        <DialogFooter>
          <Button
            type="submit"
            className="bg-brandDarkNeutral text-gold-500  border-2 border-gold-500"
          >
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditAffliateDetailsDialog;
