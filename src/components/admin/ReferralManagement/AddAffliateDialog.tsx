
import React from "react";
import Tiktok from "@/assets/svg/AdminIconsSvg/referral/Tiktok.svg";
import Facebook from "@/assets/svg/AdminIconsSvg/referral/Facebook.svg";
import SnapChat from "@/assets/svg/AdminIconsSvg/referral/SnapChat.svg";
import Twiter from "@/assets/svg/AdminIconsSvg/referral/Twiter.svg";
import Instagram from "@/assets/svg/AdminIconsSvg/referral/Instagram.svg";
import Image from "next//image"

import { Button } from "@/components/UI/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/UI/dialog";



const socials = [
  { Icon: Tiktok, name: "TikTok" },
  { Icon: Instagram, name: "Instagram" },
  { Icon: Facebook, name: "Facebook" },
  { Icon: SnapChat, name: "Snapchat" },
  { Icon: Twiter, name: "Twitter" },
]
const AddAffliateDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full md:w-auto px-6 py-2 bg-[#232323] rounded-2xl border border-[#4D4D4D] text-white text-sm font-medium hover:shadow-lg transition-shadow duration-300">
          <p>Add new affiliate</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[90%] max-w-screen-sm  md:max-w-[800px] bg-[#212121]  max-h-[600px] overflow-y-auto p-5 lg:p-10">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">
            Add affiliate details
          </DialogTitle>
        </DialogHeader>

        {/* Personal Information */}
        <div className="grid gap-2 py-2">
          <div className="p-2 text-center font-semibold">
            Personal Information
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <input
            type="text"
            placeholder="First Name"
            className="w-full h-14 bg-[#33333399] rounded border border-gray-500 px-4 text-white placeholder-gray-400"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full h-14 bg-[#33333399] rounded border border-gray-500 px-4 text-white placeholder-gray-400"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full h-14 bg-[#33333399] rounded border border-gray-500 px-4 text-white placeholder-gray-400"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full h-14 bg-[#33333399] rounded border border-gray-500 px-4 text-white placeholder-gray-400"
          />
          <input
            type="text"
            placeholder="Country"
            className="w-full h-14 bg-[#33333399] rounded border border-gray-500 px-4 text-white placeholder-gray-400"
          />
        </div>

        {/* Marketing Channels */}
        <div className="">
          <h2 className="text-lg font-semibold text-center text-white my-5">
            Marketing Channels
          </h2>

          <div className="flex flex-wrap gap-4 lg:gap-5 justify-start md:justify-center mx-auto mb-6">
            {socials.map((social, index) => (
              <button
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-[#232323] text-white rounded-full border border-[#4D4D4D] hover:bg-[#333] transition"
              >
                <Image
                  src={social.Icon}
                  alt={`${social.name} Icon`}
                  width={20}
                  height={20}
                  className=""
                />
                <span className="text-sm">{social.name}</span>
              </button>
            ))}
          </div>

          {/* Bank Information */}
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Bank name"
              className="w-full h-14 bg-[#33333399] rounded border border-gray-500 px-4 text-white placeholder-gray-400"
            />
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Account name"
                className="w-full h-14 bg-[#33333399] rounded border border-gray-500 px-4 text-white placeholder-gray-400"
              />
              <input
                type="text"
                placeholder="Account number"
                className="w-full h-14 bg-[#33333399] rounded border border-gray-500 px-4 text-white placeholder-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <DialogFooter className="w-full flex justify-center py-4">
          <Button
            type="submit"
            className="bg-[#444444] hover:bg-gold-500 hover:text-black hover:border-black w-full justify-center items-center rounded-full text-white border-2 px-6 py-2 lg:py-4"
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddAffliateDialog;
