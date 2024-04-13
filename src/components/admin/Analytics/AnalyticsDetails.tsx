"use client";

import React from "react";
import { Calendar } from "@/components/UI/calendar";

const DashboardBody = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <>
      {/* body 1 */}
      <div className="grid grid-cols-10 gap-4 mt-5">
        <div className="grid grid-cols-12 gap-4 col-span-full lg:col-span-6">
          <div className="grid grid-cols-6 gap-4 col-span-full">
            <div className="col-span-3 lg:col-span-2 bg-[#333333] p-5 rounded-2xl">
              TOTAL USERS
            </div>
            <div className="col-span-3 lg:col-span-2 bg-[#333333] p-5 rounded-2xl">
              TOTAL VENDORS
            </div>
            <div className="col-span-3 lg:col-span-2 bg-[#333333] p-5 rounded-2xl">
              ACTIVE USERS
            </div>
            <div className="col-span-3 lg:col-span-2 bg-[#333333] p-5 rounded-2xl">
              TOTAL REFERRAL
            </div>
            <div className="col-span-3 lg:col-span-2 bg-[#333333] p-5 rounded-2xl">
              NEW USERS
            </div>
            <div className="col-span-3 lg:col-span-2 bg-[#333333] p-5 rounded-2xl">
              TOTAL REVENUE
            </div>
          </div>

          <div className="col-span-full bg-[#333333] rounded-2xl">
            <p className="font-bold m-5 text-2xl"> Users traffic</p>

            {/* divider */}
            <div className="border-t-2 border-[#979797] w-full mt-5 mb-5"></div>
          </div>
        </div>

        <div className="col-span-full lg:col-span-4 grid grid-cols-1 gap-10">
          <div className="bg-[#333333] p-7 rounded-2xl">
            <p className="font-bold text-2xl">Total Revenue</p>
            <p className="font-bold text-3xl text-[#F7D098] py-2">N2,000,000</p>
            <p className="text-lg">Since 4 months</p>
          </div>

          <div className="bg-[#333333] rounded-2xl">
            <p className="font-bold m-5 text-xl">Referral traffic</p>

            {/* divider */}
            <div className="border-t-2 border-[#979797] w-full mt-5 mb-5"></div>
          </div>

          <div className="bg-[#333333] rounded-2xl">
            <p className="font-bold m-5 text-xl">Vendors traffic</p>

            {/* divider */}
            <div className="border-t-2 border-[#979797] w-full mt-5 mb-5"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardBody;
