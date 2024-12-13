"use client";

import React from "react";
import Image from "next/image";
import { Calendar } from "@/components/UI/calendar";
import PeopleIconSvg from "@/assets/svg/AdminIconsSvg/PeopleIconSvg.svg";
import ActiveUsersIconSvg from "@/assets/svg/AdminIconsSvg/ActiveUsersIconSvg.svg";
import TotalRevenueIconSvg from "@/assets/svg/AdminIconsSvg/TotalRevenueIconSvg.svg";
import TotalVendorIconSvg from "@/assets/svg/AdminIconsSvg/TotalVendorIconSvg.svg";
import NewVendorIconSvg from "@/assets/svg/AdminIconsSvg/NewVendorIconSvg.svg";
import TotalReferralIconSvg from "@/assets/svg/AdminIconsSvg/TotalReferralIconSvg.svg";
import { Button } from "@/components/UI/button";
import UserTraffic from './UserTraffic'
import NotificationCard from "./Notification";
import VendorTraffic from "./VendorTraffic";
import InfluencersTraffic from "./InfluencersTraffic";
import { Divider } from '@mui/material';

const DashboardBody = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const divStyle =
    "flex items-center justify-between w-full bg-[#23232325] gap-2 pr- py-3 lg:py-5 lg:pl-5 pl-2 rounded-2xl border border-[#4D4D4D] text-sm";

  return (
    <section className="px-4 lg:px-7 overflow-x-hidden">
      {/* Body 1 */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <div className="flex-grow">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className={divStyle}>
              <Image src={PeopleIconSvg} alt="PeopleIconSvg" />
              <div className="flex-grow">
                <p className='text-sm lg:text-[16px]  font-normal '>Total Users</p>
                <p className="font-bold text-lg lg:text-2xl">2,000</p>
              </div>

            </div>

            <div className={divStyle}>
              <Image src={TotalVendorIconSvg} alt="TotalVendorIconSvg" />
              <div className="flex-grow">
                <p className='text-sm lg:text-[16px]  font-normal '>Total Vendors</p>
                <p className="font-bold text-lg lg:text-2xl">2,000</p>
              </div>
            </div>

            <div className={divStyle}>
              <Image src={TotalRevenueIconSvg} alt="TotalRevenueIconSvg" />
              <div className="flex-grow">
                <p className='text-sm lg:text-[16px] font-normal'>Total Revenue</p>
                <p className="font-bold text-lg lg:text-2xl">2,000</p>
              </div>
            </div>

            <div className={divStyle}>
              <Image src={ActiveUsersIconSvg} alt="ActiveUsersIconSvg" />
              <div className="flex-grow">
                <p className='text-sm lg:text-[16px] font-normal'>Active Users</p>
                <p className="font-bold text-lg lg:text-2xl">2,000</p>
              </div>

            </div>

            <div className={divStyle}>
              <Image src={NewVendorIconSvg} alt="NewVendorIconSvg" />
              <div className="flex-grow">
                <p className='text-sm lg:text-[16px]  font-normal'>New Vendors</p>
                <p className="font-bold text-lg lg:text-2xl">2,000</p>
              </div>
            </div>

            <div className={divStyle}>
              <Image src={TotalReferralIconSvg} alt="TTotalReferralIconSvg" />
              <div className="flex-grow">
                <p className='text-sm lg:text-[16px]  font-normal '>Total Referrals</p>
                <p className="font-bold text-lg lg:text-2xl">N2,000</p>
              </div>

            </div>
          </div>

          {/* Traffic Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
            <div className="bg-[#23232325] p-5 rounded-2xl">
              <div className="flex justify-between items-center text-xs pb-2">
                <h2 className="text-base lg:text-lg font-bold">Vendors Traffic</h2>
                <span className="bg-gold-500 px-4 p-2 rounded-full text-black font-semibold whitespace-nowrap">+13% from last week</span>
              </div>
              <Divider sx={{ backgroundColor: '#4D4D4D', height: 2 }} />
              <VendorTraffic />
            </div>

            <div className="bg-[#23232325] p-5 rounded-2xl">
              <div className="flex justify-between items-center text-xs pb-2">
                <h2 className="text-base lg:text-lg font-bold">Influencers Traffic</h2>
                <span className="bg-gold-500 px-4 p-2 rounded-full text-black font-semibold whitespace-nowrap">+13% from last week</span>
              </div>
              <Divider sx={{ backgroundColor: '#4D4D4D', height: 2 }} />
              <InfluencersTraffic />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col bg-[#23232325] pt-5 rounded-2xl items-center gap-3">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md"
          />
        </div>
      </div>

      {/* Body 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mt-8">
  {/* User Traffic Section */}
  <div className="col-span-1 lg:col-span-3 bg-[#23232325] p-5 rounded-2xl">
    <div className="border-full my-3"></div>
    <UserTraffic />
  </div>

  {/* Notification Card Section */}
  <div className="col-span-1 lg:col-span-2 bg-brandDarkNeutral p-5 rounded-2xl">
    <NotificationCard />
  </div>
</div>


    </section>
  );
};

export default DashboardBody;
