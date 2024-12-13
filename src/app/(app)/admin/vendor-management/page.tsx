import React from "react";
import AllVendorsTable from "@/components/admin/VendorManagement/AllVendorsTable";
import PeopleIconSvg from "@/assets/svg/AdminIconsSvg/PeopleIconSvg.svg";
import ActiveUsersIconSvg from "@/assets/svg/AdminIconsSvg/ActiveUsersIconSvg.svg";

import { ArrowDownIcon, ArrowUpIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import AddVendorDialog from "@/components/admin/VendorManagement/AddVendorDialog";

const page = () => {
  const divStyle =
    "flex items-center justify-between w-full bg-[#23232325] gap-2 px-4 lg:px-10 py-3 lg:py-5 lg:pl-5 pl-2 rounded-2xl border border-[#4D4D4D] text-sm";


  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5 p-5">
        <div className={divStyle}>
          <Image src={PeopleIconSvg} alt="PeopleIconSvg" />
          <div className="flex-grow">
            <p className='text-sm lg:text-[16px] whitespace-nowrap  font-normal '>Total Vendors</p>
            <p className="font-bold text-lg lg:text-2xl">2,000</p>
          </div>
          <span className="bg-[#008800] border border-[#b4ddb4] px- p-2 rounded-full text-white  font-semibold whitespace-nowrap">+16% from last week</span>
        </div>

        <div className={divStyle}>
          <Image src={ActiveUsersIconSvg} alt="ActiveUsersIconSvg" />
          <div className="flex-grow">
            <p className='text-sm lg:text-[16px] whitespace-nowrap font-normal'>Active Vendors</p>
            <p className="font-bold text-lg lg:text-2xl">2,000</p>
          </div>
          <span className="bg-[#E50000] border border-[#e2bdbd] p-2 rounded-full text-white  font-semibold whitespace-nowrap">-2% from last week</span>
        </div>
        <div className={divStyle}>
          <Image src={ActiveUsersIconSvg} alt="ActiveUsersIconSvg" />
          <div className="flex-grow">
            <p className='text-sm lg:text-[16px] font-normal'>New Vendors</p>
            <p className="font-bold text-lg lg:text-2xl">2,000</p>
          </div>

        </div>
      </div>

      <AllVendorsTable />
    </>
  );
};

export default page;
