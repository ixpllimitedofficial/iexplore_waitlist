import React from "react";
import AllReferralsTable from "@/components/admin/ReferralManagement/AllReferralsTable";
import PeopleIconSvg from "@/assets/svg/AdminIconsSvg/PeopleIconSvg.svg";
import { ArrowDownIcon, ArrowUpIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import AddAffliateDialog from "@/components/admin/ReferralManagement/AddAffliateDialog";

const page = () => {
  const divStyle =
    "col-span-full md:col-span-4 lg:col-span-2 flex items-center gap-2 bg-[#333333] pr-5 py-5 rounded-2xl text-sm";

  return (
    <>
      <div className="grid grid-cols-8 gap-4 mt-5">
        <div className={divStyle}>
          <div className="bg-gold-500 p-1 h-full"></div>

          <div className="flex-grow">
            <p>TOTAL AFFILIATES</p>
            <div className="flex gap-1 items-center">
              <p className="font-bold text-base">200</p>

              <div className="flex items-center">
                <ArrowUpIcon color="#00AC4F" />
                <p className="text-sm">
                  <span className="text-sm text-[#00AC4F]"> 16% </span> this
                  month
                </p>
              </div>
            </div>
          </div>

          <Image src={PeopleIconSvg} alt="PeopleIconSvg" />
        </div>
        <div className={divStyle}>
          <div className="bg-gold-500 p-1 h-full"></div>

          <div className="flex-grow">
            <p>NEW AFFILIATES</p>
            <div className="flex gap-1 items-center">
              <p className="font-bold text-base">500</p>

              <div className="flex items-center">
                <ArrowDownIcon color="#FF1800" />
                <p className="text-sm">
                  <span className="text-sm text-[#FF1800]">1% </span> this month
                </p>
              </div>
            </div>
          </div>

          <Image src={PeopleIconSvg} alt="PeopleIconSvg" />
        </div>
        <div className={divStyle}>
          <div className="bg-gold-500 p-1 h-full"></div>

          <div className="flex-grow">
            <p>ACTIVE AFFILIATES</p>
            <p className="font-bold text-base">20</p>
          </div>

          <Image src={PeopleIconSvg} alt="PeopleIconSvg"/>
        </div>

        <div className="col-span-full md:col-span-4 lg:col-span-2 flex justify-end">
          <AddAffliateDialog />
        </div>
      </div>

      <AllReferralsTable />
    </>
  );
};

export default page;
