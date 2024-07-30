"use client";

import React from "react";
import Image from "next/image";
import { Calendar } from "@/components/UI/calendar";
import PeopleIconSvg from "@/assets/svg/AdminIconsSvg/PeopleIconSvg.svg";
import TotalReferralIcon from "@/assets/svg/AdminIconsSvg/TotalReferralIcon.svg";
import TotalRevenueIconSvg from "@/assets/svg/AdminIconsSvg/TotalRevenueIconSvg.svg";
import { Button } from "@/components/UI/button";

const DashboardBody = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const divStyle =
    "col-span-full md:col-span-6 lg:col-span-4 flex items-center justify-between bg-brandDarkNeutral gap-2 pr-5 py-5 lg:py-0 rounded-2xl text-sm";

  return (
    <section className="px-7">
      {/* body 1 */}
      <div className="grid grid-cols-10 gap-4">
        <div className="grid grid-cols-12 gap-4 col-span-full lg:col-span-7">
          <div className="grid grid-cols-12 gap-4 col-span-full">
            <div className={divStyle}>
              <div className="bg-gold-500 px-1 py-5"></div>

              <div className="flex-grow">
                <p>TOTAL USERS</p>
                <p className="font-bold text-base">2,000</p>
              </div>
              <Image src={PeopleIconSvg} alt="PeopleIconSvg" />
            </div>

            {/*  */}
            <div className={divStyle}>
              <div className="bg-gold-500 px-1 py-5"></div>

              <div className="flex-grow">
                <p>TOTAL VENDORS</p>
                <p className="font-bold text-base">50</p>
              </div>
            </div>

            {/*  */}
            <div className={divStyle}>
              <div className="bg-gold-500 px-1 py-5"></div>

              <div className="flex-grow">
                <p>ACTIVE USERS</p>
                <p className="font-bold text-base">20</p>
              </div>
            </div>

            {/*  */}
            <div className={divStyle}>
              <div className="bg-gold-500 px-1 py-5"></div>

              <div className="flex-grow">
                <p>TOTAL REFERRAL</p>
                <p className="font-bold text-base">200</p>
              </div>
              <Image src={TotalReferralIcon} alt="TotalReferralIcon" />
            </div>

            {/*  */}
            <div className={divStyle}>
              <div className="bg-gold-500 px-1 py-5"></div>

              <div className="flex-grow">
                <p>NEW USERS</p>
                <p className="font-bold text-base">150</p>
              </div>
            </div>

            {/*  */}
            <div className={divStyle}>
              <div className="bg-gold-500 px-1 py-5"></div>

              <div className="flex-grow">
                <p>TOTAL REVENUE</p>
                <p className="font-bold text-base">N200,000.00</p>
              </div>
              <Image src={TotalRevenueIconSvg} alt="TotalRevenueIconSvg" />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4 col-span-full">
            <div className="col-span-full lg:col-span-6 bg-brandDarkNeutral p-5 rounded-2xl text-sm">
              Vendors traffic
            </div>
            <div className="col-span-full lg:col-span-6 bg-brandDarkNeutral p-5 rounded-2xl text-sm">
              Influencers traffic
            </div>
          </div>
        </div>

        <div className="hidden col-span-full lg:col-span-3 bg-brandDarkNeutral py-5 rounded-2xl lg:flex flex-col items-center justify-center gap-3">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />

          <Button className="bg-gold-500 text-black">Select</Button>
        </div>
      </div>

      {/* body 2 */}
      <div className="grid grid-cols-5 gap-4 mt-5">
        <div className="col-span-full lg:col-span-3 bg-brandDarkNeutral rounded-2xl">
          <p className="font-bold m-5 text-lg"> Users traffic</p>

          {/* divider */}
          <div className="border-t-2 border-[#979797] w-full mb-3"></div>
        </div>
        <div className="col-span-full lg:col-span-2 bg-brandDarkNeutral p-5 rounded-2xl">
          Notifications
        </div>
      </div>
    </section>
  );
};

export default DashboardBody;
