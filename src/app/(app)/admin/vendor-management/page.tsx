'use client'

import React from "react";
import PeopleIconSvg from "@/assets/svg/AdminIconsSvg/PeopleIconSvg.svg";
import ActiveUsersIconSvg from "@/assets/svg/AdminIconsSvg/ActiveUsersIconSvg.svg";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { adminStore } from "@/store/admin";
import Image from "next/image";
import AllVendorsTable from "@/components/admin/VendorManagement/AllVendorsTable";
import { adminActions } from "@/app/adminActions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const isAdminLoggedin = adminStore((state) => state.isAdminLoggedin);
  const adminStats = adminActions((state) => state.adminStats);
  const fetchAdminStats = adminActions((state) => state.fetchAdminStats);
  const router = useRouter();


  const divStyle =
    "flex items-center justify-between gap-2  xl:gap-4 bg-[#23232325] rounded-2xl border border-[#4D4D4D] w-full h-auto p-4 lg:px- min-h-[88px]";

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const cookieValue = document.cookie
          .split("; ")
          .find((row) => row.startsWith("adminToken="))
        const token = cookieValue ? cookieValue.split("=")[1] : null;
        if (!token) {
          console.error("no admin token found")
          router.replace("/admin-login");
          return;
        }
        await fetchAdminStats(token);
      } catch (error) {
        console.error("error fetching vendor stats", error)
      }
    }
    fetchStats()
  }, [fetchAdminStats, router])

  useEffect(() => {
    // Redirect to login if admin is not logged in
    if (!isAdminLoggedin) {
      router.replace("/admin-login");
    }
  }, [isAdminLoggedin, router]);

  if (!isAdminLoggedin) {
    return <p>Loading...</p>;
  }
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
            <p className="text-sm font-normal text-gray-300">Total Vendors</p>
            <p className="font-bold text-xl text-white">{adminStats?.total_vendors || 0}</p>
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
            <p className="text-sm font-normal text-gray-300">Active Vendors</p>
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
            <p className="font-bold text-xl text-white">{adminStats?.new_vendors || 0}</p>
          </div>
        </div>
      </div>

      {/* Table section */}
      <div className="mt-8">
        <AllVendorsTable />
      </div>
            <ToastContainer
              position="top-center"   // Adjust position as needed
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
    </div>
  );
};
export default Page;
