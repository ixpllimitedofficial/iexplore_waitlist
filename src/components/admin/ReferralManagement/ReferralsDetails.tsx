'use client';

import React from "react";
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
import DownloadIcon from "@/assets/svg/AdminIconsSvg/DownloadIcon.svg";
import RequestIconSvg from "@/assets/svg/AdminIconsSvg/RequestIconSvg.svg";
import Tiktok from "@/assets/svg/AdminIconsSvg/referral/Tiktok.svg"
import Facebook from "@/assets/svg/AdminIconsSvg/referral/Facebook.svg"
import SnapChat from "@/assets/svg/AdminIconsSvg/referral/SnapChat.svg"
import Twiter from "@/assets/svg/AdminIconsSvg/referral/Twiter.svg"
import Instagram from "@/assets/svg/AdminIconsSvg/referral/Instagram.svg"

import Divider from "@/components/UI/Divider";
import EditAffliateDetailsDialog from "./EditAffliateDetailsDialog";

const VisitorTraffic = dynamic(() => import('../Dashboard/VisitorTraffic'), { ssr: false });

const channels = [
  {
    platform: "TikTok",
    icon: Tiktok,
    reach: "1.3M Audience",
    username: "KJacob123",
    followers: "335k",
    referrals: "236",
    country: "Nigeria"

  },
  {
    platform: "Snapchat",
    icon: SnapChat,
    reach: "1.3M Audience",
    username: "KJacob123",
    followers: "335k",
    referrals: "236",
    country: "Nigeria"

  },
  {
    platform: "Twiter",
    icon: Twiter,
    reach: "1.3M Audience",
    username: "KJacob123",
    followers: "335k",
    referrals: "236",
    country: "Nigeria"

  },
  {
    platform: "Instagram",
    icon: Instagram,
    reach: "1.3M Audience",
    username: "KJacob123",
    followers: "335k",
    referrals: "236",
    country: "Nigeria"

  },
  {
    platform: "Facebook",
    icon: Facebook,
    reach: "1.3M Audience",
    username: "KJacob123",
    followers: "335k",
    referrals: "236",
    country: "Nigeria"

  }
]

const VendorDetails = () => {
  return (
    <section className="mt-5">
      <div className="hidden md:flex justify-end">
        <div className="flex justify-end items-center gap-4">
          <span className="bg-[#008800] border border-[#b4ddb4] px-4 py-2 rounded-full text-white font-semibold whitespace-nowrap">
            Affilate Status: Active
          </span>
          <div>
            <EditAffliateDetailsDialog />
          </div>
        </div>
      </div>
      {/* vendor details */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 lg:gap-6 py-5">
        {/* Profile Card */}
        <div className="flex flex-col items-start justify-center gap-3 bg-[#23232325] p-4 md:p-2 border border-[#4D4D4D] rounded-2xl h-full w-full  l">
          <div className="w-full flex flex-row items-start gap-3  p-3 rounded-md  h-full">
            {/* Profile Image */}
            <Image
              src={ProfileImage}
              alt="Profile Image"
              className="h-20 w-20 rounded-full object-cover"
            />

            {/* Profile Details */}
            <div className="flex flex-col items-start text-left">
              <p className="text-2xl font-extrabold text-white">Christine Brooks</p>
              <span className="bg-[#008800] border px-4 py-2 space-y-2 rounded-full text-white font-normal text-xs whitespace-nowrap">
                Top Affilate
              </span>
              <p className="text-sm text-gray-400">Refferals: 80</p>
              <p className="text-sm text-gray-400">Conversion: 78%</p>
              <p className="text-sm text-gray-400">Location: 7</p>
            </div>
          </div>
        </div>

        {/* User Details Card */}
        <div className="flex flex-col items-start justify-center gap-3 bg-[#23232325] border border-[#4D4D4D]  p-4 md:p-2 rounded-2xl h-full w-full ">
          <div className="w-full flex flex-col sm:flex-row items-start gap-2  px-3 py-3 rounded-md  h-full">
            <div className="flex flex-col items-start text-left space-y-1">
              <p className="text-2xl font-extrabold text-white">User Details</p>
              <p className="text-sm text-gray-400">Phone: +234 801 234 5678</p>
              <p className="text-sm text-gray-400">
                Email address: kunlejacob123@gmail.com
              </p>
              <p className="text-sm text-gray-400">Referral code: kjacob2</p>
              <p className="text-sm text-gray-400">Country: Nigeria</p>

            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center gap-3 bg-[#23232325] border border-[#4D4D4D]  p-4 md:p-2 rounded-2xl ">
          <div className="w-full flex flex-col sm:flex-row items-start gap-2 px-3 py-3 rounded-md h-full">
            <div className="flex flex-col items-start text-left space-y-1">
              <p className="text-2xl font-extrabold text-white">Locations Covering</p>
              <p className="text-sm text-gray-400">Club: Club Quilox</p>
              <p className="text-sm text-gray-400">Bars: Maxx Bar</p>
              <p className="text-sm text-gray-400">Lounges: Happiness Lounge</p>
              <p className="text-sm text-gray-400">Others: Max Hotels</p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden ">
      <div className="w-full flex justify-between items-center gap-4">
          <span className="w-[60%] bg-[#008800] border border-[#b4ddb4] px-4 py-2 rounded-full text-white font-semibold whitespace-nowrap">
            Affilate Status: Active
          </span>
          <div>
            <EditAffliateDetailsDialog />
          </div>
        </div>
      </div>
      <div className="mt-6 ">
        <h2 className="text-lg font-bold text-white mb-4">Marketing Channels</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {channels.map((channel, index) => (
            <div
              key={index}
              className="flex flex-col bg-[#23232325] border border-[#4D4D4D] rounded-2xl p-4 space-y-2"
            >
              {/* Icon and Platform */}
              <div className='w-[50%] md:w-[65%] px-4 py-2  bg-gold-800 border border-[#e9da9d] rounded-full'>
                <div className="flex items-center gap-3">
                  <Image
                    src={channel.icon}
                    alt={`${channel.platform} Icon`}
                    width={20}
                    height={20}
                    className=""
                  />
                  <span className="text-sm md:text-lg font-semibold text-white">
                    {channel.platform}
                  </span>
                </div>
              </div>

              {/* Metrics */}
              <p className="text-sm text-gray-400">{channel.reach}</p>
              <div className="space-y-1 text-sm text-gray-300">
                <p>
                  <span className="font-semibold text-white">Username:</span>{" "}
                  {channel.username}
                </p>
                <p>
                  <span className="font-semibold text-white">Followers:</span>{" "}
                  {channel.followers}
                </p>
                <p>
                  <span className="font-semibold text-white">Referrals:</span>{" "}
                  {channel.referrals}
                </p>
                <p>
                  <span className="font-semibold text-white">Country:</span>{" "}
                  {channel.country}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VendorDetails;
