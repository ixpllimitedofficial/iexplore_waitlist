import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
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
import DrinksChart from "./DrinksChart";
import Divider from "@/components/UI/Divider";

const VisitorTraffic = dynamic(() => import('../Dashboard/VisitorTraffic'), { ssr: false });
const VendorDetails = () => {
  return (
    <section className="mt-5">
      <div className="hidden lg:flex justify-between items-center">
        <span className="hidden bg-gold-500 lg:flex gap-2 items-center text-black border px-4 py-2 rounded-md font-semibold whitespace-nowrap">
          <Image src={RequestIconSvg} alt="request" /> New Business Request
        </span>
        <div className="flex justify-between items-center gap-4">
          <span className="bg-[#008800] border border-[#b4ddb4] px-4 py-2 rounded-full text-white font-semibold whitespace-nowrap">
            User Status: Active
          </span>
          <EditVendorDetailsDialog />
        </div>
      </div>
      {/* vendor details */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 py-5">
        {/* Profile Card */}
        <div className="flex flex-col items-start justify-center gap-3 bg-[#23232325] p-4 md:p-2 border border-[#4D4D4D] rounded-2xl h-full w-full  l">
          <div className="w-full flex flex-row items-start gap-3  p-3 rounded-md  h-full">
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
        <div className="flex flex-col items-start justify-center gap-3 bg-[#23232325] border border-[#4D4D4D]  p-4 md:p-2 rounded-2xl h-full w-full lg:w-[356px]">
          <div className="w-full flex flex-col sm:flex-row items-start gap-2  px-3 py-3 rounded-md  h-full">
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

        <div className="flex flex-col items-start justify-center gap-3 bg-[#23232325] border border-[#4D4D4D]  p-4 md:p-2 rounded-2xl h-full w-full lg:w-[356px]">
          <div className="w-full flex flex-col sm:flex-row items-start gap-2 px-3 py-3 rounded-md h-full">
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
      <div className="lg:hidden flex justify-between items-center w-full">
        <div className="w-full flex justify-between items-center gap-4">
          <span className="w-[60%] bg-[#008800] border border-[#b4ddb4] px-4 py-1 rounded-full text-white font-semibold whitespace-nowrap">
            User Status: Active
          </span>
          <div className="">
            <EditVendorDetailsDialog />
          </div>
        </div>
      </div>

      <div className="mt-5 bg-brandDarkNeutral p-5 rounded-2xl">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div>
            <p className="invisible md:visible font-bold text-lg text-white">Spot Managed </p>
            <div className="bg-[#23232325] w-[404px] h-[209px] lg:w-[294px] lg:h-[204px] p-4 rounded-md mt-2">

              <div className="md:hidden flex justify-between items-center" >
                <p className="font-bold text-lg text-white">Spot Managed </p>
                <span className="bg-gold-800 text-white rounded-full px-4 py-2 border border-[#e9da9d] ">Rating:4.5(900)</span>
              </div>
              <span className=" hidden md:block w-[60%]  bg-gold-800 text-white rounded-full px-4 py-2 border border-[#e9da9d] ">Rating:4.5(900)</span>
              <div className="flex justify-between items-center mt-10">
                <Image src={spotIconSvg} alt="spot" className="w-[43px] h-[41px]" />
                <div className="flex flex-col justify-center items-center">
                  <span className="text-4xl text-center">4</span>
                  <span>Spots managed</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="invisible md:visible font-bold text-lg text-white">Spot Managed </p>
            <div className="bg-[#23232325] w-[404px] h-[209px] lg:w-[294px] lg:h-[204px] p-4 mt-2 rounded-md mt-">
              {/* Mobile View */}
              <div className="lg:hidden flex justify-between items-center">
                <p className="font-bold text-lg text-white">Drinks Chart</p>
                <span className="bg-red-700 text-white px-4 py-2 text-sm rounded-full">
                  Out of stock - 25
                </span>
              </div>
              <Divider className="lg:hidden" />

              {/* Desktop View */}
              <div className="hidden lg:flex justify-between items-center mb-3">
                <p className="font-bold text-lg text-white">Drinks Chart</p>
                <span className="bg-red-700 text-white px-4 py-2 text-sm rounded-full">
                  Out of stock - 25
                </span>
              </div>

              {/* Drinks Chart Content */}
              <div className="items-center">
                <DrinksChart />
              </div>
            </div>
          </div>
          <div>
            <p className="invisible md:visible  font-bold text-lg text-white">visitors Traffic</p>
            <div className="bg-[#23232325] w-[404px] h-[240px] lg:h-[209px] p-4 rounded-md mt-2">
              <div className="lg:hidden flex justify-between items-center">
                <p className="font-bold text-lg text-white">visitors Traffic</p>
                <span className="bg-[#13460f] text-white rounded-full px-4 py-2 border- ">+13 from last week</span>
              </div>
              <Divider className="lg:hidden" />
              <span className="hidden md:block w-[60%]  bg-[#13460f] text-white rounded-full px-4 py-2 border- ">+13 from last week</span>
              <VisitorTraffic />
            </div>
          </div>
        </div>
      </div>

      <VendorsDrinksTable />
    </section>
  );
};

export default VendorDetails;
