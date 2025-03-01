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
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { adminStore } from "@/store/admin";
import { adminActions } from "@/app/adminActions";

const DashboardBody = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const isAdminLoggedin = adminStore((state) => state.isAdminLoggedin);
  const logoutAdmin = adminStore((state) => state.logoutAdmin);
  const adminStats = adminActions((state) => state.adminStats);
  const fetchAdminStats = adminActions((state) => state.fetchAdminStats);
  const router = useRouter();

  useEffect(() => {
    // Redirect to login if admin is not logged in
    if (!isAdminLoggedin) {
      router.replace("/admin-login");
    }

    const fetchStats = async () => {
      try {
        const cookieValue = document.cookie
          .split("; ")
          .find((row) => row.startsWith("adminToken="));

        const token = cookieValue ? cookieValue.split("=")[1] : null;

        if (!token) {
          console.error("No admin token found");
          router.replace("/admin-login");
          return;
        }

        await fetchAdminStats(token);
      } catch (error) {
        console.error("Error fetching admin stats:", error);
      }
    };

    fetchStats();
  }, [isAdminLoggedin, fetchAdminStats, router]);

  if (!isAdminLoggedin) {
    return <p>Loading...</p>; 
  }


  const divStyle =
    "flex items-center justify-between w-full bg-[#23232325] gap-2 pr- py-3 lg:py-5 lg:pl-5 pl-2 rounded-2xl border border-[#4D4D4D] text-sm";

  return (
    <section className="px-3  overflow-x-hidden">
      {/* Body 1 */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section */}
        <div className="flex-grow">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className={divStyle}>
              <Image src={PeopleIconSvg} alt="PeopleIconSvg" />
              <div className="flex-grow">
                <p className='text-sm lg:text-[16px]  font-normal '>Total Users</p>
                <p className="font-bold text-lg lg:text-2xl">{adminStats?.total_users || 0}</p>
              </div>
            </div>

            <div className={divStyle}>
              <Image src={TotalVendorIconSvg} alt="TotalVendorIconSvg" />
              <div className="flex-grow">
                <p className='text-sm lg:text-[16px]  font-normal '>Total Vendors</p>
                <p className="font-bold text-lg lg:text-2xl">{adminStats?.total_vendors || 0}</p>
              </div>
            </div>

            <div className={divStyle}>
              <Image src={TotalRevenueIconSvg} alt="TotalRevenueIconSvg" />
              <div className="flex-grow">
                <p className='text-sm lg:text-[16px] font-normal'>Total Revenue</p>
                <p className="font-bold text-lg lg:text-2xl">0</p>
              </div>
            </div>

            <div className={divStyle}>
              <Image src={ActiveUsersIconSvg} alt="ActiveUsersIconSvg" />
              <div className="flex-grow">
                <p className='text-sm lg:text-[16px] font-normal'>Active Users</p>
                <p className="font-bold text-lg lg:text-2xl">{adminStats?.active_users || 0}</p>
              </div>

            </div>

            <div className={divStyle}>
              <Image src={NewVendorIconSvg} alt="NewVendorIconSvg" />
              <div className="flex-grow">
                <p className='text-sm lg:text-[16px]  font-normal'>New Vendors</p>
                <p className="font-bold text-lg lg:text-2xl">{adminStats?.new_vendors || 0}</p>
              </div>
            </div>

            <div className={divStyle}>
              <Image src={TotalReferralIconSvg} alt="TTotalReferralIconSvg" />
              <div className="flex-grow">
                <p className='text-sm lg:text-[16px]  font-normal '>Total Referrals</p>
                <p className="font-bold text-lg lg:text-2xl">{adminStats?.total_referrals || 0}</p>
              </div>

            </div>
          </div>

          {/* Traffic Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2 mt-8 md:items-center">
            <div className="bg-[#23232325] p-5 md:p-1 rounded-2xl">
              <div className="flex justify-between items-center text-xs pb-2">
                <h2 className="text-base lg:text-lg font-bold">Vendors Traffic</h2>
                <span className="bg-gold-500 px-4 p-2 rounded-full text-black font-semibold whitespace-nowrap">+13% from last week</span>
              </div>
              <Divider sx={{ backgroundColor: '#4D4D4D', height: 2 }} />
              <VendorTraffic />
            </div>

            <div className="bg-[#23232325] p-5 md:p-1 rounded-2xl">
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
        <div className="max-h-full flex flex-col  pt-5 rounded-2xl items-center gap-3">
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
        <div className="col-span-1 lg:col-span-3 bg-[#23232325] p-5 md:p-2 rounded-2xl">
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
