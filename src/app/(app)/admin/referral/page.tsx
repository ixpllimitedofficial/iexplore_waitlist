import React from "react";
import PeopleIconSvg from "@/assets/svg/AdminIconsSvg/PeopleIconSvg.svg";
import ActiveUsersIconSvg from "@/assets/svg/AdminIconsSvg/ActiveUsersIconSvg.svg";
import Image from "next/image";
import AllReferralsTable from "@/components/admin/ReferralManagement/AllReferralsTable";
import AddAffliateDialog from "@/components/admin/ReferralManagement/AddAffliateDialog"

const Page = () => {
  const divStyle =
    "flex items-center justify-between gap-2  xl:gap-4 bg-[#23232325] rounded-2xl border border-[#4D4D4D] w-full h-auto p-4 lg:px- min-h-[88px]";

  return (
    <div className="">
      {/* Responsive grid for stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {/* Card 1: Active Affiliates */}
        <div className={divStyle}>
          <div className="flex items-center justify-center">
            <Image
              src={PeopleIconSvg}
              alt="People Icon"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="flex-grow">
            <p className="text-sm font-normal text-gray-300">Active Affiliates</p>
            <p className="font-bold text-xl text-white">2,000</p>
          </div>
          <span className="bg-[#008800] border border-[#b4ddb4] px-1 py-1.5 rounded-full text-white font-normal text-xs whitespace-nowrap">
            +16% this month
          </span>
        </div>

        {/* Card 2: Total Affiliates */}
        <div className={divStyle}>
          <div className="flex items-center justify-center">
            <Image
              src={PeopleIconSvg}
              alt="People Icon"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="flex-grow">
            <p className="text-sm font-normal text-gray-300">Total Affiliates</p>
            <p className="font-bold text-xl text-white">2,000</p>
          </div>
          <span className="bg-[#E50000] border border-[#b4ddb4] px-2 py-1.5 rounded-full text-white font-normal text-xs whitespace-nowrap">
            -2% last month
          </span>
        </div>

        {/* Card 3: New Vendors */}
        <div className={divStyle}>
          <div className="flex items-center justify-center">
            <Image
              src={ActiveUsersIconSvg}
              alt="New Vendors Icon"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="flex-grow">
            <p className="text-sm font-normal text-gray-300">New Vendors</p>
            <p className="font-bold text-xl text-white">2,000</p>
          </div>
        </div>
      </div>

      {/* Add New Referrals Button */}
      <div className="flex justify-center md:justify-end mt-6">
        {/* <button className="w-auto px-6 py-2 bg-[#232323] rounded-2xl border border-[#4D4D4D] text-white text-sm font-medium hover:shadow-lg transition-shadow duration-300">
          Add New Referrals
        </button> */}
        <AddAffliateDialog />
      </div>

      {/* Table section */}
      <div className="mt-8">
        <AllReferralsTable />
      </div>
    </div>
  );
};

export default Page;



