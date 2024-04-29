import React from "react";
import Image from "next/image";
import UserMailIcon from "@/assets/svg/AdminIconsSvg/UserMailIconSvg.svg";
import UserPhoneIcnSvg from "@/assets/svg/AdminIconsSvg/UserPhoneIconSvg.svg";
import AppButton from "@/components/UI/Button/AppButton";
import Divider from "@/components/UI/Divider";
import ProfileImage from "@/assets/img/AdminPageImages/ReferralProfileImage.png";
import { Badge } from "@/components/UI/badge";
import EditUserDetailsDialog from "../UserManagement/EditUserDetailsDialog";
import VendorsDrinksTable from "./VendorsDrinksTable";

const VendorDetails = () => {
  return (
    <section className="mt-5">
      <div>
        <div className="flex gap-5 items-center justify-end">
          <Badge className="bg-[#00b69b48] text-[#00B69B] text-sm">
            Active
          </Badge>
          <EditUserDetailsDialog />
        </div>
      </div>
      {/* vendor details */}
      <div className="mt-5 grid grid-cols-5 gap-6">
        <div className="flex flex-col items-center gap-3 col-span-2 bg-[#333333] p-4 rounded-2xl">
          <div className="flex items-center w-full gap-3">
            <Image
              src={ProfileImage}
              alt="ProfileImage"
              className="h-[100px] w-auto"
            />

            <div className="">
              <p className="font-bold text-2xl text-[#F7D098]">
                Christine Brooks
              </p>
              <p className="font-medium">04 Sep 1973</p>
              <p className="text-sm">Joined 5 months ago</p>
            </div>
          </div>

          {/* divider */}
          <div className="border-t-2 border-[#979797] w-full"></div>

          <p className="text-sm">Active: 1hr 30mns ago</p>
        </div>

        {/* user details */}

        <div className="flex flex-col justify-center gap-3 col-span-1 bg-[#333333] p-4 rounded-2xl">
          <p className="font-bold text-xl text-[#F7D098]">User details</p>

          <div className="flex justify-between">
            <div>
              <p className="text-sm">Phone No:</p>
              <p className="font-medium text-sm">09123456789</p>
            </div>

            <div>
              <p className="text-sm">City:</p>
              <p className="font-medium text-sm">Lagos</p>
            </div>
          </div>

          <div>
            <p className="text-sm">Email Address:</p>
            <p className="font-medium text-sm">brookschristine.mail.com</p>
          </div>
        </div>

        {/* business details */}

        <div className="flex flex-col justify-center gap-3 col-span-2 bg-[#333333] p-4 rounded-2xl">
          <p className="font-bold text-xl text-[#F7D098]">Business details</p>

          <div className="flex justify-between">
            <div>
              <p className="text-sm">Spot Name:</p>
              <p className="font-medium text-sm">Club 77</p>
            </div>

            <div>
              <p className="text-sm">Head Quarters :</p>
              <p className="font-medium text-sm">
                21, Mokola Road, VI Lekki, Lagos State.
              </p>
            </div>
          </div>

          <div className="flex justify-between">
            <div>
              <p className="text-sm">Email Address:</p>
              <p className="font-medium text-sm">brookschristine.mail.com</p>
            </div>

            <div>
              <p className="text-sm">Phone No:</p>
              <p className="font-medium text-sm">09123456789</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 bg-[#333333] p-5 rounded-2xl">
        <p className="font-bold text-xl text-[#F7D098]">Analytics</p>
      </div>

      <VendorsDrinksTable />
    </section>
  );
};

export default VendorDetails;
