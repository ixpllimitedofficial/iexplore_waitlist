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
          <div className="grid grid-cols-12 gap-4 col-span-full">
            <div className="col-span-6 lg:col-span-4 bg-[#333333] p-5 rounded-2xl text-sm">
              TOTAL USERS
            </div>
            <div className="col-span-6 lg:col-span-4 bg-[#333333] p-5 rounded-2xl text-sm">
              TOTAL VENDORS
            </div>
            <div className="col-span-6 lg:col-span-4 bg-[#333333] p-5 rounded-2xl text-sm">
              ACTIVE USERS
            </div>
            <div className="col-span-6 lg:col-span-4 bg-[#333333] p-5 rounded-2xl text-sm">
              TOTAL REFERRAL
            </div>
            <div className="col-span-6 lg:col-span-4 bg-[#333333] p-5 rounded-2xl text-sm">
              NEW USERS
            </div>
            <div className="col-span-6 lg:col-span-4 bg-[#333333] p-5 rounded-2xl text-sm">
              TOTAL REVENUE
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4 col-span-full">
            <div className="col-span-full lg:col-span-6 bg-[#333333] p-5 rounded-2xl text-sm">
              Vendors traffic
            </div>
            <div className="col-span-full lg:col-span-6 bg-[#333333] p-5 rounded-2xl text-sm">
              Influencers traffic
            </div>
          </div>
        </div>

        <div className="hidden col-span-full lg:col-span-4 bg-[#333333] py-5 rounded-2xl lg:flex justify-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
      </div>

      {/* body 2 */}
      <div className="grid grid-cols-5 gap-4 mt-5">
        <div className="col-span-full lg:col-span-3 bg-[#333333] rounded-2xl">
          <p className="font-bold m-5 text-lg"> Users traffic</p>

          {/* divider */}
          <div className="border-t-2 border-[#979797] w-full mb-3"></div>
        </div>
        <div className="col-span-full lg:col-span-2 bg-[#333333] p-5 rounded-2xl">
          Notifications
        </div>
      </div>
    </>
  );
};

export default DashboardBody;
