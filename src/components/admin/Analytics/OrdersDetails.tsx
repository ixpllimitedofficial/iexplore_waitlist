"use client";

import React from "react";
import { Calendar } from "@/components/UI/calendar";

const OrdersDetails = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <>
      {/* body 1 */}
      <div className="grid grid-cols-10 gap-4 mt-5">
        <div className="grid grid-cols-12 gap-4 col-span-full lg:col-span-6">
          <div className="grid grid-cols-6 gap-4 col-span-full">
            <div className="col-span-3 lg:col-span-2 bg-[#333333] p-5 rounded-2xl text-sm">
              TOTAL USERS
            </div>
            <div className="col-span-3 lg:col-span-2 bg-[#333333] p-5 rounded-2xl text-sm">
              TOTAL VENDORS
            </div>
            <div className="col-span-3 lg:col-span-2 bg-[#333333] p-5 rounded-2xl text-sm">
              ACTIVE USERS
            </div>
            <div className="col-span-3 lg:col-span-2 bg-[#333333] p-5 rounded-2xl text-sm">
              TOTAL REFERRAL
            </div>
            <div className="col-span-3 lg:col-span-2 bg-[#333333] p-5 rounded-2xl text-sm">
              NEW USERS
            </div>
            <div className="col-span-3 lg:col-span-2 bg-[#333333] p-5 rounded-2xl text-sm">
              TOTAL REVENUE
            </div>
          </div>

          <div className="col-span-full bg-[#333333] rounded-2xl">
            <p className="font-bold m-5 text-lg"> Users traffic</p>

            {/* divider */}
            <div className="border-t-2 border-[#979797] w-full"></div>
          </div>
        </div>

        <div className="col-span-full lg:col-span-4 grid grid-cols-1 gap-10">
          <div className="bg-[#333333] p-7 rounded-2xl">
            <p className="font-bold text-lg">Total Revenue</p>
            <p className="font-bold text-2xl text-gold-500 py-1">N2,000,000</p>
            <p className="">Since 4 months</p>
          </div>

          <div className="bg-[#333333] rounded-2xl">
            <p className="font-bold m-5 text-lg">Referral traffic</p>

            {/* divider */}
            <div className="border-t-2 border-[#979797] w-full"></div>
          </div>

          <div className="bg-[#333333] rounded-2xl">
            <p className="font-bold m-5 text-lg">Vendors traffic</p>

            {/* divider */}
            <div className="border-t-2 border-[#979797] w-full"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrdersDetails;
