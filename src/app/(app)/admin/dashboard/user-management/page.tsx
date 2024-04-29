import React from "react";
import Image from "next/image";
import PeopleIconSvg from "@/assets/svg/AdminIconsSvg/PeopleIconSvg.svg";
import { ArrowDownIcon, ArrowUpIcon } from "@radix-ui/react-icons";
import AllUsersTable from "@/components/admin/UserManagement/AllUsersTable";

const page = () => {
  const divStyle =
    "col-span-full md:col-span-4 lg:col-span-2 flex items-center justify-between bg-[#333333] p-5 rounded-2xl text-sm";

  return (
    <>
      <div className="grid grid-cols-8 gap-4 mt-5">
        <div className={divStyle}>
          <div>
            <p>TOTAL USERS</p>
            <div className="flex gap-1 items-center">
              <p className="font-bold text-lg">2,000</p>

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
          <div>
            <p>NEW USERS</p>
            <div className="flex gap-1 items-center">
              <p className="font-bold text-lg">50</p>

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
          <div>
            <p>ACTIVE NOW</p>
            <p className="font-bold text-lg">20</p>
          </div>

          <Image src={PeopleIconSvg} alt="PeopleIconSvg" />
        </div>
      </div>

      <AllUsersTable />
    </>
  );
};

export default page;
