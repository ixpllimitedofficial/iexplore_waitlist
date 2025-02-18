'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/UI/select";
import ProfileImage from "@/assets/img/AdminPageImages/ReferralProfileImage.png";
import { Badge } from "@/components/UI/badge";
import VendorsDrinksTable from "./VendorsDrinksTable";
import DownloadIcon from "@/assets/svg/AdminIconsSvg/DownloadIcon.svg";
import RequestIconSvg from "@/assets/svg/AdminIconsSvg/RequestIconSvg.svg";
import spotIconSvg from "@/assets/svg/AdminIconsSvg/spotIconSvg.svg";
import EditVendorDetailsDialog from "./EditVendorDetailsDialog";
import DrinksChart from "./DrinksChart";
import Divider from "@/components/UI/Divider";
import { usePathname } from "next/navigation";
import { adminActions } from "@/app/adminActions";


type VendorData = {
  id: string;
  first_name: string;
  last_name: string;
  created_at: string;
  date_of_birth: string;
  country: string;
  last_login: string | null;
  phone: string;
  email: string;
  is_active: boolean;
  address: string;
  business_name: string;
  business_email: string;
  business_phone: string;
  business_address: string
};

const VisitorTraffic = dynamic(
  () => import("../Dashboard/VisitorTraffic"),
  { ssr: false }
);

const VendorDetails = () => {
  const { vendorStats, fetchVendorSpots } = adminActions()
  const pathname = usePathname();
  const vendorId = pathname.split("/").pop() || "";
  const [vendorData, setVendorData] = useState<VendorData | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && vendorId) {
      const fetchVendorData = async () => {
        try {
          const response = await fetch(
            `https://ixpl-backend.vercel.app/api/v1/admin/vendor/${encodeURIComponent(vendorId)}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );

          if (!response.ok) {
            throw new Error("Failed to fetch vendor data");
          }

          const data: VendorData = await response.json();
          setVendorData(data);
          await fetchVendorSpots(vendorId, token);

        } catch (error) {
          console.error("Error fetching vendor details:", error);
        }
      };

      fetchVendorData();
    }
  }, [vendorId, fetchVendorSpots]);
  const spotCount = vendorStats[vendorId]?.vendor_spot_count || 0;

  if (!vendorData) {
    return <p className="text-center text-gray-400">Loading user details...</p>;
  }
  return (
    <section className="mt-5">
      {/* Header Section */}
      <div className="hidden lg:flex justify-between items-center">
        <button className="hidden lg:flex gap-2 items-center bg-gold-500 text-black font-semibold border px-4 py-2 rounded-md whitespace-nowrap">
          <Image src={RequestIconSvg} alt="request" /> New Business Request
        </button>
        <div className="flex items-center gap-4">
          <span className={`w-[60%] border ] text-white text-sm font-semibold px-4 py-2 rounded-full whitespace-nowrap ${vendorData.is_active ? "bg-green-500 border-green-700" : "bg-red-500 border-red-700"}`}>
            Status: {vendorData.is_active ? "Active" : "Inactive"}
          </span>
          <EditVendorDetailsDialog vendorId={vendorId} initialVendorData={vendorData} />
        </div>
      </div>

      {/* Vendor Information */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 py-5">
        {/* Profile Card */}
        <div className="flex flex-col bg-[#23232325] border border-[#4D4D4D] p-4 rounded-2xl gap-3">
          <div className="flex gap-3 items-start">
            <Image
              src={ProfileImage}
              alt="Profile"
              className="h-20 w-20 rounded-full object-cover"
            />
            <div>
              <p className="text-2xl font-extrabold text-white">
                {vendorData.first_name} {vendorData.last_name}
              </p>
              <p className="text-sm text-gray-400">   Joined: {new Date(vendorData.created_at).toDateString()}</p>
              <p className="text-sm text-gray-400">DOB: {vendorData.date_of_birth}</p>
              <p className="text-sm text-gray-400">     Last active: {vendorData.last_login ? new Date(vendorData.last_login).toLocaleString() : "N/A"}</p>
            </div>
          </div>
        </div>

        {/* User Details */}
        <div className="flex flex-col bg-[#23232325] border border-[#4D4D4D] p-4 rounded-2xl gap-3">
          <div>
            <p className="text-2xl font-extrabold text-white">User Details</p>
            <p className="text-sm text-gray-400">Phone: {vendorData.phone || "N/A"}</p>
            <p className="text-sm text-gray-400">City: Ikeja, Lagos state</p>
            <p className="text-sm text-gray-400">Email: {vendorData.email} </p>
          </div>
        </div>

        {/* Business Details */}
        <div className="flex flex-col bg-[#23232325] border border-[#4D4D4D] p-4 rounded-2xl gap-3">
          <div>
            <p className="text-2xl font-extrabold text-white">
              Business Details
            </p>
            <p className="text-sm text-gray-400">Spot name: Club 77</p>
            <p className="text-sm text-gray-400">City: Ikeja, Lagos state</p>
            <p className="text-sm text-gray-400">Email: {vendorData.email}
            </p>
          </div>
        </div>
      </div>

      {/* Mobile View Actions */}
      <div className="lg:hidden flex justify-between items-center gap-4">
        <span
          className={`border px-4 py-2 rounded-full text-white font-semibold ${vendorData.is_active ? "bg-green-500 border-green-700" : "bg-red-500 border-red-700"
            }`}
        >
          Status: {vendorData.is_active ? "Active" : "Inactive"}
        </span>
        <EditVendorDetailsDialog vendorId={vendorId} initialVendorData={vendorData} />
      </div>

      {/* Charts Section */}
      <div className="mt-5 bg-brandDarkNeutral py-5">
        <div className="grid lg:grid-cols-3 gap-4">
          {/* Spots Managed */}
          <div className="bg-[#23232325] p-4 rounded-2xl">
            <div className="flex justify-between items-center">
              <p className="font-bold sm:text-base  text-white">Spot Managed</p>
              <span className="bg-gold-800  text-white text-sm whitespace-nowrap font-semibold px-4 py-2 rounded-full">
                Rating: 4.5 (900)
              </span>
            </div>
            <div className="flex items-center justify-between mt-8">
              <Image src={spotIconSvg} alt="Spot Icon" width={50} height={50} />
              <div className="text-center">
                <p className="text-4xl text-white">{spotCount}</p>
                <p className="text-gray-400">Spots managed</p>
              </div>
            </div>
          </div>

          {/* Drinks Chart */}
          <div className="bg-[#23232325] p-4 rounded-2xl">
            <div className="flex justify-between items-center">
              <p className="font-bold text-base text-white">Drinks Chart</p>
              <span className="bg-red-700 text-white px-4 py-2 rounded-full whitespace-nowrap">
                Out of stock - 25
              </span>
            </div>
            <Divider />
            <DrinksChart />
          </div>

          {/* Visitors Traffic */}
          <div className="bg-[#23232325] p-4 rounded-2xl">
            <div className="flex justify-between items-center">
              <p className="font-bold text-base text-white">Visitors Traffic</p>
              <span className="bg-[#13460f] whitespace-nowrap text-white px-4 py-2 rounded-full">
                +13 from last week
              </span>
            </div>
            <Divider />
            <VisitorTraffic />
          </div>
        </div>
      </div>

      {/* Vendor Drinks Table */}
      <VendorsDrinksTable />
    </section>
  );
};

export default VendorDetails;
