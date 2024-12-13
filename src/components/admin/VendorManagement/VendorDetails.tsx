import React from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/UI/select";
import ProfileImage from "@/assets/img/AdminPageImages/ReferralProfileImage.png";
import { Badge } from "@/components/UI/badge";
import VendorsDrinksTable from "./VendorsDrinksTable";
import DownloadIcon from "@/assets/svg/AdminIconsSvg/DownloadIcon.svg";
import RequestIconSvg from "@/assets/svg/AdminIconsSvg/RequestIconSvg.svg";
import spotIconSvg from "@/assets/svg/AdminIconsSvg/spotIconSvg.svg";
import EditVendorDetailsDialog from "./EditVendorDetailsDialog";

const VendorDetails = () => {
  return (
    <section className="mt-5">
      <div>
        <div className="flex justify-between items-center">
          <span className="bg-gold-500 flex gap-2 items-center text-black border px-4 py-2 rounded-md font-semibold whitespace-nowrap">
            <Image src={RequestIconSvg} alt="request" /> New Business Request
          </span>
          <div className="flex justify-between items-center gap-4">
            <span className="bg-[#008800] border border-[#b4ddb4] px-4 py-2 rounded-full text-white font-semibold whitespace-nowrap">
              User Status: Active
            </span>
            <EditVendorDetailsDialog />
          </div>
        </div>
      </div>
      {/* vendor details */}
      <div className="bg-[#23232325] grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {/* Profile Card */}
        <div className="flex flex-col items-start justify-center gap-3 bg-[#23232325] p-6 md:p-4 rounded-2xl h-full w-full  l">
          <div className="w-full flex flex-row items-start gap-3 border border-[#4D4D4D] p-3 rounded-md bg-[#23232325] h-full">
            {/* Profile Image */}
            <Image
              src={ProfileImage}
              alt="Profile Image"
              className="h-20 w-20 rounded-full object-cover"
            />

            {/* Profile Details */}
            <div className="flex flex-col items-start text-left">
              <p className="text-2xl font-extrabold text-white">Christine Brooks</p>
              <p className="text-sm text-gray-400">Joined 5 months ago</p>
              <p className="text-sm text-gray-400">DOB: 04/09/1973</p>
              <p className="text-sm text-gray-400">Last active: 2 hours ago</p>
            </div>
          </div>
        </div>

        {/* User Details Card */}
        <div className="flex flex-col items-start justify-center gap-3 bg-[#23232325] p-6 md:p-4 rounded-2xl h-full w-full lg:w-[356px]">
          <div className="w-full flex flex-col sm:flex-row items-start gap-2 border border-[#4D4D4D] px-3 py-3 rounded-md bg-[#23232325] h-full">
            <div className="flex flex-col items-start text-left space-y-1">
              <p className="text-2xl font-extrabold text-white">User Details</p>
              <p className="text-sm text-gray-400">Phone: +234 801 234 5678</p>
              <p className="text-sm text-gray-400">City: Ikeja, Lagos state</p>
              <p className="text-sm text-gray-400">
                Email address: kunlejacob123@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center gap-3 bg-[#23232325] p-6 md:p-4 rounded-2xl h-full w-full lg:w-[356px]">
          <div className="w-full flex flex-col sm:flex-row items-start gap-2 border border-[#4D4D4D] px-3 py-3 rounded-md bg-[#23232325] h-full">
            <div className="flex flex-col items-start text-left space-y-1">
              <p className="text-2xl font-extrabold text-white">Business Details</p>
              <p className="text-sm text-gray-400">Spot name: Club 77</p>
              <p className="text-sm text-gray-400">City: Ikeja, Lagos state</p>
              <p className="text-sm text-gray-400">
                Email address: kunlejacob123@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 bg-brandDarkNeutral p-5 rounded-2xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold text-xl text-white">Spot Managed </p>
            <div className="bg-[#4D4D4D] w-[294px] h-[189px] p-4">
              <span className="bg-gold-800 text-white rounded-full px-4 py-2 border-gold-500 ">Rating:4.5(900)</span>
              <div className="flex justify-between items-center mt-10">
                <Image src={spotIconSvg} alt="spot" className="w-[20"/>
                <div className="flex flex-col">
                  <span className="text-4xl text-center">4</span>
                  <span>Spots managed</span>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex items-center gap-2">
            <Select>
              <SelectTrigger className="w-auto bg-gold-500 text-[#212121] border-none focus-visible:ring-0">
                <SelectValue placeholder="This week" />
              </SelectTrigger>
              <SelectContent className="">
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
                <SelectItem value="latest">Latest</SelectItem>
              </SelectContent>
            </Select>

            <Image src={DownloadIcon} alt="download" />
          </div> */}
        </div>
      </div>

      <VendorsDrinksTable />
    </section>
  );
};

export default VendorDetails;
